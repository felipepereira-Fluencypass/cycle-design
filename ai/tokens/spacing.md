# Cycle Design — Spacing Tokens

Two categories of spacing tokens: **Spacing** (for gaps between elements) and **Spacing Inset** (for internal padding).

## Spacing (gap between elements)

Use for `margin`, `gap`, and spacing between sections.

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-quarck` | 2px | Micro adjustments |
| `--spacing-nano` | 4px | Icons, badges |
| `--spacing-micro` | 8px | Between small elements |
| `--spacing-mini` | 12px | Compact padding |
| `--spacing-3xs` | 16px | Default padding |
| `--spacing-2xs` | 20px | Comfortable gap |
| `--spacing-xs` | 24px | Gap between cards |
| `--spacing-sm` | 32px | Small sections |
| `--spacing-md` | 40px | Medium sections |
| `--spacing-lg` | 48px | Large sections |
| `--spacing-xl` | 56px | Extra large sections |
| `--spacing-2xl` | 64px | Very large sections |
| `--spacing-3xl` | 80px | Between major sections |
| `--spacing-big` | 120px | Page sections |
| `--spacing-huge` | 160px | Large page sections |
| `--spacing-giant` | 200px | Maximum spacing |

## Spacing Inset (internal padding)

Use for `padding` inside components (buttons, cards, inputs, modals).

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-inset-2xs` | 4px | Micro padding (badges) |
| `--spacing-inset-xs` | 8px | Compact padding (tags) |
| `--spacing-inset-sm` | 12px | Small padding (small buttons) |
| `--spacing-inset-md` | 16px | Default padding (cards, inputs) |
| `--spacing-inset-lg` | 24px | Comfortable padding (sections) |
| `--spacing-inset-xl` | 32px | Large padding (modals) |
| `--spacing-inset-2xl` | 40px | Maximum padding (hero sections) |

## Usage Examples

```css
/* Card layout */
.card {
  padding: var(--spacing-inset-md);        /* 16px internal padding */
  gap: var(--spacing-micro);               /* 8px between child elements */
  margin-bottom: var(--spacing-xs);        /* 24px below the card */
}

/* Section spacing */
.section {
  padding: var(--spacing-lg) 0;            /* 48px vertical spacing */
}

/* Button padding */
.button {
  padding: var(--spacing-inset-xs) var(--spacing-inset-md);  /* 8px top/bottom, 16px left/right */
}

/* Grid gap */
.grid-layout {
  display: grid;
  gap: var(--spacing-3xs);                 /* 16px gap */
}
```
