# CLAUDE.md — Cycle Design (Design System)

> Este arquivo instrui ferramentas de IA (Claude Code, Cursor, Windsurf, Bolt) sobre como usar o Cycle Design corretamente.

---

## Sobre o projeto

Cycle Design é o Design System da **Fluencypass**, construído sobre **shadcn/ui** com tema customizado Cycle. Os componentes de UI vêm do shadcn/ui, customizados com os foundations visuais da Fluencypass (cores, tipografia, radius, shadows) via CSS variables.

- **Pacote:** `cycle-design`
- **Framework:** React + TypeScript
- **Componentes:** shadcn/ui (40+ componentes) com Radix UI primitives
- **Estilização:** Tailwind CSS v4 + CSS Custom Properties (variáveis CSS)
- **Utilitários:** `cn()` (clsx + tailwind-merge) para combinar classes
- **Fontes:** Open Sans (body, headline, display) + Fira Code (mono)
- **Ícones:** Lucide (padrão shadcn) + ícones customizados Fluencypass
- **Temas:** Light mode (padrão) + Dark mode via `.dark` ou `[data-theme="dark"]`

---

## Regras obrigatórias

### 1. Sempre use os tokens — nunca hardcode valores

```css
/* ❌ ERRADO */
.card {
  color: #181D27;
  font-size: 14px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
}

/* ✅ CORRETO */
.card {
  color: var(--text-primary);
  font-size: var(--font-size-2xs);
  padding: var(--spacing-inset-md);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}
```

### 2. Use tokens funcionais, não primitivos

Os tokens são organizados em camadas. Use sempre os **funcionais** (composições), nunca os primitivos diretamente:

```css
/* ❌ ERRADO — primitivo direto */
.text { color: var(--color-gray-light-900); }

/* ✅ CORRETO — token funcional */
.text { color: var(--text-primary); }
```

Isso garante que o dark mode funcione automaticamente.

### 3. Use componentes shadcn/ui — nunca crie do zero

O Cycle Design inclui 40+ componentes shadcn/ui já tematizados. Antes de criar qualquer componente, verifique se já existe:

```tsx
// ❌ ERRADO — criar botão do zero
const MyButton = styled.button`...`;

// ✅ CORRETO — importar do Cycle Design (que usa shadcn/ui)
import { Button } from 'cycle-design'

<Button variant="default">Salvar</Button>
<Button variant="outline">Cancelar</Button>
<Button variant="ghost">Opções</Button>
<Button variant="destructive">Excluir</Button>
<Button size="sm">Pequeno</Button>
<Button size="lg">Grande</Button>
<Button size="icon" aria-label="Buscar"><Search /></Button>
```

### 4. Ao alterar um componente, edite o arquivo fonte

Nunca duplique um componente pra fazer alterações. Sempre edite o arquivo original em `src/components/ui/` e mantenha a interface de props retrocompatível.

### 5. Use as classes de tipografia

Existem 38 estilos de tipografia prontos. Use as classes CSS:

```css
/* Categorias disponíveis */
.body-xs, .body-xs-semibold       /* Conteúdo — 10px */
.body-sm, .body-sm-semibold       /* Conteúdo — 12px */
.body-md, .body-md-semibold       /* Conteúdo — 14px */
.body-lg, .body-lg-semibold       /* Conteúdo — 16px */

.subtitle-sm, .subtitle-md, .subtitle-lg           /* Apoio — bold */
.subtitle-sm-strikethrough, ...                     /* Apoio — riscado */
.subtitle-lg-regular                                /* Apoio — regular */

.headline-sm, .headline-md, .headline-lg            /* Destaque — bold */
.headline-xl, .headline-xxl                         /* Destaque — grande */
.headline-sm-regular, ...                           /* Destaque — regular */

.display-md, .display-lg                            /* Decorativo — extrabold */
.display-md-light, .display-lg-light                /* Decorativo — light */

.button-sm, .button-md, .button-lg                  /* Botões — bold */
.button-sm-underline, ...                           /* Links — underline */
```

