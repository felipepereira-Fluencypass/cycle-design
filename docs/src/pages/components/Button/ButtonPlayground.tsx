import { useState } from 'react'
import { Button } from '@ui/button'
import { Plus, Search, X } from 'lucide-react'
import styles from './Button.module.css'

type Variant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
type Size = 'default' | 'sm' | 'lg' | 'icon'

export function ButtonPlayground() {
  const [variant, setVariant] = useState<Variant>('default')
  const [size, setSize] = useState<Size>('default')
  const [disabled, setDisabled] = useState(false)
  const [withIcon, setWithIcon] = useState(false)
  const [label, setLabel] = useState('Nova turma')

  return (
    <div className={styles.playground}>
      <div className={styles.playgroundPreview}>
        {size === 'icon' ? (
          <Button variant={variant} size="icon" disabled={disabled} aria-label={label || 'Ação'}>
            <Plus />
          </Button>
        ) : (
          <Button variant={variant} size={size} disabled={disabled}>
            {withIcon && <Search className="mr-2 h-4 w-4" />}
            {label || 'Botão'}
          </Button>
        )}
      </div>

      <div className={styles.playgroundControls}>
        <div className={styles.controlRow}>
          <label className={styles.controlLabel}>variant</label>
          <div className={styles.radioGroup}>
            {(['default', 'secondary', 'outline', 'ghost', 'link', 'destructive'] as Variant[]).map((v) => (
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
          <label className={styles.controlLabel}>size</label>
          <div className={styles.radioGroup}>
            {(['lg', 'default', 'sm', 'icon'] as Size[]).map((s) => (
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

        {size !== 'icon' && (
          <>
            <div className={styles.controlRow}>
              <label className={styles.controlLabel}>icon</label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={withIcon}
                  onChange={(e) => setWithIcon(e.target.checked)}
                />
                SearchIcon
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

        {size === 'icon' && (
          <div className={styles.controlRow}>
            <label className={styles.controlLabel} htmlFor="pg-aria-label">aria-label</label>
            <input
              id="pg-aria-label"
              className={styles.textInput}
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className={styles.playgroundCode}>
        <pre className={styles.codeSnippet}>{generateSnippet({ variant, size, disabled, withIcon, label })}</pre>
      </div>
    </div>
  )
}

function generateSnippet(opts: {
  variant: Variant
  size: Size
  disabled: boolean
  withIcon: boolean
  label: string
}) {
  const props: string[] = []

  if (opts.variant !== 'default') props.push(`variant="${opts.variant}"`)
  if (opts.size !== 'default') props.push(`size="${opts.size}"`)
  if (opts.disabled) props.push('disabled')

  if (opts.size === 'icon') {
    props.push(`aria-label="${opts.label || 'Ação'}"`)
    const propsStr = props.length ? ' ' + props.join(' ') : ''
    return `<Button${propsStr}>\n  <Plus />\n</Button>`
  }

  const propsStr = props.length ? ' ' + props.join(' ') : ''
  const icon = opts.withIcon ? '<Search className="mr-2 h-4 w-4" /> ' : ''
  return `<Button${propsStr}>${icon}${opts.label || 'Botão'}</Button>`
}
