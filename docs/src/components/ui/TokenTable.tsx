import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'
import { useClipboard } from '@/hooks/useClipboard'
import { getTokenValue, type TokenMeta } from '@/lib/tokens'
import styles from './TokenTable.module.css'

interface TokenRow {
  token: string
  meta: TokenMeta
  previewType?: 'color' | 'shadow' | 'spacing' | 'radius' | 'opacity' | 'none'
  value?: string // valor fixo (para tokens sem computed value útil)
}

interface TokenTableProps {
  rows: TokenRow[]
  showValue?: boolean
}

function TokenRowItem({ row }: { row: TokenRow }) {
  const [computedValue, setComputedValue] = useState('')
  const { copy, copied, announcement } = useClipboard()

  useEffect(() => {
    if (!row.value) {
      setComputedValue(getTokenValue(row.token))
    }
  }, [row.token, row.value])

  const displayValue = row.value ?? computedValue

  return (
    <tr className={styles.row}>
      <td className={styles.tokenCell}>
        <code className={styles.tokenName}>{row.token}</code>
      </td>
      <td className={styles.previewCell}>
        {row.previewType === 'color' && (
          <div
            className={styles.colorPreview}
            style={{ background: `var(${row.token})` }}
          />
        )}
        {row.previewType === 'shadow' && (
          <div
            className={styles.shadowPreview}
            style={{ boxShadow: `var(${row.token})` }}
          />
        )}
        {row.previewType === 'radius' && (
          <div
            className={styles.radiusPreview}
            style={{ borderRadius: `var(${row.token})` }}
          />
        )}
        {row.previewType === 'opacity' && (
          <div className={styles.opacityPreview}>
            <div
              className={styles.opacityDot}
              style={{ opacity: `var(${row.token})` }}
            />
          </div>
        )}
        {row.previewType === 'spacing' && (
          <div
            className={styles.spacingPreview}
            style={{ width: displayValue }}
          />
        )}
      </td>
      <td className={styles.valueCell}>
        {displayValue && (
          <code className={styles.value}>{displayValue}</code>
        )}
      </td>
      <td className={styles.descCell}>
        <span className={styles.description}>{row.meta.description}</span>
        {row.meta.usage && (
          <span className={styles.usage}>{row.meta.usage}</span>
        )}
      </td>
      <td className={styles.copyCell}>
        <span aria-live="polite" aria-atomic="true" className="sr-only">
          {announcement}
        </span>
        <button
          className={styles.copyBtn}
          onClick={() => copy(row.token)}
          aria-label="Copiar token"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
        </button>
      </td>
    </tr>
  )
}

export function TokenTable({ rows, showValue = true }: TokenTableProps) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Token</th>
            <th className={styles.th}>Preview</th>
            {showValue && <th className={styles.th}>Valor</th>}
            <th className={styles.th}>Descrição</th>
            <th className={styles.th} />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TokenRowItem key={row.token} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
