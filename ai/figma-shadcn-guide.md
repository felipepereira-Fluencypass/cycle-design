# Guia: Configurar Biblioteca Figma para shadcn/ui + Cycle Design

> Este documento é para o **time de design**. Explica como configurar a biblioteca de componentes no Figma para que o resultado no código (shadcn/ui) seja pixel-perfect.

---

## Visão geral

O shadcn/ui usa **CSS variables** para todas as cores e estilos. No Figma, essas variáveis devem ser representadas como **Variables** (com modos Light e Dark). Quando o designer usa uma variável no Figma, o dev sabe exatamente qual token CSS corresponde.

```
Figma Variable       →  CSS Variable      →  Componente shadcn
background (#FFFFFF)  →  --background      →  bg-background (fundo do app)
primary (#D45558)     →  --primary         →  bg-primary (botão CTA)
```

---

## Passo 1: Criar coleção de variáveis

No Figma, vá em **Variables** e crie uma coleção chamada **"shadcn"** com dois modos: **Light** e **Dark**.

### Grupo: Core

| Nome da variável | Light | Dark | Uso |
|---|---|---|---|
| `background` | #FFFFFF | #0C0E12 | Fundo geral de páginas |
| `foreground` | #181D27 | #F7F7F7 | Texto principal |
| `primary` | #D45558 | #ED6A6D | CTA, botão principal, links ativos |
| `primary-foreground` | #FFFFFF | #FFF5F5 | Texto sobre primary |
| `secondary` | #FAFAFA | #22262F | Botões secundários, áreas sutis |
| `secondary-foreground` | #181D27 | #F7F7F7 | Texto sobre secondary |
| `muted` | #F5F5F5 | #22262F | Áreas desabilitadas, placeholders |
| `muted-foreground` | #535862 | #94979C | Texto de apoio, labels secundários |
| `accent` | #FAFAFA | #22262F | Hover em menus, item selecionado |
| `accent-foreground` | #181D27 | #F7F7F7 | Texto sobre accent |
| `destructive` | #B32020 | #D42B2B | Ação perigosa (deletar, remover) |
| `destructive-foreground` | #FFFFFF | #F7F7F7 | Texto sobre destructive |

### Grupo: Surfaces

| Nome da variável | Light | Dark | Uso |
|---|---|---|---|
| `card` | #FFFFFF | #13161B | Fundo de cards, painéis elevados |
| `card-foreground` | #181D27 | #F7F7F7 | Texto dentro de cards |
| `popover` | #FFFFFF | #13161B | Fundo de dropdowns, menus, tooltips |
| `popover-foreground` | #181D27 | #F7F7F7 | Texto em popups |

### Grupo: Borders

| Nome da variável | Light | Dark | Uso |
|---|---|---|---|
| `border` | #E9EAEB | #373A41 | Bordas gerais, separadores, dividers |
| `input` | #D5D7DA | #373A41 | Bordas de inputs, selects, textareas |
| `ring` | #ED6A6D | #F57B7E | Focus ring (anel de foco ao navegar com teclado) |

### Grupo: Product (paletas Fluencypass)

| Nome da variável | Light | Dark | Uso |
|---|---|---|---|
| `brand` | #D45558 | #ED6A6D | Identidade principal Fluencypass |
| `brand-foreground` | #FFFFFF | #FFF5F5 | Texto sobre brand |
| `class` | #1A5FE0 | #2E74FF | Funcionalidade de aulas/turmas |
| `class-foreground` | #FFFFFF | #E0EBFF | Texto sobre class |
| `private` | #E56530 | #FF8041 | Aulas particulares |
| `private-foreground` | #FFFFFF | #FFEDE0 | Texto sobre private |
| `group` | #00C234 | #00E73E | Funcionalidade de grupos |
| `group-foreground` | #FFFFFF | #E0FFE9 | Texto sobre group |
| `impulse` | #7D0DD4 | #9810FA | Promoções e impulsos |
| `impulse-foreground` | #FFFFFF | #F7E0FF | Texto sobre impulse |

### Grupo: Semantic

| Nome da variável | Light | Dark | Uso |
|---|---|---|---|
| `warning` | #D48E00 | #F5A800 | Alertas e avisos |
| `warning-foreground` | #FFFFFF | #332300 | Texto sobre warning |
| `positive` | #098A5E | #0BA370 | Sucesso e confirmações |
| `positive-foreground` | #FFFFFF | #022318 | Texto sobre positive |

### Grupo: Charts

