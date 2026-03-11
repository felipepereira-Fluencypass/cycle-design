import { PageHeader } from '@/components/ui/PageHeader'
import { TokenTable } from '@/components/ui/TokenTable'
import { Callout } from '@/components/ui/Callout'
import { shadowTokensMeta } from '@/lib/tokens'
import styles from './Shadows.module.css'

const shadowTokens = Object.keys(shadowTokensMeta)

export default function Shadows() {
  const rows = Object.entries(shadowTokensMeta).map(([token, meta]) => ({
    token,
    meta,
    previewType: 'shadow' as const,
  }))

  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Shadows"
        description="Sete níveis de sombra para criar hierarquia de elevação. De badges sutis a overlays de alto impacto."
      />

      <section className={styles.previewSection}>
        <div className={styles.shadowGrid}>
          {shadowTokens.map((token) => (
            <div key={token} className={styles.shadowCard}>
              <div
                className={styles.shadowBox}
                style={{ boxShadow: `var(${token})` }}
              />
              <code className={styles.shadowToken}>{token}</code>
              <p className={styles.shadowUsage}>{shadowTokensMeta[token].usage}</p>
            </div>
          ))}
        </div>
      </section>

      <Callout type="info" title="Sombras e dark mode">
        <p>
          No dark mode, evite sombras em excesso — elas têm menos impacto visual em
          fundos escuros. Prefira elevar a hierarquia com variações de background
          usando <code>--bg-secondary</code> e <code>--bg-tertiary</code>.
        </p>
      </Callout>

      <TokenTable rows={rows} showValue={false} />
    </div>
  )
}
