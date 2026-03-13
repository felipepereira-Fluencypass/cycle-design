# Cycle Design

Design System da **Fluencypass** — tokens, componentes React e ícones.

## Instalação

```bash
npm install cycle-design
```

## Uso

```tsx
// Tokens + estilos dos componentes (recomendado)
import 'cycle-design/styles.css'

// Componentes
import { Button } from 'cycle-design'

// Ícones
import { SearchIcon } from 'cycle-design/icons'
```

Se precisar apenas dos tokens (sem estilos de componentes):

```tsx
import 'cycle-design/tokens'
```

## Temas

```html
<html data-theme="light">  <!-- Light mode (padrão) -->
<html data-theme="dark">   <!-- Dark mode -->
```

Ao usar tokens funcionais (`var(--text-primary)`, `var(--bg-primary)`, etc.), o dark mode funciona automaticamente.

## Documentação

- **Docs site:** rode `cd docs && npm run dev` para visualizar localmente
- **AI docs:** pasta `ai/` com documentação estruturada para LLMs
- **MCP Server:** `mcp/` para integração com Claude Code, Cursor e VS Code
