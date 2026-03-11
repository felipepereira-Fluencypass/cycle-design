import { PageHeader } from '@/components/ui/PageHeader'
import { Callout } from '@/components/ui/Callout'
import { gridTokensMeta } from '@/lib/tokens'
import styles from './Grid.module.css'

export default function Grid() {
  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Grid"
        description="Sistema de grid responsivo com 5 breakpoints. De 4 colunas no mobile a 16 colunas no desktop."
      />

      <Callout type="info" title="Como usar">
        <p>
          Os tokens de breakpoint definem os tamanhos de container. Use-os com{' '}
          <code>@media</code> queries para criar layouts responsivos alinhados ao
          grid do Figma.
        </p>
      </Callout>

      <div className={styles.gridList}>
        {Object.entries(gridTokensMeta).map(([token, meta]) => (
          <div key={token} className={styles.gridItem}>
            <div className={styles.gridInfo}>
              <div className={styles.gridLabel}>
                <span className={styles.gridName}>{meta.label}</span>
                <code className={styles.gridToken}>{token}</code>
              </div>
              <div className={styles.gridSpecs}>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Container</span>
                  <strong>{meta.container}</strong>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Colunas</span>
                  <strong>{meta.columns}</strong>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Uso</span>
                  <span>{meta.usage}</span>
                </div>
              </div>
            </div>
            <div className={styles.gridPreview}>
              {Array.from({ length: Math.min(meta.columns, 16) }).map((_, i) => (
                <div key={i} className={styles.gridCol} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
