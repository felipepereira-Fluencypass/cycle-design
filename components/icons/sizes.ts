/**
 * Cycle Design — Icon Size Map
 *
 * Fonte da verdade para componentes React.
 * Derivado de: figma/Icons size/icon-{size}.json
 *
 * REGRA: strokeWidth nunca é prop — é sempre derivado de size.
 * Isso garante consistência visual em todos os ícones.
 */
export const ICON_SIZES = {
  xs: { size: 16, stroke: 1.2 },
  sm: { size: 24, stroke: 1.5 },
  md: { size: 32, stroke: 1.8 },
  lg: { size: 40, stroke: 2.1 },
  xl: { size: 48, stroke: 2.4 },
} as const satisfies Record<string, { size: number; stroke: number }>

export type IconSize = keyof typeof ICON_SIZES
