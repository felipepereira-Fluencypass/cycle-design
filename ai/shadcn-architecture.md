# Arquitetura: Cycle Design + shadcn/ui

> Decisão arquitetural: usar shadcn/ui como base de componentes com customização via Cycle Design foundations.

## Resumo

O Cycle Design **não** constrói componentes do zero. Os componentes de UI vêm do **shadcn/ui**, customizados com os foundations visuais da Fluencypass (cores, tipografia, radius, shadows) via CSS variables.

```
┌─────────────────────────────────┐
│     Cycle Design Foundations     │ ← Figma (fonte de verdade)
│  (cores, tipografia, radius...)  │
├─────────────────────────────────┤
│       CSS Variables (tema)       │ ← globals.css
├─────────────────────────────────┤
│    shadcn/ui (58+ componentes)   │ ← Copiados no projeto via CLI
├─────────────────────────────────┤
│  Radix UI (primitivos headless)  │ ← Acessibilidade, keyboard, focus
├─────────────────────────────────┤
│      Tailwind CSS v4 (engine)    │ ← Classes utilitárias
└─────────────────────────────────┘
```

## Como funciona

1. **Figma** define os valores visuais (fonte de verdade)
2. **globals.css** traduz esses valores para as CSS variables que o shadcn espera
3. **shadcn/ui** consome as variáveis automaticamente — todos os componentes saem com a cara do Cycle
4. **Dark mode** funciona trocando os valores das variáveis via `[data-theme="dark"]`

## Variáveis CSS do shadcn → Tokens Cycle

| Variável shadcn | Token Cycle (light) | Token Cycle (dark) |
|---|---|---|
| `--primary` | `--bg-brand-solid` (#D45558) | `--bg-brand-solid` (#ED6A6D) |
| `--primary-foreground` | `--text-white` (#FFFFFF) | `--text-primary_on-brand` (#FFF5F5) |
| `--destructive` | `--bg-critical-solid` (#B32020) | `--bg-critical-solid` (#D42B2B) |
| `--background` | `--bg-primary` (#FFFFFF) | `--bg-primary` (#0C0E12) |
| `--foreground` | `--text-primary` (#181D27) | `--text-primary` (#F7F7F7) |
| `--border` | `--border-secondary` (#E9EAEB) | `--border-primary` (#373A41) |
| `--ring` | `--border-brand` (#ED6A6D) | `--border-brand` (#F57B7E) |

(Mapeamento completo em `ai/shadcn-theme-mapping.md`)

## Paletas de produto extras

O shadcn só tem `primary` e `destructive`. O Cycle adiciona 5 paletas de produto + 2 semânticas:

- `--brand` / `--brand-foreground` → Identidade Fluencypass (coral)
- `--class` / `--class-foreground` → Funcionalidade de aulas (azul)
- `--private` / `--private-foreground` → Aulas particulares (laranja)
- `--group` / `--group-foreground` → Grupos (verde)
- `--impulse` / `--impulse-foreground` → Promoções (roxo)
- `--warning` / `--warning-foreground` → Alertas (amarelo)
- `--positive` / `--positive-foreground` → Sucesso (verde)

Registradas no `@theme inline` para uso via Tailwind: `bg-brand`, `text-class-foreground`, etc.

## Setup de projeto

```bash
# 1. Criar projeto
npx create-next-app@latest my-app --typescript --tailwind --eslint --app

# 2. Inicializar shadcn
npx shadcn@latest init

# 3. Substituir globals.css pelo tema Cycle (ver ai/shadcn-theme-mapping.md)

# 4. Importar fontes (Open Sans + Fira Code)

# 5. Adicionar componentes
npx shadcn@latest add button dialog select input toast tabs
```

## Regras para IA

1. **Nunca criar componentes do zero** se o shadcn já tem equivalente
2. **Usar as variáveis CSS do tema** — nunca hardcodar cores
3. **Consultar `ai/shadcn-theme-mapping.md`** para os valores exatos
4. **Paletas de produto** (brand, class, etc.) são extras — não existem no shadcn padrão
5. **Dark mode** via `[data-theme="dark"]` — não `.dark` class
6. **Fontes**: Open Sans (sans) + Fira Code (mono) — configuradas no `@theme inline`
7. **O Figma prevalece** em caso de conflito entre código e design
