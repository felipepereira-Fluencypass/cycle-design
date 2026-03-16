# Plano de Melhoria — Qualidade do Design System

> Baseado na análise comparativa com shadcn/ui (2026-03-16).
> Foco: qualidade dos tokens e componentes existentes, não quantidade de componentes.
> Tudo que for alterado deve ser documentado em `ai/` para consumo por IA.

---

## Visão Geral das Fases

| Fase | Foco | Prioridade | Estimativa |
|------|------|------------|------------|
| **Q0** | `prefers-reduced-motion` | P0 — Acessibilidade WCAG | 1 dia |
| **Q1** | Tokens de motion/animação | P0 — Inconsistência ativa | 1 dia |
| **Q2** | Tokens de z-index | P1 — Bloqueante para overlays | 0.5 dia |
| **Q3** | `asChild` / polimorfismo | P1 — Bloqueante para Next.js/Router | 2 dias |
| **Q4** | Data attributes nos componentes | P2 — Extensibilidade | 1 dia |
| **Q5** | Compound components (guia) | P2 — Escalabilidade futura | 1 dia |
| **Q6** | Utilitário `cn()` para classes | P3 — Qualidade de vida | 0.5 dia |
| **Q7** | Mapeamento Figma → Código | P1 — Essencial para fluxo IA | 1 dia |
| **Q8** | Documentação de tudo acima | Contínuo | Em cada fase |

---

## Q0 — `prefers-reduced-motion` (P0)

> **Por quê:** WCAG 2.1 critério 2.3.3. Usuários com distúrbios vestibulares
> precisam poder desabilitar animações. Zero ocorrências no codebase hoje.

### Q0.1 Adicionar media query global no reset

**Arquivo:** `tokens/reset.css`

```css
/* ── Reduced motion ────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Q0.2 Ajustar componentes com animação infinita

**Spinner.css** — manter o SVG visível mas sem rotação:

```css
@media (prefers-reduced-motion: reduce) {
  .cd-spinner {
    animation: none;
    /* Spinner fica estático mas visível — mantém feedback visual */
  }
}
```

**Skeleton.css** — manter o placeholder mas sem pulse:

```css
@media (prefers-reduced-motion: reduce) {
  .cd-skeleton:not(.cd-skeleton--static) {
    animation: none;
    opacity: var(--opacity-medium); /* 0.32 — visível mas sutil */
  }
}
```

### Q0.3 Documentar

**Criar:** `ai/tokens/motion.md` (será expandido na fase Q1)
**Atualizar:** `CLAUDE.md` com regra A9 sobre `prefers-reduced-motion`
**Atualizar:** `ai/decisions.md` com a decisão de usar fallback global

---

## Q1 — Tokens de Motion/Animação (P0)

> **Por quê:** Os 6 componentes existentes usam valores de transição
> inconsistentes: `0.1s`, `0.15s`, `0.2s`, `0.75s`, `1.5s` sem padrão.
> Quando mais componentes forem criados, a inconsistência só vai crescer.

### Q1.1 Criar arquivo de tokens

**Criar:** `tokens/motion-tokens.css`

```css
/* ============================================
   CYCLE DESIGN — MOTION TOKENS
   ============================================
   Tokens de duração e easing para transições e animações.
   Baseado em guidelines de motion design:
   - Micro-interações: 100-200ms
   - Transições padrão: 200-300ms
   - Entradas/saídas: 300-500ms
   ============================================ */

:root {

  /* ── Duration ────────────────────────────── */
  --duration-instant:  0ms;     /* Sem animação (estados disabled, reduced-motion) */
  --duration-fast:     100ms;   /* Micro: hover, press, toggle */
  --duration-normal:   200ms;   /* Padrão: transições de estado */
  --duration-slow:     300ms;   /* Entrada/saída de elementos */
  --duration-slower:   500ms;   /* Overlays, modais, page transitions */

  /* ── Easing ──────────────────────────────── */
  --ease-default:  cubic-bezier(0.4, 0, 0.2, 1);   /* Standard — Material 3 */
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);      /* Aceleração — saída de tela */
  --ease-out:      cubic-bezier(0, 0, 0.2, 1);      /* Desaceleração — entrada na tela */
  --ease-linear:   linear;                           /* Progresso, spinners */

  /* ── Composições (atalhos semânticos) ────── */
  --transition-fast:    var(--duration-fast) var(--ease-default);
  --transition-normal:  var(--duration-normal) var(--ease-default);
  --transition-slow:    var(--duration-slow) var(--ease-out);
}
```

### Q1.2 Importar no `tokens/index.css`

Adicionar entre "3. Utilitários":

```css
@import "./motion-tokens.css";
```

### Q1.3 Migrar componentes existentes

**Button.css:**
```css
/* ANTES */
transition: background-color 0.1s ease, border-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease;

