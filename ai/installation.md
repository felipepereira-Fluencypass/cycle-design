# Cycle Design — Installation

## Install the package

```bash
npm install cycle-design
```

## Import styles

The package provides two CSS entry points. Import in your app's entry file (e.g., `main.tsx`):

```tsx
/* Recommended — includes tokens + component styles */
import 'cycle-design/styles.css'
```

If you only need the design tokens (no component styles):

```tsx
import 'cycle-design/tokens'
```

## Import components and icons

```tsx
/* React components */
import { Button } from 'cycle-design'

/* Icons */
import { SearchIcon, PlusIcon } from 'cycle-design/icons'
```

## Load fonts

Cycle Design uses Open Sans and Fira Code. Add them to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

## Usage example

```css
.card {
  color: var(--text-primary);
  background: var(--bg-primary);
  padding: var(--spacing-inset-md);
  border: var(--border-hairline) solid var(--border-primary);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}
```

```html
<h2 class="headline-md">Title</h2>
<p class="body-md">Paragraph text</p>
<button class="button-md">Click me</button>
```

## Package entry points

```
cycle-design
├── cycle-design/styles.css   — All tokens + component styles (recommended)
├── cycle-design/tokens       — Only design tokens (CSS custom properties + typography classes)
├── cycle-design              — React components (Button, etc.)
└── cycle-design/icons        — Icon components (SearchIcon, PlusIcon, etc.)
```
