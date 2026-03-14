import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Skeleton } from '@components/Skeleton'
import styles from '../Components.module.css'

export default function SkeletonPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Skeleton"
        description="Placeholder de carregamento animado que indica ao usuario que o conteudo esta sendo carregado."
      />

      {/* ── Variantes ────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Variantes</h2>
        <p className={styles.p}>
          O Skeleton possui tres variantes: text (padrao), circular e rectangular.
        </p>

        <h3 className={styles.h3}>Text (padrao)</h3>
        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <Skeleton width="100%" />
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </div>
        </div>

        <h3 className={styles.h3}>Circular</h3>
        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Skeleton variant="circular" width={40} height={40} />
          </div>
        </div>

        <h3 className={styles.h3}>Rectangular</h3>
        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <Skeleton variant="rectangular" width="100%" height={120} />
          </div>
        </div>
      </section>

      {/* ── Static ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Static (sem animacao)</h2>
        <p className={styles.p}>
          A prop static desabilita a animacao de pulso, exibindo apenas o placeholder estatico.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <Skeleton width="100%" static />
            <Skeleton variant="circular" width={40} height={40} static />
            <Skeleton variant="rectangular" width="100%" height={80} static />
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Skeleton } from 'cycle-design'`}
        />
      </section>

      {/* ── Exemplo de uso ───────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Exemplo de uso</h2>
        <p className={styles.p}>
          Utilize o Skeleton como placeholder enquanto o conteudo real esta sendo carregado. Combine variantes para simular o layout final.
        </p>

        <CodeBlock
          language="tsx"
          code={`import { Skeleton } from 'cycle-design'

{/* Text — linhas de texto */}
<Skeleton width="100%" />
<Skeleton width="80%" />

{/* Circular — avatar */}
<Skeleton variant="circular" width={40} height={40} />

{/* Rectangular — imagem ou card */}
<Skeleton variant="rectangular" width="100%" height={120} />

{/* Static — sem animacao */}
<Skeleton width="100%" static />`}
        />
      </section>
    </div>
  )
}
