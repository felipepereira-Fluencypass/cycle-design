# Mapeamento: shadcn/ui CSS Variables → Cycle Design Foundations

> Este arquivo documenta como customizar as variáveis CSS do shadcn/ui usando os valores dos foundations do Cycle Design.
>
> **Abordagem:** Substituir os valores default do shadcn (OKLCH) pelos valores equivalentes do Cycle Design (hex/rgba). O shadcn aceita qualquer formato de cor válido em CSS.

---

## globals.css — Customizado com Cycle Design

Copie este bloco no `globals.css` do projeto que usa shadcn. Ele substitui **todas** as variáveis do shadcn pelos valores do Cycle.

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

/*
 * ============================================================
 * CYCLE DESIGN × SHADCN/UI — Theme Variables
 * ============================================================
 * Fonte de verdade: Cycle Design Foundations (Figma)
 * Mapeamento: ai/shadcn-theme-mapping.md
 * ============================================================
 */

:root {
  /* ──────────────────────────────────────
   * Radius
   * shadcn default: 0.625rem
   * ────────────────────────────────────── */
  --radius: 8px; /* Cycle: --radius-sm */

  /* ──────────────────────────────────────
   * Core: Background & Foreground
   * Superfícies principais do app
   * ────────────────────────────────────── */
  --background: #FFFFFF;           /* Cycle: --bg-primary */
  --foreground: #181D27;           /* Cycle: --text-primary */

  /* ──────────────────────────────────────
   * Card
   * Containers elevados (cards, panels)
   * ────────────────────────────────────── */
  --card: #FFFFFF;                 /* Cycle: --bg-primary */
  --card-foreground: #181D27;      /* Cycle: --text-primary */

  /* ──────────────────────────────────────
   * Popover
   * Dropdowns, menus flutuantes
   * ────────────────────────────────────── */
  --popover: #FFFFFF;              /* Cycle: --bg-primary */
  --popover-foreground: #181D27;   /* Cycle: --text-primary */

  /* ──────────────────────────────────────
   * Primary
   * CTAs, botões principais → Brand (vermelho/coral)
   * ────────────────────────────────────── */
  --primary: #D45558;              /* Cycle: --bg-brand-solid */
  --primary-foreground: #FFFFFF;   /* Cycle: --text-white */

  /* ──────────────────────────────────────
   * Secondary
   * Botões secundários, ações de menor destaque
   * ────────────────────────────────────── */
  --secondary: #FAFAFA;            /* Cycle: --bg-secondary */
  --secondary-foreground: #181D27; /* Cycle: --text-primary */

  /* ──────────────────────────────────────
   * Muted
   * Textos de apoio, áreas desabilitadas
   * ────────────────────────────────────── */
  --muted: #F5F5F5;               /* Cycle: --bg-tertiary */
  --muted-foreground: #535862;     /* Cycle: --text-tertiary */

  /* ──────────────────────────────────────
   * Accent
   * Hover em menus, itens selecionados
   * ────────────────────────────────────── */
  --accent: #FAFAFA;               /* Cycle: --bg-primary_hover */
  --accent-foreground: #181D27;    /* Cycle: --text-primary */

  /* ──────────────────────────────────────
   * Destructive
   * Ações perigosas (deletar, remover)
   * ────────────────────────────────────── */
  --destructive: #B32020;          /* Cycle: --bg-critical-solid */
  --destructive-foreground: #FFFFFF; /* Cycle: --text-white */

  /* ──────────────────────────────────────
   * Border, Input, Ring
   * ────────────────────────────────────── */
  --border: #E9EAEB;              /* Cycle: --border-secondary */
  --input: #D5D7DA;               /* Cycle: --border-primary */
  --ring: #ED6A6D;                /* Cycle: --border-brand (focus ring) */

  /* ──────────────────────────────────────
   * Chart (cores para gráficos)
   * Usa as 5 paletas de marca do Cycle
   * ────────────────────────────────────── */
  --chart-1: #D45558;             /* Cycle: Brand 600 */
  --chart-2: #1A5FE0;             /* Cycle: Class 600 */
  --chart-3: #FF8041;             /* Cycle: Private 500 */
  --chart-4: #00C234;             /* Cycle: Group 600 */
  --chart-5: #9810FA;             /* Cycle: Impulse 500 */

  /* ──────────────────────────────────────
   * Sidebar
   * Navegação lateral
   * ────────────────────────────────────── */
  --sidebar: #FAFAFA;             /* Cycle: --bg-secondary */
  --sidebar-foreground: #181D27;  /* Cycle: --text-primary */
  --sidebar-primary: #D45558;     /* Cycle: --bg-brand-solid */
  --sidebar-primary-foreground: #FFFFFF; /* Cycle: --text-white */
  --sidebar-accent: #F5F5F5;      /* Cycle: --bg-tertiary */
  --sidebar-accent-foreground: #181D27; /* Cycle: --text-primary */
  --sidebar-border: #E9EAEB;      /* Cycle: --border-secondary */
  --sidebar-ring: #ED6A6D;        /* Cycle: --border-brand */
}

