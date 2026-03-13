import { forwardRef, useId } from 'react'
import type { SelectHTMLAttributes } from 'react'

export type SelectSize = 'lg' | 'md' | 'sm'

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Tamanho visual. @default 'md' */
  size?: SelectSize
  /** Estado de erro — borda vermelha + aria-invalid. */
  error?: boolean
  /** Placeholder exibido como primeira opcao desabilitada. */
  placeholder?: string
}

/**
 * Select — seletor nativo estilizado do Cycle Design System.
 *
 * Usa `<select>` nativo para acessibilidade maxima (mobile picker,
 * navegacao por teclado, screen readers) sem dependencias externas.
 *
 * @example
 * <Select placeholder="Selecione um idioma">
 *   <option value="en">Ingles</option>
 *   <option value="pt">Portugues</option>
 * </Select>
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { size = 'md', error, placeholder, className, disabled, children, id: idProp, ...rest },
  ref,
) {
  const autoId = useId()
  const id = idProp ?? autoId

  const classNames = [
    'cd-select',
    `cd-select--${size}`,
    error ? 'cd-select--error' : undefined,
    disabled ? 'cd-select--disabled' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classNames}>
      <select
        ref={ref}
        id={id}
        className="cd-select__field"
        disabled={disabled}
        aria-invalid={error || undefined}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <span className="cd-select__chevron" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  )
})
