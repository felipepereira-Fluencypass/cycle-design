import { forwardRef } from 'react'
import type { Ref } from 'react'
import { ICON_SIZES } from './sizes'
import type { IconProps } from './types'

/**
 * BaseIcon — wrapper SVG base de todos os ícones do Cycle Design.
 *
 * Responsabilidades:
 * - Aplicar width, height e strokeWidth corretos por size
 * - Garantir fill="none" e stroke="currentColor"
 * - Gerenciar acessibilidade (aria-hidden vs aria-label + role)
 * - Aceitar ref para casos avançados
 *
 * NÃO use BaseIcon diretamente — use os ícones nomeados:
 * import { HomeIcon } from 'cycle-design/icons'
 */
export const BaseIcon = forwardRef<SVGSVGElement, IconProps>(function BaseIcon(
  props,
  ref: Ref<SVGSVGElement>
) {
  const { size = 'sm', decorative, children, className, ...rest } = props

  const { size: px, stroke } = ICON_SIZES[size]

  // Os valores de stroke do Figma são pixels visuais no tamanho renderizado.
  // Como o viewBox é sempre 24×24, o SVG escala o strokeWidth junto com o ícone.
  // Precisamos normalizar para coordenadas do viewBox:
  //   strokeWidth no viewBox = visualStroke × (24 / displaySize)
  // Assim o stroke visual final sempre corresponde ao valor do Design System.
  const VIEWBOX_SIZE = 24
  const normalizedStroke = stroke * (VIEWBOX_SIZE / px)

  const svgProps = {
    ref,
    width: px,
    height: px,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: normalizedStroke,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    ...rest,
  }

  if (decorative) {
    return (
      <svg aria-hidden="true" focusable="false" {...svgProps}>
        {children}
      </svg>
    )
  }

  // Semântico: aria-label vem de rest (garantido pelo tipo IconProps)
  return (
    <svg role="img" {...svgProps}>
      {children}
    </svg>
  )
})