/* ──────────────────────────────────────
 * DARK MODE
 *
 * O Cycle usa [data-theme="dark"].
 * O shadcn usa .dark.
 * Defina ambos para compatibilidade:
 * ────────────────────────────────────── */
.dark,
[data-theme="dark"] {
  --background: #0C0E12;          /* Cycle: --bg-primary */
  --foreground: #F7F7F7;          /* Cycle: --text-primary */

  --card: #13161B;                /* Cycle: --bg-primary_alt */
  --card-foreground: #F7F7F7;     /* Cycle: --text-primary */

  --popover: #13161B;             /* Cycle: --bg-primary_alt */
  --popover-foreground: #F7F7F7;  /* Cycle: --text-primary */

  --primary: #ED6A6D;             /* Cycle: --bg-brand-solid */
  --primary-foreground: #FFF5F5;  /* Cycle: --text-primary_on-brand */

  --secondary: #22262F;           /* Cycle: --bg-tertiary */
  --secondary-foreground: #F7F7F7; /* Cycle: --text-primary */

  --muted: #22262F;               /* Cycle: --bg-tertiary */
  --muted-foreground: #94979C;    /* Cycle: --text-tertiary */

  --accent: #22262F;              /* Cycle: --bg-primary_hover */
  --accent-foreground: #F7F7F7;   /* Cycle: --text-primary */

  --destructive: #D42B2B;         /* Cycle: --bg-critical-solid */
  --destructive-foreground: #F7F7F7; /* Cycle: --text-primary */

  --border: #373A41;              /* Cycle: --border-primary */
  --input: #373A41;               /* Cycle: --border-primary */
  --ring: #F57B7E;                /* Cycle: --border-brand */

  --chart-1: #ED6A6D;             /* Cycle: Brand 500 */
  --chart-2: #4D8AFF;             /* Cycle: Class 400 */
  --chart-3: #FF9158;             /* Cycle: Private 400 */
  --chart-4: #1AFF61;             /* Cycle: Group 400 */
  --chart-5: #B844FF;             /* Cycle: Impulse 400 */

  --sidebar: #13161B;             /* Cycle: --bg-secondary */
  --sidebar-foreground: #F7F7F7;  /* Cycle: --text-primary */
  --sidebar-primary: #ED6A6D;     /* Cycle: --bg-brand-solid */
  --sidebar-primary-foreground: #FFF5F5; /* Cycle: --text-primary_on-brand */
  --sidebar-accent: #22262F;      /* Cycle: --bg-tertiary */
  --sidebar-accent-foreground: #F7F7F7;  /* Cycle: --text-primary */
  --sidebar-border: #373A41;      /* Cycle: --border-primary */
  --sidebar-ring: #F57B7E;        /* Cycle: --border-brand */
}

