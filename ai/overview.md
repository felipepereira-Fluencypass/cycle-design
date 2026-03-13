# Cycle Design — Overview

Cycle Design is the Design System for **Fluencypass**. It provides a complete set of design tokens and (in the future) React components that ensure visual consistency across all Fluencypass products.

## Key Facts

- **Package:** `cycle-design`
- **Framework:** React + TypeScript
- **Styling:** CSS Custom Properties (CSS variables)
- **Fonts:** Open Sans (body, headline, display) + Fira Code (mono)
- **Themes:** Light mode (default) + Dark mode via `[data-theme="dark"]`
- **Source of truth:** Figma variables, exported as JSON and converted to CSS custom properties

## Architecture

Tokens are organized in two layers:

1. **Primitives** — Raw values (color hex codes, font sizes, spacing pixels). These should never be used directly in interfaces.
2. **Compositions (functional tokens)** — Semantic tokens that reference primitives. These are what you use in your code. They automatically adapt between light and dark mode.

```
Figma Variables → JSON export → CSS Custom Properties → React components
```

## Token Categories

| Category | Description | Token count |
|----------|-------------|-------------|
| Colors (primitives) | 11 palettes with 12 steps each | ~150 |
| Colors (functional) | Text, border, foreground, background | ~200 |
| Typography | 38 composition classes + primitive tokens | ~50 |
| Spacing | Gap (16 tokens) + Inset/padding (7 tokens) | 23 |
| Shadows | 7 elevation levels | 7 |
| Border radius | 9 sizes (none to circular) | 9 |
| Border width | 5 sizes (none to heavy) | 5 |
| Opacity | 7 levels (transparent to opaque) | 7 |
| Gradients | 13 gray + 5 branded | 18 |
| Grid | 5 breakpoints + responsive classes | 5 |

## Brand Palettes

Cycle Design has 5 brand palettes in addition to neutral and semantic colors:

| Palette | Purpose | Color |
|---------|---------|-------|
| **Brand** | Fluencypass brand identity | Red/coral |
| **Class** | "Class" product feature | Blue |
| **Private** | "Private" product feature | Orange |
| **Group** | "Group" product feature | Green |
| **Impulse** | "Impulse" product feature | Purple |

Each palette provides tokens for text, border, foreground, and background with variations: primary, secondary, hover, solid, section.

## Mandatory Rules

1. **Always use tokens** — never hardcode color values, font sizes, spacing, etc.
2. **Use functional tokens, not primitives** — e.g., use `--text-primary` instead of `--color-gray-light-900`
3. **Never recreate existing components** — always import from `cycle-design`
4. **Edit source files directly** — never duplicate a component to modify it
5. **Use typography classes** — 38 pre-built styles available (body, subtitle, headline, display, button)
