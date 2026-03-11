# Cycle Design — Design Decisions

Reference document with all decisions and guidelines defined during the planning of Cycle Design.

## Vision

**Goal:** Build a complete design system (code + documentation + design) that serves as the single source of truth for the entire Fluencypass team (+5 people), with light and dark theme support.

**Team profile:** Design-led, with technical collaboration.

**Priority:** Long-term robustness and scalability.

## Architecture

### Components
- React + TypeScript component library
- Published as npm package (`@cycle/design`)
- Strong typing of all props — serves as living documentation and safety net

### Tokens
- Source of truth: Figma variables
- Colors, typography, spacing, border radius and breakpoints defined as Figma variables, exportable as JSON
- Shadows defined as Figma components (extracted manually or via Figma connection)
- In code: tokens converted to CSS custom properties with theme switching support (light/dark)

### Documentation
- Custom React documentation site (no Storybook initially)
- Deployed on Vercel or Netlify
- Each component will have: interactive preview, props table, usage examples, and guidelines

### Figma Integration
- Code Connect mapping each Figma component to the actual code component
- Update flow: Figma change → share updated node/JSON → generate corresponding code

## Storybook Decision

**Current decision:** Start without Storybook, using custom documentation site.

**Rationale:**
- Faster initial velocity without configuration overhead
- Team iterates faster on first components
- Zero learning curve for documentation tool

**Open door for the future:**
- Component structure is 100% Storybook-compatible
- When the team feels the need (~10-15 mature components), Storybook can be added
- No work will be lost in migration

## AI Integration (Vibe Coding)

AI tools (Claude Code, Cursor, Windsurf, Bolt) don't access Storybook or documentation sites — they read code files. For correct usage, they need:

1. Component code with typed TypeScript props
2. Rules file (`CLAUDE.md`, `.cursorrules`) at the project root
3. Usage examples within code or context files

## Protections Against AI Mistakes

| Protection | How it works |
|------------|-------------|
| Package architecture | Components are exported with typed interfaces. Changes are made in source files. |
| Rules file for AI | Explicit instructions to never duplicate components. |
| TypeScript | Incompatible prop changes cause errors everywhere the component is used. |
| Git | Complete version history. Any change can be reverted. |
| Semantic versioning | Breaking changes only in major versions, with changelog. |

## Update Flow

```
Designer changes in Figma
    → Shares updated node/JSON
    → AI generates updated code (visible diff)
    → Dev team reviews and applies
    → TypeScript validates nothing broke
    → New package version published
    → Projects update dependency
```