/* ──────────────────────────────────────
 * @theme inline — Registro no Tailwind v4
 *
 * Mapeia as CSS vars para classes utilitárias
 * ex: bg-primary, text-muted-foreground, etc.
 * ────────────────────────────────────── */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius));
  --radius-lg: calc(var(--radius) + 4px);
  --radius-xl: calc(var(--radius) + 8px);
}
```

---

## Tabela de mapeamento completo

### Cores — Light Mode

| Variável shadcn | Valor Cycle | Token Cycle original | Uso |
|---|---|---|---|
| `--background` | `#FFFFFF` | `--bg-primary` | Fundo geral do app |
| `--foreground` | `#181D27` | `--text-primary` | Texto principal |
| `--card` | `#FFFFFF` | `--bg-primary` | Fundo de cards |
| `--card-foreground` | `#181D27` | `--text-primary` | Texto em cards |
| `--popover` | `#FFFFFF` | `--bg-primary` | Fundo de dropdowns/menus |
| `--popover-foreground` | `#181D27` | `--text-primary` | Texto em dropdowns |
| `--primary` | `#D45558` | `--bg-brand-solid` | CTA, botão principal |
| `--primary-foreground` | `#FFFFFF` | `--text-white` | Texto sobre primary |
| `--secondary` | `#FAFAFA` | `--bg-secondary` | Botões secundários |
| `--secondary-foreground` | `#181D27` | `--text-primary` | Texto sobre secondary |
| `--muted` | `#F5F5F5` | `--bg-tertiary` | Áreas desabilitadas |
| `--muted-foreground` | `#535862` | `--text-tertiary` | Texto de apoio |
| `--accent` | `#FAFAFA` | `--bg-primary_hover` | Hover em menus |
| `--accent-foreground` | `#181D27` | `--text-primary` | Texto sobre accent |
| `--destructive` | `#B32020` | `--bg-critical-solid` | Ações perigosas |
| `--destructive-foreground` | `#FFFFFF` | `--text-white` | Texto sobre destructive |
| `--border` | `#E9EAEB` | `--border-secondary` | Bordas gerais |
| `--input` | `#D5D7DA` | `--border-primary` | Bordas de inputs |
| `--ring` | `#ED6A6D` | `--border-brand` | Focus ring |

### Cores — Dark Mode

| Variável shadcn | Valor Cycle | Token Cycle original |
|---|---|---|
| `--background` | `#0C0E12` | `--bg-primary` |
| `--foreground` | `#F7F7F7` | `--text-primary` |
| `--card` | `#13161B` | `--bg-primary_alt` |
| `--card-foreground` | `#F7F7F7` | `--text-primary` |
| `--popover` | `#13161B` | `--bg-primary_alt` |
| `--popover-foreground` | `#F7F7F7` | `--text-primary` |
| `--primary` | `#ED6A6D` | `--bg-brand-solid` |
| `--primary-foreground` | `#FFF5F5` | `--text-primary_on-brand` |
| `--secondary` | `#22262F` | `--bg-tertiary` |
| `--secondary-foreground` | `#F7F7F7` | `--text-primary` |
| `--muted` | `#22262F` | `--bg-tertiary` |
| `--muted-foreground` | `#94979C` | `--text-tertiary` |
| `--accent` | `#22262F` | `--bg-primary_hover` |
| `--accent-foreground` | `#F7F7F7` | `--text-primary` |
| `--destructive` | `#D42B2B` | `--bg-critical-solid` |
| `--destructive-foreground` | `#F7F7F7` | `--text-primary` |
| `--border` | `#373A41` | `--border-primary` |
| `--input` | `#373A41` | `--border-primary` |
| `--ring` | `#F57B7E` | `--border-brand` |

### Charts → Paletas Cycle

| Variável | Light | Dark | Paleta |
|---|---|---|---|
| `--chart-1` | `#D45558` | `#ED6A6D` | Brand |
| `--chart-2` | `#1A5FE0` | `#4D8AFF` | Class |
| `--chart-3` | `#FF8041` | `#FF9158` | Private |
| `--chart-4` | `#00C234` | `#1AFF61` | Group |
| `--chart-5` | `#9810FA` | `#B844FF` | Impulse |

### Radius

