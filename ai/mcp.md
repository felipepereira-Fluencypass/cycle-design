# Cycle Design — MCP Server

The Cycle Design MCP Server allows AI assistants to browse tokens, search documentation, and look up specific CSS variables from the Cycle Design system using natural language.

## Quick Start

### Claude Code

```bash
claude mcp add cycle-design -- node /path/to/cycle-design/mcp/dist/index.js
```

### VS Code / Cursor

Add to `.vscode/mcp.json` or `.cursor/mcp.json`:

```json
{
  "servers": {
    "cycle-design": {
      "command": "node",
      "args": ["/path/to/cycle-design/mcp/dist/index.js"]
    }
  }
}
```

### Project-level (`.mcp.json` at project root)

```json
{
  "mcpServers": {
    "cycle-design": {
      "command": "node",
      "args": ["/path/to/cycle-design/mcp/dist/index.js"]
    }
  }
}
```

Replace `/path/to/cycle-design` with the actual path to the Cycle Design repository.

## Available Tools

### `list_topics`

Lists all available documentation topics with their IDs, titles, and categories.

**Example prompt:** "What documentation is available in Cycle Design?"

### `get_doc`

Gets the full documentation for a specific topic.

**Parameters:**
- `topic` — Topic ID (e.g., `overview`, `tokens/colors`, `dark-mode`, `installation`)

**Example prompt:** "Show me the Cycle Design color documentation"

### `search_docs`

Searches across all documentation. Returns matching sections with context.

**Parameters:**
- `query` — Search term (token name, CSS class, or concept)

**Example prompt:** "Search for brand colors in Cycle Design"

### `get_token_value`

Looks up a specific CSS token by name. Returns its value, category, and usage guidance.

**Parameters:**
- `token` — CSS custom property name (e.g., `--text-primary`, `bg-brand-solid`, `headline-md`)

**Example prompt:** "What is the value of --spacing-md in Cycle Design?"

### `get_all_docs`

Returns the complete documentation in a single response. Use when you need comprehensive context.

**Example prompt:** "Give me all the Cycle Design documentation"

## Example Prompts

- "What colors should I use for error states in Cycle Design?"
- "Show me all available typography classes"
- "What's the spacing scale in Cycle Design?"
- "How do I implement dark mode with Cycle Design tokens?"
- "What border radius should I use for a card component?"
- "Look up the --bg-brand-solid token"

## Building from Source

```bash
cd mcp
npm install
npm run build
```

## Future: Registry Support

When Cycle Design components are available, the MCP server will be extended with registry tools:
- `listComponents()` — List available components
- `getComponent(name)` — Get component code and documentation
- `installComponent(name)` — Install a component into your project
