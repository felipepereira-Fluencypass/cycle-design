import { forwardRef, cloneElement } from 'react'
import type { HTMLAttributes, CSSProperties, ReactElement } from 'react'

export type BadgeVariant = 'filled' | 'outline' | 'ghost'
export type BadgeColor =
  | 'brand' | 'class' | 'private' | 'group' | 'impulse'
  | 'positive' | 'warning' | 'critical' | 'neutral'
export type BadgeSize = 'md' | 'sm'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Estilo visual. @default 'filled' */
  variant?: BadgeVariant
  /** Paleta de cor. @default 'neutral' */
  color?: BadgeColor
  /** Tamanho. @default 'md' */
  size?: BadgeSize
  /** Icone antes do texto. */
  icon?: ReactElement
  /** Indicador de ponto (sem texto). */
  dot?: boolean
}

/**
 * Badge — indicador compacto com cor e variante.
 *
 * @example
 * <Badge color="positive">Ativo</Badge>
 * <Badge color="critical" variant="outline">Erro</Badge>
 * <Badge color="brand" dot />
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  {
    variant = 'filled',
    color = 'neutral',
    size = 'md',
    icon,
    dot,
    className,
    style,
    children,
    ...rest
  },
  ref,
) {
  const colorVars = color === 'neutral'
    ? {}
    : {
        '--_badge-bg': `var(--bg-${color}-primary)`,
        '--_badge-bg-solid': `var(--bg-${color}-solid)`,
        '--_badge-text': `var(--text-${color}-primary)`,
        '--_badge-fg': `var(--fg-${color}-primary)`,
      }

  const classNames = [
    'cd-badge',
    `cd-badge--${variant}`,
    `cd-badge--${color}`,
    `cd-badge--${size}`,
    dot ? 'cd-badge--dot' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const iconEl = icon
    ? cloneElement(icon as ReactElement<Record<string, unknown>>, {
        size: 'xs',
        decorative: true,
      })
    : null

  return (
    <span
      ref={ref}
      className={classNames}
      style={{ ...colorVars, ...style } as CSSProperties}
      {...rest}
    >
      {dot ? <span className="cd-badge__dot" aria-hidden="true" /> : null}
      {iconEl}
      {children}
    </span>
  )
})
