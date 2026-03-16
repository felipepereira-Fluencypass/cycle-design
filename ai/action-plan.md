# Plano de Acao — Cycle Design

> Objetivo: tornar o Cycle Design production-ready com baixo risco de utilizacao,
> DX de primeiro nivel e alinhamento com as melhores praticas do mercado.

---

## Visao Geral das Fases

| Fase | Foco | Objetivo |
|------|------|----------|
| **0** | Correcoes urgentes | Eliminar riscos no que ja existe |
| **1** | Infraestrutura de qualidade | Testes, linting, CI — rede de seguranca |
| **2** | Componentes core (forms) | Input, Textarea, Select, Checkbox, Radio, Label, Switch |
| **3** | Componentes core (layout/feedback) | Card, Badge, Avatar, Alert, Separator, Skeleton, Spinner, Progress |
| **4** | Componentes core (overlay/nav) | Dialog, Toast, Dropdown Menu, Tooltip, Popover, Tabs, Sheet |
| **5** | Componentes avancados | Table, Pagination, Breadcrumb, Accordion |
| **6** | DX e distribuicao | CLI, changelog automatico, docs interativos |

---

## Fase 0 — Correcoes Urgentes (1-2 dias)

> Corrigir riscos identificados no que ja existe antes de construir mais.

### 0.1 Corrigir valores hardcoded no Button.css

**Problema:** `height`, `padding` e `width` usam px direto, violando a regra #1 do CLAUDE.md.

**Acao:**
```css
/* ANTES */
.cd-btn--giant { height: 56px; padding: 16px 24px; }
.cd-btn--lg    { height: 48px; padding: 12px 20px; }
.cd-btn--md    { height: 40px; padding: 8px 16px; }
.cd-btn--sm    { height: 32px; padding: 8px 12px; }
.cd-btn--tiny  { height: 24px; padding: 4px 8px; }

/* DEPOIS — usando tokens existentes */
.cd-btn--giant { height: var(--spacing-xl);  padding: var(--spacing-inset-md) var(--spacing-xs); }
.cd-btn--lg    { height: var(--spacing-lg);  padding: var(--spacing-inset-sm) var(--spacing-2xs); }
.cd-btn--md    { height: var(--spacing-md);  padding: var(--spacing-inset-xs) var(--spacing-3xs); }
.cd-btn--sm    { height: var(--spacing-sm);  padding: var(--spacing-inset-xs) var(--spacing-inset-sm); }
.cd-btn--tiny  { height: var(--spacing-xs);  padding: var(--spacing-inset-2xs) var(--spacing-inset-xs); }
```

**Nota:** Alguns valores do Figma (20px padding) nao tem token exato. Opcoes:
1. Criar tokens `--spacing-inset-btn-*` especificos para componentes
2. Usar os tokens mais proximos e ajustar no Figma

**Recomendacao:** Criar tokens de componente (`--btn-height-*`, `--btn-padding-*`) no proprio `Button.css` como variaveis locais, referenciando spacing tokens onde possivel. Isso mantem a rastreabilidade sem poluir o namespace global.

### 0.2 Corrigir conflito font-weight do Button

**Problema:** `Button.css` usa `font-weight: var(--font-weight-bold)` (700), mas as typography compositions (`button-sm/md/lg`) definem `var(--font-weight-semibold)` (600).

**Acao:** Alinhar com a fonte de verdade (Figma). O commit history mostra `fix(tokens): change button typography from bold to semibold` — ou seja, a decisao foi semibold. Corrigir em `Button.css`:

```css
/* ANTES */
font-weight: var(--font-weight-bold); /* 700 */

/* DEPOIS */
font-weight: var(--font-weight-semibold); /* 600 */
```

### 0.3 Adicionar CSS reset minimo

**Problema:** Consumidores sem reset proprio vao ter inconsistencias de browser.

**Acao:** Criar `tokens/reset.css` com reset cirurgico (nao resetar tudo, so o que afeta o design system):

```css
/* tokens/reset.css — Cycle Design minimal reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button,
input,
select,
textarea {
  font: inherit;
  color: inherit;
}

img,
svg {
  display: block;
  max-width: 100%;
}
```

Importar no `tokens/index.css` como primeira linha.

---

## Fase 1 — Infraestrutura de Qualidade (3-5 dias)

> Rede de seguranca antes de criar componentes novos. Tudo que vier depois ja nasce testado.

### 1.1 Setup de testes (Vitest + Testing Library)

**Por que Vitest:** Mesmo ecossistema Vite, rapido, compativel com JSX/TSX sem config extra.

