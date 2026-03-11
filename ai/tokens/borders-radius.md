# Cycle Design — Border & Radius Tokens

## Border Width

5 border width tokens for consistent borders across the interface.

| Token | Value | Usage |
|-------|-------|-------|
| `--border-none` | 0px | No border |
| `--border-hairline` | 1px | Default border (cards, inputs, dividers) |
| `--border-thin` | 2px | Emphasized border (focus states) |
| `--border-thick` | 4px | Strong border (active tabs, indicators) |
| `--border-heavy` | 8px | Heavy border (decorative, accents) |

## Border Radius

9 radius tokens for consistent rounding.

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0px | No rounding (sharp corners) |
| `--radius-xs` | 4px | Subtle rounding (badges, tags) |
| `--radius-sm` | 8px | Default rounding (cards, inputs, buttons) |
| `--radius-md` | 12px | Medium rounding (modals, popovers) |
| `--radius-lg` | 16px | Large rounding (cards, sections) |
| `--radius-xl` | 20px | Extra large rounding |
| `--radius-xxl` | 24px | Very large rounding |
| `--radius-pill` | 500px | Pill/capsule shape (tags, chips) |
| `--radius-circular` | 1000px | Perfect circle (avatars, round buttons) |

## Usage Examples

```css
/* Default card */
.card {
  border: var(--border-hairline) solid var(--border-primary);
  border-radius: var(--radius-sm);
}

/* Input field */
.input {
  border: var(--border-hairline) solid var(--border-primary);
  border-radius: var(--radius-sm);
}
.input:focus {
  border-width: var(--border-thin);
}

/* Pill button */
.pill-button {
  border-radius: var(--radius-pill);
}

/* Avatar */
.avatar {
  border-radius: var(--radius-circular);
}

/* Tab indicator */
.tab.active {
  border-bottom: var(--border-thick) solid var(--border-brand);
}
```
