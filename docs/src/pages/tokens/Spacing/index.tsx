import { PageHeader } from '@/components/ui/PageHeader'
import { TokenTable } from '@/components/ui/TokenTable'
import { Callout } from '@/components/ui/Callout'
import { UsageExample } from '@/components/ui/UsageExample'
import { spacingTokensMeta, spacingInsetTokensMeta } from '@/lib/tokens'
import styles from './Spacing.module.css'

export default function Spacing() {
  const spacingRows = Object.entries(spacingTokensMeta).map(([token, meta]) => ({
    token,
    meta,
    previewType: 'spacing' as const,
    value: meta.value,
  }))

  const insetRows = Object.entries(spacingInsetTokensMeta).map(([token, meta]) => ({
    token,
    meta,
    previewType: 'spacing' as const,
    value: meta.value,
  }))

  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Spacing"
        description="Escala de espaçamento do Cycle Design. Dividida em duas categorias: Spacing (gaps entre elementos) e Spacing Inset (padding interno de componentes)."
      />

      <Callout type="info" title="Duas categorias distintas">
        <p>
          <strong>Spacing</strong> é usado para <code>margin</code>, <code>gap</code> e
          espaçamentos entre elementos. <strong>Spacing Inset</strong> é usado para{' '}
          <code>padding</code> interno de componentes. Manter essa distinção torna o
          sistema mais previsível e consistente.
        </p>
      </Callout>

      <UsageExample
        doExample={{
          label: 'Correto',
          code: `.card { padding: var(--spacing-inset-md); } /* 16px */
.card-list { gap: var(--spacing-xs); }       /* 24px */
.section { margin-bottom: var(--spacing-lg); } /* 48px */`,
        }}
        dontExample={{
          label: 'Evitar',
          code: `.card { padding: 16px; }
.card-list { gap: 24px; }
.section { margin-bottom: 48px; }`,
        }}
      />

      <section className={styles.section}>
        <h2 className={styles.h2}>Spacing</h2>
        <p className={styles.p}>
          Para <code>margin</code>, <code>gap</code> e espaçamento entre elementos e seções.
        </p>
        <TokenTable rows={spacingRows} showValue={true} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Spacing Inset</h2>
        <p className={styles.p}>
          Para <code>padding</code> interno de componentes como botões, inputs, cards e modais.
        </p>
        <TokenTable rows={insetRows} showValue={true} />
      </section>
    </div>
  )
}
