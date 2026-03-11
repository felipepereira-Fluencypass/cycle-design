/**
 * SVGO Configuration — Cycle Design Icons
 *
 * Objetivo: otimizar SVGs preservando a estrutura stroke-based.
 * Todos os ícones são desenhados em 24×24px no Figma.
 *
 * Regras de normalização de cor:
 *   fill="#color"   → fill="currentColor"  (mantém preenchimento, cor dinâmica)
 *   fill="none"     → sem alteração         (preenchimento vazio intencional)
 *   stroke="#color" → removido              (herda stroke="currentColor" do SVG pai)
 *   stroke-width    → removido              (herda strokeWidth calculado pelo BaseIcon)
 */
export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          convertShapeToPath: false,
          collapseGroups: false,
          // Preserva stroke="none" explícito (ex: ReplayIcon que é fill puro)
          removeUselessStrokeAndFill: false,
        },
      },
    },
    'removeDimensions',
    {
      name: 'normalizeCycleIcon',
      fn: () => ({
        element: {
          enter(node) {
            if (node.name === 'svg') {
              delete node.attributes.fill
              delete node.attributes.stroke
              delete node.attributes['stroke-width']
              delete node.attributes['stroke-linecap']
              delete node.attributes['stroke-linejoin']
              delete node.attributes['stroke-miterlimit']
              delete node.attributes.color
              delete node.attributes.xmlns
              return
            }

            if (node.attributes.fill && node.attributes.fill !== 'none') {
              node.attributes.fill = 'currentColor'
              node.attributes.stroke = 'none'
              delete node.attributes['stroke-width']
              delete node.attributes['stroke-linecap']
              delete node.attributes['stroke-linejoin']
              delete node.attributes['stroke-miterlimit']
              return
            }

            if (node.attributes.stroke && node.attributes.stroke !== 'none') {
              delete node.attributes.stroke
            }

            delete node.attributes['stroke-width']
            delete node.attributes['stroke-linecap']
            delete node.attributes['stroke-linejoin']
            delete node.attributes['stroke-miterlimit']
          },
        },
      }),
    },
  ],
}
