# Cycle Design — Installation

> Cycle Design é um design system baseado em shadcn/ui com tema Fluencypass.

## Install the package

```bash
npm install cycle-design
```

## Peer dependencies

O projeto consumidor precisa de:

```bash
npm install tailwindcss@4 @tailwindcss/vite  # ou @tailwindcss/postcss
npm install lucide-react                       # ícones (padrão shadcn)
```

## Configure the theme

### Option A: Copy globals.css (recommended)

Copy the Cycle Design theme to your project's main CSS file:

```bash
# Source file:
# node_modules/cycle-design/src/globals.css
```

Replace your `app/globals.css` (Next.js) or `src/index.css` (Vite) with the contents above.

### Option B: Import directly

```css
@import "cycle-design/globals.css";
```

## Load fonts

Cycle Design uses **Open Sans** (body, headlines) and **Fira Code** (monospace).

### Next.js

```tsx
import { Open_Sans, Fira_Code } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-sans' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono' })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${openSans.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

### Vite / Outros

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
```

## Import components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Input, Label } from 'cycle-design'
import { cn } from 'cycle-design'  // utility for combining classes
```

## Import icons

### Lucide (default — same as shadcn)

```tsx
import { Search, Plus, X, Check } from 'lucide-react'
```

### Custom Fluencypass icons (language-learning, etc.)

```tsx
import { ConversationIcon, FluencyIcon } from 'cycle-design/icons'
```

## Usage example

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Input, Label } from 'cycle-design'

export function LoginCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="seu@email.com" />
        </div>
        <Button className="w-full">Entrar</Button>
      </CardContent>
    </Card>
  )
}
```

## Dark mode

```tsx
// Toggle
document.documentElement.setAttribute('data-theme', 'dark')

// Or use .dark class (shadcn convention)
document.documentElement.classList.add('dark')
```

## Product palettes (Tailwind classes)

Beyond shadcn's `primary`/`secondary`/`destructive`:

```tsx
<div className="bg-brand text-brand-foreground">Brand</div>
<div className="bg-class text-class-foreground">Class</div>
<div className="bg-private text-private-foreground">Private</div>
<div className="bg-group text-group-foreground">Group</div>
<div className="bg-impulse text-impulse-foreground">Impulse</div>
<div className="bg-warning text-warning-foreground">Warning</div>
<div className="bg-positive text-positive-foreground">Positive</div>
```

## Package entry points

```
cycle-design
├── cycle-design               — React components (Button, Card, Dialog, etc.)
├── cycle-design/globals.css   — Theme CSS (copy to your project)
├── cycle-design/icons         — Custom Fluencypass icon components
├── cycle-design/styles.css    — Legacy: tokens + old component styles
└── cycle-design/tokens        — Legacy: only design tokens
```
