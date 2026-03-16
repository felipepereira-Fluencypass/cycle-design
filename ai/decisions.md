# Cycle Design — Design Decisions

Reference document with all decisions and guidelines defined during the planning and evolution of Cycle Design.

## Vision

**Goal:** Provide a complete design system (code + documentation + design) that serves as the single source of truth for the entire Fluencypass team, with light and dark theme support.

**Team profile:** Design-led, with technical collaboration.

**Priority:** Long-term robustness and scalability.

## Architecture Decision: shadcn/ui

**Decision (2026-03):** Use shadcn/ui as the component base, customized with Cycle Design foundations.

**Rationale:**
- Building 40+ accessible, production-ready components from scratch would take months
- shadcn/ui provides battle-tested components built on Radix UI primitives
- Components are copied into the project (not a dependency) — full control over customization
- Cycle Design's strength is its foundation layer (440+ tokens, 5 brand palettes, dark mode) — shadcn/ui handles the component layer
- Tailwind CSS v4 provides the styling engine, with Cycle tokens mapped via CSS variables in `globals.css`

**What Cycle Design adds on top of shadcn:**
- 440+ design tokens with automatic light/dark mode
- 5 brand palettes (Brand, Class, Private, Group, Impulse) + semantic palettes (warning, positive)
- 38 typography composition classes
- Custom Fluencypass icons (169+) with accessibility enforced via TypeScript
- AI-ready documentation (llms.txt, MCP server, ai/ folder)
- WCAG contrast documentation per token

### Tokens

- Source of truth: Figma variables
- Colors, typography, spacing, border radius, shadows, motion, z-index defined as Figma variables
- In code: tokens mapped to shadcn CSS variables via `globals.css` with theme switching support (light/dark)
- Functional tokens adapt automatically between themes — primitives do not

### Documentation

- Custom React documentation site
- Each component follows shadcn/ui docs conventions
- AI-ready docs in `ai/` folder with structured Markdown

### Figma Integration

- Figma variables map 1:1 to CSS custom properties
- Typography: Figma `headline/lg` → CSS `.headline-lg`
- Colors: Figma `text/primary` → CSS `var(--text-primary)`
- Complete mapping in `ai/figma-mapping.md`

## AI Integration (Vibe Coding)

AI tools (Claude Code, Cursor, Windsurf, Bolt) don't access Storybook or documentation sites — they read code files. For correct usage, they need:

1. Component code with typed TypeScript props (shadcn/ui components in `src/components/ui/`)
2. Rules file (`CLAUDE.md`, `.cursorrules`) at the project root
3. Structured AI documentation in `ai/` folder
4. MCP server for programmatic access to tokens and docs

## Protections Against AI Mistakes

| Protection | How it works |
|------------|-------------|
| shadcn/ui conventions | Components follow well-known API patterns. AI tools already know shadcn. |
| Rules file for AI | Explicit instructions to use existing components and tokens. |
| TypeScript | Incompatible prop changes cause errors everywhere the component is used. |
| Tailwind CSS v4 | Class-based styling is visible and diffable. |
| `cn()` utility | Prevents Tailwind class conflicts via tailwind-merge. |
| Git | Complete version history. Any change can be reverted. |
| Semantic versioning | Breaking changes only in major versions, with changelog. |

## Key Technical Decisions

### cn() uses tailwind-merge

Unlike the old Cycle Design which used a simple clsx, the new architecture uses `clsx + tailwind-merge` because shadcn/ui components rely on Tailwind classes. `tailwind-merge` resolves conflicts when users pass custom classes that overlap with component defaults.

### Dark mode: dual selector support

Both `.dark` class (shadcn convention) and `[data-theme="dark"]` attribute (Cycle convention) are supported. This ensures compatibility with shadcn ecosystem tools while maintaining backward compatibility with existing Fluencypass projects.

### Patterns vs UI components

- **UI components** (`src/components/ui/`): shadcn/ui primitives — generic, reusable, no business logic
- **Patterns** (`src/components/patterns/`): Fluencypass-specific compositions — combine multiple UI components with business context (e.g., LoginForm)

### Typography: composition classes over utilities

Cycle Design uses pre-composed typography classes (`.headline-lg`, `.body-md`) rather than Tailwind utility composition (`text-4xl font-extrabold`). This ensures consistency across all Fluencypass projects — every project uses the same `.headline-lg` with identical values from Figma.

## Update Flow

```
Designer changes in Figma
    → Updates globals.css token values
    → shadcn components automatically reflect the change
    → Dev team reviews the diff
    → TypeScript validates nothing broke
    → New package version published
    → Projects update dependency
```
