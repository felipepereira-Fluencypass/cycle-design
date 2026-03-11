// ============================================
// CYCLE DESIGN — Token Metadata
// ============================================
// Fonte de verdade dos VALORES: ../../../tokens/ (arquivos CSS)
// Este arquivo contém apenas metadados para a documentação:
// labels, descrições, categorias e exemplos de uso.
// Os valores reais são lidos em runtime via getComputedStyle.
// ============================================

export type TokenMeta = {
  label: string
  description: string
  usage?: string
  note?: string
}

// ============================================
// UTILITY — Lê valor real de um token CSS
// ============================================
export function getTokenValue(token: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim()
}

// ============================================
// COLOR PALETTES — Estrutura para swatches
// ============================================
export type PaletteMeta = {
  label: string
  description: string
  prefix: string
  steps: number[]
  hasTransparent?: boolean
}

export const colorPalettes: Record<string, PaletteMeta> = {
  'gray-light': {
    label: 'Gray Light',
    description: 'Escala de cinza para o light mode. Base para textos, bordas e backgrounds.',
    prefix: 'color-gray-light',
    steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  'gray-dark': {
    label: 'Gray Dark',
    description: 'Escala de cinza para o dark mode. Usada nas composições do tema escuro.',
    prefix: 'color-gray-dark',
    steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  brand: {
    label: 'Brand',
    description: 'Identidade visual principal da Fluencypass. Tom coral/vermelho.',
    prefix: 'color-brand',
    steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    hasTransparent: true,
  },
  class: {
    label: 'Class',
    description: 'Paleta da funcionalidade Class. Azul.',
    prefix: 'color-class',
    steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    hasTransparent: true,
  },
  private: {
    label: 'Private',
    description: 'Paleta da funcionalidade Private. Laranja.',
    prefix: 'color-private',
    steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    hasTransparent: true,
  },
  group: {
    label: 'Group',
    description: 'Paleta da funcionalidade Group. Verde.',
    prefix: 'color-group',
    steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    hasTransparent: true,
  },
  impulse: {
    label: 'Impulse',
    description: 'Paleta da funcionalidade Impulse. Roxo.',
    prefix: 'color-impulse',
    steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    hasTransparent: true,
  },
  positive: {
    label: 'Positive',
    description: 'Semântica de sucesso e estados positivos. Verde-teal.',
    prefix: 'color-positive',
    steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  warning: {
    label: 'Warning',
    description: 'Semântica de atenção e alertas. Amarelo-âmbar.',
    prefix: 'color-warning',
    steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  critical: {
    label: 'Critical',
    description: 'Semântica de erro e estados críticos. Vermelho.',
    prefix: 'color-critical',
    steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
}

// ============================================
// GROUPED TOKEN STRUCTURE
// ============================================
export type TokenSubGroup = {
  label: string
  tokens: Array<[string, TokenMeta]>
}

// ============================================
// FUNCTIONAL TOKENS — TEXT (grouped)
// ============================================
export const textTokensGrouped: TokenSubGroup[] = [
  {
    label: 'Base',
    tokens: [
      ['--text-primary', { label: 'Text Primary', description: 'Cor de texto principal. Para títulos e textos de maior importância.', usage: 'h1, h2, labels importantes, dados em destaque', note: 'Inverte automaticamente no dark mode.' }],
      ['--text-primary_on-brand', { label: 'Text Primary on Brand', description: 'Texto principal sobre fundos de marca.', usage: 'Texto em botões primários, banners de marca' }],
      ['--text-secondary', { label: 'Text Secondary', description: 'Texto de suporte e conteúdo secundário.', usage: 'Parágrafos, descrições, textos de apoio' }],
      ['--text-secondary_hover', { label: 'Text Secondary Hover', description: 'Variante hover do texto secundário.', usage: 'Estado hover de links e textos interativos' }],
      ['--text-secondary_on-brand', { label: 'Text Secondary on Brand', description: 'Texto secundário sobre fundos de marca.', usage: 'Subtítulos em banners de marca' }],
      ['--text-tertiary', { label: 'Text Tertiary', description: 'Texto de menor ênfase, informações complementares.', usage: 'Metadados, legendas, hints, labels de campo' }],
      ['--text-tertiary_hover', { label: 'Text Tertiary Hover', description: 'Variante hover do texto terciário.', usage: 'Estado hover de elementos de suporte' }],
      ['--text-tertiary_on-brand', { label: 'Text Tertiary on Brand', description: 'Texto terciário sobre fundos de marca.', usage: 'Informações complementares em banners de marca' }],
      ['--text-quaternary', { label: 'Text Quaternary', description: 'Texto muito sutil para elementos de baixa hierarquia.', usage: 'Timestamps, separadores textuais, microcopy' }],
      ['--text-quaternary_on-brand', { label: 'Text Quaternary on Brand', description: 'Texto quaternário sobre fundos de marca.', usage: 'Microtextos em banners de marca' }],
      ['--text-white', { label: 'Text White', description: 'Texto sempre branco, independente do tema.', usage: 'Textos sobre fundos escuros fixos' }],
      ['--text-white_alt', { label: 'Text White Alt', description: 'Branco no light mode, escuro (#181D27) no dark mode. Inverte automaticamente com o tema.', usage: 'Textos que precisam contrastar com o fundo em ambos os temas' }],
      ['--text-black', { label: 'Text Black', description: 'Texto sempre escuro, independente do tema.', usage: 'Textos sobre fundos claros fixos' }],
      ['--text-disabled', { label: 'Text Disabled', description: 'Cor de texto para elementos no estado desabilitado.', usage: 'Inputs, botões e controles desabilitados' }],
      ['--text-placeholder', { label: 'Text Placeholder', description: 'Cor de placeholder em campos de texto.', usage: 'Atributo placeholder de inputs e textareas' }],
      ['--text-placeholder_subtle', { label: 'Text Placeholder Subtle', description: 'Placeholder muito suave para campos de destaque.', usage: 'Placeholders em campos de busca' }],
    ],
  },
  {
    label: 'Semantic',
    tokens: [
      ['--text-critical-primary', { label: 'Text Critical', description: 'Texto de estado crítico ou erro.', usage: 'Mensagens de erro, validações negativas' }],
      ['--text-warning-primary', { label: 'Text Warning', description: 'Texto de estado de alerta.', usage: 'Avisos, alertas de atenção' }],
      ['--text-positive-primary', { label: 'Text Positive', description: 'Texto de estado positivo ou sucesso.', usage: 'Confirmações, mensagens de sucesso' }],
    ],
  },
  {
    label: 'Brand',
    tokens: [
      ['--text-brand-primary', { label: 'Text Brand Primary', description: 'Texto na cor da marca. Para links e destaques de identidade.', usage: 'Links, destaques de marca, CTAs textuais' }],
      ['--text-brand-secondary', { label: 'Text Brand Secondary', description: 'Texto de marca em nível secundário.', usage: 'Sublinks, textos de apoio em cor de marca' }],
      ['--text-brand-secondary_hover', { label: 'Text Brand Secondary Hover', description: 'Hover do texto de marca secundário.', usage: 'Estado hover de links de marca' }],
      ['--text-brand-tertiary', { label: 'Text Brand Tertiary', description: 'Texto de marca em nível terciário.', usage: 'Informações complementares em cor de marca' }],
      ['--text-brand-tertiary_alt', { label: 'Text Brand Tertiary Alt', description: 'Variante alternativa do texto de marca terciário.', usage: 'Texto em fundos de marca section' }],
    ],
  },
  {
    label: 'Class',
    tokens: [
      ['--text-class-primary', { label: 'Text Class Primary', description: 'Texto na cor da paleta Class (azul).', usage: 'Links e destaques de Class' }],
      ['--text-class-secondary', { label: 'Text Class Secondary', description: 'Texto Class em nível secundário.', usage: 'Textos de apoio em cor Class' }],
      ['--text-class-secondary_hover', { label: 'Text Class Secondary Hover', description: 'Hover do texto Class secundário.', usage: 'Estado hover de links Class' }],
      ['--text-class-tertiary', { label: 'Text Class Tertiary', description: 'Texto Class em nível terciário.', usage: 'Informações complementares Class' }],
      ['--text-class-tertiary_alt', { label: 'Text Class Tertiary Alt', description: 'Variante alternativa do texto Class terciário.', usage: 'Texto em fundos Class section' }],
    ],
  },
  {
    label: 'Private',
    tokens: [
      ['--text-private-primary', { label: 'Text Private Primary', description: 'Texto na cor da paleta Private (laranja).', usage: 'Links e destaques de Private' }],
      ['--text-private-secondary', { label: 'Text Private Secondary', description: 'Texto Private em nível secundário.', usage: 'Textos de apoio em cor Private' }],
      ['--text-private-secondary_hover', { label: 'Text Private Secondary Hover', description: 'Hover do texto Private secundário.', usage: 'Estado hover de links Private' }],
      ['--text-private-tertiary', { label: 'Text Private Tertiary', description: 'Texto Private em nível terciário.', usage: 'Informações complementares Private' }],
      ['--text-private-tertiary_alt', { label: 'Text Private Tertiary Alt', description: 'Variante alternativa do texto Private terciário.', usage: 'Texto em fundos Private section' }],
    ],
  },
  {
    label: 'Group',
    tokens: [
      ['--text-group-primary', { label: 'Text Group Primary', description: 'Texto na cor da paleta Group (verde).', usage: 'Links e destaques de Group' }],
      ['--text-group-secondary', { label: 'Text Group Secondary', description: 'Texto Group em nível secundário.', usage: 'Textos de apoio em cor Group' }],
      ['--text-group-secondary_hover', { label: 'Text Group Secondary Hover', description: 'Hover do texto Group secundário.', usage: 'Estado hover de links Group' }],
      ['--text-group-tertiary', { label: 'Text Group Tertiary', description: 'Texto Group em nível terciário.', usage: 'Informações complementares Group' }],
      ['--text-group-tertiary_alt', { label: 'Text Group Tertiary Alt', description: 'Variante alternativa do texto Group terciário.', usage: 'Texto em fundos Group section' }],
    ],
  },
  {
    label: 'Impulse',
    tokens: [
      ['--text-impulse-primary', { label: 'Text Impulse Primary', description: 'Texto na cor da paleta Impulse (roxo).', usage: 'Links e destaques de Impulse' }],
      ['--text-impulse-secondary', { label: 'Text Impulse Secondary', description: 'Texto Impulse em nível secundário.', usage: 'Textos de apoio em cor Impulse' }],
      ['--text-impulse-secondary_hover', { label: 'Text Impulse Secondary Hover', description: 'Hover do texto Impulse secundário.', usage: 'Estado hover de links Impulse' }],
      ['--text-impulse-tertiary', { label: 'Text Impulse Tertiary', description: 'Texto Impulse em nível terciário.', usage: 'Informações complementares Impulse' }],
      ['--text-impulse-tertiary_alt', { label: 'Text Impulse Tertiary Alt', description: 'Variante alternativa do texto Impulse terciário.', usage: 'Texto em fundos Impulse section' }],
    ],
  },
]

// ============================================
// FUNCTIONAL TOKENS — BORDER (grouped)
// ============================================
export const borderTokensGrouped: TokenSubGroup[] = [
  {
    label: 'Base',
    tokens: [
      ['--border-primary', { label: 'Border Primary', description: 'Borda principal. A mais usada para delimitar e separar componentes.', usage: 'Inputs, cards, dividers, tabelas' }],
      ['--border-secondary', { label: 'Border Secondary', description: 'Borda mais suave para separações discretas.', usage: 'Agrupamentos, separadores leves' }],
      ['--border-tertiary', { label: 'Border Tertiary', description: 'Borda muito sutil para separações de baixo contraste.', usage: 'Fundos com textura, separações internas de card' }],
      ['--border-quaternary', { label: 'Border Quaternary', description: 'Borda de ênfase média. Mais visível que primary.', usage: 'Inputs em foco, elementos destacados' }],
      ['--border-disabled', { label: 'Border Disabled', description: 'Borda de elementos no estado desabilitado.', usage: 'Inputs, botões e controles desabilitados' }],
      ['--border-disabled_subtle', { label: 'Border Disabled Subtle', description: 'Borda sutil de elementos desabilitados.', usage: 'Variante suave de elementos desabilitados' }],
    ],
  },
  {
    label: 'Brand',
    tokens: [
      ['--border-brand', { label: 'Border Brand', description: 'Borda na cor da marca. Para foco e elementos ativos.', usage: 'Focus ring, elementos selecionados, tabs ativas' }],
      ['--border-brand_hover', { label: 'Border Brand Hover', description: 'Borda de marca escurecida para hover.', usage: 'Estado hover de elementos com borda de marca' }],
      ['--border-brand_alt', { label: 'Border Brand Alt', description: 'Variante alternativa da borda de marca.', usage: 'Elementos de destaque de marca' }],
    ],
  },
  {
    label: 'Class',
    tokens: [
      ['--border-class', { label: 'Border Class', description: 'Borda da paleta Class (azul).', usage: 'Elementos da funcionalidade Class' }],
      ['--border-class_hover', { label: 'Border Class Hover', description: 'Hover da borda Class.', usage: 'Estado hover de bordas Class' }],
      ['--border-class_alt', { label: 'Border Class Alt', description: 'Variante alternativa da borda Class.', usage: 'Elementos de destaque Class' }],
    ],
  },
  {
    label: 'Private',
    tokens: [
      ['--border-private', { label: 'Border Private', description: 'Borda da paleta Private (laranja).', usage: 'Elementos da funcionalidade Private' }],
      ['--border-private_hover', { label: 'Border Private Hover', description: 'Hover da borda Private.', usage: 'Estado hover de bordas Private' }],
      ['--border-private_alt', { label: 'Border Private Alt', description: 'Variante alternativa da borda Private.', usage: 'Elementos de destaque Private' }],
    ],
  },
  {
    label: 'Group',
    tokens: [
      ['--border-group', { label: 'Border Group', description: 'Borda da paleta Group (verde).', usage: 'Elementos da funcionalidade Group' }],
      ['--border-group_hover', { label: 'Border Group Hover', description: 'Hover da borda Group.', usage: 'Estado hover de bordas Group' }],
      ['--border-group_alt', { label: 'Border Group Alt', description: 'Variante alternativa da borda Group.', usage: 'Elementos de destaque Group' }],
    ],
  },
  {
    label: 'Impulse',
    tokens: [
      ['--border-impulse', { label: 'Border Impulse', description: 'Borda da paleta Impulse (roxo).', usage: 'Elementos da funcionalidade Impulse' }],
      ['--border-impulse_hover', { label: 'Border Impulse Hover', description: 'Hover da borda Impulse.', usage: 'Estado hover de bordas Impulse' }],
      ['--border-impulse_alt', { label: 'Border Impulse Alt', description: 'Variante alternativa da borda Impulse.', usage: 'Elementos de destaque Impulse' }],
    ],
  },
]

// ============================================
// FUNCTIONAL TOKENS — FOREGROUND (grouped)
// ============================================
export const fgTokensGrouped: TokenSubGroup[] = [
  {
    label: 'Base',
    tokens: [
      ['--fg-primary', { label: 'Foreground Primary', description: 'Cor principal para ícones e elementos gráficos.', usage: 'Ícones primários, elementos decorativos importantes' }],
      ['--fg-secondary', { label: 'Foreground Secondary', description: 'Ícones e elementos gráficos de suporte.', usage: 'Ícones secundários, indicadores' }],
      ['--fg-secondary_hover', { label: 'Foreground Secondary Hover', description: 'Hover do foreground secundário.', usage: 'Estado hover de ícones interativos' }],
      ['--fg-tertiary', { label: 'Foreground Tertiary', description: 'Ícones de baixa hierarquia.', usage: 'Ícones decorativos, indicadores sutis' }],
      ['--fg-tertiary_hover', { label: 'Foreground Tertiary Hover', description: 'Hover do foreground terciário.', usage: 'Estado hover de ícones de terceiro nível' }],
      ['--fg-quaternary', { label: 'Foreground Quaternary', description: 'Ícones muito sutis.', usage: 'Decorações, chevrons desabilitados' }],
      ['--fg-quaternary_hover', { label: 'Foreground Quaternary Hover', description: 'Hover do foreground quaternário.', usage: 'Estado hover de ícones quaternários' }],
      ['--fg-white', { label: 'Foreground White', description: 'Ícone sempre branco.', usage: 'Ícones sobre fundos escuros ou sólidos' }],
      ['--fg-white_alt', { label: 'Foreground White Alt', description: 'Branco no light mode, escuro (#181D27) no dark mode. Inverte automaticamente com o tema.', usage: 'Ícones que precisam contrastar com o fundo em ambos os temas' }],
      ['--fg-disabled', { label: 'Foreground Disabled', description: 'Ícones em estado desabilitado.', usage: 'Controles e botões desabilitados' }],
      ['--fg-disabled_subtle', { label: 'Foreground Disabled Subtle', description: 'Ícones muito sutis no estado desabilitado.', usage: 'Elementos de UI desabilitados com baixo contraste' }],
    ],
  },
  {
    label: 'Brand',
    tokens: [
      ['--fg-brand-primary', { label: 'Foreground Brand Primary', description: 'Ícones na cor da marca.', usage: 'Ícones de identidade da marca' }],
      ['--fg-brand-primary_alt', { label: 'Foreground Brand Primary Alt', description: 'Variante alternativa do foreground de marca.', usage: 'Ícones em contextos de marca alternativa' }],
      ['--fg-brand-secondary', { label: 'Foreground Brand Secondary', description: 'Ícones de marca em nível secundário.', usage: 'Ícones decorativos de marca' }],
      ['--fg-brand-secondary_alt', { label: 'Foreground Brand Secondary Alt', description: 'Variante alternativa do foreground de marca secundário.', usage: 'Ícones em fundos de marca alternativa' }],
    ],
  },
  {
    label: 'Class',
    tokens: [
      ['--fg-class-primary', { label: 'Foreground Class Primary', description: 'Ícones na cor Class (azul).', usage: 'Ícones da funcionalidade Class' }],
      ['--fg-class-primary_alt', { label: 'Foreground Class Primary Alt', description: 'Variante alternativa do foreground Class.', usage: 'Ícones Class em contextos alternativos' }],
      ['--fg-class-secondary', { label: 'Foreground Class Secondary', description: 'Ícones Class em nível secundário.', usage: 'Ícones decorativos Class' }],
      ['--fg-class-secondary_alt', { label: 'Foreground Class Secondary Alt', description: 'Variante alternativa do foreground Class secundário.', usage: 'Ícones Class em fundos alternativos' }],
    ],
  },
  {
    label: 'Private',
    tokens: [
      ['--fg-private-primary', { label: 'Foreground Private Primary', description: 'Ícones na cor Private (laranja).', usage: 'Ícones da funcionalidade Private' }],
      ['--fg-private-primary_alt', { label: 'Foreground Private Primary Alt', description: 'Variante alternativa do foreground Private.', usage: 'Ícones Private em contextos alternativos' }],
      ['--fg-private-secondary', { label: 'Foreground Private Secondary', description: 'Ícones Private em nível secundário.', usage: 'Ícones decorativos Private' }],
      ['--fg-private-secondary_alt', { label: 'Foreground Private Secondary Alt', description: 'Variante alternativa do foreground Private secundário.', usage: 'Ícones Private em fundos alternativos' }],
    ],
  },
  {
    label: 'Group',
    tokens: [
      ['--fg-group-primary', { label: 'Foreground Group Primary', description: 'Ícones na cor Group (verde).', usage: 'Ícones da funcionalidade Group' }],
      ['--fg-group-primary_alt', { label: 'Foreground Group Primary Alt', description: 'Variante alternativa do foreground Group.', usage: 'Ícones Group em contextos alternativos' }],
      ['--fg-group-secondary', { label: 'Foreground Group Secondary', description: 'Ícones Group em nível secundário.', usage: 'Ícones decorativos Group' }],
      ['--fg-group-secondary_alt', { label: 'Foreground Group Secondary Alt', description: 'Variante alternativa do foreground Group secundário.', usage: 'Ícones Group em fundos alternativos' }],
    ],
  },
  {
    label: 'Impulse',
    tokens: [
      ['--fg-impulse-primary', { label: 'Foreground Impulse Primary', description: 'Ícones na cor Impulse (roxo).', usage: 'Ícones da funcionalidade Impulse' }],
      ['--fg-impulse-primary_alt', { label: 'Foreground Impulse Primary Alt', description: 'Variante alternativa do foreground Impulse.', usage: 'Ícones Impulse em contextos alternativos' }],
      ['--fg-impulse-secondary', { label: 'Foreground Impulse Secondary', description: 'Ícones Impulse em nível secundário.', usage: 'Ícones decorativos Impulse' }],
      ['--fg-impulse-secondary_alt', { label: 'Foreground Impulse Secondary Alt', description: 'Variante alternativa do foreground Impulse secundário.', usage: 'Ícones Impulse em fundos alternativos' }],
    ],
  },
  {
    label: 'Semantic',
    tokens: [
      ['--fg-critical-primary', { label: 'Foreground Critical Primary', description: 'Ícone de estado crítico.', usage: 'Ícones de erro e alerta crítico' }],
      ['--fg-critical-secondary', { label: 'Foreground Critical Secondary', description: 'Ícone crítico em nível secundário.', usage: 'Ícones de suporte a estados de erro' }],
      ['--fg-warning-primary', { label: 'Foreground Warning Primary', description: 'Ícone de estado de atenção.', usage: 'Ícones de aviso e alerta' }],
      ['--fg-warning-secondary', { label: 'Foreground Warning Secondary', description: 'Ícone de atenção em nível secundário.', usage: 'Ícones de suporte a estados de atenção' }],
      ['--fg-positive-primary', { label: 'Foreground Positive Primary', description: 'Ícone de estado positivo.', usage: 'Ícones de sucesso e confirmação' }],
      ['--fg-positive-secondary', { label: 'Foreground Positive Secondary', description: 'Ícone positivo em nível secundário.', usage: 'Ícones de suporte a estados de sucesso' }],
    ],
  },
]

// ============================================
// FUNCTIONAL TOKENS — BACKGROUND (grouped)
// ============================================
export const bgTokensGrouped: TokenSubGroup[] = [
  {
    label: 'Base',
    tokens: [
      ['--bg-primary', { label: 'Background Primary', description: 'Fundo principal da aplicação.', usage: 'Body, páginas, containers principais' }],
      ['--bg-primary_alt', { label: 'Background Primary Alt', description: 'Variante alternativa do fundo principal.', usage: 'Painéis alternativos, modais' }],
      ['--bg-primary_hover', { label: 'Background Primary Hover', description: 'Hover do fundo principal.', usage: 'Estado hover de containers clicáveis' }],
      ['--bg-primary-solid', { label: 'Background Primary Solid', description: 'Fundo sólido principal. Sempre escuro.', usage: 'Tooltips escuros, menus inversos' }],
      ['--bg-secondary', { label: 'Background Secondary', description: 'Fundo de superfícies secundárias.', usage: 'Sidebars, painéis, seções de fundo' }],
      ['--bg-secondary_alt', { label: 'Background Secondary Alt', description: 'Variante alternativa do fundo secundário.', usage: 'Alternância de fundo em listas' }],
      ['--bg-secondary_hover', { label: 'Background Secondary Hover', description: 'Hover do fundo secundário.', usage: 'Estado hover de itens de lista' }],
      ['--bg-secondary_subtle', { label: 'Background Secondary Subtle', description: 'Fundo secundário muito sutil.', usage: 'Realces de baixo contraste' }],
      ['--bg-secondary-solid', { label: 'Background Secondary Solid', description: 'Fundo sólido secundário.', usage: 'Badges neutros, tags' }],
      ['--bg-tertiary', { label: 'Background Tertiary', description: 'Fundo de terceiro nível.', usage: 'Inputs, blocos de código, áreas internas' }],
      ['--bg-quaternary', { label: 'Background Quaternary', description: 'Fundo de quarto nível.', usage: 'Superfícies de destaque sutil, hover de cards' }],
      ['--bg-active', { label: 'Background Active', description: 'Fundo de elemento ativo ou selecionado.', usage: 'Item ativo em listas e navegação' }],
      ['--bg-disabled', { label: 'Background Disabled', description: 'Fundo de elementos desabilitados.', usage: 'Inputs, botões e controles desabilitados' }],
      ['--bg-disabled_subtle', { label: 'Background Disabled Subtle', description: 'Fundo sutil de elementos desabilitados.', usage: 'Variante suave de estados desabilitados' }],
      ['--bg-overlay', { label: 'Background Overlay', description: 'Fundo de overlay escuro.', usage: 'Modais, drawers, overlays de página' }],
    ],
  },
  {
    label: 'Brand',
    tokens: [
      ['--bg-brand-primary', { label: 'Background Brand Primary', description: 'Fundo suave na cor da marca.', usage: 'Tags, alertas leves, highlights de marca' }],
      ['--bg-brand-primary_alt', { label: 'Background Brand Primary Alt', description: 'Variante alternativa do fundo de marca.', usage: 'Alternância de fundo em elementos de marca' }],
      ['--bg-brand-hover', { label: 'Background Brand Hover', description: 'Hover do fundo de marca.', usage: 'Estado hover de elementos de marca' }],
      ['--bg-brand-secondary', { label: 'Background Brand Secondary', description: 'Fundo de marca em nível secundário.', usage: 'Seções de marca em destaque' }],
      ['--bg-brand-solid', { label: 'Background Brand Solid', description: 'Fundo sólido na cor da marca. Para CTAs e destaques primários.', usage: 'Botões primários, badges de marca' }],
      ['--bg-brand-solid_hover', { label: 'Background Brand Solid Hover', description: 'Hover do fundo sólido de marca.', usage: 'Estado hover de botões primários' }],
      ['--bg-brand-section', { label: 'Background Brand Section', description: 'Fundo escuro de seção de marca.', usage: 'Banners de marca, seções hero de marca' }],
      ['--bg-brand-section_subtle', { label: 'Background Brand Section Subtle', description: 'Fundo de seção de marca mais suave.', usage: 'Variante mais clara de seções de marca' }],
    ],
  },
  {
    label: 'Class',
    tokens: [
      ['--bg-class-primary', { label: 'Background Class Primary', description: 'Fundo suave na cor Class.', usage: 'Tags e badges Class' }],
      ['--bg-class-primary_alt', { label: 'Background Class Primary Alt', description: 'Variante alternativa do fundo Class.', usage: 'Alternância de fundo Class' }],
      ['--bg-class-hover', { label: 'Background Class Hover', description: 'Hover do fundo Class.', usage: 'Estado hover de elementos Class' }],
      ['--bg-class-secondary', { label: 'Background Class Secondary', description: 'Fundo Class em nível secundário.', usage: 'Seções Class em destaque' }],
      ['--bg-class-solid', { label: 'Background Class Solid', description: 'Fundo sólido Class.', usage: 'Botões e badges sólidos Class' }],
      ['--bg-class-solid_hover', { label: 'Background Class Solid Hover', description: 'Hover do fundo sólido Class.', usage: 'Estado hover de botões Class' }],
      ['--bg-class-section', { label: 'Background Class Section', description: 'Fundo escuro de seção Class.', usage: 'Banners e seções Class' }],
      ['--bg-class-section_subtle', { label: 'Background Class Section Subtle', description: 'Variante suave de seção Class.', usage: 'Seções Class mais claras' }],
    ],
  },
  {
    label: 'Private',
    tokens: [
      ['--bg-private-primary', { label: 'Background Private Primary', description: 'Fundo suave na cor Private.', usage: 'Tags e badges Private' }],
      ['--bg-private-primary_alt', { label: 'Background Private Primary Alt', description: 'Variante alternativa do fundo Private.', usage: 'Alternância de fundo Private' }],
      ['--bg-private-hover', { label: 'Background Private Hover', description: 'Hover do fundo Private.', usage: 'Estado hover de elementos Private' }],
      ['--bg-private-secondary', { label: 'Background Private Secondary', description: 'Fundo Private em nível secundário.', usage: 'Seções Private em destaque' }],
      ['--bg-private-solid', { label: 'Background Private Solid', description: 'Fundo sólido Private.', usage: 'Botões e badges sólidos Private' }],
      ['--bg-private-solid_hover', { label: 'Background Private Solid Hover', description: 'Hover do fundo sólido Private.', usage: 'Estado hover de botões Private' }],
      ['--bg-private-section', { label: 'Background Private Section', description: 'Fundo escuro de seção Private.', usage: 'Banners e seções Private' }],
      ['--bg-private-section_subtle', { label: 'Background Private Section Subtle', description: 'Variante suave de seção Private.', usage: 'Seções Private mais claras' }],
    ],
  },
  {
    label: 'Group',
    tokens: [
      ['--bg-group-primary', { label: 'Background Group Primary', description: 'Fundo suave na cor Group.', usage: 'Tags e badges Group' }],
      ['--bg-group-primary_alt', { label: 'Background Group Primary Alt', description: 'Variante alternativa do fundo Group.', usage: 'Alternância de fundo Group' }],
      ['--bg-group-hover', { label: 'Background Group Hover', description: 'Hover do fundo Group.', usage: 'Estado hover de elementos Group' }],
      ['--bg-group-secondary', { label: 'Background Group Secondary', description: 'Fundo Group em nível secundário.', usage: 'Seções Group em destaque' }],
      ['--bg-group-solid', { label: 'Background Group Solid', description: 'Fundo sólido Group.', usage: 'Botões e badges sólidos Group' }],
      ['--bg-group-solid_hover', { label: 'Background Group Solid Hover', description: 'Hover do fundo sólido Group.', usage: 'Estado hover de botões Group' }],
      ['--bg-group-section', { label: 'Background Group Section', description: 'Fundo escuro de seção Group.', usage: 'Banners e seções Group' }],
      ['--bg-group-section_subtle', { label: 'Background Group Section Subtle', description: 'Variante suave de seção Group.', usage: 'Seções Group mais claras' }],
    ],
  },
  {
    label: 'Impulse',
    tokens: [
      ['--bg-impulse-primary', { label: 'Background Impulse Primary', description: 'Fundo suave na cor Impulse.', usage: 'Tags e badges Impulse' }],
      ['--bg-impulse-primary_alt', { label: 'Background Impulse Primary Alt', description: 'Variante alternativa do fundo Impulse.', usage: 'Alternância de fundo Impulse' }],
      ['--bg-impulse-hover', { label: 'Background Impulse Hover', description: 'Hover do fundo Impulse.', usage: 'Estado hover de elementos Impulse' }],
      ['--bg-impulse-secondary', { label: 'Background Impulse Secondary', description: 'Fundo Impulse em nível secundário.', usage: 'Seções Impulse em destaque' }],
      ['--bg-impulse-solid', { label: 'Background Impulse Solid', description: 'Fundo sólido Impulse.', usage: 'Botões e badges sólidos Impulse' }],
      ['--bg-impulse-solid_hover', { label: 'Background Impulse Solid Hover', description: 'Hover do fundo sólido Impulse.', usage: 'Estado hover de botões Impulse' }],
      ['--bg-impulse-section', { label: 'Background Impulse Section', description: 'Fundo escuro de seção Impulse.', usage: 'Banners e seções Impulse' }],
      ['--bg-impulse-section_subtle', { label: 'Background Impulse Section Subtle', description: 'Variante suave de seção Impulse.', usage: 'Seções Impulse mais claras' }],
    ],
  },
  {
    label: 'Semantic',
    tokens: [
      ['--bg-critical-primary', { label: 'Background Critical Primary', description: 'Fundo suave de estado crítico.', usage: 'Alertas de erro, banners de falha' }],
      ['--bg-critical-secondary', { label: 'Background Critical Secondary', description: 'Fundo crítico em nível secundário.', usage: 'Seções de erro secundárias' }],
      ['--bg-critical-solid', { label: 'Background Critical Solid', description: 'Fundo sólido de erro.', usage: 'Badges de erro, botões destrutivos' }],
      ['--bg-critical-solid_hover', { label: 'Background Critical Solid Hover', description: 'Hover do fundo sólido crítico.', usage: 'Estado hover de botões destrutivos' }],
      ['--bg-warning-primary', { label: 'Background Warning Primary', description: 'Fundo suave de estado de atenção.', usage: 'Alertas de aviso, banners de atenção' }],
      ['--bg-warning-secondary', { label: 'Background Warning Secondary', description: 'Fundo de atenção em nível secundário.', usage: 'Seções de aviso secundárias' }],
      ['--bg-warning-solid', { label: 'Background Warning Solid', description: 'Fundo sólido de atenção.', usage: 'Badges de aviso, botões de atenção' }],
      ['--bg-warning-solid_hover', { label: 'Background Warning Solid Hover', description: 'Hover do fundo sólido de atenção.', usage: 'Estado hover de botões de atenção' }],
      ['--bg-positive-primary', { label: 'Background Positive Primary', description: 'Fundo suave de estado positivo.', usage: 'Alertas de sucesso, banners de confirmação' }],
      ['--bg-positive-secondary', { label: 'Background Positive Secondary', description: 'Fundo positivo em nível secundário.', usage: 'Seções de sucesso secundárias' }],
      ['--bg-positive-solid', { label: 'Background Positive Solid', description: 'Fundo sólido de sucesso.', usage: 'Badges de sucesso, botões de confirmação' }],
      ['--bg-positive-solid_hover', { label: 'Background Positive Solid Hover', description: 'Hover do fundo sólido de sucesso.', usage: 'Estado hover de botões de confirmação' }],
    ],
  },
]

// ============================================
// FUNCTIONAL TOKENS — ALPHA
// ============================================
export const alphaTokensMeta: Record<string, TokenMeta> = {
  '--alpha-backdrop': {
    label: 'Alpha Backdrop',
    description: 'Overlay escuro para modais e drawers. Preto a 60% de opacidade.',
    usage: 'Fundo de modais, sidebars overlay, dialogs',
    note: 'Igual em light e dark mode.',
  },
  '--alpha-overlay': {
    label: 'Alpha Overlay',
    description: 'Overlay claro. Branco a 60% de opacidade.',
    usage: 'Overlays de carregamento sobre áreas claras',
    note: 'Igual em light e dark mode.',
  },
  '--alpha-transparent': {
    label: 'Alpha Transparent',
    description: 'Completamente transparente. Branco a 0%.',
    usage: 'Estado inicial de transições de fade, reset de background',
    note: 'Igual em light e dark mode.',
  },
}

// ============================================
// FUNCTIONAL TOKENS — GRADIENTS (grouped)
// ============================================
export type GradientTokenMeta = TokenMeta & { direction: string }

export const gradientTokensGrouped: Array<{ label: string; tokens: Array<[string, GradientTokenMeta]> }> = [
  {
    label: 'Gray — Escuros',
    tokens: [
      ['--gradient-gray-500-600', { label: '500 → 600', direction: 'to left', description: 'Gradiente de cinza médio a médio-escuro.', usage: 'Banners neutros, fondos de seção' }],
      ['--gradient-gray-600-700', { label: '600 → 700', direction: 'to left', description: 'Gradiente de cinza médio-escuro a escuro.', usage: 'Cabeçalhos neutros' }],
      ['--gradient-gray-600-800', { label: '600 → 800', direction: 'to left', description: 'Gradiente de cinza médio-escuro a muito escuro.', usage: 'Fundos de alto contraste' }],
      ['--gradient-gray-700-800', { label: '700 → 800', direction: 'to left', description: 'Gradiente entre tons escuros de cinza.', usage: 'Seções de rodapé, fundos escuros' }],
      ['--gradient-gray-600-900', { label: '600 → 900', direction: 'to left', description: 'Gradiente amplo do cinza médio ao quase-preto.', usage: 'Heroes escuros, banners dramáticos' }],
      ['--gradient-gray-700-900', { label: '700 → 900', direction: 'to left', description: 'Gradiente dos tons mais escuros de cinza.', usage: 'Elementos de alto contraste' }],
    ],
  },
  {
    label: 'Gray — Claros',
    tokens: [
      ['--gradient-gray-50-white', { label: '50 → White', direction: 'to left', description: 'Gradiente suave de quase-branco ao branco puro.', usage: 'Fade de conteúdo, seções de transição' }],
      ['--gradient-gray-100-white', { label: '100 → White', direction: 'to left', description: 'Gradiente levemente mais escuro ao branco.', usage: 'Fundos de seção com fade suave' }],
      ['--gradient-gray-100-25', { label: '100 → 25', direction: 'to left', description: 'Gradiente entre tons muito claros de cinza.', usage: 'Backgrounds de cards com transição suave' }],
      ['--gradient-gray-100-50', { label: '100 → 50', direction: 'to left', description: 'Gradiente de cinza claro a muito claro.', usage: 'Elementos de fundo de baixo contraste' }],
      ['--gradient-gray-200-25', { label: '200 → 25', direction: 'to left', description: 'Gradiente de cinza leve ao quase-branco.', usage: 'Divisores com fade, seções leves' }],
      ['--gradient-gray-200-50', { label: '200 → 50', direction: 'to left', description: 'Gradiente entre tons claros de cinza.', usage: 'Fundos de tabela com alternância suave' }],
      ['--gradient-gray-200-100', { label: '200 → 100', direction: 'to left', description: 'Gradiente de cinza 200 ao 100.', usage: 'Transições sutis de superfície' }],
    ],
  },
  {
    label: 'Marca',
    tokens: [
      ['--gradient-brand', { label: 'Brand', direction: 'to left', description: 'Gradiente da identidade da marca (coral/vermelho). Escuro ao tom médio.', usage: 'Heroes de marca, banners principais, CTAs impactantes' }],
      ['--gradient-class', { label: 'Class', direction: 'to left', description: 'Gradiente da paleta Class (azul escuro ao médio).', usage: 'Banners e seções da funcionalidade Class' }],
      ['--gradient-private', { label: 'Private', direction: 'to left', description: 'Gradiente da paleta Private (laranja escuro ao médio).', usage: 'Banners e seções da funcionalidade Private' }],
      ['--gradient-group', { label: 'Group', direction: 'to left', description: 'Gradiente da paleta Group (verde escuro ao médio).', usage: 'Banners e seções da funcionalidade Group' }],
      ['--gradient-impulse', { label: 'Impulse', direction: 'to left', description: 'Gradiente da paleta Impulse (roxo escuro ao médio).', usage: 'Banners e seções da funcionalidade Impulse' }],
    ],
  },
]

// ============================================
// SPACING TOKENS
// ============================================
export type SpacingTokenMeta = TokenMeta & { value: string }

export const spacingTokensMeta: Record<string, SpacingTokenMeta> = {
  '--spacing-quarck': { label: 'Quarck', value: '2px', description: 'Micro ajuste entre elementos muito próximos.', usage: 'Offsets finos, ajustes de alinhamento' },
  '--spacing-nano': { label: 'Nano', value: '4px', description: 'Espaçamento mínimo para ícones e badges.', usage: 'Gap entre ícone e texto, badges' },
  '--spacing-micro': { label: 'Micro', value: '8px', description: 'Espaçamento pequeno entre elementos relacionados.', usage: 'Gap entre itens inline, chips' },
  '--spacing-mini': { label: 'Mini', value: '12px', description: 'Espaçamento compacto em componentes densos.', usage: 'Itens de lista, rows de tabela' },
  '--spacing-3xs': { label: '3xs', value: '16px', description: 'Espaçamento padrão entre elementos.', usage: 'Gap entre cards, seções compactas' },
  '--spacing-2xs': { label: '2xs', value: '20px', description: 'Espaçamento entre grupos de elementos.', usage: 'Gap entre grupos de formulário' },
  '--spacing-xs': { label: 'xs', value: '24px', description: 'Espaçamento confortável entre blocos.', usage: 'Gap entre cards, entre seções menores' },
  '--spacing-sm': { label: 'sm', value: '32px', description: 'Espaçamento para seções pequenas.', usage: 'Margin entre seções de formulário' },
  '--spacing-md': { label: 'md', value: '40px', description: 'Espaçamento médio entre seções.', usage: 'Margin-bottom de seções de página' },
  '--spacing-lg': { label: 'lg', value: '48px', description: 'Espaçamento para seções grandes.', usage: 'Padding de heroes, containers' },
  '--spacing-xl': { label: 'xl', value: '56px', description: 'Espaçamento amplo.', usage: 'Seções de destaque, heroes' },
  '--spacing-2xl': { label: '2xl', value: '64px', description: 'Espaçamento largo.', usage: 'Seções de landing page' },
  '--spacing-3xl': { label: '3xl', value: '80px', description: 'Espaçamento extra largo.', usage: 'Separação de grandes seções' },
  '--spacing-big': { label: 'Big', value: '120px', description: 'Espaçamento grande para layouts espaçosos.', usage: 'Heroes, seções de marketing' },
  '--spacing-huge': { label: 'Huge', value: '160px', description: 'Espaçamento muito grande.', usage: 'Seções de destaque máximo' },
  '--spacing-giant': { label: 'Giant', value: '200px', description: 'Espaçamento gigante.', usage: 'Layouts de alto impacto' },
}

export const spacingInsetTokensMeta: Record<string, SpacingTokenMeta> = {
  '--spacing-inset-2xs': { label: 'Inset 2xs', value: '4px', description: 'Padding interno mínimo.', usage: 'Tags, badges, chips compactos' },
  '--spacing-inset-xs': { label: 'Inset xs', value: '8px', description: 'Padding interno pequeno.', usage: 'Botões pequenos, inputs compactos' },
  '--spacing-inset-sm': { label: 'Inset sm', value: '12px', description: 'Padding interno padrão compacto.', usage: 'Botões médios, dropdowns' },
  '--spacing-inset-md': { label: 'Inset md', value: '16px', description: 'Padding interno padrão.', usage: 'Botões grandes, inputs, cards' },
  '--spacing-inset-lg': { label: 'Inset lg', value: '24px', description: 'Padding interno confortável.', usage: 'Cards de conteúdo, modais' },
  '--spacing-inset-xl': { label: 'Inset xl', value: '32px', description: 'Padding interno amplo.', usage: 'Containers, seções' },
  '--spacing-inset-2xl': { label: 'Inset 2xl', value: '40px', description: 'Padding interno largo.', usage: 'Modais grandes, painéis' },
}

// ============================================
// SHADOW TOKENS
// ============================================
export const shadowTokensMeta: Record<string, TokenMeta> = {
  '--shadow-xs': { label: 'Shadow xs', description: 'Sombra sutil para elevação mínima.', usage: 'Badges, avatares, elementos pequenos elevados' },
  '--shadow-sm': { label: 'Shadow sm', description: 'Sombra leve. A mais comum para cards e inputs.', usage: 'Cards, inputs, botões' },
  '--shadow-md': { label: 'Shadow md', description: 'Sombra média para elementos flutuantes.', usage: 'Dropdowns, selects, tooltips' },
  '--shadow-lg': { label: 'Shadow lg', description: 'Sombra alta para overlays e popovers.', usage: 'Popovers, date pickers, menus contextuais' },
  '--shadow-xl': { label: 'Shadow xl', description: 'Sombra forte para modais.', usage: 'Modais, dialogs, painéis laterais' },
  '--shadow-2xl': { label: 'Shadow 2xl', description: 'Sombra máxima para overlays de alto impacto.', usage: 'Overlays fullscreen, drawers' },
  '--shadow-3xl': { label: 'Shadow 3xl', description: 'Sombra ultra para elementos de destaque máximo.', usage: 'Elementos hero, showcases' },
}

// ============================================
// BORDER RADIUS TOKENS
// ============================================
export const radiusTokensMeta: Record<string, TokenMeta & { value: string }> = {
  '--radius-none': { label: 'None', value: '0px', description: 'Sem arredondamento. Formas geométricas precisas.', usage: 'Separadores, divisores, elementos geométricos' },
  '--radius-xs': { label: 'xs', value: '4px', description: 'Arredondamento mínimo.', usage: 'Tags, badges, chips, tooltips' },
  '--radius-sm': { label: 'sm', value: '8px', description: 'Arredondamento padrão para a maioria dos componentes.', usage: 'Inputs, botões, cards, dropdowns' },
  '--radius-md': { label: 'md', value: '12px', description: 'Arredondamento médio para elementos maiores.', usage: 'Cards grandes, modais, sheets' },
  '--radius-lg': { label: 'lg', value: '16px', description: 'Arredondamento largo.', usage: 'Cards de destaque, painéis' },
  '--radius-xl': { label: 'xl', value: '20px', description: 'Arredondamento amplo.', usage: 'Banners, cards de hero' },
  '--radius-xxl': { label: 'xxl', value: '24px', description: 'Arredondamento muito amplo.', usage: 'Elementos de marketing, ilustrações' },
  '--radius-pill': { label: 'Pill', value: '500px', description: 'Formato pílula.', usage: 'Badges, botões pill, progress bars' },
  '--radius-circular': { label: 'Circular', value: '1000px', description: 'Formato circular perfeito.', usage: 'Avatares, ícones circulares, FABs' },
}

// ============================================
// OPACITY TOKENS
// ============================================
export const opacityTokensMeta: Record<string, TokenMeta & { value: string }> = {
  '--opacity-transparent': { label: 'Transparent', value: '0', description: 'Totalmente transparente.', usage: 'Estados de fade-out completo' },
  '--opacity-semitransparent': { label: 'Semitransparent', value: '0.08', description: 'Quase invisível. Overlays muito sutis.', usage: 'Hover states, highlights sutis' },
  '--opacity-light': { label: 'Light', value: '0.16', description: 'Leve transparência.', usage: 'Overlays leves, disabled states' },
  '--opacity-medium': { label: 'Medium', value: '0.32', description: 'Transparência média.', usage: 'Elementos desabilitados, backgrounds de modal' },
  '--opacity-intense': { label: 'Intense', value: '0.64', description: 'Pouca transparência.', usage: 'Elementos de sobreposição, tooltips' },
  '--opacity-semiopaque': { label: 'Semiopaque', value: '0.72', description: 'Quase opaco.', usage: 'Backgrounds de toast, notificações' },
  '--opacity-opaque': { label: 'Opaque', value: '1', description: 'Totalmente opaco.', usage: 'Estado padrão de todos os elementos' },
}

// ============================================
// GRID TOKENS
// ============================================
export const gridTokensMeta: Record<string, TokenMeta & { container: string; columns: number }> = {
  '--breakpoint-sm': { label: 'sm', container: '320px', columns: 4, description: 'Mobile pequeno. Grid de 4 colunas.', usage: 'Smartphones pequenos' },
  '--breakpoint-md': { label: 'md', container: '672px', columns: 8, description: 'Tablet. Grid de 8 colunas.', usage: 'Tablets, mobile landscape' },
  '--breakpoint-lg': { label: 'lg', container: '1056px', columns: 16, description: 'Desktop pequeno. Grid de 16 colunas.', usage: 'Laptops, desktops compactos' },
  '--breakpoint-xl': { label: 'xl', container: '1312px', columns: 16, description: 'Desktop padrão. Grid de 16 colunas.', usage: 'Desktops, monitores padrão' },
  '--breakpoint-max': { label: 'max', container: '1584px', columns: 16, description: 'Desktop largo. Grid de 16 colunas.', usage: 'Monitores grandes, widescreen' },
}

// ============================================
// TYPOGRAPHY CLASSES
// ============================================
export type TypographyClassMeta = {
  class: string
  label: string
  size: string
  weight: string
  lineHeight: string
  category: 'body' | 'subtitle' | 'headline' | 'display' | 'button'
  description: string
}

export const typographyClasses: TypographyClassMeta[] = [
  // Body
  { class: 'body-xs', label: 'Body xs', size: '10px', weight: '400', lineHeight: '16px', category: 'body', description: 'Texto mínimo para anotações e metadados.' },
  { class: 'body-xs-semibold', label: 'Body xs Semibold', size: '10px', weight: '600', lineHeight: '16px', category: 'body', description: 'Texto mínimo com ênfase.' },
  { class: 'body-sm', label: 'Body sm', size: '12px', weight: '400', lineHeight: '18px', category: 'body', description: 'Texto secundário. Labels, hints, microcopy.' },
  { class: 'body-sm-semibold', label: 'Body sm Semibold', size: '12px', weight: '600', lineHeight: '18px', category: 'body', description: 'Labels com ênfase, microtextos importantes.' },
  { class: 'body-md', label: 'Body md', size: '14px', weight: '400', lineHeight: '20px', category: 'body', description: 'Texto padrão. O mais usado no produto.' },
  { class: 'body-md-semibold', label: 'Body md Semibold', size: '14px', weight: '600', lineHeight: '20px', category: 'body', description: 'Texto padrão com ênfase. Rótulos importantes.' },
  { class: 'body-lg', label: 'Body lg', size: '16px', weight: '400', lineHeight: '24px', category: 'body', description: 'Texto confortável para leitura de conteúdo.' },
  { class: 'body-lg-semibold', label: 'Body lg Semibold', size: '16px', weight: '600', lineHeight: '24px', category: 'body', description: 'Texto confortável com ênfase.' },
  // Subtitle
  { class: 'subtitle-sm', label: 'Subtitle sm', size: '14px', weight: '700', lineHeight: '20px', category: 'subtitle', description: 'Subtítulo pequeno para seções compactas.' },
  { class: 'subtitle-sm-strikethrough', label: 'Subtitle sm Strikethrough', size: '14px', weight: '700', lineHeight: '20px', category: 'subtitle', description: 'Subtítulo com riscado. Preços originais.' },
  { class: 'subtitle-md', label: 'Subtitle md', size: '16px', weight: '700', lineHeight: '24px', category: 'subtitle', description: 'Subtítulo médio para subseções de página.' },
  { class: 'subtitle-md-strikethrough', label: 'Subtitle md Strikethrough', size: '16px', weight: '700', lineHeight: '24px', category: 'subtitle', description: 'Subtítulo médio riscado.' },
  { class: 'subtitle-lg', label: 'Subtitle lg', size: '18px', weight: '700', lineHeight: '28px', category: 'subtitle', description: 'Subtítulo grande para títulos de seção.' },
  { class: 'subtitle-lg-strikethrough', label: 'Subtitle lg Strikethrough', size: '18px', weight: '700', lineHeight: '28px', category: 'subtitle', description: 'Subtítulo grande riscado.' },
  { class: 'subtitle-lg-regular', label: 'Subtitle lg Regular', size: '18px', weight: '400', lineHeight: '28px', category: 'subtitle', description: 'Subtítulo grande sem negrito.' },
  // Headline
  { class: 'headline-sm', label: 'Headline sm', size: '20px', weight: '700', lineHeight: '28px', category: 'headline', description: 'Título de destaque pequeno.' },
  { class: 'headline-sm-regular', label: 'Headline sm Regular', size: '20px', weight: '400', lineHeight: '28px', category: 'headline', description: 'Título de destaque pequeno sem negrito.' },
  { class: 'headline-md', label: 'Headline md', size: '24px', weight: '700', lineHeight: '32px', category: 'headline', description: 'Título de destaque médio. Títulos de página.' },
  { class: 'headline-md-regular', label: 'Headline md Regular', size: '24px', weight: '400', lineHeight: '32px', category: 'headline', description: 'Título de destaque médio sem negrito.' },
  { class: 'headline-lg', label: 'Headline lg', size: '32px', weight: '700', lineHeight: '40px', category: 'headline', description: 'Título grande. Headings principais de página.' },
  { class: 'headline-lg-regular', label: 'Headline lg Regular', size: '32px', weight: '400', lineHeight: '40px', category: 'headline', description: 'Título grande sem negrito.' },
  { class: 'headline-xl', label: 'Headline xl', size: '40px', weight: '700', lineHeight: '48px', category: 'headline', description: 'Título grande para heroes e destaques.' },
  { class: 'headline-xl-regular', label: 'Headline xl Regular', size: '40px', weight: '400', lineHeight: '48px', category: 'headline', description: 'Título grande sem negrito.' },
  { class: 'headline-xxl', label: 'Headline xxl', size: '48px', weight: '700', lineHeight: '56px', category: 'headline', description: 'Título máximo para heroes e marketing.' },
  { class: 'headline-xxl-regular', label: 'Headline xxl Regular', size: '48px', weight: '400', lineHeight: '56px', category: 'headline', description: 'Título máximo sem negrito.' },
  // Display
  { class: 'display-md', label: 'Display md', size: '64px', weight: '800', lineHeight: '72px', category: 'display', description: 'Tipografia decorativa média. Landing pages.' },
  { class: 'display-md-light', label: 'Display md Light', size: '64px', weight: '300', lineHeight: '72px', category: 'display', description: 'Tipografia decorativa média com peso leve.' },
  { class: 'display-lg', label: 'Display lg', size: '72px', weight: '800', lineHeight: '90px', category: 'display', description: 'Tipografia decorativa máxima. Alto impacto.' },
  { class: 'display-lg-light', label: 'Display lg Light', size: '72px', weight: '300', lineHeight: '90px', category: 'display', description: 'Tipografia decorativa máxima com peso leve.' },
  // Button
  { class: 'button-sm', label: 'Button sm', size: '12px', weight: '700', lineHeight: '18px', category: 'button', description: 'Texto de botão pequeno.' },
  { class: 'button-sm-underline', label: 'Button sm Underline', size: '12px', weight: '700', lineHeight: '18px', category: 'button', description: 'Link estilo botão pequeno com sublinhado.' },
  { class: 'button-md', label: 'Button md', size: '14px', weight: '700', lineHeight: '20px', category: 'button', description: 'Texto de botão médio. O mais usado.' },
  { class: 'button-md-underline', label: 'Button md Underline', size: '14px', weight: '700', lineHeight: '20px', category: 'button', description: 'Link estilo botão médio com sublinhado.' },
  { class: 'button-lg', label: 'Button lg', size: '16px', weight: '700', lineHeight: '24px', category: 'button', description: 'Texto de botão grande.' },
  { class: 'button-lg-underline', label: 'Button lg Underline', size: '16px', weight: '700', lineHeight: '24px', category: 'button', description: 'Link estilo botão grande com sublinhado.' },
]