**Instalar:**
```bash
npm i -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

**Configurar** `vitest.config.ts`:
```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    css: true,
    include: ['components/**/*.test.{ts,tsx}', 'tests/**/*.test.{ts,tsx}'],
  },
})
```

**Criar** `tests/setup.ts`:
```ts
import '@testing-library/jest-dom'
```

**Adicionar scripts** ao `package.json`:
```json
"test": "vitest run",
"test:watch": "vitest",
"test:coverage": "vitest run --coverage"
```

**Escrever testes para o Button existente** (`components/Button/Button.test.tsx`):
- Renderiza com texto
- Renderiza com cada variant (filled, outline, ghost)
- Renderiza com cada size (giant, lg, md, sm, tiny)
- Renderiza com cada color (brand, class, private, group, impulse)
- Renderiza icon-only com aria-label
- Aplica CSS variables de cor via style
- Propaga ref via forwardRef
- Estado disabled (aria-disabled + cursor)
- Aceita className adicional
- Renderiza iconLeft, iconRight, ambos

### 1.2 Linting e formatting

**Instalar:**
```bash
npm i -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks
npm i -D prettier
npm i -D stylelint stylelint-config-standard
```

**Configurar:**
- `eslint.config.mjs` — TypeScript + React hooks rules
- `.prettierrc` — Defaults com `singleQuote: true, semi: false`
- `.stylelintrc.json` — Validar CSS dos tokens e componentes

**Adicionar scripts:**
```json
"lint": "eslint components/ src/",
"lint:css": "stylelint 'components/**/*.css' 'tokens/**/*.css'",
"format": "prettier --write .",
"format:check": "prettier --check ."
```

### 1.3 CI com GitHub Actions

**Criar** `.github/workflows/ci.yml`:
```yaml
name: CI
on: [push, pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run lint
      - run: npm run lint:css
      - run: npm run format:check
      - run: npm run test
      - run: npm run build
```

Isso garante que **nenhum PR quebra o build, os testes ou o lint**.

### 1.4 Changeset para versionamento semantico

**Por que:** CSS nao da erro quando uma variavel some. Precisamos de changelog automatico e politica de deprecation.

**Instalar:**
```bash
npm i -D @changesets/cli @changesets/changelog-github
```

**Configurar** `.changeset/config.json`:
```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": ["@changesets/changelog-github", { "repo": "felipepereira-Fluencypass/cycle-design" }],
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "restricted",
  "baseBranch": "main",
  "updateInternalDependencies": "patch"
}
```

**Workflow:** Cada PR com mudanca publica precisa de um changeset. O CI valida, e o release e automatico via `changeset version` + `changeset publish`.

---

## Fase 2 — Componentes Core: Forms (1-2 semanas)

> Forms sao o core de qualquer app. Sem eles, os devs criam do zero e perdem consistencia.

### Padrao para todos os componentes

Antes de implementar, definir o padrao que todos seguem:

```
components/
  ComponentName/
    ComponentName.tsx    # Componente React (forwardRef)
    ComponentName.css    # Estilos usando tokens
    ComponentName.test.tsx  # Testes
    index.ts             # Barrel export
