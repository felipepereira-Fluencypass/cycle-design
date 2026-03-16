# Guia de Instalação — Cycle Design

> Como configurar um projeto Fluencypass com o Cycle Design + shadcn/ui.

---

## Pré-requisitos

- Node.js 18+
- React 17+ (recomendado: React 19)
- Tailwind CSS v4

---

## 1. Criar o projeto

### Next.js (recomendado)

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app
```

### Vite

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install tailwindcss @tailwindcss/vite
```

---

## 2. Instalar o Cycle Design

```bash
npm install cycle-design
```

O pacote inclui:
- Componentes shadcn/ui pré-customizados com tema Fluencypass
- CSS variables com light/dark mode
- Utilitário `cn()` para combinar classes
- Ícones custom (os que não existem no Lucide)

---

## 3. Configurar o tema

### Opção A: Copiar o globals.css (recomendado)

Copie o conteúdo do `globals.css` do Cycle Design para o seu projeto:

```bash
# O arquivo fonte está em:
# node_modules/cycle-design/src/globals.css
```

Substitua o conteúdo do `app/globals.css` (Next.js) ou `src/index.css` (Vite) pelo conteúdo do arquivo acima.

### Opção B: Importar diretamente

```css
/* No seu globals.css ou entry CSS */
@import "cycle-design/globals.css";
```

---

## 4. Configurar as fontes

O Cycle Design usa **Open Sans** (body, headlines) e **Fira Code** (monospace).

### Next.js (Google Fonts)

```tsx
// app/layout.tsx
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
<!-- No index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
```

---

## 5. Usar os componentes

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

---

## 6. Dark mode

O Cycle Design suporta dark mode via atributo `data-theme` ou classe `.dark`:

```tsx
// Toggle dark mode
function toggleTheme() {
  const html = document.documentElement
  const current = html.getAttribute('data-theme')
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark')
}
```

Todos os componentes e tokens se adaptam automaticamente.

---

## 7. Ícones

O Cycle Design usa **Lucide React** como biblioteca de ícones padrão (a mesma do shadcn/ui).

```tsx
import { Search, Plus, X, Check } from 'lucide-react'

<Button>
  <Search className="h-4 w-4" />
  Buscar
</Button>
```

Para ícones específicos da Fluencypass (language-learning, lesson-formats, etc.) que não existem no Lucide, importe do pacote:

```tsx
import { ConversationIcon, FluencyIcon } from 'cycle-design/icons'
```

---

## 8. Paletas de produto

Além das cores padrão do shadcn (`primary`, `secondary`, `destructive`), o Cycle Design inclui 5 paletas de produto + 2 semânticas:

| Classe Tailwind | Paleta | Uso |
|---|---|---|
| `bg-brand` / `text-brand-foreground` | Brand (coral) | Identidade Fluencypass |
| `bg-class` / `text-class-foreground` | Class (azul) | Funcionalidade de aulas |
| `bg-private` / `text-private-foreground` | Private (laranja) | Aulas particulares |
| `bg-group` / `text-group-foreground` | Group (verde) | Grupos |
| `bg-impulse` / `text-impulse-foreground` | Impulse (roxo) | Promoções |
| `bg-warning` / `text-warning-foreground` | Warning (amarelo) | Alertas |
| `bg-positive` / `text-positive-foreground` | Positive (verde) | Sucesso |

```tsx
<Badge className="bg-class text-class-foreground">Aula ao vivo</Badge>
<Badge className="bg-impulse text-impulse-foreground">Promoção</Badge>
```

---

## Componentes disponíveis

### UI (shadcn/ui customizado)

| Componente | Import |
|---|---|
| Button | `import { Button } from 'cycle-design'` |
| Input | `import { Input } from 'cycle-design'` |
| Textarea | `import { Textarea } from 'cycle-design'` |
| Label | `import { Label } from 'cycle-design'` |
| Card | `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'cycle-design'` |
| Dialog | `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from 'cycle-design'` |
| Badge | `import { Badge } from 'cycle-design'` |
| Separator | `import { Separator } from 'cycle-design'` |

### Utilitários

| Utilitário | Import | Uso |
|---|---|---|
| `cn()` | `import { cn } from 'cycle-design'` | Combinar classes Tailwind condicionalmente |

---

## Adicionar mais componentes shadcn

O Cycle Design inclui os componentes mais usados. Para adicionar componentes shadcn adicionais ao seu projeto:

```bash
npx shadcn@latest add toast tabs popover tooltip select
```

Eles usarão automaticamente o tema Cycle definido no `globals.css`.

---

## Troubleshooting

### As cores não estão aplicando

Verifique se o `globals.css` do Cycle está sendo importado **antes** do Tailwind processar os estilos.

### Dark mode não funciona

Certifique-se de que o `<html>` tem o atributo `data-theme="dark"` ou a classe `.dark`.

### Fontes não carregam

Verifique se Open Sans e Fira Code estão sendo importadas corretamente (Google Fonts ou next/font).
