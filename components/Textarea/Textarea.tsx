import { forwardRef, useCallback, useEffect, useRef, useId } from 'react'
import type { TextareaHTMLAttributes } from 'react'

export type TextareaSize = 'lg' | 'md' | 'sm'

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** Tamanho visual. @default 'md' */
  size?: TextareaSize
  /** Estado de erro — borda vermelha + aria-invalid. */
  error?: boolean
  /** Redimensiona automaticamente com base no conteudo. @default false */
  autoResize?: boolean
}

/**
 * Textarea — campo de texto multi-linha do Cycle Design System.
 *
 * @example
 * <Textarea placeholder="Escreva sua mensagem..." />
 *
 * @example
 * <Textarea autoResize size="lg" />
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { size = 'md', error, autoResize = false, className, disabled, id: idProp, onChange, ...rest },
  ref,
) {
  const autoId = useId()
  const id = idProp ?? autoId
  const internalRef = useRef<HTMLTextAreaElement | null>(null)

  const resize = useCallback(() => {
    const el = internalRef.current
    if (!el || !autoResize) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [autoResize])

  useEffect(() => {
    resize()
  }, [resize])

  const classNames = [
    'cd-textarea',
    `cd-textarea--${size}`,
    error ? 'cd-textarea--error' : undefined,
    disabled ? 'cd-textarea--disabled' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <textarea
      ref={(node) => {
        internalRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
      id={id}
      className={classNames}
      disabled={disabled}
      aria-invalid={error || undefined}
      onChange={(e) => {
        onChange?.(e)
        resize()
      }}
      {...rest}
    />
  )
})
