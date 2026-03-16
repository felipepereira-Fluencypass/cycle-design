import { forwardRef, useId } from 'react'
import type { InputHTMLAttributes, CSSProperties, ReactNode } from 'react'

export type SwitchSize = 'md' | 'sm'
export type SwitchColor = 'brand' | 'class' | 'private' | 'group' | 'impulse'

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'role'> {
  /** Tamanho visual. @default 'md' */
  size?: SwitchSize
  /** Paleta de cor quando ativado. @default 'brand' */
  color?: SwitchColor
  /** Label visivel ao lado do switch. */
  label?: ReactNode
}

/**
 * Switch — controle de liga/desliga do Cycle Design System.
 *
 * Usa `<input type="checkbox" role="switch">` para acessibilidade
 * nativa — screen readers anunciam como "switch" automaticamente.
 *
 * @example
 * <Switch label="Notificacoes" />
 *
 * @example
 * <Switch color="class" size="sm" checked onChange={handleChange} />
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { size = 'md', color = 'brand', label, className, disabled, id: idProp, ...rest },
  ref,
) {
  const autoId = useId()
  const id = idProp ?? autoId

  const colorVars = {
    '--_switch-solid': `var(--bg-${color}-solid)`,
    '--_switch-solid-hover': `var(--bg-${color}-solid_hover)`,
  } as CSSProperties

  const wrapperClasses = [
    'cd-switch',
    `cd-switch--${size}`,
    disabled ? 'cd-switch--disabled' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={wrapperClasses} style={colorVars} htmlFor={id}>
      <input
        ref={ref}
        id={id}
        type="checkbox"
        role="switch"
        className="cd-switch__input"
        disabled={disabled}
        {...rest}
      />
      <span className="cd-switch__track" aria-hidden="true">
        <span className="cd-switch__thumb" />
      </span>
      {label && <span className="cd-switch__label">{label}</span>}
    </label>
  )
})
