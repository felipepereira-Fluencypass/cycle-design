# Cycle Design — Decisões e Diretrizes

> Documento de referência com todas as decisões, preocupações e diretrizes definidas pelo time durante o planejamento do Cycle Design (Design System).

---

## 1. Visão geral

**Objetivo:** Construir o Cycle Design, Design System da Fluencypass — completo (código + documentação + design) — que sirva como fonte única da verdade para toda a equipe (+5 pessoas), com suporte a light e dark theme.

**Perfil do time:** Liderado por design, com colaboração técnica.

**Prioridade:** Robustez e escalabilidade a longo prazo.

---

## 2. Arquitetura decidida

### Componentes

- Biblioteca de componentes em **React + TypeScript**
- Publicada como **pacote npm** (`cycle-design`) para ser instalada em qualquer projeto
- Tipagem forte de todas as props — serve como documentação viva e rede de segurança contra quebras

### Tokens

- Fonte da verdade dos tokens: **Figma (variáveis)**
- Cores, tipografia, espaçamento, border radius e breakpoints definidos como **variáveis do Figma**, exportáveis em JSON
- Sombras definidas como **componentes no Figma** (extraídas manualmente ou via conexão Figma)
- No código: tokens convertidos em **CSS custom properties** com suporte a theme switching (light/dark)

### Documentação

- Site de documentação customizado em **React**, construído junto com os componentes
- Deploy em **Vercel ou Netlify** (gratuito), acessível via URL para todo o time (ex: `ds.cycle.com`)
- Cada componente terá: preview interativo, tabela de props, exemplos de uso e guidelines

### Integração com Figma

- **Code Connect** mapeando cada componente do Figma ao componente real no código
- Fluxo de atualização: alteração no Figma → compartilhar node/JSON atualizado → gerar código correspondente

---

## 3. Decisão sobre Storybook

**Decisão atual:** Começar sem Storybook, usando site de documentação customizado.

**Racional:**
- Velocidade inicial maior sem overhead de configuração
- O time itera mais rápido nos primeiros componentes
- Curva de aprendizado zero para a ferramenta de documentação

**Porta aberta para o futuro:**
- A estrutura dos componentes é 100% compatível com Storybook
- Quando o time sentir necessidade (estimativa: ~10-15 componentes maduros), é possível plugar o Storybook e gerar todos os arquivos `.stories.tsx` automaticamente
- Nenhum trabalho feito será perdido na migração

**Benefícios do Storybook a considerar no futuro:**
- Addon ecosystem (testes de acessibilidade, viewport testing, controls automáticos)
- Testes visuais de regressão com Chromatic (screenshot diff)
- Familiaridade da comunidade dev

---

## 4. Integração com ferramentas de IA (vibe coding)

### Como as IAs usam o Design System

As ferramentas de IA (Claude Code, Cursor, Windsurf, Bolt) **não acessam Storybook ou sites de documentação** — elas leem arquivos de código. Para que usem o Design System corretamente, precisam de:

1. **Código dos componentes** com props tipadas em TypeScript
2. **Arquivo de regras** (`CLAUDE.md`, `.cursorrules`) na raiz do projeto
3. **Exemplos de uso** dentro do código ou em arquivos de contexto

### Arquivo de regras para IAs (CLAUDE.md)

Deve conter instruções explícitas como:
- "Sempre importe componentes de `cycle-design`"
- "Nunca recrie um componente que já existe — modifique o arquivo fonte"
- "Mantenha a interface de props retrocompatível"
- "Ao adicionar componente novo, siga a estrutura de pastas definida"
- "Use os tokens definidos — nunca use cores ou valores hardcoded"

---

## 5. Preocupações do time e proteções

### Risco: IA recriar componentes e quebrar referências

**Preocupação:** Ao pedir para alterar um botão, a IA gerar tudo novamente, fazendo componentes que usam o botão perderem a referência.

**Proteções implementadas:**

