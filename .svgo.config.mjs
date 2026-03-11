/**
 * SVGO Configuration — Cycle Design Icons
 *
 * Objetivo: otimizar SVGs preservando a estrutura stroke-based.
 * Todos os ícones são desenhados em 24×24px no Figma.
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
    // Remove atributos de stroke/fill hardcoded — controlados pelo BaseIcon
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'svg:fill',
          'svg:stroke',
          'svg:stroke-width',
          'svg:stroke-linecap',
          'svg:stroke-linejoin',
        ],
      },
    },
  ],
}