---

## Arquitetura

### Stack

```
┌─────────────────────────────────┐
│     Cycle Design Foundations     │ ← Figma (fonte de verdade)
│  (cores, tipografia, radius...)  │
├─────────────────────────────────┤
│       CSS Variables (tema)       │ ← globals.css
├─────────────────────────────────┤
│    shadcn/ui (40+ componentes)   │ ← src/components/ui/
├─────────────────────────────────┤
│  Radix UI (primitivos headless)  │ ← Acessibilidade, keyboard, focus
├─────────────────────────────────┤
│      Tailwind CSS v4 (engine)    │ ← Classes utilitárias
└─────────────────────────────────┘
```

### Entry points do pacote

```tsx
/* Componentes React (shadcn/ui tematizados) */
import { Button, Card, Dialog, Input, Label, Select } from 'cycle-design'

/* Utilitário cn() para combinar classes */
import { cn } from 'cycle-design'

/* Tema CSS (copiar para globals.css ou importar direto) */
import 'cycle-design/globals.css'

/* Ícones customizados Fluencypass */
import { ConversationIcon, FluencyIcon } from 'cycle-design/icons'

/* Ícones Lucide (padrão shadcn — peer dependency) */
import { Search, Plus, X } from 'lucide-react'

/* Legacy — apenas tokens, sem componentes shadcn */
import 'cycle-design/styles.css'
import 'cycle-design/tokens'
```

### Componentes disponíveis

Todos os componentes seguem a API do shadcn/ui:

| Componente | Importação |
|-----------|-----------|
| Accordion | `Accordion, AccordionItem, AccordionTrigger, AccordionContent` |
| Alert | `Alert, AlertTitle, AlertDescription` |
| Alert Dialog | `AlertDialog, AlertDialogTrigger, AlertDialogContent, ...` |
| Avatar | `Avatar, AvatarImage, AvatarFallback` |
| Badge | `Badge` (variants: default, secondary, destructive, outline) |
| Button | `Button` (variants: default, destructive, outline, secondary, ghost, link) |
| Card | `Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter` |
| Checkbox | `Checkbox` |
| Dialog | `Dialog, DialogTrigger, DialogContent, DialogHeader, ...` |
| Dropdown Menu | `DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, ...` |
| Input | `Input` |
| Label | `Label` |
| Popover | `Popover, PopoverTrigger, PopoverContent` |
| Progress | `Progress` |
| Scroll Area | `ScrollArea, ScrollBar` |
| Select | `Select, SelectTrigger, SelectContent, SelectItem, ...` |
| Separator | `Separator` |
| Skeleton | `Skeleton` |
| Switch | `Switch` |
| Tabs | `Tabs, TabsList, TabsTrigger, TabsContent` |
| Textarea | `Textarea` |
| Toggle | `Toggle` |
| Tooltip | `Tooltip, TooltipTrigger, TooltipContent, TooltipProvider` |

### Patterns (organismos)

Patterns são composições de componentes shadcn/ui para casos de uso comuns da Fluencypass. Ficam em `src/components/patterns/`:

```tsx
import { LoginForm } from 'cycle-design'
```

Patterns combinam vários componentes UI com lógica de negócio. Para criar novos patterns, componha componentes existentes de `src/components/ui/`.

---

## Tailwind CSS v4 e cn()

### Utilitário cn()

O `cn()` combina `clsx` + `tailwind-merge` para resolver conflitos de classes Tailwind:

```tsx
import { cn } from 'cycle-design'

// Merge correto de classes Tailwind
<div className={cn("p-4 bg-primary", isActive && "bg-accent", className)} />
```

### Classes Tailwind com tokens Cycle

O `globals.css` registra as variáveis CSS do Cycle Design no `@theme inline`, permitindo uso via classes Tailwind:

