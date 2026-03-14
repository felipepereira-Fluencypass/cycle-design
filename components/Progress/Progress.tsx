import { forwardRef } from 'react'
import type { HTMLAttributes, CSSProperties } from 'react'

export type ProgressSize = 'md' | 'sm'
export type ProgressColor = 'brand' | 'class' | 'private' | 'group' | 'impulse' | 'positive'

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Valor atual (0–100). @default 0 */
  value?: number
  /** Valor maximo. @default 100 */
  max?: number
  /** Tamanho da barra. @default 'md' */
  size?: ProgressSize
  /** Paleta de cor. @default 'brand' */
  color?: ProgressColor
  /** Label acessivel. */
  'aria-label'?: string
}

/**
 * Progress — barra de progresso acessivel.
 *
 * @example
 * <Progress value={65} aria-label="Progresso do curso" />
 * <Progress value={30} color="class" size="sm" />
 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  {
    value = 0,
    max = 100,
    size = 'md',
    color = 'brand',
    className,
    style,
    'aria-label': ariaLabel,
    ...rest
  },
  ref,
) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100))

  const colorVars = {
    '--_progress-fill': `var(--bg-${color}-solid)`,
  } as CSSProperties

  const classNames = [
    'cd-progress',
    `cd-progress--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      ref={ref}
      className={classNames}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={ariaLabel}
      style={{ ...colorVars, ...style } as CSSProperties}
      {...rest}
    >
      <div
        className="cd-progress__fill"
        style={{ width: `${percent}%` }}
      />
    </div>
  )
})
