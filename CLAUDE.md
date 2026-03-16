# CLAUDE.md — Cycle Design (Design System)

> Este arquivo instrui ferramentas de IA (Claude Code, Cursor, Windsurf, Bolt) sobre como usar o Cycle Design corretamente.

---

## Sobre o projeto

Cycle Design é o Design System da **Fluencypass**. Todos os projetos da Fluencypass devem importar e usar os tokens e componentes deste pacote. **Nunca crie tokens ou componentes do zero** — sempre use o que já existe aqui.

- **Pacote:** `cycle-design`
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
import { Button } from 'cycle-design';
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

### Entry points do pacote

```tsx
/* Recomendado — tokens + estilos dos componentes */
import 'cycle-design/styles.css'

/* Alternativa — apenas tokens, sem estilos de componentes */
import 'cycle-design/tokens'

/* Componentes React */
import { Button } from 'cycle-design'

/* Ícones */
import { SearchIcon, PlusIcon } from 'cycle-design/icons'
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
<button onClick={close}><CloseIcon size="sm" decorative /></button>

/* ✅ Correto */
<button onClick={close} aria-label="Fechar"><CloseIcon size="sm" decorative /></button>
```

### A4. Feedback de ação exige aria-live

Qualquer mudança de estado visível (copiado, salvo, carregando→concluído) precisa de uma live region para leitores de tela. Use o padrão do `useClipboard`:

```tsx
/* ✅ Live region sempre presente no DOM — nunca renderizar condicionalmente */
<span aria-live="polite" aria-atomic="true" className="sr-only">
  {announcement}
</span>
```

### A5. Elementos interativos: HTML nativo primeiro

Use `<button>` para ações e `<a>` para navegação. Não use `<div>`, `<span>` ou `<li>` com `onClick` — eles não recebem foco por teclado nativamente e não comunicam papel ao leitor de tela. `role` e `tabIndex` são último recurso para casos sem equivalente HTML nativo:

```tsx
/* ❌ Proibido */
<div onClick={handleAction} className="btn">Salvar</div>

/* ✅ Correto — HTML nativo */
<button onClick={handleAction}>Salvar</button>

/* ⚠️ Último recurso — apenas quando HTML nativo não é possível */
<div role="button" tabIndex={0} onClick={handleAction} onKeyDown={handleKeyDown}>
  Salvar
</div>
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

Todo componente de ícone do Cycle Design deve receber uma das duas props. Omitir as duas é proibido — o TypeScript emite erro:

```tsx
/* ❌ Proibido — TypeScript error */
<SearchIcon size="sm" />

/* ✅ Decorativo — acompanha texto visível */
<SearchIcon size="sm" decorative />

/* ✅ Informativo — único indicador da ação */
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

Animações e transições devem ser desabilitadas para usuários que preferem movimento reduzido (WCAG 2.1, critério 2.3.3). O reset global já inclui a media query, mas componentes com animação infinita (Spinner, Skeleton) devem ter fallback explícito:

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

## Ao criar novos componentes

1. Use TypeScript com props tipadas
2. Use apenas tokens do Cycle Design (nunca valores hardcoded)
3. Exporte o componente no index principal do pacote
4. Siga a estrutura de pastas existente
5. Inclua suporte a dark mode via tokens funcionais
6. Documente as props com JSDoc
7. Passe o checklist de acessibilidade em `/guidelines/accessibility` antes de marcar como stable
8. Exponha `data-*` attributes para estados (variant, size, disabled, state)
9. Use `forwardRef` com named function (não arrow function anônima)
10. Use `cn()` de `src/utils/cn` para combinar classNames
11. Componentes overlay devem usar tokens de z-index (`--z-modal`, `--z-toast`, etc.)
12. Transições devem usar tokens de motion (`--transition-fast`, `--transition-normal`, etc.)
13. Componentes complexos com layout flexível devem usar compound pattern (ver `ai/patterns/compound-components.md`)
14. **OBRIGATÓRIO:** Ao criar, alterar ou remover qualquer componente ou token, atualize `ai/figma-mapping.md` com o mapeamento Figma → Código correspondente. Esta regra não tem exceções — a IA depende deste arquivo para gerar código correto a partir do Figma.
15. **OBRIGATÓRIO:** Todo componente deve ter testes que cubram as 4 camadas do checklist de testes (ver abaixo). Nenhum componente pode ser marcado como stable sem todos os testes passando.

---

## Checklist de testes obrigatório por componente

Todo componente do Cycle Design **deve** ter testes cobrindo estas 4 camadas. Este checklist deve ser atualizado na página `/guidelines/testing` da documentação visual quando os testes forem escritos.

### Camada 1 — Renderização e props
- [ ] Renderiza sem erros com props padrão
- [ ] Aplica todas as variantes (variant, size, color)
- [ ] Aplica className customizada sem sobrescrever as internas
- [ ] Merge de style sem perder CSS custom properties internas
- [ ] Forward ref para o elemento DOM correto
- [ ] Passthrough de atributos nativos HTML

### Camada 2 — Interação e comportamento
- [ ] Responde a click/onChange corretamente
- [ ] Funciona com teclado (Enter, Space, Tab)
- [ ] Recebe foco via Tab
- [ ] Não recebe foco quando disabled
- [ ] Não dispara eventos quando disabled
- [ ] asChild renderiza como elemento filho (se aplicável)

### Camada 3 — Acessibilidade
- [ ] Role semântico correto (button, checkbox, switch, status, alert)
- [ ] aria-label presente quando obrigatório (icon-only)
- [ ] aria-disabled quando disabled
- [ ] aria-invalid quando error (se aplicável)
- [ ] aria-hidden em elementos decorativos

### Camada 4 — Data attributes
- [ ] Expõe data-variant (se aplicável)
- [ ] Expõe data-size (se aplicável)
- [ ] Expõe data-color (se aplicável)
- [ ] Expõe data-disabled quando disabled
- [ ] Expõe data-state (se tem estados como checked/unchecked)

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

- **Design:** Figma → Cycle • Design System
- **Tokens:** Variáveis do Figma (exportadas em JSON)
- **Prioridade em caso de conflito:** Sempre seguir os primitives do Figma
