# Cycle Design vs shadcn/ui — Análise Comparativa

> Análise inicial em 2026-03-13, atualizada em 2026-03-16 com análise de qualidade.
> Foco da atualização: qualidade dos componentes e tokens, não quantidade.

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

---

## Análise de Qualidade (2026-03-16)

> Análise focada em práticas de construção de componentes e tokens,
> comparando padrões do shadcn/ui com o Cycle Design.

### Gaps de qualidade identificados

| Prioridade | Gap | Impacto |
|---|---|---|
| **P0** | `prefers-reduced-motion` ausente | Acessibilidade WCAG 2.1 (2.3.3) — afeta usuários reais |
| **P0** | Tokens de motion/animação ausentes | Valores inconsistentes nos 6 componentes (0.1s, 0.15s, 0.2s) |
| **P1** | Tokens de z-index ausentes | Bloqueante para Dialog, Toast, Tooltip, Dropdown |
| **P1** | `asChild` / polimorfismo ausente | Bloqueante para uso com Next.js `<Link>` e React Router |
| **P1** | Mapeamento Figma → Código ausente | Essencial para fluxo IA → código |
| **P2** | Compound components (padrão) | Escalabilidade de componentes complexos futuros |
| **P2** | Data attributes nos estados | Extensibilidade para consumidores e testes |
| **P3** | Utilitário `cn()` para classes | Qualidade de vida para devs |
| **P3** | OKLCH colors (vs HEX atual) | Futuro-proofing, interpolação perceptual |

### Typography: Classes CSS vs Utility classes

O shadcn/ui usa utility classes do Tailwind diretamente no JSX:
```tsx
<h1 className="text-4xl font-extrabold tracking-tight">Título</h1>
```

O Cycle Design usa classes pré-compostas:
```tsx
<h1 className="headline-lg">Título</h1>
```

**Conclusão:** O approach do Cycle é mais adequado para um design system multi-projeto.
Classes pré-compostas garantem consistência — todos os projetos da Fluencypass usam
o mesmo `.headline-lg`. Com utilities, cada dev pode compor valores diferentes.
Para o fluxo IA, a classe com nome idêntico ao Figma (`headline/lg` → `.headline-lg`)
é a melhor DX possível — mapeamento 1:1 direto.

### Onde o Cycle é superior ao shadcn (ampliado)

| Aspecto | Cycle Design | shadcn/ui |
|---|---|---|
| Documentação de contraste WCAG | ✅ Badges ✅⚠️🚫♿ em cada token | Sem documentação de contraste |
| Acessibilidade em compile-time | ✅ TypeScript enforce aria-label | Delega ao Radix (runtime) |
| Focus ring tokenizado | ✅ `--focus-ring-*` centralizados | Inline no Tailwind |
| Color injection sem class explosion | ✅ CSS vars runtime (`--_btn-solid`) | CVA + Tailwind classes |

> Plano de correção detalhado: ver `ai/improvement-plan.md`

---

## Conclusão

A fundação do Cycle Design é sólida e em vários aspectos superior ao shadcn. Existem dois eixos de melhoria:

1. **Quantidade** — falta de componentes (ver Fases 2-5 do `action-plan.md`)
2. **Qualidade** — gaps de infraestrutura: motion tokens, reduced-motion, z-index, polimorfismo (ver `improvement-plan.md`)

### Próximos passos recomendados

1. Executar Q0-Q2 do improvement-plan (motion, reduced-motion, z-index)
2. Criar mapeamento Figma → Código (Q7)
3. Implementar `asChild` no Button (Q3)
4. Continuar Fases 2-5 do action-plan (componentes)