/* DEPOIS */
transition: background-color var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast);
```

**Switch.css (track):**
```css
/* ANTES */
transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.1s ease;

/* DEPOIS */
transition: background-color var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-fast);
```

**Switch.css (thumb):**
```css
/* ANTES */
transition: transform 0.2s ease;

/* DEPOIS */
transition: transform var(--transition-normal);
```

**Alert.css (dismiss):**
```css
/* ANTES */
transition: color 0.15s ease, background 0.15s ease;

/* DEPOIS */
transition: color var(--transition-fast), background var(--transition-fast);
```

**Checkbox.css:**
```css
/* ANTES (valores inline) */
transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.1s ease;

/* DEPOIS */
transition: border-color var(--transition-normal), background var(--transition-normal), box-shadow var(--transition-fast);
```

**Spinner.css** — manter `linear` mas usar token de easing:
```css
/* ANTES */
animation: cd-spinner-rotate 0.75s linear infinite;

/* DEPOIS */
animation: cd-spinner-rotate 0.75s var(--ease-linear) infinite;
```

**Skeleton.css** — manter easing customizado (pulse precisa de ease-in-out):
```css
/* Manter como está — animação decorativa com timing específico */
animation: cd-skeleton-pulse 1.5s ease-in-out infinite;
```

### Q1.4 Documentar

**Criar:** `ai/tokens/motion.md` — documentação completa dos tokens
**Atualizar:** `CLAUDE.md` — adicionar seção de tokens de motion na referência rápida
**Atualizar:** `llms.txt` — adicionar link para motion.md

---

## Q2 — Tokens de z-index (P1)

> **Por quê:** Sem escala definida, quando Dialog, Toast, Tooltip, Dropdown
> forem criados (Fases 3-4 do action-plan), cada um vai inventar seu z-index.
> Definir agora evita retrabalho.

### Q2.1 Criar arquivo de tokens

**Criar:** `tokens/z-index-tokens.css`

```css
/* ============================================
   CYCLE DESIGN — Z-INDEX TOKENS
   ============================================
   Escala de empilhamento para componentes overlay.
   Valores espaçados em incrementos de 100 para
   permitir inserções futuras sem refatoração.
   ============================================ */

:root {
  --z-base:      0;       /* Conteúdo padrão */
  --z-dropdown:  100;     /* Dropdown menus, selects */
  --z-sticky:    200;     /* Headers fixos, barras de navegação */
  --z-overlay:   300;     /* Backdrop de modais/sheets */
  --z-modal:     400;     /* Dialog, Sheet, Drawer */
  --z-popover:   500;     /* Popover, Tooltip */
  --z-toast:     600;     /* Toast notifications (acima de tudo) */
  --z-tooltip:   700;     /* Tooltip (acima de toast quando necessário) */
}
```

### Q2.2 Importar no `tokens/index.css`

```css
@import "./z-index-tokens.css";
```

### Q2.3 Documentar

**Criar:** `ai/tokens/z-index.md`
**Atualizar:** `CLAUDE.md` — adicionar tabela de z-index na referência rápida
**Atualizar:** `llms.txt` — adicionar link

---

## Q3 — `asChild` / Polimorfismo (P1)

> **Por quê:** O Button hoje só renderiza `<button>`. Em projetos Next.js,
> é necessário renderizar como `<Link>`. Sem isso, devs vão duplicar estilos
> ou usar hacks como `<Link className="cd-btn">` que perdem a tipagem.

### Q3.1 Criar utilitário `Slot`

Implementar um componente `Slot` inspirado no Radix UI que permite
renderizar o filho direto com as props do pai.

**Criar:** `components/Slot/Slot.tsx`

```tsx
/**
 * Slot — renderiza o filho direto com as props do componente pai.
 * Usado internamente por componentes que suportam `asChild`.
 *
 * Baseado no pattern do Radix UI Slot.
 */
```

**Comportamento:**
- Quando `asChild={false}` (padrão): renderiza a tag nativa normalmente
- Quando `asChild={true}`: clona o filho único, mergeando className, style, event handlers e ref

### Q3.2 Adicionar `asChild` ao Button

```tsx
// Uso com asChild
<Button asChild>
  <a href="/page">Link que parece botão</a>
</Button>

// Next.js
<Button asChild>
  <Link href="/dashboard">Dashboard</Link>