```tsx
// Cores shadcn padrão
<div className="bg-primary text-primary-foreground" />
<div className="bg-destructive text-destructive-foreground" />
<div className="bg-muted text-muted-foreground" />

// Paletas de produto Cycle (extras)
<div className="bg-brand text-brand-foreground" />
<div className="bg-class text-class-foreground" />
<div className="bg-private text-private-foreground" />
<div className="bg-group text-group-foreground" />
<div className="bg-impulse text-impulse-foreground" />
<div className="bg-warning text-warning-foreground" />
<div className="bg-positive text-positive-foreground" />
```

---

## Referência rápida dos tokens

### Tema CSS (globals.css)

O `globals.css` mapeia as variáveis shadcn para tokens Cycle Design. Mapeamento completo em `ai/shadcn-theme-mapping.md`.

| Variável shadcn | Token Cycle (light) | Token Cycle (dark) |
|---|---|---|
| `--primary` | `--bg-brand-solid` (#D45558) | `--bg-brand-solid` (#ED6A6D) |
| `--primary-foreground` | `--text-white` (#FFFFFF) | `--text-primary_on-brand` (#FFF5F5) |
| `--destructive` | `--bg-critical-solid` (#B32020) | `--bg-critical-solid` (#D42B2B) |
| `--background` | `--bg-primary` (#FFFFFF) | `--bg-primary` (#0C0E12) |
| `--foreground` | `--text-primary` (#181D27) | `--text-primary` (#F7F7F7) |
| `--border` | `--border-secondary` (#E9EAEB) | `--border-primary` (#373A41) |
| `--ring` | `--border-brand` (#ED6A6D) | `--border-brand` (#F57B7E) |

#### Cores (funcionais — com suporte light/dark)
| Prefixo | Uso |
|---------|-----|
| `--text-*` | Cor de texto (primary, secondary, tertiary, etc.) |
| `--border-*` | Cor de borda (primary, secondary, brand, class, etc.) |
| `--fg-*` | Foreground/ícones (primary, secondary, brand, etc.) |
| `--bg-*` | Background (primary, secondary, brand, etc.) |
| `--alpha-*` | Cores com transparência (backdrop, overlay) |
| `--gradient-*` | Gradients (gray, brand, class, private, group, impulse) |

#### Tipografia (primitivos)
| Token | Exemplo |
|-------|---------|
| `--font-family-body` | Open Sans (textos) |
| `--font-family-headline` | Open Sans (títulos) |
| `--font-family-display` | Open Sans (decorativo) |
| `--font-family-mono` | Fira Code (código) |
| `--font-size-4xs` a `--font-size-5xl` | 10px a 72px |
| `--font-weight-light` a `--font-weight-extrabold` | 300 a 800 |
| `--line-height-5xs` a `--line-height-6xl` | 12px a 90px |

#### Espaçamento
| Token | Valor | Uso |
|-------|-------|-----|
| `--spacing-quarck` | 2px | Micro ajuste |
| `--spacing-nano` | 4px | Ícones, badges |
| `--spacing-micro` | 8px | Entre elementos pequenos |
| `--spacing-mini` | 12px | Padding compacto |
| `--spacing-3xs` | 16px | Padding padrão |
| `--spacing-xs` | 24px | Gap entre cards |
| `--spacing-sm` | 32px | Seções pequenas |
| `--spacing-md` | 40px | Seções médias |
| `--spacing-lg` a `--spacing-giant` | 48px a 200px | Seções grandes |
| `--spacing-inset-2xs` a `--spacing-inset-2xl` | 4px a 40px | Padding interno |

#### Border
| Token | Valor |
|-------|-------|
| `--border-none` | 0px |
| `--border-hairline` | 1px |
| `--border-thin` | 2px |
| `--border-thick` | 4px |
| `--border-heavy` | 8px |

#### Border Radius
| Token | Valor |
|-------|-------|
| `--radius-none` | 0px |
| `--radius-xs` | 4px |
| `--radius-sm` | 8px |
| `--radius-md` | 12px |
| `--radius-lg` | 16px |
| `--radius-xl` | 20px |
| `--radius-xxl` | 24px |
| `--radius-pill` | 500px |
| `--radius-circular` | 1000px |

#### Shadows
| Token | Uso |
|-------|-----|
| `--shadow-xs` | Sutil (badges) |
| `--shadow-sm` | Leve (cards, inputs) |
| `--shadow-md` | Médio (dropdowns) |
| `--shadow-lg` | Alto (popovers) |
| `--shadow-xl` | Forte (modais) |
| `--shadow-2xl` | Máximo (overlays) |
| `--shadow-3xl` | Ultra destaque |

#### Opacity
| Token | Valor |
|-------|-------|
| `--opacity-transparent` | 0 |
| `--opacity-semitransparent` | 0.08 |
| `--opacity-light` | 0.16 |
| `--opacity-medium` | 0.32 |
| `--opacity-intense` | 0.64 |
| `--opacity-semiopaque` | 0.72 |
| `--opacity-opaque` | 1 |

#### Grid (breakpoints)
| Token | Container | Colunas |
|-------|-----------|---------|
| `--breakpoint-sm` | 320px | 4 |
| `--breakpoint-md` | 672px | 8 |
| `--breakpoint-lg` | 1056px | 16 |
| `--breakpoint-xl` | 1312px | 16 |
| `--breakpoint-max` | 1584px | 16 |

---

## Dark mode

O tema suporta dois mecanismos para ativar dark mode:

```html
<!-- Método 1: data-theme attribute (Cycle Design) -->
<html data-theme="dark">

<!-- Método 2: .dark class (shadcn convention) -->
<html class="dark">

<!-- Ambos funcionam. Light é o padrão. -->
<html data-theme="light">
<html> <!-- sem classe = light -->
```

Também suporta `prefers-color-scheme` automaticamente. Ao usar tokens funcionais (não primitivos), o dark mode funciona sem nenhuma alteração no código dos componentes.

```tsx
// Toggle theme
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
```

---

## Paletas de cores da marca

O Cycle Design tem 5 paletas de marca além das neutras e semânticas:

| Paleta | Uso |
|--------|-----|
| **Brand** | Identidade da marca (vermelho/coral) |
| **Class** | Funcionalidade "Class" (azul) |
| **Private** | Funcionalidade "Private" (laranja) |
| **Group** | Funcionalidade "Group" (verde) |
| **Impulse** | Funcionalidade "Impulse" (roxo) |

Cada paleta tem tokens de text, border, foreground e background com variações primary, secondary, hover, solid, section. Também disponíveis como classes Tailwind: `bg-brand`, `text-class-foreground`, etc.

---

## Acessibilidade — regras obrigatórias

Todo componente do Cycle Design deve seguir estas regras. Elas não são sugestões — são parte da definição de pronto. A guideline completa está em `/guidelines/accessibility` na documentação.

### A1. Nunca remova o focus indicator

`outline: none` ou `outline: 0` sem um substituto visual é proibido. Se `overflow: hidden` bloquear o outline, use `box-shadow` duplo:

```css
/* ❌ Proibido */
.button:focus-visible { outline: none; }

/* ✅ Correto — box-shadow como substituto quando overflow: hidden */
.button:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 var(--focus-ring-offset) var(--bg-primary),
    0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--focus-ring-color);
}
```

Sempre use `:focus-visible`, nunca `:focus` genérico.

### A2. Tokens decorativos nunca são informativos

Tokens com ratio de contraste abaixo de 3:1 são proibidos em qualquer texto ou ícone que comunique informação:

```css
/* ❌ Proibido — ratio 2.4:1, invisível para baixa visão */
.label { color: var(--text-group-primary); }
.icon  { color: var(--fg-quaternary); }

/* ✅ Correto */
.label { color: var(--text-group-secondary); } /* 6.1:1 */
.icon  { color: var(--fg-tertiary); }          /* ~5.9:1 */
```

Tokens com badge `restrito` (ratio 3:1–4.4:1) só podem ser usados nas condições documentadas na aba Colors. Adicione um comentário no código indicando que a condição é cumprida.

### A3. Todo botão icon-only exige aria-label

Nenhum `<button>` pode ter apenas um SVG ou ícone como filho sem texto acessível:

```tsx
/* ❌ Proibido */
<Button size="icon"><X /></Button>

/* ✅ Correto */
<Button size="icon" aria-label="Fechar"><X /></Button>
```

### A4. Feedback de ação exige aria-live

Qualquer mudança de estado visível (copiado, salvo, carregando→concluído) precisa de uma live region para leitores de tela:

```tsx
/* ✅ Live region sempre presente no DOM — nunca renderizar condicionalmente */
<span aria-live="polite" aria-atomic="true" className="sr-only">
  {announcement}
</span>
```

### A5. Elementos interativos: HTML nativo primeiro

Use `<button>` para ações e `<a>` para navegação. Não use `<div>`, `<span>` ou `<li>` com `onClick`. Os componentes shadcn/ui já usam elementos semânticos corretos. Para navegação com estilo de botão, use `asChild`:

```tsx
/* ❌ Proibido */
<div onClick={handleAction} className="btn">Salvar</div>

/* ✅ Correto — componente shadcn */
<Button onClick={handleAction}>Salvar</Button>

/* ✅ Correto — asChild para navegação */
<Button asChild>
  <a href="/page">Ir para página</a>
</Button>
```

### A6. Tokens de cor restrita exigem comentário de contexto

Ao usar token com badge `restrito`, adicione um comentário inline indicando que a condição de uso é cumprida:

```css
/* ✅ Correto — uso explicitamente justificado */
.sectionTitle {
  /* --text-brand-primary: 4.0:1 — uso aceito: texto grande (24px bold) */
  color: var(--text-brand-primary);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}
```

### A7. Ícones exigem decorative ou aria-label

Ícones Lucide em contexto informativo precisam de `aria-label`. Ícones decorativos (ao lado de texto visível) devem usar `aria-hidden`:

```tsx
/* ❌ Proibido — ícone sem contexto acessível */
<Button size="icon"><Search /></Button>

/* ✅ Decorativo — acompanha texto visível */
<Button><Search aria-hidden="true" />Buscar</Button>

/* ✅ Informativo — único indicador da ação */
<Button size="icon" aria-label="Buscar"><Search aria-hidden="true" /></Button>
```

Para ícones customizados Fluencypass, use as props `decorative` ou `aria-label`:

```tsx
<SearchIcon size="sm" decorative />
<SearchIcon size="sm" aria-label="Buscar" />
```

### A8. Tipografia: apenas a escala oficial

Nunca use `font-size` em `px` hardcoded fora da escala do Cycle Design. Use sempre `var(--font-size-*)`:

```css
/* ❌ Proibido — px hardcoded fora da escala */
.caption { font-size: 13px; }

/* ✅ Correto — token da escala oficial */
.caption { font-size: var(--font-size-3xs); } /* 12px / 0.75rem */
```

Valores como 11px, 12.5px, 13px, 13.5px, 15px não existem na escala. Se um tamanho intermediário for necessário, solicite como nova entrada no Figma antes de usar.

### A9. Respeitar `prefers-reduced-motion`

Animações e transições devem ser desabilitadas para usuários que preferem movimento reduzido (WCAG 2.1, critério 2.3.3). O reset global já inclui a media query, mas componentes com animação infinita devem ter fallback explícito:

```css
/* ❌ Proibido — animação infinita sem fallback */
.spinner { animation: spin 0.75s linear infinite; }

/* ✅ Correto — fallback para reduced-motion */
.spinner { animation: spin 0.75s var(--ease-linear) infinite; }
@media (prefers-reduced-motion: reduce) {
  .spinner { animation: none; }
}
```

### A10. Use tokens de motion — nunca hardcode durações ou easings

Transições e animações devem usar os tokens de motion, nunca valores literais:

```css
/* ❌ Proibido — valores hardcoded */
.card { transition: background-color 0.2s ease; }

/* ✅ Correto — tokens de motion */
.card { transition: background-color var(--transition-normal); }
```

Tokens disponíveis:

| Token | Valor | Uso |
|-------|-------|-----|
| `--duration-instant` | 0ms | Sem animação (disabled, reduced-motion) |
| `--duration-fast` | 100ms | Micro: hover, press, toggle |
| `--duration-normal` | 200ms | Padrão: transições de estado |
| `--duration-slow` | 300ms | Entrada/saída de elementos |
| `--duration-slower` | 500ms | Overlays, modais, page transitions |
| `--ease-default` | cubic-bezier(0.4, 0, 0.2, 1) | Standard |
| `--ease-in` | cubic-bezier(0.4, 0, 1, 1) | Saída de tela |
| `--ease-out` | cubic-bezier(0, 0, 0.2, 1) | Entrada na tela |
| `--ease-linear` | linear | Progresso, spinners |
| `--transition-fast` | 100ms ease-default | Atalho para micro-interações |
| `--transition-normal` | 200ms ease-default | Atalho para transições padrão |
| `--transition-slow` | 300ms ease-out | Atalho para entradas/saídas |

### A11. Use tokens de z-index para componentes overlay

Nunca use valores numéricos de z-index diretamente. Use os tokens da escala:

```css
/* ❌ Proibido */
.modal { z-index: 9999; }

/* ✅ Correto */
.modal { z-index: var(--z-modal); }
```

| Token | Valor | Uso |
|-------|-------|-----|
| `--z-base` | 0 | Conteúdo padrão |
| `--z-dropdown` | 100 | Dropdown menus, selects |
| `--z-sticky` | 200 | Headers fixos, barras de navegação |
| `--z-overlay` | 300 | Backdrop de modais/sheets |
| `--z-modal` | 400 | Dialog, Sheet, Drawer |
| `--z-popover` | 500 | Popover, Tooltip |
| `--z-toast` | 600 | Toast notifications |
| `--z-tooltip` | 700 | Tooltip (acima de toast) |

---

## Ao criar ou modificar componentes

### Componentes UI (src/components/ui/)

Estes são componentes shadcn/ui. Ao modificar:

1. Mantenha a API compatível com shadcn/ui (para facilitar atualizações futuras)
2. Use `cn()` de `src/lib/utils` para combinar classNames
3. Use Tailwind CSS v4 classes + variáveis CSS do tema para estilização
4. Mantenha suporte a dark mode via variáveis CSS (automático com o tema)
5. Use `forwardRef` conforme o padrão shadcn
6. Componentes overlay devem usar tokens de z-index (`--z-modal`, `--z-toast`, etc.)
7. Transições devem usar tokens de motion (`--transition-fast`, `--transition-normal`, etc.)

### Patterns (src/components/patterns/)

Patterns são organismos que combinam componentes UI para casos de uso Fluencypass:

1. Use TypeScript com props tipadas
2. Componha usando componentes de `src/components/ui/` — nunca crie UI primitiva
3. Exporte o pattern no `src/index.ts`
4. Documente as props com JSDoc
5. Siga a estrutura de pastas: `src/components/patterns/nome-do-pattern.tsx`

### Para ambos

1. Exponha `data-*` attributes para estados quando relevante (variant, size, disabled, state)
2. Passe o checklist de acessibilidade em `/guidelines/accessibility` antes de marcar como stable
3. **OBRIGATÓRIO:** Ao criar, alterar ou remover qualquer componente ou token, atualize `ai/figma-mapping.md` com o mapeamento Figma → Código correspondente. Esta regra não tem exceções — a IA depende deste arquivo para gerar código correto a partir do Figma.
4. **OBRIGATÓRIO:** Todo componente deve ter testes que cubram as 4 camadas do checklist de testes (ver abaixo).

---

## Checklist de testes obrigatório por componente

Todo componente do Cycle Design **deve** ter testes cobrindo estas 4 camadas.

### Camada 1 — Renderização e props
- [ ] Renderiza sem erros com props padrão
- [ ] Aplica todas as variantes via className (shadcn usa CVA)
- [ ] Aplica className customizada via `cn()` sem sobrescrever as internas
- [ ] Forward ref para o elemento DOM correto
- [ ] Passthrough de atributos nativos HTML

### Camada 2 — Interação e comportamento
- [ ] Responde a click/onChange corretamente
- [ ] Funciona com teclado (Enter, Space, Tab)
- [ ] Recebe foco via Tab
- [ ] Não recebe foco quando disabled
- [ ] Não dispara eventos quando disabled
- [ ] asChild renderiza como elemento filho (se aplicável — Button, etc.)

### Camada 3 — Acessibilidade
- [ ] Role semântico correto (button, checkbox, switch, status, alert)
- [ ] aria-label presente quando obrigatório (icon-only)
- [ ] aria-disabled quando disabled
- [ ] aria-invalid quando error (se aplicável)
- [ ] aria-hidden em elementos decorativos

### Camada 4 — Data attributes
- [ ] Expõe data-state (Radix UI — checked/unchecked, open/closed, etc.)
- [ ] Expõe data-disabled quando disabled (Radix UI)
- [ ] Expõe data-variant, data-size se customizado

### Camada extra — Tokens (em `tests/token-contract.test.ts`)
- [ ] Valores de spacing tokens conferem com Figma
- [ ] Valores de border/radius tokens conferem com Figma
- [ ] Valores de motion tokens conferem com especificação
- [ ] Valores de z-index tokens conferem com especificação

**Regra:** Se qualquer camada falhar, o componente **não pode** ser publicado.

---

## Manutenção obrigatória da documentação AI

Sempre que houver alteração no design system (componente novo, token novo, alteração de API, remoção), os seguintes arquivos **devem** ser atualizados na mesma PR:

| Arquivo | Quando atualizar |
|---|---|
| `ai/figma-mapping.md` | Qualquer componente ou token novo/alterado/removido |
| `ai/tokens/*.md` | Token novo ou alterado |
| `CLAUDE.md` | Nova regra de uso, novo token category, novo componente |
| `llms.txt` | Novo arquivo em `ai/` |
| `llms-full.txt` | Qualquer alteração em arquivos `ai/` (regenerar) |

Não é aceitável fazer merge de uma PR que adiciona componente/token sem atualizar a documentação AI correspondente.

---

## Documentação AI-ready

O Cycle Design disponibiliza documentação estruturada para LLMs:

- **`llms.txt`** — Índice navegável no formato padrão llms.txt (links para docs detalhados)
- **`llms-full.txt`** — Conteúdo completo inline (para consumo direto por LLMs)
- **`ai/`** — Pasta com documentação Markdown detalhada de cada categoria de token
- **`mcp/`** — MCP server para integração com assistentes de IA (Claude Code, Cursor, VS Code)

Ao responder perguntas sobre o Design System, consulte os arquivos em `ai/` para informações completas sobre tokens, instalação, dark mode e decisões de design.

### MCP Server — Setup

```bash
# Claude Code
claude mcp add cycle-design -- node /path/to/cycle-design/mcp/dist/index.js

# VS Code / Cursor — adicionar em .vscode/mcp.json ou .cursor/mcp.json
```

Tools disponíveis: `list_topics`, `get_doc`, `search_docs`, `get_token_value`, `get_all_docs`. Veja `ai/mcp.md` para documentação completa.

---

## Fonte de verdade

- **Design:** Figma → Cycle * Design System
- **Tokens:** Variáveis do Figma (exportadas em JSON)
- **Componentes:** shadcn/ui com tema Cycle aplicado via `globals.css`
- **Prioridade em caso de conflito:** Sempre seguir os primitives do Figma