| Nome da variável | Light | Dark | Uso |
|---|---|---|---|
| `chart-1` | #D45558 | #ED6A6D | Gráficos — Brand |
| `chart-2` | #1A5FE0 | #4D8AFF | Gráficos — Class |
| `chart-3` | #FF8041 | #FF9158 | Gráficos — Private |
| `chart-4` | #00C234 | #1AFF61 | Gráficos — Group |
| `chart-5` | #9810FA | #B844FF | Gráficos — Impulse |

### Grupo: Sidebar

| Nome da variável | Light | Dark | Uso |
|---|---|---|---|
| `sidebar` | #FAFAFA | #13161B | Fundo do sidebar |
| `sidebar-foreground` | #181D27 | #F7F7F7 | Texto no sidebar |
| `sidebar-primary` | #D45558 | #ED6A6D | Item ativo no sidebar |
| `sidebar-primary-foreground` | #FFFFFF | #FFF5F5 | Texto do item ativo |
| `sidebar-accent` | #F5F5F5 | #22262F | Hover de item no sidebar |
| `sidebar-accent-foreground` | #181D27 | #F7F7F7 | Texto do hover |
| `sidebar-border` | #E9EAEB | #373A41 | Borda do sidebar |
| `sidebar-ring` | #ED6A6D | #F57B7E | Focus ring no sidebar |

---

## Passo 2: Configurar Radius

Crie variáveis de número ou use diretamente nos componentes:

| Nome | Valor | Uso |
|---|---|---|
| `radius-sm` | 4px | Badges, tags, chips |
| `radius-md` | 8px | Inputs, botões, cards pequenos |
| `radius-lg` | 12px | Cards, painéis |
| `radius-xl` | 16px | Modais, sheets, containers grandes |
| `radius-pill` | 500px | Botões pill, badges arredondados |
| `radius-circular` | 1000px | Avatares, ícones circulares |

---

## Passo 3: Configurar Shadows (Estilos de efeito)

Crie estilos de efeito (Drop Shadow) no Figma:

| Nome | Valores | Uso |
|---|---|---|
| `shadow-xs` | 0px 1px 2px rgba(10,13,18,0.05) | Badges, elementos sutis |
| `shadow-sm` | 0px 1px 2px -1px rgba(0,0,0,0.1), 0px 1px 3px rgba(10,13,18,0.1) | Cards, inputs |
| `shadow-md` | 0px 2px 4px -2px rgba(0,0,0,0.06), 0px 4px 6px -1px rgba(10,13,18,0.1) | Dropdowns |
| `shadow-lg` | 0px 2px 2px -1px rgba(0,0,0,0.04), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 12px 16px -4px rgba(10,13,18,0.08) | Popovers |
| `shadow-xl` | 0px 3px 3px -1.5px rgba(0,0,0,0.04), 0px 8px 8px -4px rgba(10,13,18,0.03), 0px 20px 24px -4px rgba(10,13,18,0.08) | Modais, dialogs |

---

## Passo 4: Tipografia

Manter os estilos de texto existentes do Cycle Design:

- **Font family**: Open Sans (body, headline, display) + Fira Code (mono)
- **Weights**: Light (300), Regular (400), Semibold (600), Bold (700), Extrabold (800)
- **Scale**: 10px, 12px, 14px, 16px, 18px, 20px, 24px, 32px, 40px, 48px, 64px, 72px

O shadcn usa classes Tailwind para tipografia (`text-sm`, `text-base`, etc.) que mapeiam para a font-family configurada no tema (`--font-sans: 'Open Sans'`).

---

## Passo 5: Configurar componentes

Para cada componente do shadcn, crie o equivalente no Figma usando as variáveis acima. Referência de quais variáveis cada componente usa:

### Button
- **Default/filled**: fundo `primary`, texto `primary-foreground`
- **Secondary**: fundo `secondary`, texto `secondary-foreground`
- **Outline**: borda `input`, texto `foreground`, fundo transparente
- **Ghost**: sem fundo, texto `foreground`, hover `accent`
- **Destructive**: fundo `destructive`, texto `destructive-foreground`
- **Link**: sem fundo, texto `primary`, underline
- **Radius**: `radius-md` (8px)
- **Sizes**: sm (32px altura), default (40px), lg (44px)

### Dialog / Modal
- **Overlay**: preto com 60% opacidade (rgba(0,0,0,0.6))
- **Container**: fundo `card`, borda `border`, radius `radius-xl` (16px), shadow `shadow-xl`
- **Title**: cor `card-foreground`, peso bold
- **Description**: cor `muted-foreground`
- **Close button**: cor `muted-foreground`, hover `foreground`

### Select / Dropdown
- **Trigger**: fundo `background`, borda `input`, radius `radius-md`
- **Conteúdo**: fundo `popover`, borda `border`, radius `radius-md`, shadow `shadow-md`
- **Item**: texto `popover-foreground`, hover fundo `accent`
- **Item selecionado**: check icon cor `foreground`
- **Placeholder**: cor `muted-foreground`