</Button>

// Padrão — continua funcionando igual
<Button>Salvar</Button>
```

**Importante:** Retrocompatível. Sem `asChild`, o comportamento é idêntico ao atual.

### Q3.3 Aplicar nos componentes existentes

- **Button** — caso principal (navegação)
- **Alert** — permitir wrappers customizados (menos urgente)

Demais componentes (Checkbox, Switch) são baseados em `<input>` — `asChild` não se aplica.

### Q3.4 Documentar

**Atualizar:** `CLAUDE.md` — adicionar regra sobre quando usar `asChild`
**Criar:** seção em `ai/decisions.md` explicando a decisão de usar `Slot` vs `as` prop

---

## Q4 — Data Attributes nos Componentes (P2)

> **Por quê:** Consumidores não conseguem estilizar estados dos componentes
> externamente. No shadcn/Radix, `[data-state="checked"]` permite CSS externo.
> Isso também facilita testes automatizados (seletores estáveis).

### Q4.1 Adicionar data attributes

**Button:**
```tsx
<button
  data-variant={variant}
  data-size={size}
  data-color={color}
  data-disabled={disabled || undefined}
>
```

**Checkbox:**
```tsx
<div
  data-state={checked ? 'checked' : indeterminate ? 'indeterminate' : 'unchecked'}
  data-disabled={disabled || undefined}
>
```

**Switch:**
```tsx
<div
  data-state={checked ? 'checked' : 'unchecked'}
  data-disabled={disabled || undefined}
>
```

**Alert:**
```tsx
<div data-variant={variant}>
```

### Q4.2 Migrar CSS interno para usar data attributes

Onde possível, substituir classes por data attributes no CSS:

```css
/* ANTES — classe modifier */
.cd-btn--filled { background: var(--_btn-solid); }

