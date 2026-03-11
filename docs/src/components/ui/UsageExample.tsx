import { Check, X } from 'lucide-react'
import styles from './UsageExample.module.css'

interface UsageExampleProps {
  doExample: {
    label?: string
    code: string
  }
  dontExample: {
    label?: string
    code: string
  }
}

export function UsageExample({ doExample, dontExample }: UsageExampleProps) {
  return (
    <div className={styles.grid}>
      <div className={`${styles.example} ${styles.do}`}>
        <div className={styles.exampleHeader}>
          <span className={styles.icon}><Check size={13} strokeWidth={2.5} /></span>
          <span className={styles.label}>{doExample.label ?? 'Correto'}</span>
        </div>
        <pre className={styles.code}><code>{doExample.code.trim()}</code></pre>
      </div>

      <div className={`${styles.example} ${styles.dont}`}>
        <div className={styles.exampleHeader}>
          <span className={styles.icon}><X size={13} strokeWidth={2.5} /></span>
          <span className={styles.label}>{dontExample.label ?? 'Evitar'}</span>
        </div>
        <pre className={styles.code}><code>{dontExample.code.trim()}</code></pre>
      </div>
    </div>
  )
}
