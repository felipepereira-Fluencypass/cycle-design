# Cycle Design

Cycle Design is the official design system for **Fluencypass**, built on **shadcn/ui** with a custom Cycle theme.

- **40+ shadcn/ui components** (Button, Card, Dialog, Tabs, Select, and more)
- **Tailwind CSS v4** for styling engine
- **Radix UI** primitives for accessibility
- **Lucide** icons (default) + custom Fluencypass icons
- **Light/Dark mode** with automatic theme switching
- **440+ design tokens** (colors, typography, spacing, shadows, radius, motion, z-index)
- **5 brand palettes** (Brand, Class, Private, Group, Impulse) beyond standard shadcn

## Quick Start

```bash
npm install cycle-design
```

```tsx
// Import components
import { Button, Card, CardHeader, CardTitle, CardContent, Input, Label } from 'cycle-design'
import { cn } from 'cycle-design'

// Import theme CSS (copy to your globals.css or import directly)
import 'cycle-design/globals.css'

// Lucide icons (same as shadcn)
import { Search, Plus, X } from 'lucide-react'

// Custom Fluencypass icons
import { ConversationIcon } from 'cycle-design/icons'
```

```tsx
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

## Themes

```tsx
// Dark mode (either method works)
document.documentElement.setAttribute('data-theme', 'dark')
document.documentElement.classList.add('dark')

// Light mode (default)
document.documentElement.setAttribute('data-theme', 'light')
```

When using Cycle Design tokens (`var(--text-primary)`, `var(--bg-primary)`, etc.), dark mode works automatically.

## Full Installation Guide

See [docs/INSTALLATION.md](docs/INSTALLATION.md) for the complete setup guide covering Next.js, Vite, fonts, product palettes, and all available components.

## Documentation

- **Full setup:** `docs/INSTALLATION.md`
- **AI docs:** `ai/` folder with structured documentation for LLMs
- **MCP Server:** `mcp/` for integration with Claude Code, Cursor, and VS Code
- **Docs site:** run `cd docs && npm run dev` to preview locally
