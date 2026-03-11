#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// ---------------------------------------------------------------------------
// Resolve docs directory (ai/ folder relative to project root)
// ---------------------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function findDocsDir(): string {
  // When running from mcp/dist/index.js → project root is ../../
  // When running from mcp/src/index.ts → project root is ../../
  const candidates = [
    resolve(__dirname, "../../ai"),       // from dist/ or src/
    resolve(__dirname, "../../../ai"),     // fallback
    resolve(process.cwd(), "ai"),         // from project root
  ];
  for (const dir of candidates) {
    if (existsSync(dir)) return dir;
  }
  throw new Error(
    `Could not find ai/ docs directory. Tried: ${candidates.join(", ")}`
  );
}

// ---------------------------------------------------------------------------
// Load all documentation files into memory
// ---------------------------------------------------------------------------
type DocEntry = {
  id: string;
  title: string;
  category: string;
  content: string;
};

function loadDocs(docsDir: string): DocEntry[] {
  const entries: DocEntry[] = [];

  function readDoc(filePath: string, category: string): void {
    const content = readFileSync(filePath, "utf-8");
    const titleMatch = content.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1] : filePath;
    const id = filePath
      .replace(docsDir + "/", "")
      .replace(/\.md$/, "");

    entries.push({ id, title, category, content });
  }

  // Read top-level docs
  const topFiles = readdirSync(docsDir).filter((f) => f.endsWith(".md"));
  for (const file of topFiles) {
    readDoc(join(docsDir, file), "getting-started");
  }

  // Read token docs
  const tokensDir = join(docsDir, "tokens");
  if (existsSync(tokensDir)) {
    const tokenFiles = readdirSync(tokensDir).filter((f) => f.endsWith(".md"));
    for (const file of tokenFiles) {
      readDoc(join(tokensDir, file), "tokens");
    }
  }

  return entries;
}

// ---------------------------------------------------------------------------
// Initialize
// ---------------------------------------------------------------------------
const docsDir = findDocsDir();
const docs = loadDocs(docsDir);

// Also load llms-full.txt if available
let llmsFullContent = "";
const llmsFullPath = resolve(docsDir, "../llms-full.txt");
if (existsSync(llmsFullPath)) {
  llmsFullContent = readFileSync(llmsFullPath, "utf-8");
}

// ---------------------------------------------------------------------------
// MCP Server
// ---------------------------------------------------------------------------
const server = new McpServer({
  name: "cycle-design",
  version: "0.1.0",
});

// ---------------------------------------------------------------------------
// Tool: list_topics
// ---------------------------------------------------------------------------
server.tool(
  "list_topics",
  "List all available documentation topics in Cycle Design. Returns topic IDs, titles, and categories.",
  {},
  async () => {
    const topics = docs.map((d) => ({
      id: d.id,
      title: d.title,
      category: d.category,
    }));

    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(topics, null, 2),
        },
      ],
    };
  }
);

// ---------------------------------------------------------------------------
// Tool: get_doc
// ---------------------------------------------------------------------------
server.tool(
  "get_doc",
  "Get the full documentation for a specific Cycle Design topic. Use list_topics first to see available IDs. Examples: 'overview', 'tokens/colors', 'tokens/typography', 'dark-mode', 'installation'.",
  {
    topic: z
      .string()
      .describe(
        "Topic ID (e.g. 'overview', 'tokens/colors', 'dark-mode', 'installation', 'decisions', 'tokens/typography', 'tokens/spacing')"
      ),
  },
  async ({ topic }) => {
    const doc = docs.find((d) => d.id === topic);
    if (!doc) {
      const available = docs.map((d) => d.id).join(", ");
      return {
        content: [
          {
            type: "text" as const,
            text: `Topic "${topic}" not found. Available topics: ${available}`,
          },
        ],
        isError: true,
      };
    }

    return {
      content: [
        {
          type: "text" as const,
          text: doc.content,
        },
      ],
    };
  }
);

