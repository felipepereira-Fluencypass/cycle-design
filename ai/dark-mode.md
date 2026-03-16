# Cycle Design — Dark Mode

## How it works

Dark mode is controlled via two mechanisms — both are supported simultaneously:

```html
<!-- Method 1: data-theme attribute (Cycle Design convention) -->
<html data-theme="light">  <!-- Light mode -->
<html data-theme="dark">   <!-- Dark mode -->

<!-- Method 2: .dark class (shadcn/ui convention) -->
<html class="dark">         <!-- Dark mode -->
<html>                       <!-- Light mode (default) -->
```

The system also respects `prefers-color-scheme` automatically. If no `data-theme` attribute or `.dark` class is set, the user's OS preference is used.

## Why both selectors?

- **`[data-theme="dark"]`** — Original Cycle Design convention, used by Cycle token layer
- **`.dark`** — shadcn/ui and Tailwind CSS convention, used by shadcn components and Tailwind's `dark:` variant

Both are set in `globals.css` to ensure all layers respond to theme changes. When toggling theme in JavaScript, set both for maximum compatibility.

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
// Toggle theme (supports both selectors)
function toggleTheme() {
  const html = document.documentElement
  const isDark = html.classList.contains('dark') || html.getAttribute('data-theme') === 'dark'

  if (isDark) {
    html.classList.remove('dark')
    html.setAttribute('data-theme', 'light')
  } else {
    html.classList.add('dark')
    html.setAttribute('data-theme', 'dark')
  }
}

// Respect OS preference on load
function initTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = prefersDark ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  if (prefersDark) {
    document.documentElement.classList.add('dark')
  }
}
```

## Tailwind dark: variant

With the `.dark` class approach, Tailwind's `dark:` variant works naturally:

```tsx
<div className="bg-white dark:bg-gray-900">
  Adapts to dark mode
</div>
```

However, prefer using shadcn CSS variables (e.g., `bg-background`, `text-foreground`) which adapt automatically without `dark:` prefixes.

## How theme switching works internally

The CSS in `globals.css` uses multiple selectors to cover all scenarios:

1. **`:root`** — Light mode values (default)
2. **`.dark, [data-theme="dark"]`** — Dark mode values when explicitly set
3. **`@media (prefers-color-scheme: dark)`** — Auto dark mode when no explicit theme is set

This means:
- If `data-theme="light"` is set, light mode is always used
- If `data-theme="dark"` or `.dark` class is set, dark mode is always used
- If neither is set, the OS preference is respected
