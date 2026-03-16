# Cycle Design — Figma → Code Mapping

> Este arquivo é a referência de tradução entre nomes do Figma e código.
> Deve ser atualizado sempre que um novo componente ou token for criado.

## Regra de Tradução

O Figma usa `/` como separador de hierarquia. No código, traduz-se para `-` (CSS) ou camelCase (props).

```
Figma: headline/lg        → CSS: .headline-lg
Figma: text/primary       → CSS: var(--text-primary)
Figma: bg/brand-solid     → CSS: var(--bg-brand-solid)
Figma: spacing/micro      → CSS: var(--spacing-micro)
```

---

## Typography

| Figma Style | CSS Class | Size | Weight |
|---|---|---|---|
| body/xs | `.body-xs` | 10px | Regular |
| body/xs-semibold | `.body-xs-semibold` | 10px | Semibold |
| body/sm | `.body-sm` | 12px | Regular |
| body/sm-semibold | `.body-sm-semibold` | 12px | Semibold |
| body/md | `.body-md` | 14px | Regular |
| body/md-semibold | `.body-md-semibold` | 14px | Semibold |
| body/lg | `.body-lg` | 16px | Regular |
| body/lg-semibold | `.body-lg-semibold` | 16px | Semibold |
| subtitle/sm | `.subtitle-sm` | 14px | Bold |
| subtitle/sm-strikethrough | `.subtitle-sm-strikethrough` | 14px | Regular + line-through |
| subtitle/md | `.subtitle-md` | 16px | Bold |
| subtitle/md-strikethrough | `.subtitle-md-strikethrough` | 16px | Regular + line-through |
| subtitle/lg | `.subtitle-lg` | 18px | Bold |
| subtitle/lg-strikethrough | `.subtitle-lg-strikethrough` | 18px | Regular + line-through |
| subtitle/lg-regular | `.subtitle-lg-regular` | 18px | Regular |
| headline/sm | `.headline-sm` | 20px | Bold |
| headline/sm-regular | `.headline-sm-regular` | 20px | Regular |
| headline/md | `.headline-md` | 24px | Bold |
| headline/md-regular | `.headline-md-regular` | 24px | Regular |
| headline/lg | `.headline-lg` | 32px | Bold |
| headline/lg-regular | `.headline-lg-regular` | 32px | Regular |
| headline/xl | `.headline-xl` | 40px | Bold |
| headline/xl-regular | `.headline-xl-regular` | 40px | Regular |
| headline/xxl | `.headline-xxl` | 48px | Bold |
| headline/xxl-regular | `.headline-xxl-regular` | 48px | Regular |
| display/md | `.display-md` | 64px | Extrabold |
| display/md-light | `.display-md-light` | 64px | Light |
| display/lg | `.display-lg` | 72px | Extrabold |
| display/lg-light | `.display-lg-light` | 72px | Light |
| button/sm | `.button-sm` | 12px | Bold |
| button/sm-underline | `.button-sm-underline` | 12px | Bold + underline |
| button/md | `.button-md` | 14px | Bold |
| button/md-underline | `.button-md-underline` | 14px | Bold + underline |
| button/lg | `.button-lg` | 16px | Bold |
| button/lg-underline | `.button-lg-underline` | 16px | Bold + underline |

---

## Colors — Text

| Figma Variable | CSS Token | Light | Dark |
|---|---|---|---|
| text/primary | `var(--text-primary)` | #181D27 | #F0F0F1 |
| text/secondary | `var(--text-secondary)` | #414651 | #CECFD2 |
| text/tertiary | `var(--text-tertiary)` | #535862 | #94969C |
| text/quaternary | `var(--text-quaternary)` | #717680 | #85888E |
| text/disabled | `var(--text-disabled)` | #717680 | #85888E |
| text/placeholder | `var(--text-placeholder)` | #717680 | #85888E |
| text/white | `var(--text-white)` | #FFFFFF | #FFFFFF |
| text/brand-primary | `var(--text-brand-primary)` | #D64444 | #FF9B9C |
| text/class-primary | `var(--text-class-primary)` | #2E70E8 | #84ADFF |
| text/private-primary | `var(--text-private-primary)` | #D07920 | #F5B872 |
| text/group-primary | `var(--text-group-primary)` | #26A148 | #66D188 |
| text/impulse-primary | `var(--text-impulse-primary)` | #7B3FDB | #BFA0F2 |