/* DEPOIS — data attribute (opcional, avaliar DX) */
.cd-btn[data-variant="filled"] { background: var(--_btn-solid); }
```

**Nota:** Esta migração CSS é opcional. O principal valor é expor os data attributes
para consumidores. O CSS interno pode continuar usando classes BEM.

### Q4.3 Documentar

**Atualizar:** `CLAUDE.md` — regra sobre expor `data-*` em todo componente novo
**Atualizar:** documentação de cada componente com lista de data attributes

---

## Q5 — Guia de Compound Components (P2)

> **Por quê:** O Alert atual é monolítico (todas as props no root).
> Componentes futuros complexos (Dialog, Toast, Dropdown) precisam de
> compound pattern para serem flexíveis. Definir o padrão agora.

### Q5.1 Documentar o padrão

**Criar:** `ai/patterns/compound-components.md`

Conteúdo:
- Quando usar monolítico vs compound
- Pattern de referência (Dialog, Dropdown como exemplo futuro)
- Regras de naming: `Component.Root`, `Component.Content`, `Component.Title`
- Como expor displayName para DevTools
- Como compartilhar estado via Context

### Q5.2 Definir critério de decisão

| Complexidade | Pattern | Exemplo |
|---|---|---|
| Componente simples, 1-3 áreas | Monolítico (props) | Button, Badge, Spinner |
| Componente com layout flexível | Compound components | Dialog, Dropdown, Toast |
| Componente com conteúdo variável | Compound + slots | Table, Card (futuro) |

### Q5.3 Não refatorar componentes existentes

Os 6 componentes atuais são simples o suficiente para o pattern monolítico.
O guia é para **novos componentes** a partir da Fase 3 do action-plan.

---

## Q6 — Utilitário `cn()` (P3)

> **Por quê:** A concatenação manual de classes com `.filter(Boolean).join(' ')`
> funciona mas não resolve conflitos. Não é urgente sem Tailwind, mas é boa prática.

### Q6.1 Criar utilitário

**Criar:** `src/utils/cn.ts`

```tsx
/**
 * Combina nomes de classe, filtrando valores falsy.
 * Equivalente leve do clsx para o Cycle Design.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ')
}
```

**Nota:** Não usar `tailwind-merge` — o Cycle não usa Tailwind. Um `clsx` simples é suficiente.

### Q6.2 Migrar componentes existentes

```tsx
// ANTES
const classNames = ['cd-btn', `cd-btn--${variant}`, className]
  .filter(Boolean)
  .join(' ')

// DEPOIS
import { cn } from '../../src/utils/cn'
const classNames = cn('cd-btn', `cd-btn--${variant}`, className)
```

### Q6.3 Documentar

**Atualizar:** `CLAUDE.md` — mencionar `cn()` como utilitário padrão
**Atualizar:** `ai/decisions.md` — decisão de não usar tailwind-merge

---

## Q7 — Mapeamento Figma → Código (P1)

> **Por quê:** O principal fluxo de uso com IA é: IA analisa Figma → gera código.
> Sem mapeamento explícito, a IA hardcoda valores ao invés de usar tokens.
> Este é o diferencial do Cycle Design para IA.

### Q7.1 Criar arquivo de mapeamento

**Criar:** `ai/figma-mapping.md`

```markdown
# Figma → Code Mapping

## Typography
| Figma Style Name | CSS Class | Quando usar |
|---|---|---|
| headline/lg | `.headline-lg` | Títulos de página |
| body/md | `.body-md` | Texto de conteúdo padrão |
| ... | ... | ... |

## Colors
| Figma Variable | CSS Token | Uso |
|---|---|---|
| text/primary | `var(--text-primary)` | Cor de texto principal |
| bg/brand-solid | `var(--bg-brand-solid)` | Background de botões primários |
| ... | ... | ... |

## Spacing
| Figma Token | CSS Token | Valor |
|---|---|---|
| spacing/micro | `var(--spacing-micro)` | 8px |
| ... | ... | ... |

## Regra de Tradução
- Figma usa `/` como separador → CSS usa `-`
- Figma `headline/lg` → CSS `.headline-lg`
- Figma `text/primary` → CSS `var(--text-primary)`
- Figma `bg/brand-solid` → CSS `var(--bg-brand-solid)`
```

### Q7.2 Atualizar llms.txt e llms-full.txt

Adicionar referência ao mapeamento na seção principal.

### Q7.3 Atualizar MCP server

O MCP server carrega automaticamente novos arquivos em `ai/`.
Mas adicionar um tool específico `get_figma_mapping` pode ser útil.

---

## Q8 — Documentação Contínua

> Cada fase acima gera documentação. Este checklist garante consistência.

### Checklist por fase

Para cada fase completada:

- [ ] Arquivo de token documentado em `ai/tokens/` (se aplicável)
- [ ] Guia de uso em `ai/` (se aplicável)
- [ ] `CLAUDE.md` atualizado com novas regras
- [ ] `llms.txt` atualizado com novos links
- [ ] `llms-full.txt` regenerado (concatenação dos arquivos `ai/`)
- [ ] MCP server atualizado se novo tool foi adicionado

### Formato padrão para novos docs

Seguir o formato existente em `ai/tokens/*.md`:

```markdown
# Cycle Design — [Categoria]

Parágrafo introdutório explicando o sistema.

## [Seção]

### [Subseção com dados]

| Token | Valor | Uso |
|-------|-------|-----|
| `--token-name` | value | Descrição |

## Exemplos de Uso

\`\`\`css
.selector {
  property: var(--token-name);
}
\`\`\`
```

---

## Ordem de Execução Recomendada

```
Q0 (reduced-motion) ──→ Q1 (motion tokens) ──→ Q2 (z-index)
                                                      │
Q7 (figma mapping) ─────────────────────────────── em paralelo
                                                      │
                                               Q3 (asChild)
                                                      │
                                               Q4 (data attrs)
                                                      │
                                               Q5 (compound guide)
                                                      │
                                               Q6 (cn utility)
```

**Q0 e Q1 são sequenciais** — reduced-motion depende dos tokens de motion.
**Q7 pode ser feito em paralelo** — é documentação pura, sem dependência de código.
**Q3-Q6 são sequenciais** — cada um constrói sobre o anterior.

---

## Relação com o Action Plan Existente

Este plano de melhoria é **complementar** ao `action-plan.md` (Fases 0-6).

| Este plano | Action Plan | Relação |
|---|---|---|
| Q0-Q1 (motion) | Fase 0 (correções) | Extende a Fase 0 |
| Q2 (z-index) | Fase 4 (overlays) | Pré-requisito da Fase 4 |
| Q3 (asChild) | Fase 2-3 (componentes) | Pré-requisito para Button como Link |
| Q4 (data attrs) | Fase 2-6 (todos) | Padrão para todos os novos componentes |
| Q5 (compound) | Fase 4 (Dialog, Toast) | Guia para implementação |
| Q6 (cn) | Fase 2-6 (todos) | Utilitário para todos os novos componentes |
| Q7 (figma map) | Independente | Novo — específico para fluxo IA |

**Recomendação:** Executar Q0-Q2 e Q7 antes de iniciar a Fase 2 do action-plan.
Q3-Q6 podem ser executados durante a Fase 2.
