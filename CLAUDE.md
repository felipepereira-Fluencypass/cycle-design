# CLAUDE.md — Cycle Design (Design System)

> Este arquivo instrui ferramentas de IA (Claude Code, Cursor, Windsurf, Bolt) sobre como usar o Cycle Design corretamente.

---

## Sobre o projeto

Cycle Design é o Design System da **Fluencypass**. Todos os projetos da Fluencypass devem importar e usar os tokens e componentes deste pacote. **Nunca crie tokens ou componentes do zero** — sempre use o que já existe aqui.

- **Pacote:** `@cycle/design`
- **Framework:** React + TypeScript
- **Estilização:** CSS Custom Properties (variáveis CSS)
- **Fontes:** Open Sans (body, headline, display) + Fira Code (mono)
- **Temas:** Light mode (padrão) + Dark mode via `[data-theme="dark"]`

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

### 3. Nunca recrie componentes existentes

Antes de criar qualquer componente, verifique se já existe no Cycle Design. Se existir, importe-o:

```tsx
// ❌ ERRADO — criar botão do zero
const MyButton = styled.button`...`;

// ✅ CORRETO — importar do Design System
import { Button } from '@cycle/design';
```

### 4. Ao alterar um componente, edite o arquivo fonte

Nunca duplique um componente pra fazer alterações. Sempre edite o arquivo original e mantenha a interface de props retrocompatível.

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

## Estrutura dos tokens

### Arquivos CSS (importar nesta ordem)

```css
/* 1. Primitivos (base) */
@import '@cycle/design/tokens/typography-primitives.css';
@import '@cycle/design/tokens/color-primitives.css';

/* 2. Composições (funcionais) */
@import '@cycle/design/tokens/typography-compositions.css';
@import '@cycle/design/tokens/color-compositions.css';
@import '@cycle/design/tokens/color-compositions-bg.css';
@import '@cycle/design/tokens/gradients.css';

/* 3. Utilitários */
@import '@cycle/design/tokens/border-width.css';
@import '@cycle/design/tokens/border-radius.css';
@import '@cycle/design/tokens/shadows.css';
@import '@cycle/design/tokens/opacity.css';
@import '@cycle/design/tokens/spacing.css';
@import '@cycle/design/tokens/grid.css';
```

### Referência rápida dos tokens

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

O tema é controlado via atributo `data-theme` no `<html>`:

```html
<!-- Light (padrão) -->
<html data-theme="light">

<!-- Dark -->
<html data-theme="dark">
```

Também suporta `prefers-color-scheme` automaticamente. Ao usar tokens funcionais (não primitivos), o dark mode funciona sem nenhuma alteração no código dos componentes.

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

Cada paleta tem tokens de text, border, foreground e background com variações primary, secondary, hover, solid, section.

---

## Ao criar novos componentes

1. Use TypeScript com props tipadas
2. Use apenas tokens do Cycle Design (nunca valores hardcoded)
3. Exporte o componente no index principal do pacote
4. Siga a estrutura de pastas existente
5. Inclua suporte a dark mode via tokens funcionais
6. Documente as props com JSDoc

---

## Fonte de verdade

- **Design:** Figma → Cycle • Design System
- **Tokens:** Variáveis do Figma (exportadas em JSON)
- **Prioridade em caso de conflito:** Sempre seguir os primitives do Figma
