import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'
import { useClipboard } from '@/hooks/useClipboard'
import { getTokenValue } from '@/lib/tokens'
import styles from './ColorSwatch.module.css'

type BadgeVariant = 'recomendado' | 'restrito' | 'decorativo'

const badgeLabel: Record<BadgeVariant, string> = {
  recomendado: 'recomendado',
  restrito: 'restrito',
  decorativo: 'decorativo',
}

interface ColorSwatchProps {
  token: string
  label: string
  description?: string
  size?: 'sm' | 'md'
  badge?: BadgeVariant
}

export function ColorSwatch({ token, label, description, size = 'md', badge }: ColorSwatchProps) {
  const [value, setValue] = useState('')
  const { copy, copied, announcement } = useClipboard()

  useEffect(() => {
    setValue(getTokenValue(token))
  }, [token])

  return (
    <div className={`${styles.swatch} ${styles[size]}`} onClick={() => copy(token)}>
      <span aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </span>
      <div
        className={styles.preview}
        style={{ background: `var(${token})` }}
      />
      <div className={styles.info}>
        <span className={styles.tokenRow}>
          <span className={styles.token}>{token}</span>
          {badge && (
            <span className={`${styles.badge} ${styles[`badge-${badge}`]}`}>
              {badgeLabel[badge]}
            </span>
          )}
        </span>
        {description && <span className={styles.description}>{description}</span>}
        <span className={styles.value}>{value || '—'}</span>
      </div>
      <button className={styles.copy} aria-label="Copiar token">
        {copied ? <Check size={12} /> : <Copy size={12} />}
      </button>
    </div>
  )
}

interface GradientSwatchProps {
  token: string
  label: string
  description?: string
}

export function GradientSwatch({ token, label, description }: GradientSwatchProps) {
  const { copy, copied, announcement } = useClipboard()

  return (
    <div className={`${styles.swatch} ${styles.md}`} onClick={() => copy(token)}>
      <span aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </span>
      <div
        className={styles.gradientPreview}
        style={{ background: `var(${token})` }}
      />
      <div className={styles.info}>
        <span className={styles.token}>{token}</span>
        {description && <span className={styles.description}>{description}</span>}
        <span className={styles.value}>{label}</span>
      </div>
      <button className={styles.copy} aria-label="Copiar token">
        {copied ? <Check size={12} /> : <Copy size={12} />}
      </button>
    </div>
  )
}

interface PaletteSwatchProps {
  tokenName: string
  step: number | string
}

export function PaletteSwatch({ tokenName, step }: PaletteSwatchProps) {
  const token = `--${tokenName}-${step}`
  const [value, setValue] = useState('')
  const { copy, copied, announcement } = useClipboard()

  useEffect(() => {
    setValue(getTokenValue(token))
  }, [token])

  return (
    <div className={styles.paletteSwatch} onClick={() => copy(token)} title={token}>
      <span aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </span>
      <div
        className={styles.palettePreview}
        style={{ background: `var(${token})` }}
      />
      <div className={styles.paletteInfo}>
        <span className={styles.paletteStep}>{step}</span>
        <span className={styles.paletteValue}>{value || '—'}</span>
      </div>
      {copied && (
        <div className={styles.copiedBadge}>
          <Check size={10} /> Copiado
        </div>
      )}
    </div>
  )
}