### Input / Textarea
- **Fundo**: `background`
- **Borda**: `input`, hover `ring` (focus)
- **Texto**: `foreground`
- **Placeholder**: `muted-foreground`
- **Disabled**: opacidade 50%
- **Error**: borda `destructive`
- **Radius**: `radius-md`

### Card
- **Fundo**: `card`
- **Borda**: `border`
- **Texto**: `card-foreground`
- **Radius**: `radius-lg`
- **Shadow**: `shadow-sm`

### Badge
- **Default**: fundo `primary`, texto `primary-foreground`
- **Secondary**: fundo `secondary`, texto `secondary-foreground`
- **Destructive**: fundo `destructive`, texto `destructive-foreground`
- **Outline**: borda `border`, texto `foreground`
- **Radius**: `radius-pill` (totalmente arredondado)

### Toast / Notification
- **Fundo**: `card`
- **Borda**: `border`
- **Texto**: `card-foreground`
- **Destructive**: borda `destructive`
- **Radius**: `radius-lg`
- **Shadow**: `shadow-lg`

### Tabs
- **Tab inativa**: texto `muted-foreground`
- **Tab ativa**: texto `foreground`, borda inferior `primary`
- **Conteúdo**: fundo `card` ou transparente

### Switch / Toggle
- **Off**: fundo `input`
- **On**: fundo `primary` (Brand coral)
- **Thumb**: `background` (#FFFFFF)
- **Radius**: `radius-pill`

### Checkbox
- **Unchecked**: borda `input`
- **Checked**: fundo `primary`, check icon `primary-foreground`
- **Radius**: `radius-sm` (4px)

### Tooltip
- **Fundo**: `primary` (escuro)
- **Texto**: `primary-foreground`
- **Radius**: `radius-md`

### Alert
- **Default**: fundo `card`, borda `border`
- **Destructive**: borda `destructive`, texto `destructive`
- **Radius**: `radius-lg`

### Popover
- **Fundo**: `popover`
- **Borda**: `border`
- **Radius**: `radius-lg`
- **Shadow**: `shadow-lg`

### Table
- **Header**: fundo `muted`, texto `muted-foreground`
- **Row**: fundo `background`, borda inferior `border`
- **Row hover**: fundo `accent`

### Accordion
- **Borda inferior**: `border`
- **Texto**: `foreground`
- **Ícone de chevron**: `muted-foreground`

### Separator / Divider
- **Cor**: `border`

### Skeleton
- **Fundo**: `muted`
- **Radius**: `radius-md`

### Avatar
- **Fundo (fallback)**: `muted`
- **Texto (fallback)**: `muted-foreground`
- **Radius**: `radius-circular`

### Sheet / Drawer
- **Overlay**: preto com 60% opacidade
- **Container**: fundo `card`, borda `border`
- **Radius**: `radius-xl` (top corners only)
- **Shadow**: `shadow-xl`

---

## Passo 6: Testar Dark Mode

1. Na coleção de variáveis, alterne entre os modos Light e Dark
2. Verifique que todos os componentes mudam automaticamente
3. Confirme que textos sobre fundos coloridos mantêm contraste suficiente (WCAG AA: 4.5:1 para texto normal, 3:1 para texto grande)

---

## Checklist final

- [ ] Coleção "shadcn" criada com modos Light e Dark
- [ ] Grupo Core: 12 variáveis preenchidas
- [ ] Grupo Surfaces: 4 variáveis preenchidas
- [ ] Grupo Borders: 3 variáveis preenchidas
- [ ] Grupo Product: 10 variáveis preenchidas (5 paletas × 2)
- [ ] Grupo Semantic: 4 variáveis preenchidas
- [ ] Grupo Charts: 5 variáveis preenchidas
- [ ] Grupo Sidebar: 8 variáveis preenchidas
- [ ] Estilos de radius criados (sm, md, lg, xl, pill, circular)
- [ ] Estilos de shadow criados (xs, sm, md, lg, xl)
- [ ] Estilos de texto mantidos (Open Sans, 38 estilos)
- [ ] Componentes vinculados às variáveis
- [ ] Dark mode testado em todos os componentes
- [ ] Contraste verificado (WCAG AA mínimo)

---

## Referência cruzada

| Recurso | Localização |
|---|---|
| Tema CSS completo (globals.css) | `ai/shadcn-theme-mapping.md` |
| Documentação visual (docs) | `/guidelines/figma-setup` |
| Decisão arquitetural | `ai/shadcn-architecture.md` |
| Tokens primitivos (valores) | `tokens/*.css` |
