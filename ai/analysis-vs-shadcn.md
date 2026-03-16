# Cycle Design vs shadcn/ui — Análise Comparativa

> Análise feita em 2026-03-13 comparando o estado atual do Cycle Design com o shadcn/ui.

---

## O que o Cycle Design já tem de sólido

| Aspecto | Status | Observação |
|---------|--------|------------|
| **Token system (440+ tokens)** | ✅ Completo | Cores, tipografia, spacing, shadows, radius, opacity, gradients, grid — tudo com light/dark mode |
| **Dark mode** | ✅ Completo | Via `[data-theme]` + `prefers-color-scheme`, funcional e automático |
| **Sistema de ícones (169)** | ✅ Completo | Build automatizado, a11y enforced via TypeScript (decorative/aria-label) |
| **Tipografia (38 classes)** | ✅ Completo | Escala oficial com composições prontas |
| **Acessibilidade** | ✅ Muito forte | 8 regras obrigatórias documentadas, focus-visible, aria-label enforced, contrast awareness |
| **Build system** | ✅ Completo | tsup, ESM+CJS, CSS inlining, icon generation |
| **Documentação AI-ready** | ✅ Diferencial | llms.txt, ai/ folder, MCP server — shadcn não tem nada equivalente |
| **Paletas de marca** | ✅ Completo | 5 paletas (Brand, Class, Private, Group, Impulse) + semânticas |

---

## Gap de Componentes

O Cycle Design tem **1 componente (Button)**. O shadcn/ui tem **~58 componentes**.

### Prioridade Alta (bloqueia features do dia-a-dia)

| # | Componente | Por quê |
|---|-----------|---------|
| 1 | **Input** | Formulários são o core de qualquer app |
| 2 | **Textarea** | Mensagens, respostas de alunos |
| 3 | **Select** | Filtros, formulários |
| 4 | **Checkbox** | Preferências, termos de uso |
| 5 | **Radio Group** | Quizzes, opções exclusivas |
| 6 | **Label** | Associação acessível com inputs |
| 7 | **Dialog/Modal** | Confirmações, formulários overlay |
| 8 | **Toast** | Feedback de ações (copiou, salvou, erro) |
| 9 | **Card** | Container visual principal |
| 10 | **Badge** | Status de aula, notificações |
| 11 | **Avatar** | Perfil de alunos/professores |
| 12 | **Table** | Listagem de alunos, turmas, pagamentos |
| 13 | **Tabs** | Navegação dentro de páginas |
| 14 | **Dropdown Menu** | Ações contextuais |

### Prioridade Média (melhora UX significativamente)

| # | Componente | Por quê |
|---|-----------|---------|
| 15 | **Tooltip** | Explicações contextuais |
| 16 | **Popover** | Info on-demand |
| 17 | **Switch/Toggle** | Configurações on/off |
| 18 | **Progress** | Progresso de curso/módulo |
| 19 | **Skeleton** | Loading states |
| 20 | **Alert** | Avisos, erros, informações |
| 21 | **Separator** | Divisor visual |
| 22 | **Breadcrumb** | Navegação hierárquica |
| 23 | **Pagination** | Listas longas |
| 24 | **Accordion** | FAQ, conteúdo colapsável |
| 25 | **Sheet/Drawer** | Painéis laterais (mobile) |
| 26 | **Spinner** | Loading inline |

### Prioridade Baixa (nice-to-have)

| # | Componente |
|---|-----------|
| 27 | Calendar, Date Picker |
| 28 | Slider |
| 29 | Carousel |
| 30 | Navigation Menu, Sidebar |
| 31 | Combobox, Command |
| 32 | Context Menu, Menubar |
| 33 | Scroll Area, Resizable |
| 34 | Aspect Ratio, Collapsible |
| 35 | Hover Card, Input OTP |

---

## Riscos Identificados

### 1. Risco ALTO — Sem testes automatizados

O projeto tem zero testes. Nenhum test runner configurado. Qualquer mudança em tokens ou no Button pode quebrar consumidores sem aviso. O Cycle Design é um **pacote instalado** — regressões afetam todos os projetos da Fluencypass de uma vez.

**Recomendação:** Adicionar Vitest + Testing Library antes de publicar a v1.

### 2. Risco MÉDIO — Sem CSS reset/normalize

O Cycle Design não inclui um CSS reset. Comportamentos de `margin`, `box-sizing`, `line-height` padrão do browser podem gerar inconsistências.

**Recomendação:** Incluir um reset mínimo ou documentar que o consumidor deve usar um.

### 3. Risco MÉDIO — Valores hardcoded no Button CSS

Em `Button.css`, os tamanhos usam valores em px hardcoded para `height`, `padding` e `width`:

```css
.cd-btn--giant { height: 56px; padding: 16px 24px; }
.cd-btn--lg    { height: 48px; padding: 12px 20px; }
```

Isso viola a regra #1 do CLAUDE.md ("nunca hardcode valores"). Deveriam usar tokens de spacing.

### 4. Risco MÉDIO — Conflito font-weight no Button

`Button.css` define `font-weight: var(--font-weight-bold)` (700) enquanto os tokens de tipografia de botão (`button-sm/md/lg`) usam `var(--font-weight-semibold)` (600). Potencial inconsistência visual.

### 5. Risco BAIXO — Sem versionamento semântico rigoroso

Pacote em `0.1.0` sem CHANGELOG. Breaking changes em tokens (renomear variável CSS) podem quebrar builds silenciosamente — CSS não dá erro para variáveis inexistentes.

### 6. Risco BAIXO — Sem linting/formatting

Não há ESLint, Prettier, ou Stylelint configurados.

---

## Onde o Cycle Design é MELHOR que shadcn

| Aspecto | Cycle Design | shadcn/ui |
|---------|-------------|-----------|
| **Tokens de design** | 440+ tokens com light/dark automático | Depende do Tailwind, sem token system próprio |
| **Brand palettes** | 5 paletas de marca integradas | Só 1 cor de "primary" |
| **Acessibilidade** | 8 regras enforced + TypeScript checks | Depende do Radix, sem enforcement adicional |
| **AI/MCP** | llms.txt + MCP server + ai/ docs | Sem suporte nativo |
| **Ícones integrados** | 169 ícones com a11y enforced | Depende de Lucide (externo) |
| **Dark mode** | Nativo via tokens, zero-config | Requer configuração do Tailwind |

---

## Score Comparativo

| | Cycle Design | shadcn/ui |
|---|---|---|
| **Foundation (tokens, temas)** | 9/10 | 6/10 |
| **Componentes** | 1/10 | 9/10 |
| **Acessibilidade** | 8/10 | 7/10 |
| **DX (developer experience)** | 6/10 | 9/10 |
| **Documentação** | 7/10 | 9/10 |
| **Testes** | 0/10 | N/A (code-gen) |

---

## Conclusão

A fundação do Cycle Design é sólida e em vários aspectos superior ao shadcn. O risco principal não é a arquitetura — é a **falta de componentes** e a **ausência de testes**. Os 14 componentes de prioridade alta são o que separa o Cycle Design de ser usável no dia-a-dia.

### Próximos passos recomendados

1. Configurar Vitest + Testing Library
2. Implementar Input, Select, Dialog, Card e Table
3. Adicionar CSS reset mínimo
4. Corrigir valores hardcoded no Button
5. Estabelecer CHANGELOG e política de deprecation
