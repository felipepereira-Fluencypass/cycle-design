import { forwardRef, cloneElement, useId, isValidElement } from 'react'
import type { HTMLAttributes, ReactElement } from 'react'

export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  /** Texto do label. */
  label: string
  /** Mensagem de ajuda abaixo do input. */
  hint?: string
  /** Mensagem de erro — substitui o hint quando presente. */
  error?: string
  /** Indica campo obrigatorio. */
  required?: boolean
  /** Desabilita o campo. */
  disabled?: boolean
  /** O controle de formulario (Input, Select, Textarea, etc.). */
  children: ReactElement
}

/**
 * Field — wrapper que conecta Label + Input + mensagem de erro/ajuda.
 *
 * Automaticamente:
 * - Gera id unico e conecta label ao input via htmlFor/id
 * - Conecta mensagem de erro/hint via aria-describedby
 * - Passa error e disabled para o input filho
 *
 * @example
 * <Field label="Email" hint="Usaremos para login" required>
 *   <Input type="email" placeholder="seu@email.com" />
 * </Field>
 *
 * @example
 * <Field label="Senha" error="Minimo 8 caracteres">
 *   <Input type="password" />
 * </Field>
 */
export const Field = forwardRef<HTMLDivElement, FieldProps>(function Field(
  { label, hint, error, required, disabled, children, className, ...rest },
  ref,
) {
  const autoId = useId()
  const inputId = `field-${autoId}`
  const messageId = `field-msg-${autoId}`
  const hasMessage = !!error || !!hint

  const classNames = [
    'cd-field',
    error ? 'cd-field--error' : undefined,
    disabled ? 'cd-field--disabled' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // Clone the child to inject id, error, disabled, and aria-describedby
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        id: inputId,
        error: !!error,
        disabled,
        'aria-describedby': hasMessage ? messageId : undefined,
      })
    : children

  return (
    <div ref={ref} className={classNames} {...rest}>
      <label className="cd-field__label" htmlFor={inputId}>
        {label}
        {required && (
          <>
            <span className="cd-field__required" aria-hidden="true">
              *
            </span>
            <span className="sr-only"> (obrigatorio)</span>
          </>
        )}
      </label>
      {control}
      {hasMessage && (
        <p id={messageId} className="cd-field__message" role={error ? 'alert' : undefined}>
          {error || hint}
        </p>
      )}
    </div>
  )
})
