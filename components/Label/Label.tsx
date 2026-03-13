import { forwardRef } from 'react'
import type { LabelHTMLAttributes } from 'react'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Indica campo obrigatorio — exibe asterisco visual + texto acessivel */
  required?: boolean
  /** Aplica estilo de desabilitado */
  disabled?: boolean
}

/**
 * Label — rotulo acessivel para campos de formulario.
 *
 * @example
 * <Label htmlFor="email">Email</Label>
 *
 * @example
 * <Label htmlFor="name" required>Nome completo</Label>
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { required, disabled, className, children, ...rest },
  ref,
) {
  const classNames = ['cd-label', disabled ? 'cd-label--disabled' : undefined, className]
    .filter(Boolean)
    .join(' ')

  return (
    <label ref={ref} className={classNames} {...rest}>
      {children}
      {required && (
        <>
          <span className="cd-label__required" aria-hidden="true">
            *
          </span>
          <span className="sr-only"> (obrigatorio)</span>
        </>
      )}
    </label>
  )
})
