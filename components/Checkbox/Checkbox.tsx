import { forwardRef, useEffect, useRef, useId } from 'react'
import type { InputHTMLAttributes, CSSProperties, ReactNode } from 'react'

export type CheckboxSize = 'md' | 'sm'
export type CheckboxColor = 'brand' | 'class' | 'private' | 'group' | 'impulse'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Tamanho visual. @default 'md' */
  size?: CheckboxSize
  /** Paleta de cor quando marcado. @default 'brand' */
  color?: CheckboxColor
  /** Estado indeterminate (parcialmente marcado). */
  indeterminate?: boolean
  /** Label visivel ao lado do checkbox. */
  label?: ReactNode
  /** Estado de erro. */
  error?: boolean
}

/**
 * Checkbox — controle de selecao do Cycle Design System.
 *
 * Usa `<input type="checkbox">` nativo para acessibilidade maxima.
 * Suporta estados: unchecked, checked, indeterminate, disabled, error.
 *
 * @example
 * <Checkbox label="Aceito os termos" />
 *
 * @example
 * <Checkbox color="class" indeterminate label="Selecionar todos" />
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    size = 'md',
    color = 'brand',
    indeterminate = false,
    label,
    error,
    className,
    disabled,
    id: idProp,
    ...rest
  },
  ref,
) {
  const autoId = useId()
  const id = idProp ?? autoId
  const internalRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (internalRef.current) {
      internalRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  const colorVars = {
    '--_check-solid': `var(--bg-${color}-solid)`,
    '--_check-solid-hover': `var(--bg-${color}-solid_hover)`,
    '--_check-border': `var(--border-${color})`,
  } as CSSProperties

  const wrapperClasses = [
    'cd-checkbox',
    `cd-checkbox--${size}`,
    error ? 'cd-checkbox--error' : undefined,
    disabled ? 'cd-checkbox--disabled' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={wrapperClasses} style={colorVars} htmlFor={id}>
      <input
        ref={(node) => {
          internalRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
        }}
        id={id}
        type="checkbox"
        className="cd-checkbox__input"
        disabled={disabled}
        aria-invalid={error || undefined}
        {...rest}
      />
      <span className="cd-checkbox__control" aria-hidden="true">
        {/* Check icon */}
        <svg className="cd-checkbox__icon cd-checkbox__icon--check" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 6L5 8.5L9.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Indeterminate icon */}
        <svg
          className="cd-checkbox__icon cd-checkbox__icon--indeterminate"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.5 6H9.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {label && <span className="cd-checkbox__label">{label}</span>}
    </label>
  )
})
