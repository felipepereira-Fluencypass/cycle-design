# Cycle Design — Opacity Tokens

7 opacity levels for consistent transparency control.

## Opacity Scale

| Token | CSS Value | Percentage | Usage |
|-------|-----------|------------|-------|
| `--opacity-transparent` | 0 | 0% | Fully invisible |
| `--opacity-semitransparent` | 0.08 | 8% | Very subtle tint, hover states |
| `--opacity-light` | 0.16 | 16% | Light tint, subtle overlays |
| `--opacity-medium` | 0.32 | 32% | Medium transparency, disabled states |
| `--opacity-intense` | 0.64 | 64% | Visible but transparent |
| `--opacity-semiopaque` | 0.72 | 72% | Mostly visible |
| `--opacity-opaque` | 1 | 100% | Fully visible |

## Usage Examples

```css
/* Disabled element */
.disabled {
  opacity: var(--opacity-medium);
  pointer-events: none;
}

/* Subtle hover overlay */
.card:hover::after {
  opacity: var(--opacity-semitransparent);
}

/* Watermark */
.watermark {
  opacity: var(--opacity-light);
}
```
