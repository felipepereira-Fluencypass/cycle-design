import { forwardRef } from 'react'
import type { SVGAttributes } from 'react'

export type SpinnerSize = 'lg' | 'md' | 'sm' | 'xs'

const SIZE_PX: Record<SpinnerSize, number> = {
  lg: 32,
  md: 24,
  sm: 16,
  xs: 12,
}

export interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  /** Tamanho. @default 'md' */
  size?: SpinnerSize
  /** Label acessivel para leitores de tela. @default 'Carregando' */
  'aria-label'?: string
}

/**
 * Spinner — indicador de carregamento SVG.
 *
 * @example
 * <Spinner />
 * <Spinner size="lg" aria-label="Salvando..." />
 */
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(function Spinner(
  {
    size = 'md',
    'aria-label': ariaLabel = 'Carregando',
    className,
    ...rest
  },
  ref,
) {
  const px = SIZE_PX[size]

  const classNames = ['cd-spinner', className].filter(Boolean).join(' ')

  return (
    <svg
      ref={ref}
      className={classNames}
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label={ariaLabel}
      {...rest}
    >
      <circle
        className="cd-spinner__track"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        className="cd-spinner__indicator"
        d="M12 2a10 10 0 019.8 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
})