```

**Regras por componente:**
- `forwardRef` sempre
- Props tipadas com JSDoc
- CSS prefix `cd-` (ex: `cd-input`, `cd-select`)
- Tokens apenas — zero hardcode
- `:focus-visible` com fallback box-shadow
- Dark mode automatico via tokens funcionais
- Testes com Testing Library

### 2.1 Label

```tsx
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Indica campo obrigatorio — exibe asterisco visual + sr-only text */
  required?: boolean
}
```

Simples mas fundamental — toda form precisa de labels acessiveis.

### 2.2 Input

```tsx
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Tamanho visual */
  size?: 'lg' | 'md' | 'sm'
  /** Estado de erro — borda vermelha + aria-invalid */
  error?: boolean
  /** Icone a esquerda (decorativo) */
  iconLeft?: ReactElement
  /** Icone a direita (decorativo) */
  iconRight?: ReactElement
}
```

**Estados CSS:** default, hover, focus, disabled, error, error+focus.

### 2.3 Textarea

```tsx
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: 'lg' | 'md' | 'sm'
  error?: boolean
  /** Auto-resize baseado no conteudo */
  autoResize?: boolean
}
```

### 2.4 Select (nativo)

```tsx
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  size?: 'lg' | 'md' | 'sm'
  error?: boolean
}
```

Comecar com select nativo (acessivel por padrao). Select customizado (com dropdown Radix) vira depois.

### 2.5 Checkbox

```tsx
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: 'md' | 'sm'
  /** Estado indeterminate */
  indeterminate?: boolean
  /** Label visivel ao lado */
  label?: ReactNode
}
```

Usar `<input type="checkbox">` nativo com visual customizado via CSS (`:checked`, `::before`).

### 2.6 Radio Group

```tsx
interface RadioGroupProps {
  name: string
  value?: string
  onChange?: (value: string) => void
  children: ReactNode
}

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value: string
  label?: ReactNode
}
```

### 2.7 Switch

```tsx
interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: 'md' | 'sm'
  label?: ReactNode
}
```

Usar `<input type="checkbox" role="switch">` — acessivel nativamente.

### 2.8 Field (wrapper de form)

Inspirado no shadcn `Field` — agrupa Label + Input + mensagem de erro/ajuda:

```tsx
interface FieldProps {
  /** Label text */
  label: string
  /** Mensagem de ajuda abaixo do input */
  hint?: string
  /** Mensagem de erro (substitui hint quando presente) */
  error?: string
  /** Campo obrigatorio */
  required?: boolean
  children: ReactElement  // Input, Select, Textarea, etc.
}
```

Isso elimina o boilerplate mais repetitivo de formularios.

---

## Fase 3 — Componentes Core: Layout e Feedback (1-2 semanas)

### 3.1 Card

```tsx
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Elevacao — controla shadow */
  elevation?: 'flat' | 'sm' | 'md' | 'lg'
  /** Padding interno */
  padding?: 'none' | 'sm' | 'md' | 'lg'
}
```

Subcomponentes opcionais: `Card.Header`, `Card.Body`, `Card.Footer`.

### 3.2 Badge

```tsx
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'filled' | 'outline' | 'ghost'
  color?: 'brand' | 'class' | 'private' | 'group' | 'impulse' | 'positive' | 'warning' | 'critical'
  size?: 'md' | 'sm'
  /** Icone a esquerda */
  icon?: ReactElement
  /** Dot indicator (sem texto) */
  dot?: boolean
}
```

### 3.3 Avatar

```tsx
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  /** Fallback: iniciais ou icone quando imagem falha */
  fallback?: string | ReactElement
  /** Status indicator */
  status?: 'online' | 'offline' | 'busy'
}
```

### 3.4 Alert

```tsx
interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'positive' | 'warning' | 'critical'
  /** Titulo opcional */
  title?: string
  /** Acao de dismiss */
  onDismiss?: () => void
  /** Icone customizado (padrao baseado no variant) */
  icon?: ReactElement
}
```

Usar `role="alert"` para variantes criticas, `role="status"` para info.

### 3.5 Separator

```tsx
interface SeparatorProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
}
```

Simples — `<hr>` estilizado com tokens.

### 3.6 Skeleton

```tsx
interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Formato visual */
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  /** Desabilita animacao */
  static?: boolean
}
```

### 3.7 Spinner

```tsx
interface SpinnerProps extends SVGAttributes<SVGElement> {
  size?: 'lg' | 'md' | 'sm' | 'xs'
  /** Label acessivel */
  'aria-label'?: string
}
```

### 3.8 Progress

```tsx
interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Valor atual (0-100) */
  value: number
  /** Valor maximo */
  max?: number
  size?: 'md' | 'sm'
  color?: 'brand' | 'class' | 'private' | 'group' | 'impulse' | 'positive'
  /** Label acessivel */
  'aria-label': string
}
```

Usar `<progress>` nativo ou `role="progressbar"` com `aria-valuenow`.

---

## Fase 4 — Componentes Core: Overlay e Navegacao (2-3 semanas)

> Estes componentes precisam de gerenciamento de foco, escape key, click outside.
> Recomendo usar **Radix Primitives** como base (mesmo approach do shadcn).

### Dependencia: Radix Primitives

```bash
npm i @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip @radix-ui/react-popover @radix-ui/react-tabs @radix-ui/react-toast
```

**Por que Radix:** Acessibilidade perfeita out-of-the-box (focus trap, escape, aria), sem visual — voce aplica os tokens do Cycle Design por cima. E exatamente o que o shadcn faz, mas nos mantemos controle total do visual via tokens.

### 4.1 Dialog

Baseado em `@radix-ui/react-dialog`:
- Overlay com `--alpha-backdrop`
- Content com shadow `--shadow-xl` e radius `--radius-lg`
- Focus trap automatico
- Subcomponentes: `Dialog.Trigger`, `Dialog.Content`, `Dialog.Title`, `Dialog.Description`, `Dialog.Close`

### 4.2 Toast

Baseado em `@radix-ui/react-toast` ou Sonner:
- Variantes: info, positive, warning, critical
- `aria-live="polite"` automatico
- Auto-dismiss com timer
- Stack de toasts

### 4.3 Dropdown Menu

Baseado em `@radix-ui/react-dropdown-menu`:
- Navegacao por teclado (arrow keys)
- Submenus
- Separadores
- Items com icone

### 4.4 Tooltip

Baseado em `@radix-ui/react-tooltip`:
- Delay configuravel
- Posicionamento automatico (top, right, bottom, left)
- Arrow opcional

### 4.5 Popover

Baseado em `@radix-ui/react-popover`:
- Content arbitrario (diferente do Tooltip que e so texto)
- Posicionamento automatico

### 4.6 Tabs

Baseado em `@radix-ui/react-tabs`:
- Navegacao por teclado (arrow keys entre tabs)
- Variantes visuais: underline, filled, outline

### 4.7 Sheet (Drawer)

Baseado em `@radix-ui/react-dialog` com posicionamento lateral:
- Sides: left, right, top, bottom
- Overlay
- Ideal pra mobile navigation

---

## Fase 5 — Componentes Avancados (2-3 semanas)

### 5.1 Table

```tsx
// Compound component pattern
<Table>
  <Table.Header>
    <Table.Row>
      <Table.Head>Nome</Table.Head>
      <Table.Head>Email</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Felipe</Table.Cell>
      <Table.Cell>felipe@fluencypass.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