---

## Colors — Background

| Figma Variable | CSS Token | Uso |
|---|---|---|
| bg/primary | `var(--bg-primary)` | Background principal da página |
| bg/secondary | `var(--bg-secondary)` | Cards, painéis |
| bg/tertiary | `var(--bg-tertiary)` | Inputs, áreas recuadas |
| bg/disabled | `var(--bg-disabled)` | Elementos desabilitados |
| bg/brand-solid | `var(--bg-brand-solid)` | Botões primários |
| bg/brand-solid_hover | `var(--bg-brand-solid_hover)` | Hover de botões primários |
| bg/brand-primary | `var(--bg-brand-primary)` | Background sutil com tom de marca |
| bg/class-solid | `var(--bg-class-solid)` | Botões de "Class" |
| bg/private-solid | `var(--bg-private-solid)` | Botões de "Private" |
| bg/group-solid | `var(--bg-group-solid)` | Botões de "Group" |
| bg/impulse-solid | `var(--bg-impulse-solid)` | Botões de "Impulse" |

---

## Colors — Border

| Figma Variable | CSS Token | Uso |
|---|---|---|
| border/primary | `var(--border-primary)` | Borda padrão de inputs |
| border/secondary | `var(--border-secondary)` | Borda sutil (dividers) |
| border/brand | `var(--border-brand)` | Borda com cor de marca |
| border/class | `var(--border-class)` | Borda de "Class" |
| border/critical | `var(--border-critical)` | Borda de erro |

---

## Colors — Foreground (ícones)

| Figma Variable | CSS Token | Uso |
|---|---|---|
| fg/primary | `var(--fg-primary)` | Ícones principais |
| fg/secondary | `var(--fg-secondary)` | Ícones secundários |
| fg/tertiary | `var(--fg-tertiary)` | Ícones terciários |
| fg/brand-primary | `var(--fg-brand-primary)` | Ícones de marca |

---

## Spacing

| Figma Token | CSS Token | Valor |
|---|---|---|
| spacing/quarck | `var(--spacing-quarck)` | 2px |
| spacing/nano | `var(--spacing-nano)` | 4px |
| spacing/micro | `var(--spacing-micro)` | 8px |
| spacing/mini | `var(--spacing-mini)` | 12px |
| spacing/3xs | `var(--spacing-3xs)` | 16px |
| spacing/2xs | `var(--spacing-2xs)` | 20px |
| spacing/xs | `var(--spacing-xs)` | 24px |
| spacing/sm | `var(--spacing-sm)` | 32px |
| spacing/md | `var(--spacing-md)` | 40px |
| spacing/lg | `var(--spacing-lg)` | 48px |
| spacing/xl | `var(--spacing-xl)` | 56px |
| spacing-inset/2xs | `var(--spacing-inset-2xs)` | 4px |
| spacing-inset/xs | `var(--spacing-inset-xs)` | 8px |
| spacing-inset/sm | `var(--spacing-inset-sm)` | 12px |
| spacing-inset/md | `var(--spacing-inset-md)` | 16px |
| spacing-inset/lg | `var(--spacing-inset-lg)` | 24px |
| spacing-inset/xl | `var(--spacing-inset-xl)` | 32px |
| spacing-inset/2xl | `var(--spacing-inset-2xl)` | 40px |

---

## Border Radius

