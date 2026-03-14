import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'

export type SeparatorOrientation = 'horizontal' | 'vertical'

export interface SeparatorProps extends HTMLAttributes<HTMLHRElement> {
  /** Orientacao. @default 'horizontal' */
  orientation?: SeparatorOrientation
}

/**
 * Separator — divisor visual horizontal ou vertical.
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" />
 */
export const Separator = forwardRef<HTMLHRElement, SeparatorProps>(function Separator(
  {
    orientation = 'horizontal',
    className,
    ...rest
  },
  ref,
) {
  const classNames = [
    'cd-separator',
    `cd-separator--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <hr
      ref={ref}
      className={classNames}
      role="separator"
      aria-orientation={orientation}
      {...rest}
    />
  )
})