Table puro (HTML semantico estilizado). Data Table com sorting/filtering e separado e usa TanStack Table.

### 5.2 Pagination

```tsx
interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  /** Quantas paginas mostrar ao redor da atual */
  siblingCount?: number
}
```

### 5.3 Breadcrumb

```tsx
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/cursos">Cursos</Breadcrumb.Item>
  <Breadcrumb.Item current>Ingles Basico</Breadcrumb.Item>
</Breadcrumb>
```

Usar `<nav aria-label="Breadcrumb">` + `<ol>` semantico.

### 5.4 Accordion

Baseado em `@radix-ui/react-accordion`:
- Single ou multiple open
- Animacao de expand/collapse
- Icone de chevron

---

## Fase 6 — DX e Distribuicao (ongoing)

### 6.1 CLI de scaffold

```bash
npx cycle-design add input
```

Similar ao `npx shadcn add`, mas instalando do pacote (nao copiando codigo).

### 6.2 Storybook ou Ladle

Para documentacao interativa dos componentes com todas as variacoes visuais. Ladle e mais leve que Storybook e compila com Vite.

### 6.3 Visual regression testing

Adicionar Playwright ou Chromatic para detectar mudancas visuais nao-intencionais.

### 6.4 Bundle size tracking

Adicionar `size-limit` ao CI para alertar quando o pacote crescer alem do esperado:

```json
"size-limit": [
  { "path": "dist/index.js", "limit": "15 kB" },
  { "path": "dist/styles.css", "limit": "10 kB" }
]
```

### 6.5 Token deprecation system

Quando um token for renomeado ou removido:

```css
/* Token antigo — deprecated, sera removido na v2 */
--spacing-quarck: var(--spacing-quark);  /* alias pro novo */
```

Documentar deprecations no CHANGELOG e emitir warning via Stylelint custom rule.

---

## Cronograma Sugerido

| Semana | Fase | Entregavel |
|--------|------|-----------|
| 1 | **Fase 0** | Button corrigido, CSS reset, font-weight fix |
| 1-2 | **Fase 1** | Vitest rodando, ESLint/Prettier/Stylelint, CI, Changesets |
| 3-4 | **Fase 2** | Label, Input, Textarea, Select, Checkbox, Radio, Switch, Field |
| 5-6 | **Fase 3** | Card, Badge, Avatar, Alert, Separator, Skeleton, Spinner, Progress |
| 7-9 | **Fase 4** | Dialog, Toast, Dropdown, Tooltip, Popover, Tabs, Sheet |
| 10-12 | **Fase 5** | Table, Pagination, Breadcrumb, Accordion |
| Ongoing | **Fase 6** | CLI, Storybook/Ladle, visual regression, bundle tracking |

---

## Prioridades de Seguranca (baixo risco)

1. **Nenhum componente novo sem testes** — Fase 1 antes de Fase 2
2. **CI bloqueia PRs quebrados** — lint + test + build no CI
3. **Changesets obrigatorios** — todo PR com mudanca publica precisa de changeset
4. **Tokens nunca sao removidos sem deprecation** — alias + warning por 1 major version
5. **Radix para overlays** — nao reinventar focus trap, escape key, a11y
6. **Visual regression na Fase 6** — detectar mudancas visuais nao-intencionais

---

## Metricas de Sucesso

| Metrica | Meta |
|---------|------|
| Cobertura de testes | > 80% por componente |
| Bundle size (JS) | < 15 kB gzipped |
| Bundle size (CSS) | < 10 kB gzipped |
| Lighthouse a11y score | 100 na docs page |
| Tempo de adocao | Dev novo consegue usar em < 15 min |
| Componentes stable | 25+ ate o fim da Fase 5 |
