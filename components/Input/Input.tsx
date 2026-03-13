import { forwardRef, cloneElement, useId } from 'react'
import type { InputHTMLAttributes, ReactElement } from 'react'

export type InputSize = 'lg' | 'md' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Tamanho visual. @default 'md' */
  size?: InputSize
  /** Estado de erro — borda vermelha + aria-invalid. */
  error?: boolean
  /** Icone decorativo a esquerda do input. */
  iconLeft?: ReactElement
  /** Icone decorativo a direita do input. */
  iconRight?: ReactElement
}

const ICON_SIZE = { lg: 'sm', md: 'xs', sm: 'xs' } as const

/**
 * Input — campo de texto do Cycle Design System.
 *
 * @example
 * <Input placeholder="Email" />
 *
 * @example
 * <Input size="lg" error iconLeft={<SearchIcon />} />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = 'md', error, iconLeft, iconRight, className, disabled, id: idProp, ...rest },
  ref,
) {
  const autoId = useId()
  const id = idProp ?? autoId

  const cloneIcon = (el: ReactElement) =>
    cloneElement(el as ReactElement<Record<string, unknown>>, {
      size: ICON_SIZE[size],
      decorative: true,
    })

  const wrapperClasses = [
    'cd-input',
    `cd-input--${size}`,
    error ? 'cd-input--error' : undefined,
    disabled ? 'cd-input--disabled' : undefined,
    iconLeft ? 'cd-input--has-icon-left' : undefined,
    iconRight ? 'cd-input--has-icon-right' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapperClasses}>
      {iconLeft && <span className="cd-input__icon cd-input__icon--left">{cloneIcon(iconLeft)}</span>}
      <input
        ref={ref}
        id={id}
        className="cd-input__field"
        disabled={disabled}
        aria-invalid={error || undefined}
        {...rest}
      />
      {iconRight && <span className="cd-input__icon cd-input__icon--right">{cloneIcon(iconRight)}</span>}
    </div>
  )
})
