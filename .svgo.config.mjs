/**
 * SVGO Configuration — Cycle Design Icons
 *
 * Objetivo: otimizar SVGs preservando a estrutura stroke-based.
 * Todos os ícones são desenhados em 24×24px no Figma.
 *
 * Regra central: NENHUM elemento filho (path, circle, rect...) deve ter
 * fill, stroke ou stroke-width hardcoded. Todos esses valores são
 * controlados pelo BaseIcon via herança CSS do SVG pai.
 */
export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Preserva viewBox — essencial para escalarmos via width/height no React
          removeViewBox: false,
          // Não converte shapes em paths (preserva semântica do ícone)
          convertShapeToPath: false,
          // Mantém grupos que organizam o ícone
          collapseGroups: false,
        },
      },
    },
    // Remove width/height do SVG — definidos via props no React
    'removeDimensions',
    // Remove cores e stroke de TODOS os elementos (svg, path, circle, rect, etc.)
    // Sem o prefixo "svg:", o SVGO aplica a remoção em qualquer elemento.
    // Isso garante que fills e strokes hardcoded (#181D27, #000, etc.) não
    // sobrescrevam o stroke="currentColor" e strokeWidth do BaseIcon.
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'fill',
          'stroke',
          'stroke-width',
          'stroke-linecap',
          'stroke-linejoin',
          'stroke-miterlimit',
          'color',
          'xmlns',
        ],
      },
    },
  ],
}