| Proteção | Como funciona |
|----------|---------------|
| **Arquitetura de pacote** | O botão é um componente exportado com interface tipada. Alterações são feitas no arquivo fonte — todos os imports continuam funcionando. |
| **Arquivo de regras para IA** | Instruções explícitas para nunca duplicar componentes, sempre editar o existente. |
| **TypeScript** | Se uma prop for alterada de forma incompatível, o TS acusa erro em todos os lugares que usam o componente — rede de segurança automática. |
| **Git** | Histórico completo de versões. Qualquer alteração pode ser revertida. |
| **Versionamento semântico** | Publicação do pacote com semver — breaking changes só em major versions, com changelog. |

---

## 6. Fluxo de atualização de componentes

```
Designer altera no Figma
        ↓
Compartilha node/JSON atualizado com o Claude
        ↓
Claude gera código atualizado (diff visível)
        ↓
Time de dev revisa e aplica no repositório
        ↓
TypeScript valida que nada quebrou
        ↓
Nova versão do pacote é publicada
        ↓
Projetos atualizam a dependência
```

---

## 7. Entregáveis do projeto

| Entregável | Descrição |
|------------|-----------|
| **Pacote npm** | Biblioteca de componentes React + TypeScript com tokens |
| **Site de documentação** | App React com preview, props, exemplos — deploy na Vercel/Netlify |
| **CLAUDE.md** | Arquivo de regras para ferramentas de IA |
| **Code Connect** | Mapeamento Figma → código para cada componente |
| **Tokens em CSS** | Custom properties com suporte light/dark theme |
| **Guia de contribuição** | Como adicionar/alterar componentes mantendo a consistência |

---

## 8. Foundation Tokens — Inventário completo ✓

| Token | Arquivo | Status |
|-------|---------|--------|
| **Typography Primitives** | font-family, size, weight, line-height, letter-spacing, text-decoration | ✓ Completo |
| **Typography Compositions** | 38 estilos: Body (8), Subtitle (7), Headline (10), Display (4), Button (6) — todos referenciando primitivos | ✓ Completo |
| **Color Primitives** | 11 paletas (~150 valores): Base, Gray light/dark, Brand, Class, Private, Group, Impulse, Positive, Warning, Critical | ✓ Completo |
| **Color Compositions (Text + Border + Foreground + Alpha)** | ~130 tokens com light/dark mode | ✓ Completo |
| **Color Compositions (Background)** | ~75 tokens com light/dark mode | ✓ Completo |
| **Gradients** | 18 gradients (13 gray + 5 branded) com light/dark mode | ✓ Completo |
| **Border Width** | 5 tokens: none, hairline, thin, thick, heavy | ✓ Completo |
| **Border Radius** | 9 tokens: none → circular | ✓ Completo |
| **Shadows** | 7 níveis: xs → 3xl (com múltiplas camadas) | ✓ Completo |
| **Grid System** | 5 breakpoints (sm/md/lg/xl/max) + layout com panel | ✓ Completo |
| **Opacity** | 7 níveis: transparent → opaque | ✓ Completo |
| **Spacing** | 16 tokens de gap (2px → 200px) + 7 tokens de inset (4px → 40px) | ✓ Completo |
| **Icons** | Em desenvolvimento no Figma | ⏳ Pendente |

---

## 9. Próximos passos

1. ~~Exportar JSON dos tokens do Figma e importar para o código~~ ✓
2. Adicionar tokens de ícones quando estiverem prontos
3. Definir estrutura de pastas do repositório
4. Criar os primeiros componentes base (Button, Input, Card)
5. Montar o site de documentação com os componentes criados
6. Configurar o CLAUDE.md e testar com ferramentas de IA
7. Deploy do site de documentação
8. Avaliar necessidade do Storybook quando atingir ~10-15 componentes

---

*Documento gerado a partir das discussões do time em março/2026. Atualizar conforme novas decisões forem tomadas.*
