import { PageHeader } from '@/components/ui/PageHeader'
import { TokenTable } from '@/components/ui/TokenTable'
import { radiusTokensMeta } from '@/lib/tokens'
import styles from './BordersRadius.module.css'

const borderWidthTokens = [
  { token: '--border-none', label: 'None', value: '0px', description: 'Sem borda.', usage: 'Elementos sem delimitação visual' },
  { token: '--border-hairline', label: 'Hairline', value: '1px', description: 'Borda padrão. A mais usada.', usage: 'Inputs, cards, dividers, tabelas' },
  { token: '--border-thin', label: 'Thin', value: '2px', description: 'Borda de ênfase.', usage: 'Focus ring, elementos selecionados' },
  { token: '--border-thick', label: 'Thick', value: '4px', description: 'Borda grossa para destaque.', usage: 'Indicadores ativos, barras de progresso' },
  { token: '--border-heavy', label: 'Heavy', value: '8px', description: 'Borda muito grossa.', usage: 'Destaques visuais de alto impacto' },
]

export default function BordersRadius() {
  const radiusRows = Object.entries(radiusTokensMeta).map(([token, meta]) => ({
    token,
    meta,
    previewType: 'radius' as const,
    value: meta.value,
  }))

  const borderRows = borderWidthTokens.map(({ token, value, description, usage }) => ({
    token,
    meta: { label: token, description, usage },
    previewType: 'none' as const,
    value,
  }))

  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Borders & Radius"
        description="Espessuras de borda e raios de arredondamento do Cycle Design. Use-os para definir a forma e o contorno dos componentes."
      />

      <section className={styles.section}>
        <h2 className={styles.h2}>Border Width</h2>
        <p className={styles.p}>
          Tokens de espessura de borda. Use com as propriedades <code>border-width</code>{' '}
          ou como shorthand em <code>border</code>.
        </p>

        <div className={styles.borderPreview}>
          {borderWidthTokens.map((b) => (
            <div key={b.token} className={styles.borderItem}>
              <div
                className={styles.borderLine}
                style={{ borderWidth: `var(${b.token})`, borderStyle: 'solid', borderColor: 'var(--border-brand)' }}
              />
              <div className={styles.borderInfo}>
                <code className={styles.borderToken}>{b.token}</code>
                <span className={styles.borderValue}>{b.value}</span>
              </div>
            </div>
          ))}
        </div>

        <TokenTable rows={borderRows} showValue={true} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Border Radius</h2>
        <p className={styles.p}>
          Nove níveis de arredondamento — de nenhum (quadrado) a circular.
        </p>

        <div className={styles.radiusPreview}>
          {Object.entries(radiusTokensMeta).map(([token, meta]) => (
            <div key={token} className={styles.radiusItem}>
              <div
                className={styles.radiusBox}
                style={{ borderRadius: `var(${token})` }}
              />
              <code className={styles.radiusToken}>{meta.label}</code>
              <span className={styles.radiusValue}>{meta.value}</span>
            </div>
          ))}
        </div>

        <TokenTable rows={radiusRows} showValue={true} />
      </section>
    </div>
  )
}
