import { forwardRef } from 'react'
import type { HTMLAttributes, CSSProperties } from 'react'
import { cn } from '../../src/utils/cn'

export type SkeletonVariant = 'text' | 'circular' | 'rectangular'

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  /** Formato. @default 'text' */
  variant?: SkeletonVariant
  /** Largura (aceita tokens ou valores CSS). */
  width?: string | number
  /** Altura (aceita tokens ou valores CSS). */
  height?: string | number
  /** Desabilita animacao de pulso. */
  static?: boolean
}

/**
 * Skeleton — placeholder de carregamento animado.
 *
 * @example
 * <Skeleton width="200px" />
 * <Skeleton variant="circular" width={40} height={40} />
 * <Skeleton variant="rectangular" width="100%" height={120} />
 */
export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(function Skeleton(
  {
    variant = 'text',
    width,
    height,
    static: isStatic,
    className,
    style,
    ...rest
  },
  ref,
) {
  const classNames = cn(
    'cd-skeleton',
    `cd-skeleton--${variant}`,
    isStatic && 'cd-skeleton--static',
    className,
  )

  const sizeStyle: CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  }

  return (
    <span
      ref={ref}
      className={classNames}
      style={{ ...sizeStyle, ...style }}
      aria-hidden="true"
      data-variant={variant}
      data-static={isStatic || undefined}
      {...rest}
    />
  )
})
