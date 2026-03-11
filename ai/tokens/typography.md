# Cycle Design — Typography Tokens

The typography system has two layers: **primitive tokens** (raw values) and **composition classes** (ready-to-use CSS classes).

## Primitive Tokens

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-family-body` | 'Open Sans', sans-serif | Paragraphs, content |
| `--font-family-headline` | 'Open Sans', sans-serif | Titles, headings |
| `--font-family-display` | 'Open Sans', sans-serif | Decorative, hero text |
| `--font-family-mono` | 'Fira Code', monospace | Code blocks |

### Font Weights

| Token | Value |
|-------|-------|
| `--font-weight-light` | 300 |
| `--font-weight-regular` | 400 |
| `--font-weight-semibold` | 600 |
| `--font-weight-bold` | 700 |
| `--font-weight-extrabold` | 800 |

### Font Sizes

| Token | Value |
|-------|-------|
| `--font-size-4xs` | 0.625rem (10px) |
| `--font-size-3xs` | 0.75rem (12px) |
| `--font-size-2xs` | 0.875rem (14px) |
| `--font-size-xs` | 1rem (16px) |
| `--font-size-sm` | 1.125rem (18px) |
| `--font-size-md` | 1.25rem (20px) |
| `--font-size-lg` | 1.5rem (24px) |
| `--font-size-xl` | 2rem (32px) |
| `--font-size-2xl` | 2.5rem (40px) |
| `--font-size-3xl` | 3rem (48px) |
| `--font-size-4xl` | 4rem (64px) |
| `--font-size-5xl` | 4.5rem (72px) |

### Line Heights

| Token | Value |
|-------|-------|
| `--line-height-5xs` | 0.75rem (12px) |
| `--line-height-4xs` | 0.875rem (14px) |
| `--line-height-3xs` | 1rem (16px) |
| `--line-height-2xs` | 1.125rem (18px) |
| `--line-height-xs` | 1.25rem (20px) |
| `--line-height-sm` | 1.5rem (24px) |
| `--line-height-md` | 1.75rem (28px) |
| `--line-height-lg` | 1.875rem (30px) |
| `--line-height-xl` | 2rem (32px) |
| `--line-height-2xl` | 2.5rem (40px) |
| `--line-height-3xl` | 3rem (48px) |
| `--line-height-4xl` | 3.75rem (60px) |
| `--line-height-5xl` | 5.125rem (82px) |
| `--line-height-6xl` | 5.625rem (90px) |

### Other

| Token | Value |
|-------|-------|
| `--letter-spacing-none` | 0 |
| `--text-decoration-none` | none |
| `--text-decoration-underline` | underline |
| `--text-decoration-strikethrough` | line-through |

## Composition Classes (38 total)

These are ready-to-use CSS classes. Apply them directly to HTML elements.

### Body (content text)

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.body-xs` | 10px | Regular (400) | Captions, fine print |
| `.body-xs-semibold` | 10px | Semibold (600) | Emphasized captions |
| `.body-sm` | 12px | Regular (400) | Small text, labels |
| `.body-sm-semibold` | 12px | Semibold (600) | Emphasized labels |
| `.body-md` | 14px | Regular (400) | Default body text |
| `.body-md-semibold` | 14px | Semibold (600) | Emphasized body |
| `.body-lg` | 16px | Regular (400) | Large body text |
| `.body-lg-semibold` | 16px | Semibold (600) | Emphasized large body |

### Subtitle (supporting text)

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.subtitle-sm` | 14px | Bold (700) | Small subtitle |
| `.subtitle-sm-strikethrough` | 14px | Regular + line-through | Strikethrough price |
| `.subtitle-md` | 16px | Bold (700) | Medium subtitle |
| `.subtitle-md-strikethrough` | 16px | Regular + line-through | Strikethrough text |
| `.subtitle-lg` | 18px | Bold (700) | Large subtitle |
| `.subtitle-lg-strikethrough` | 18px | Regular + line-through | Large strikethrough |
| `.subtitle-lg-regular` | 18px | Regular (400) | Large subtitle, light weight |

### Headline (titles)

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.headline-sm` | 20px | Bold (700) | Small heading |
| `.headline-sm-regular` | 20px | Regular (400) | Light small heading |
| `.headline-md` | 24px | Bold (700) | Medium heading |
| `.headline-md-regular` | 24px | Regular (400) | Light medium heading |
| `.headline-lg` | 32px | Bold (700) | Large heading |
| `.headline-lg-regular` | 32px | Regular (400) | Light large heading |
| `.headline-xl` | 40px | Bold (700) | Extra large heading |
| `.headline-xl-regular` | 40px | Regular (400) | Light extra large heading |
| `.headline-xxl` | 48px | Bold (700) | Largest heading |
| `.headline-xxl-regular` | 48px | Regular (400) | Light largest heading |

### Display (decorative)

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.display-md` | 64px | Extrabold (800) | Hero text |
| `.display-md-light` | 64px | Light (300) | Light hero text |
| `.display-lg` | 72px | Extrabold (800) | Large hero text |
| `.display-lg-light` | 72px | Light (300) | Light large hero |

### Button (buttons and links)

| Class | Size | Weight | Decoration | Usage |
|-------|------|--------|------------|-------|
| `.button-sm` | 12px | Bold (700) | none | Small button |
| `.button-sm-underline` | 12px | Bold (700) | underline | Small link |
| `.button-md` | 14px | Bold (700) | none | Medium button |
| `.button-md-underline` | 14px | Bold (700) | underline | Medium link |
| `.button-lg` | 16px | Bold (700) | none | Large button |
| `.button-lg-underline` | 16px | Bold (700) | underline | Large link |

Note: Button classes use 1:1 line-height (line-height equals font-size) for precise height control.

## Usage Examples

```html
<!-- Content -->
<p class="body-md">Default paragraph text</p>
<span class="body-sm-semibold">Emphasized label</span>

<!-- Headings -->
<h1 class="headline-xl">Page Title</h1>
<h2 class="headline-md">Section Title</h2>
<h3 class="subtitle-lg">Subsection</h3>

<!-- Hero -->
<h1 class="display-lg">Welcome</h1>
<p class="display-md-light">Subtitle hero text</p>

<!-- Buttons -->
<button class="button-md">Submit</button>
<a class="button-sm-underline" href="#">Learn more</a>

<!-- Prices -->
<span class="subtitle-md-strikethrough">$29.99</span>
<span class="subtitle-md">$19.99</span>
```
