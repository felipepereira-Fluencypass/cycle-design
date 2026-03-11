# Cycle Design — Gradient Tokens

Linear gradients with light/dark mode support. Default direction: `to left` (270deg).

## Gray Gradients (13 variants)

### Dark gray gradients

| Token | Light mode colors |
|-------|------------------|
| `--gradient-gray-500-600` | gray-light-500 → gray-light-600 |
| `--gradient-gray-600-700` | gray-light-600 → gray-light-700 |
| `--gradient-gray-600-800` | gray-light-600 → gray-light-800 |
| `--gradient-gray-700-800` | gray-light-700 → gray-light-800 |
| `--gradient-gray-600-900` | gray-light-600 → gray-light-900 |
| `--gradient-gray-700-900` | gray-light-700 → gray-light-900 |

### Light gray gradients

| Token | Light mode colors |
|-------|------------------|
| `--gradient-gray-50-white` | white → gray-light-50 |
| `--gradient-gray-100-white` | white → gray-light-100 |
| `--gradient-gray-100-25` | gray-light-25 → gray-light-100 |
| `--gradient-gray-100-50` | gray-light-50 → gray-light-100 |
| `--gradient-gray-200-25` | gray-light-25 → gray-light-200 |
| `--gradient-gray-200-50` | gray-light-50 → gray-light-200 |
| `--gradient-gray-200-100` | gray-light-100 → gray-light-200 |

In dark mode, all gray gradients automatically switch to use `--color-gray-dark-*` values.

## Brand Gradients (5 palettes)

| Token | Light mode | Dark mode |
|-------|-----------|-----------|
| `--gradient-brand` | brand-500 → brand-900 | brand-transparent-25 → brand-900 |
| `--gradient-class` | class-500 → class-900 | class-transparent-25 → class-900 |
| `--gradient-private` | private-500 → private-900 | private-transparent-25 → private-900 |
| `--gradient-group` | group-500 → group-900 | group-transparent-25 → group-900 |
| `--gradient-impulse` | impulse-500 → impulse-900 | impulse-transparent-25 → impulse-950 |

## Custom Direction

The default direction is `to left` (270deg). To use a different angle, use the primitive color tokens directly:

```css
.hero-banner {
  background: linear-gradient(
    135deg,
    var(--color-brand-900),
    var(--color-brand-500)
  );
}
```

## Usage Examples

```css
/* Hero section with brand gradient */
.hero {
  background: var(--gradient-brand);
}

/* Subtle gray background */
.section {
  background: var(--gradient-gray-100-white);
}

/* Dark footer */
.footer {
  background: var(--gradient-gray-700-900);
  color: var(--text-white);
}
```
