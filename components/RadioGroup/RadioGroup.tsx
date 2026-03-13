import { forwardRef, createContext, useContext, useId, useCallback } from 'react'
import type { InputHTMLAttributes, CSSProperties, ReactNode, HTMLAttributes } from 'react'

export type RadioColor = 'brand' | 'class' | 'private' | 'group' | 'impulse'
export type RadioSize = 'md' | 'sm'

// ── Context ──────────────────────────────────────────────────

interface RadioGroupContextValue {
  name: string
  value?: string
  size: RadioSize
  color: RadioColor
  disabled?: boolean
  onChange?: (value: string) => void
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

// ── RadioGroup ───────────────────────────────────────────────

export interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Nome do grupo (compartilhado por todos os radios). */
  name: string
  /** Valor selecionado (controlled). */
  value?: string
  /** Tamanho visual de todos os radios. @default 'md' */
  size?: RadioSize
  /** Paleta de cor quando selecionado. @default 'brand' */
  color?: RadioColor
  /** Desabilita todos os radios do grupo. */
  disabled?: boolean
  /** Callback quando o valor muda. */
  onChange?: (value: string) => void
  children: ReactNode
}

/**
 * RadioGroup — container que gerencia o estado de um grupo de Radio buttons.
 *
 * @example
 * <RadioGroup name="plan" value={plan} onChange={setPlan}>
 *   <Radio value="free" label="Free" />
 *   <Radio value="pro" label="Pro" />
 * </RadioGroup>
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
  { name, value, size = 'md', color = 'brand', disabled, onChange, className, children, ...rest },
  ref,
) {
  const classNames = ['cd-radio-group', className].filter(Boolean).join(' ')

  return (
    <RadioGroupContext.Provider value={{ name, value, size, color, disabled, onChange }}>
      <div ref={ref} className={classNames} role="radiogroup" {...rest}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
})

// ── Radio ────────────────────────────────────────────────────

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'onChange'> {
  /** Valor deste radio. */
  value: string
  /** Label visivel ao lado do radio. */
  label?: ReactNode
}

/**
 * Radio — item individual dentro de um RadioGroup.
 *
 * @example
 * <Radio value="option-a" label="Opcao A" />
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { value, label, className, disabled: disabledProp, id: idProp, ...rest },
  ref,
) {
  const ctx = useContext(RadioGroupContext)
  if (!ctx) throw new Error('Radio must be used inside RadioGroup')

  const autoId = useId()
  const id = idProp ?? autoId
  const disabled = disabledProp ?? ctx.disabled
  const checked = ctx.value === value

  const handleChange = useCallback(() => {
    ctx.onChange?.(value)
  }, [ctx, value])

  const colorVars = {
    '--_radio-solid': `var(--bg-${ctx.color}-solid)`,
    '--_radio-solid-hover': `var(--bg-${ctx.color}-solid_hover)`,
    '--_radio-border': `var(--border-${ctx.color})`,
  } as CSSProperties

  const wrapperClasses = [
    'cd-radio',
    `cd-radio--${ctx.size}`,
    disabled ? 'cd-radio--disabled' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={wrapperClasses} style={colorVars} htmlFor={id}>
      <input
        ref={ref}
        id={id}
        type="radio"
        name={ctx.name}
        value={value}
        checked={checked}
        disabled={disabled}
        className="cd-radio__input"
        onChange={handleChange}
        {...rest}
      />
      <span className="cd-radio__control" aria-hidden="true">
        <span className="cd-radio__dot" />
      </span>
      {label && <span className="cd-radio__label">{label}</span>}
    </label>
  )
})
