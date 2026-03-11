# Cycle Design — Dark Mode

## How it works

Dark mode is controlled via the `data-theme` attribute on the `<html>` element:

```html
<!-- Light mode (default) -->
<html data-theme="light">

<!-- Dark mode -->
<html data-theme="dark">
```

The system also respects `prefers-color-scheme` automatically. If no `data-theme` attribute is set, the user's OS preference is used.

## Why functional tokens matter

When you use functional tokens (not primitives), dark mode works automatically with zero code changes:

```css
/* This works in both light AND dark mode */
.card {
  color: var(--text-primary);        /* Light: #181D27 | Dark: #F7F7F7 */
  background: var(--bg-primary);     /* Light: #FFFFFF | Dark: #0C0E12 */
  border-color: var(--border-primary); /* Light: #D5D7DA | Dark: #373A41 */
}
```

Using primitives directly breaks dark mode:

```css
/* BAD — this will NOT adapt to dark mode */
.card {
  color: var(--color-gray-light-900); /* Always #181D27, even in dark mode */
}
```

## Implementation in JavaScript/React

```tsx
// Toggle theme
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
}

// Respect OS preference on load
function initTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}
```

## How theme switching works internally

The CSS uses three selectors to cover all scenarios:

1. **`:root, [data-theme="light"]`** — Light mode values (default)
2. **`[data-theme="dark"]`** — Dark mode values when explicitly set
3. **`@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }`** — Auto dark mode when no explicit theme is set

This means:
- If `data-theme="light"` is set, light mode is always used
- If `data-theme="dark"` is set, dark mode is always used
- If no `data-theme` is set, the OS preference is respected
