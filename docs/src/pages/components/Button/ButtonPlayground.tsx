import { useState } from 'react'
import { Button } from '@components/Button'
import type { ButtonVariant, ButtonColor, ButtonSize } from '@components/Button'
import { PlusIcon } from '@icons/_generated/PlusIcon'
import { ChevronDownIcon } from '@icons/_generated/ChevronDownIcon'
import { CloseIcon } from '@icons/_generated/CloseIcon'
import styles from './Button.module.css'

export function ButtonPlayground() {
  const [variant, setVariant]     = useState<ButtonVariant>('filled')
  const [color, setColor]         = useState<ButtonColor>('brand')
  const [size, setSize]           = useState<ButtonSize>('md')
  const [disabled, setDisabled]   = useState(false)
  const [iconLeft, setIconLeft]   = useState(false)
  const [iconRight, setIconRight] = useState(false)
  const [iconOnly, setIconOnly]   = useState(false)
  const [label, setLabel]         = useState('Nova turma')
  const [ariaLabel, setAriaLabel] = useState('Fechar')

  const buttonProps = iconOnly
    ? {
        variant,
        color,
        size,
        disabled,
        iconOnly: true as const,
        icon: <CloseIcon />,
        'aria-label': ariaLabel || 'Ação',
      }
    : {
        variant,
        color,
        size,
        disabled,
        iconLeft:  iconLeft  ? <PlusIcon />        : undefined,
        iconRight: iconRight ? <ChevronDownIcon /> : undefined,
        children:  label || 'Botão',
      }

  return (
    <div className={styles.playground}>
      <div className={styles.playgroundPreview}>
        <Button {...(buttonProps as Parameters<typeof Button>[0])} />
      </div>

      <div className={styles.playgroundControls}>
        <div className={styles.controlRow}>
          <label className={styles.controlLabel}>variant</label>
          <div className={styles.radioGroup}>
            {(['filled', 'outline', 'ghost'] as ButtonVariant[]).map((v) => (
              <label key={v} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="variant"
                  value={v}
                  checked={variant === v}
                  onChange={() => setVariant(v)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.controlRow}>
          <label className={styles.controlLabel}>color</label>
          <select
            className={styles.select}
            value={color}
            onChange={(e) => setColor(e.target.value as ButtonColor)}
          >
            {(['brand', 'class', 'private', 'group', 'impulse'] as ButtonColor[]).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className={styles.controlRow}>
          <label className={styles.controlLabel}>size</label>
          <div className={styles.radioGroup}>
            {(['giant', 'lg', 'md', 'sm', 'tiny'] as ButtonSize[]).map((s) => (
              <label key={s} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={size === s}
                  onChange={() => setSize(s)}
                />
                {s}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.controlRow}>
          <label className={styles.controlLabel}>disabled</label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
            ativado
          </label>
        </div>

        <div className={styles.controlRow}>
          <label className={styles.controlLabel}>iconOnly</label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={iconOnly}
              onChange={(e) => {
                setIconOnly(e.target.checked)
                if (e.target.checked) {
                  setIconLeft(false)
                  setIconRight(false)
                }
              }}
            />
            ativado
          </label>
        </div>

        {!iconOnly && (
          <>
            <div className={styles.controlRow}>
              <label className={styles.controlLabel}>iconLeft</label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={iconLeft}
                  onChange={(e) => setIconLeft(e.target.checked)}
                />
                PlusIcon
              </label>
            </div>

            <div className={styles.controlRow}>
              <label className={styles.controlLabel}>iconRight</label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={iconRight}
                  onChange={(e) => setIconRight(e.target.checked)}
                />
                ChevronDownIcon
              </label>
            </div>

            <div className={styles.controlRow}>
              <label className={styles.controlLabel} htmlFor="pg-label">label</label>
              <input
                id="pg-label"
                className={styles.textInput}
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
            </div>
          </>
        )}

        {iconOnly && (
          <div className={styles.controlRow}>
            <label className={styles.controlLabel} htmlFor="pg-aria-label">aria-label</label>
            <input
              id="pg-aria-label"
              className={styles.textInput}
              type="text"
              value={ariaLabel}
              onChange={(e) => setAriaLabel(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className={styles.playgroundCode}>
        <pre className={styles.codeSnippet}>{generateSnippet({ variant, color, size, disabled, iconLeft, iconRight, iconOnly, label, ariaLabel })}</pre>
      </div>
    </div>
  )
}

function generateSnippet(opts: {
  variant: ButtonVariant
  color: ButtonColor
  size: ButtonSize
  disabled: boolean
  iconLeft: boolean
  iconRight: boolean
  iconOnly: boolean
  label: string
  ariaLabel: string
}) {
  const props: string[] = []

  if (opts.variant !== 'filled') props.push(`variant="${opts.variant}"`)
  if (opts.color !== 'brand') props.push(`color="${opts.color}"`)
  if (opts.size !== 'md') props.push(`size="${opts.size}"`)
  if (opts.disabled) props.push('disabled')

  if (opts.iconOnly) {
    props.push('iconOnly')
    props.push('icon={<CloseIcon />}')
    props.push(`aria-label="${opts.ariaLabel || 'Ação'}"`)
    const propsStr = props.length ? '\n  ' + props.join('\n  ') + '\n' : ''
    return `<Button${propsStr}/>`
  }

  if (opts.iconLeft)  props.push('iconLeft={<PlusIcon />}')
  if (opts.iconRight) props.push('iconRight={<ChevronDownIcon />}')

  const propsStr = props.length ? '\n  ' + props.join('\n  ') + '\n' : ''
  return `<Button${propsStr}>${opts.label || 'Botão'}</Button>`
}
