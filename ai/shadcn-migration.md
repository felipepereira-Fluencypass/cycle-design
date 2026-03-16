# Migração: Cycle Design → shadcn/ui

> Documento de referência para a reestruturação do Cycle Design usando shadcn/ui como base de componentes.

---

## Decisão arquitetural

**O Cycle Design passa a ser um shadcn/ui customizado com a identidade visual da Fluencypass.**

- Ninguém usa o Cycle Design ainda — não há retrocompatibilidade a manter
- Os 6 componentes anteriores (Button, Checkbox, Switch, Alert, Skeleton, Spinner) são substituídos pelos equivalentes do shadcn
- Os consumidores usam a API nativa do shadcn — sem wrappers
- Os foundations (cores, tipografia, spacing, shadows, radius) do Cycle continuam como fonte de verdade vindos do Figma

### Antes vs Depois

```
ANTES:
  Figma → Tokens CSS → Componentes hand-built → Consumidor

DEPOIS:
  Figma → Foundations (globals.css) → shadcn/ui customizado → Consumidor
```

---

## Stack técnica

| Camada | Tecnologia |
|---|---|
| Primitivos headless | Radix UI (via shadcn) |
| Componentes | shadcn/ui (~58 componentes) |
| Estilização | Tailwind CSS v4 |
| Tema | CSS Variables customizadas (Cycle foundations) |
| Tipografia | Open Sans + Fira Code |
| Dark mode | `.dark` class + `[data-theme="dark"]` |
| Build | Vite / Next.js (projeto consumidor) |

---

## O que muda

### Para desenvolvedores

| Antes | Depois |
|---|---|
| `import { Button } from 'cycle-design'` | `import { Button } from '@/components/ui/button'` |
| `import 'cycle-design/styles.css'` | Tailwind compila automaticamente |
| CSS Custom Properties manuais | Classes Tailwind (`bg-primary`, `text-muted-foreground`) |
| 6 componentes | 58+ componentes |
| Sem Tailwind | Tailwind v4 obrigatório |

### Para designers

| Antes | Depois |
|---|---|
| Componentes customizados no Figma | Componentes alinhados com shadcn/ui |
| Tokens exportados como CSS vars | Tokens mapeados para variáveis shadcn |
| 5 paletas de marca | 5 paletas mantidas como extensão |

### O que NÃO muda

- Foundations (cores, tipografia, spacing, shadows, radius) — continuam iguais
- Identidade visual Fluencypass — cores, fontes, espaçamentos preservados
- Dark mode — funciona automaticamente via CSS variables
- 5 paletas de produto (Brand, Class, Private, Group, Impulse)
- Fonte de verdade continua no Figma

---

## Mapeamento de componentes

### Componentes antigos → shadcn

| Cycle (antigo) | shadcn (novo) | Notas |
|---|---|---|
| Button | `button` | API diferente (variant: default/destructive/outline/secondary/ghost/link) |
| Checkbox | `checkbox` | Radix-based, controlled/uncontrolled |
| Switch | `switch` | Radix-based |
| Alert | `alert` | Variantes: default/destructive |
| Skeleton | `skeleton` | Idêntico em conceito |
| Spinner | — | Não existe no shadcn. Criar customizado ou usar Loader2 do Lucide com animação |

### Componentes novos disponíveis

Com shadcn, os seguintes componentes ficam imediatamente disponíveis:

**Formulários:** Input, Textarea, Select, Radio Group, Slider, Date Picker, Form (React Hook Form)
**Feedback:** Toast, Sonner, Alert Dialog, Progress
**Navegação:** Tabs, Navigation Menu, Breadcrumb, Pagination, Sidebar
**Overlay:** Dialog, Sheet, Drawer, Popover, Tooltip, Dropdown Menu, Context Menu, Command (cmdk)
**Data:** Table, Data Table, Card, Badge, Avatar, Separator
**Layout:** Accordion, Collapsible, Resizable, Scroll Area, Aspect Ratio, Carousel

---

## Setup de projeto novo

### 1. Criar projeto

```bash
# Next.js (recomendado)
npx create-next-app@latest my-app --typescript --tailwind --eslint --app

# ou Vite
npm create vite@latest my-app -- --template react-ts
```

### 2. Inicializar shadcn

```bash
npx shadcn@latest init
```

Escolher:
- Style: Default
- Base color: Neutral
- CSS variables: Yes

### 3. Substituir globals.css

Substituir o conteúdo gerado pelo mapeamento do Cycle Design.
Ver arquivo completo em: `ai/shadcn-theme-mapping.md`

### 4. Adicionar fontes

```css
/* No layout ou globals.css */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Fira+Code:wght@400;500&display=swap');
```

```css
@theme inline {
  --font-sans: 'Open Sans', sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```

### 5. Adicionar componentes

```bash
# Adicionar todos de uma vez
npx shadcn@latest add button checkbox switch alert skeleton dialog select toast tabs popover tooltip input textarea badge avatar card table sheet drawer

# Ou um por um conforme necessário
npx shadcn@latest add button
```

### 6. Usar

```tsx
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <Button variant="default">Salvar</Button>
  )
}
```

---

## Variáveis extras (paletas Fluencypass)

O shadcn padrão tem: primary, secondary, destructive, muted, accent.

Para as paletas de produto, adicionar no globals.css:

```css
:root {
  --brand: #D45558;
  --brand-foreground: #FFFFFF;
  --class: #1A5FE0;
  --class-foreground: #FFFFFF;
  --private: #E56530;
  --private-foreground: #FFFFFF;
  --group: #00C234;
  --group-foreground: #FFFFFF;
  --impulse: #7D0DD4;
  --impulse-foreground: #FFFFFF;
  --warning: #D48E00;
  --warning-foreground: #FFFFFF;
  --positive: #098A5E;
  --positive-foreground: #FFFFFF;
}
```

E registrar no `@theme inline` para gerar classes Tailwind.

Ver detalhes completos em: `ai/shadcn-theme-mapping.md`
