# Cycle Design — Overview

Cycle Design is the Design System for **Fluencypass**, built on **shadcn/ui** with a custom Cycle theme. It provides 40+ pre-themed UI components, a complete set of design tokens (440+), and custom Fluencypass icons — ensuring visual consistency across all Fluencypass products.

## Key Facts

- **Package:** `cycle-design`
- **Framework:** React + TypeScript
- **Components:** shadcn/ui (40+) with Radix UI primitives for accessibility
- **Styling:** Tailwind CSS v4 + CSS Custom Properties (CSS variables)
- **Utilities:** `cn()` (clsx + tailwind-merge) for class composition
- **Fonts:** Open Sans (body, headline, display) + Fira Code (mono)
- **Icons:** Lucide (default, same as shadcn) + custom Fluencypass icons
- **Themes:** Light mode (default) + Dark mode via `.dark` class or `[data-theme="dark"]`
- **Source of truth:** Figma variables, mapped to shadcn CSS variables via `globals.css`

## Architecture

```
┌─────────────────────────────────┐
│     Cycle Design Foundations     │ ← Figma (source of truth)
│  (colors, typography, radius...) │
├─────────────────────────────────┤
│       CSS Variables (theme)      │ ← globals.css
├─────────────────────────────────┤
│    shadcn/ui (40+ components)    │ ← src/components/ui/
├─────────────────────────────────┤
│  Radix UI (headless primitives)  │ ← Accessibility, keyboard, focus
├─────────────────────────────────┤
│      Tailwind CSS v4 (engine)    │ ← Utility classes
└─────────────────────────────────┘
```

How it works:

1. **Figma** defines the visual values (source of truth)
2. **globals.css** maps Figma tokens to the CSS variables that shadcn expects
3. **shadcn/ui** consumes those variables automatically — all components get the Cycle look
4. **Dark mode** works by switching variable values via `.dark` or `[data-theme="dark"]`
5. **Patterns** (in `src/components/patterns/`) compose shadcn components into Fluencypass-specific organisms

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
| Motion | 5 durations + 4 easings + 3 compositions | 12 |
| Z-Index | 8 stacking levels for overlays | 8 |

## Brand Palettes

Cycle Design has 5 brand palettes in addition to neutral and semantic colors:

| Palette | Purpose | Color |
|---------|---------|-------|
| **Brand** | Fluencypass brand identity | Red/coral |
| **Class** | "Class" product feature | Blue |
| **Private** | "Private" product feature | Orange |
| **Group** | "Group" product feature | Green |
| **Impulse** | "Impulse" product feature | Purple |

Each palette provides tokens for text, border, foreground, and background with variations: primary, secondary, hover, solid, section. Also available as Tailwind classes: `bg-brand`, `text-class-foreground`, etc.

## Available Components

All components follow the standard shadcn/ui API:

Accordion, Alert, Alert Dialog, Avatar, Badge, Button, Card, Checkbox, Dialog, Dropdown Menu, Input, Label, Popover, Progress, Scroll Area, Select, Separator, Skeleton, Switch, Tabs, Textarea, Toggle, Tooltip.

Plus Fluencypass-specific patterns: LoginForm.

## Mandatory Rules

1. **Always use tokens** — never hardcode color values, font sizes, spacing, etc.
2. **Use functional tokens, not primitives** — e.g., use `--text-primary` instead of `--color-gray-light-900`
3. **Use shadcn/ui components** — never create UI components from scratch if shadcn has an equivalent
4. **Edit source files directly** — never duplicate a component to modify it; edit `src/components/ui/`
5. **Use typography classes** — 38 pre-built styles available (body, subtitle, headline, display, button)
6. **Use `cn()`** — for combining Tailwind classes with proper conflict resolution
