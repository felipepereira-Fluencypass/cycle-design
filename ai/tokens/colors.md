# Cycle Design — Color Tokens

The color system has two layers: **primitives** (raw hex values) and **functional tokens** (semantic, theme-aware). Always use functional tokens in your code.

## Primitive Palettes

11 color palettes, each with 12 steps (25, 50, 100–950). These are the raw values — do NOT use them directly in interfaces.

| Palette | Prefix | Description |
|---------|--------|-------------|
| Gray Light | `--color-gray-light-*` | Gray scale for light mode |
| Gray Dark | `--color-gray-dark-*` | Gray scale for dark mode |
| Brand | `--color-brand-*` | Brand identity (red/coral) |
| Class | `--color-class-*` | "Class" feature (blue) |
| Private | `--color-private-*` | "Private" feature (orange) |
| Group | `--color-group-*` | "Group" feature (green) |
| Impulse | `--color-impulse-*` | "Impulse" feature (purple) |
| Positive | `--color-positive-*` | Success states (green) |
| Warning | `--color-warning-*` | Warning states (yellow/amber) |
| Critical | `--color-critical-*` | Error/danger states (red) |

Base colors: `--color-white` (#FFFFFF), `--color-black` (#000000), `--color-backdrop` (rgba(0,0,0,0.6)), `--color-overlay` (rgba(255,255,255,0.6)).

Brand palettes also include transparent variants: `--color-brand-transparent-10`, `--color-brand-transparent-25`, etc.

## Functional Tokens — Text Colors

Use `--text-*` tokens for all text colors. They automatically adapt between light and dark mode.

### Base text

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--text-primary` | #181D27 | #F7F7F7 | Main text, headings |
| `--text-secondary` | #414651 | #CECFD2 | Supporting text |
| `--text-tertiary` | #535862 | #94979C | Less important text |
| `--text-quaternary` | #717680 | #85888E | Least important text |
| `--text-disabled` | #717680 | #85888E | Disabled state |
| `--text-placeholder` | #717680 | #94979C | Input placeholders |
| `--text-placeholder_subtle` | #D5D7DA | #373A41 | Subtle placeholders |
| `--text-white` | #FFFFFF | #F7F7F7 | Text on dark backgrounds |
| `--text-primary_on-brand` | #FFFFFF | #FFF5F5 | Text on brand backgrounds |

### Semantic text

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--text-critical-primary` | #B32020 | #ED5555 | Error messages |
| `--text-warning-primary` | #AA7200 | #FECF50 | Warning messages |
| `--text-positive-primary` | #098A5E | #1EC485 | Success messages |

### Brand text (each brand palette follows this pattern)

| Token | Usage |
|-------|-------|
| `--text-{palette}-primary` | Primary brand text |
| `--text-{palette}-secondary` | Secondary brand text |
| `--text-{palette}-secondary_hover` | Hover state |
| `--text-{palette}-tertiary` | Tertiary brand text |
| `--text-{palette}-tertiary_alt` | Alternative tertiary |

Where `{palette}` is: `brand`, `class`, `private`, `group`, `impulse`.

## Functional Tokens — Border Colors

Use `--border-*` tokens for all borders.

### Base borders

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--border-primary` | #D5D7DA | #373A41 | Default borders |
| `--border-secondary` | #E9EAEB | #22262F | Subtle borders |
| `--border-tertiary` | #F5F5F5 | #22262F | Very subtle borders |
| `--border-quaternary` | #A4A7AE | #61656C | Stronger borders |
| `--border-disabled` | #D5D7DA | #373A41 | Disabled borders |

### Brand borders (pattern for each palette)

| Token | Usage |
|-------|-------|
| `--border-{palette}` | Default brand border |
| `--border-{palette}_hover` | Hover state |
| `--border-{palette}_alt` | Alternative shade |

Where `{palette}` is: `brand`, `class`, `private`, `group`, `impulse`.

## Functional Tokens — Foreground/Icon Colors

Use `--fg-*` tokens for icons, indicators, and other foreground elements.

### Base foreground

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--fg-primary` | #181D27 | #FFFFFF | Primary icons |
| `--fg-secondary` | #414651 | #CECFD2 | Secondary icons |
| `--fg-tertiary` | #535862 | #94979C | Tertiary icons |
| `--fg-quaternary` | #A4A7AE | #61656C | Quaternary icons |
| `--fg-white` | #FFFFFF | #FFFFFF | Icons on dark backgrounds |
| `--fg-disabled` | #A4A7AE | #85888E | Disabled icons |

### Brand foreground (pattern for each palette)

| Token | Usage |
|-------|-------|
| `--fg-{palette}-primary` | Primary brand icon |
| `--fg-{palette}-primary_alt` | Alternative primary |
| `--fg-{palette}-secondary` | Secondary brand icon |
| `--fg-{palette}-secondary_alt` | Alternative secondary |

### Semantic foreground

| Token | Usage |
|-------|-------|
| `--fg-critical-primary` / `--fg-critical-secondary` | Error icons |
| `--fg-warning-primary` / `--fg-warning-secondary` | Warning icons |
| `--fg-positive-primary` / `--fg-positive-secondary` | Success icons |

## Functional Tokens — Background Colors

Use `--bg-*` tokens for all backgrounds.

### Base backgrounds

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--bg-primary` | #FFFFFF | #0C0E12 | Main background |
| `--bg-primary_alt` | #FFFFFF | #13161B | Alternative main |
| `--bg-primary_hover` | #FAFAFA | #22262F | Hover state |
| `--bg-primary-solid` | #0D0D12 | #13161B | Solid dark bg |
| `--bg-secondary` | #FAFAFA | #13161B | Secondary background |
| `--bg-tertiary` | #F5F5F5 | #22262F | Tertiary background |
| `--bg-quaternary` | #E9EAEB | #373A41 | Quaternary background |
| `--bg-active` | #FAFAFA | #22262F | Active state |
| `--bg-disabled` | #F5F5F5 | #22262F | Disabled background |
| `--bg-overlay` | #0D0D12 | #22262F | Overlay background |

### Brand backgrounds (pattern for each palette)

| Token | Usage |
|-------|-------|
| `--bg-{palette}-primary` | Light tinted background |
| `--bg-{palette}-primary_alt` | Alternative tinted |
| `--bg-{palette}-hover` | Hover state |
| `--bg-{palette}-secondary` | Secondary brand bg |
| `--bg-{palette}-solid` | Solid brand color bg |
| `--bg-{palette}-solid_hover` | Solid hover state |
| `--bg-{palette}-section` | Full section background |
| `--bg-{palette}-section_subtle` | Subtle section background |

### Semantic backgrounds

| Token | Usage |
|-------|-------|
| `--bg-critical-primary` / `--bg-critical-secondary` | Error backgrounds |
| `--bg-critical-solid` / `--bg-critical-solid_hover` | Solid error backgrounds |
| `--bg-warning-primary` / `--bg-warning-secondary` | Warning backgrounds |
| `--bg-warning-solid` / `--bg-warning-solid_hover` | Solid warning backgrounds |
| `--bg-positive-primary` / `--bg-positive-secondary` | Success backgrounds |
| `--bg-positive-solid` / `--bg-positive-solid_hover` | Solid success backgrounds |

## Alpha Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--alpha-backdrop` | rgba(0,0,0,0.6) | Modal backdrop |
| `--alpha-overlay` | rgba(255,255,255,0.6) | Light overlay |
| `--alpha-transparent` | rgba(255,255,255,0) | Fully transparent |

## Usage Examples

```css
/* Card with semantic colors */
.card {
  color: var(--text-primary);
  background: var(--bg-primary);
  border: var(--border-hairline) solid var(--border-primary);
}

/* Error state */
.error {
  color: var(--text-critical-primary);
  background: var(--bg-critical-primary);
  border-color: var(--border-brand); /* if using brand */
}

/* Brand section */
.hero {
  color: var(--text-primary_on-brand);
  background: var(--bg-brand-section);
}
```
