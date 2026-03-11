# Cycle Design — Grid System

Mobile-first responsive grid based on Figma breakpoints. Uses CSS Grid with stretch (flexible) columns.

## Breakpoints

| Token | Width | Columns | Gutter | Margin |
|-------|-------|---------|--------|--------|
| `--breakpoint-sm` | 320px | 4 | 16px | 16px |
| `--breakpoint-md` | 672px | 8 | 16px | 16px |
| `--breakpoint-lg` | 1056px | 16 | 32px | 32px |
| `--breakpoint-xl` | 1312px | 16 | 32px | 32px |
| `--breakpoint-max` | 1584px | 16 | 32px | 32px |

## Grid Tokens

```css
/* Columns per breakpoint */
--grid-columns-sm: 4;
--grid-columns-md: 8;
--grid-columns-lg: 16;
--grid-columns-xl: 16;
--grid-columns-max: 16;

/* Gutter (space between columns) */
--grid-gutter-sm: 16px;
--grid-gutter-md: 16px;
--grid-gutter-lg: 32px;
--grid-gutter-xl: 32px;
--grid-gutter-max: 32px;

/* Margin (space on sides) */
--grid-margin-sm: 16px;
--grid-margin-md: 16px;
--grid-margin-lg: 32px;
--grid-margin-xl: 32px;
--grid-margin-max: 32px;

/* Side panel width */
--grid-panel-width: 256px;
```

## CSS Classes

### Container

`.container` — Responsive wrapper with max-width and padding margins per breakpoint.

### Grid

`.grid` — CSS Grid container with responsive columns and gutters.

### Column Spans

| Breakpoint | Classes | Columns |
|------------|---------|---------|
| sm (default) | `.col-1` to `.col-4` | 4 |
| md (672px+) | `.col-md-1` to `.col-md-8` | 8 |
| lg (1056px+) | `.col-lg-1` to `.col-lg-16` | 16 |
| xl (1312px+) | `.col-xl-1` to `.col-xl-16` | 16 |
| max (1584px+) | `.col-max-1` to `.col-max-16` | 16 |

### Layout with Panel

For layouts with a side panel (256px), the grid automatically adjusts:
- At `lg`: reduces to 8 columns
- At `xl`: returns to 16 columns

```html
<div class="layout-with-panel">
  <aside class="panel">Sidebar</aside>
  <main class="content">
    <div class="grid">...</div>
  </main>
</div>
```

## Usage Examples

```html
<!-- Basic responsive layout -->
<div class="container">
  <div class="grid">
    <!-- Full width on mobile, half on desktop -->
    <div class="col-4 col-md-4 col-lg-8">Content</div>
    <div class="col-4 col-md-4 col-lg-8">Content</div>
  </div>
</div>

<!-- Three-column layout on desktop -->
<div class="container">
  <div class="grid">
    <div class="col-4 col-md-4 col-lg-5">Sidebar</div>
    <div class="col-4 col-md-4 col-lg-6">Main</div>
    <div class="col-4 col-md-8 col-lg-5">Aside</div>
  </div>
</div>
```
