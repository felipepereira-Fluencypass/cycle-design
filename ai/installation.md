# Cycle Design — Installation

## Install the package

```bash
npm install @cycle/design
```

## Import tokens

Import CSS token files in your main stylesheet or entry point. Order matters — primitives must come before compositions:

```css
/* 1. Primitives (base values) */
@import '@cycle/design/tokens/typography-primitives.css';
@import '@cycle/design/tokens/color-primitives.css';

/* 2. Compositions (functional tokens) */
@import '@cycle/design/tokens/typography-compositions.css';
@import '@cycle/design/tokens/color-compositions.css';
@import '@cycle/design/tokens/color-compositions-bg.css';
@import '@cycle/design/tokens/gradients.css';

/* 3. Utilities */
@import '@cycle/design/tokens/border-width-tokens.css';
@import '@cycle/design/tokens/radius-tokens.css';
@import '@cycle/design/tokens/shadow-tokens.css';
@import '@cycle/design/tokens/opacity-tokens.css';
@import '@cycle/design/tokens/spacing-tokens.css';
@import '@cycle/design/tokens/grid-tokens.css';
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

## File structure

```
@cycle/design/
├── tokens/
│   ├── color-primitives.css        — Base color palettes
│   ├── color-compositions.css      — Functional text/border/foreground colors
│   ├── color-compositions-bg.css   — Functional background colors
│   ├── typography-primitives.css   — Font families, sizes, weights
│   ├── typography-compositions.css — 38 ready-to-use typography classes
│   ├── spacing-tokens.css          — Gap and padding tokens
│   ├── shadow-tokens.css           — Shadow elevation levels
│   ├── radius-tokens.css           — Border radius values
│   ├── border-width-tokens.css     — Border width values
│   ├── opacity-tokens.css          — Opacity levels
│   ├── gradients.css               — Linear gradients
│   └── grid-tokens.css             — Responsive grid system
└── components/                     — (future) React components
```