| Variável shadcn | Cálculo | Valor final | Token Cycle equivalente |
|---|---|---|---|
| `--radius` (base) | — | `8px` | `--radius-sm` |
| `--radius-sm` | `radius - 4px` | `4px` | `--radius-xs` |
| `--radius-md` | `radius` | `8px` | `--radius-sm` |
| `--radius-lg` | `radius + 4px` | `12px` | `--radius-md` |
| `--radius-xl` | `radius + 8px` | `16px` | `--radius-lg` |

> **Nota:** O shadcn usa um sistema de radius relativo a um base `--radius`. Com base 8px, os valores resultantes coincidem com os tokens do Cycle.

---

## Variáveis extras recomendadas

O shadcn cobre o básico, mas projetos Fluencypass usam 5 paletas de marca. Para componentes customizados que precisam de cores além do `primary`/`destructive`, adicione estas variáveis extras:

```css
:root {
  /* ── Paletas de produto Fluencypass ── */
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

  /* ── Semânticas extras ── */
  --warning: #D48E00;
  --warning-foreground: #FFFFFF;

  --positive: #098A5E;
  --positive-foreground: #FFFFFF;
}

.dark,
[data-theme="dark"] {
  --brand: #ED6A6D;
  --brand-foreground: #FFF5F5;

  --class: #2E74FF;
  --class-foreground: #E0EBFF;

  --private: #FF8041;
  --private-foreground: #FFEDE0;

  --group: #00E73E;
  --group-foreground: #E0FFE9;

  --impulse: #9810FA;
  --impulse-foreground: #F7E0FF;

  --warning: #F5A800;
  --warning-foreground: #332300;

  --positive: #0BA370;
  --positive-foreground: #022318;
}
```

E registre no `@theme inline`:

```css
@theme inline {
  /* ... variáveis shadcn padrão ... */

  --color-brand: var(--brand);
  --color-brand-foreground: var(--brand-foreground);
  --color-class: var(--class);
  --color-class-foreground: var(--class-foreground);
  --color-private: var(--private);
  --color-private-foreground: var(--private-foreground);
  --color-group: var(--group);
  --color-group-foreground: var(--group-foreground);
  --color-impulse: var(--impulse);
  --color-impulse-foreground: var(--impulse-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-positive: var(--positive);
  --color-positive-foreground: var(--positive-foreground);
}
```

Com isso, as classes Tailwind `bg-brand`, `text-class-foreground`, `border-impulse`, etc. ficam disponíveis automaticamente.

---

## Dark mode — Compatibilidade

O Cycle Design usa `[data-theme="dark"]`. O shadcn usa `.dark`. Para compatibilidade total, duas opções:

### Opção 1: Definir ambos os seletores (recomendado)

```css
.dark,
[data-theme="dark"] {
  /* todas as variáveis dark */
}
```

### Opção 2: Alterar o seletor do Tailwind v4

```css
/* No topo do globals.css */
@custom-variant dark (&:is([data-theme="dark"] *));
```

Isso faz o Tailwind usar `data-theme` ao invés de `.dark`, alinhando com a convenção do Cycle.

---

## Tipografia

O shadcn não define variáveis de tipografia — usa classes Tailwind (`text-sm`, `font-bold`, etc.). Para usar as fontes do Cycle, configure no `tailwind.config` ou `@theme`:

```css
@theme inline {
  --font-sans: 'Open Sans', sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```

As 38 classes tipográficas do Cycle (`.body-md`, `.headline-lg`, etc.) podem coexistir com as classes Tailwind sem conflito.

---

## Checklist de setup

- [ ] Instalar shadcn/ui com `npx shadcn@latest init`
- [ ] Substituir `globals.css` com o bloco acima
- [ ] Importar fontes Open Sans e Fira Code
- [ ] Configurar dark mode trigger (`[data-theme]` ou `.dark`)
- [ ] Adicionar paletas extras (brand, class, private, group, impulse) se necessário
- [ ] Testar dark mode em todos os componentes
- [ ] Validar contraste de cores (WCAG AA mínimo)