// ---------------------------------------------------------------------------
// Tool: search_docs
// ---------------------------------------------------------------------------
server.tool(
  "search_docs",
  "Search across all Cycle Design documentation. Returns matching sections with context. Useful for finding specific tokens, CSS variables, classes, or usage patterns.",
  {
    query: z
      .string()
      .describe(
        "Search query — can be a token name (e.g. '--text-primary'), a CSS class (e.g. 'headline-md'), a concept (e.g. 'dark mode'), or any keyword"
      ),
  },
  async ({ query }) => {
    const queryLower = query.toLowerCase();
    const results: { topic: string; title: string; matches: string[] }[] = [];

    for (const doc of docs) {
      const lines = doc.content.split("\n");
      const matchingLines: string[] = [];

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].toLowerCase().includes(queryLower)) {
          // Include context: 1 line before and 2 lines after
          const start = Math.max(0, i - 1);
          const end = Math.min(lines.length, i + 3);
          const context = lines.slice(start, end).join("\n");
          matchingLines.push(context);
        }
      }

      if (matchingLines.length > 0) {
        results.push({
          topic: doc.id,
          title: doc.title,
          matches: matchingLines.slice(0, 5), // max 5 matches per doc
        });
      }
    }

    if (results.length === 0) {
      return {
        content: [
          {
            type: "text" as const,
            text: `No results found for "${query}". Try searching for a token name (e.g. "--bg-primary"), a CSS class (e.g. "body-md"), or a concept (e.g. "spacing").`,
          },
        ],
      };
    }

    const output = results
      .map(
        (r) =>
          `## ${r.title} (${r.topic})\n\n${r.matches.join("\n---\n")}`
      )
      .join("\n\n---\n\n");

    return {
      content: [
        {
          type: "text" as const,
          text: output,
        },
      ],
    };
  }
);

// ---------------------------------------------------------------------------
// Tool: get_all_docs
// ---------------------------------------------------------------------------
server.tool(
  "get_all_docs",
  "Get the complete Cycle Design documentation in a single response. This is the full content of llms-full.txt. Use this when you need comprehensive context about the entire design system.",
  {},
  async () => {
    const content = llmsFullContent || docs.map((d) => d.content).join("\n\n---\n\n");

    return {
      content: [
        {
          type: "text" as const,
          text: content,
        },
      ],
    };
  }
);

// ---------------------------------------------------------------------------
// Tool: get_token_value
// ---------------------------------------------------------------------------
server.tool(
  "get_token_value",
  "Look up a specific Cycle Design CSS token by name. Returns its value, category, and usage guidance. Searches across all token documentation.",
  {
    token: z
      .string()
      .describe(
        "CSS custom property name, with or without -- prefix. Examples: '--text-primary', 'bg-brand-solid', '--spacing-md', 'radius-sm', 'headline-md'"
      ),
  },
  async ({ token }) => {
    // Normalize: ensure -- prefix for CSS vars, but also search without for classes
    const searchTerms = [
      token,
      token.startsWith("--") ? token : `--${token}`,
      token.startsWith("--") ? token.slice(2) : token,
      // Also search with . prefix for class names
      token.startsWith(".") ? token : `.${token}`,
    ];

    const results: string[] = [];

    for (const doc of docs) {
      if (doc.category !== "tokens") continue;

      const lines = doc.content.split("\n");
      for (let i = 0; i < lines.length; i++) {
        const lineLower = lines[i].toLowerCase();
        for (const term of searchTerms) {
          if (lineLower.includes(term.toLowerCase())) {
            const start = Math.max(0, i - 2);
            const end = Math.min(lines.length, i + 3);
            const context = lines.slice(start, end).join("\n");
            results.push(`**${doc.title}**\n${context}`);
            break;
          }
        }
      }
    }

    // Deduplicate
    const unique = [...new Set(results)].slice(0, 8);

    if (unique.length === 0) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Token "${token}" not found. Try searching with the full CSS variable name (e.g. "--text-primary") or class name (e.g. "body-md"). Use search_docs for broader searches.`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text" as const,
          text: unique.join("\n\n---\n\n"),
        },
      ],
    };
  }
);

// ---------------------------------------------------------------------------
// Start server
// ---------------------------------------------------------------------------
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