| Figma Token | CSS Token | Valor |
|---|---|---|
| radius/none | `var(--radius-none)` | 0px |
| radius/xs | `var(--radius-xs)` | 4px |
| radius/sm | `var(--radius-sm)` | 8px |
| radius/md | `var(--radius-md)` | 12px |
| radius/lg | `var(--radius-lg)` | 16px |
| radius/xl | `var(--radius-xl)` | 20px |
| radius/xxl | `var(--radius-xxl)` | 24px |
| radius/pill | `var(--radius-pill)` | 500px |
| radius/circular | `var(--radius-circular)` | 1000px |

---

## Shadows

| Figma Token | CSS Token | Uso |
|---|---|---|
| shadow/xs | `var(--shadow-xs)` | Badges, sutil |
| shadow/sm | `var(--shadow-sm)` | Cards, inputs |
| shadow/md | `var(--shadow-md)` | Dropdowns |
| shadow/lg | `var(--shadow-lg)` | Popovers |
| shadow/xl | `var(--shadow-xl)` | Modais |
| shadow/2xl | `var(--shadow-2xl)` | Overlays |
| shadow/3xl | `var(--shadow-3xl)` | Ultra destaque |

---

## Motion

| Figma Token | CSS Token | Valor | Uso |
|---|---|---|---|
| duration/instant | `var(--duration-instant)` | 0ms | Sem animação |
| duration/fast | `var(--duration-fast)` | 100ms | Hover, press |
| duration/normal | `var(--duration-normal)` | 200ms | Transições padrão |
| duration/slow | `var(--duration-slow)` | 300ms | Entrada/saída |
| duration/slower | `var(--duration-slower)` | 500ms | Overlays, modais |
| ease/default | `var(--ease-default)` | cubic-bezier(0.4, 0, 0.2, 1) | Standard |
| ease/in | `var(--ease-in)` | cubic-bezier(0.4, 0, 1, 1) | Saída de tela |
| ease/out | `var(--ease-out)` | cubic-bezier(0, 0, 0.2, 1) | Entrada na tela |
| ease/linear | `var(--ease-linear)` | linear | Spinners |

---

## Z-Index

| Figma Token | CSS Token | Valor | Uso |
|---|---|---|---|
| z/base | `var(--z-base)` | 0 | Conteúdo padrão |
| z/dropdown | `var(--z-dropdown)` | 100 | Menus |
| z/sticky | `var(--z-sticky)` | 200 | Headers fixos |
| z/overlay | `var(--z-overlay)` | 300 | Backdrop |
| z/modal | `var(--z-modal)` | 400 | Dialog, Sheet |
| z/popover | `var(--z-popover)` | 500 | Popover |
| z/toast | `var(--z-toast)` | 600 | Toast |
| z/tooltip | `var(--z-tooltip)` | 700 | Tooltip |

---

## Components

| Figma Component | React Import | Props principais |
|---|---|---|
| Button | `import { Button } from 'cycle-design'` | `variant`, `size`, `color`, `iconLeft`, `iconRight`, `iconOnly`, `asChild` |
| Checkbox | `import { Checkbox } from 'cycle-design'` | `size`, `color`, `label`, `indeterminate`, `error` |
| Switch | `import { Switch } from 'cycle-design'` | `size`, `color`, `label` |
| Alert | `import { Alert } from 'cycle-design'` | `variant`, `title`, `icon`, `onDismiss` |
| Skeleton | `import { Skeleton } from 'cycle-design'` | `variant`, `width`, `height`, `static` |
| Spinner | `import { Spinner } from 'cycle-design'` | `size`, `aria-label` |

---

## Ícones

Os ícones no Figma seguem a estrutura `icon/{category}/{name}`. No código:

```tsx
// Figma: icon/navigation/search
import { SearchIcon } from 'cycle-design/icons'

// Uso decorativo (acompanha texto)
<SearchIcon size="sm" decorative />

// Uso informativo (único indicador)
<SearchIcon size="sm" aria-label="Buscar" />
```

| Figma Size | Code Size | Pixels |
|---|---|---|
| xs | `size="xs"` | 16px |
| sm | `size="sm"` | 24px |
| md | `size="md"` | 32px |
| lg | `size="lg"` | 40px |
| xl | `size="xl"` | 48px |
