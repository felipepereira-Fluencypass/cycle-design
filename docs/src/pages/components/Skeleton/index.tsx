import { Skeleton } from '@ui/skeleton'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import styles from '../Components.module.css'

export default function SkeletonPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Skeleton"
        description="Placeholder de carregamento animado. Usa animate-pulse do Tailwind com o tema Cycle Design."
      />

      {/* ── Exemplos ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Exemplos</h2>
        <p className={styles.p}>
          O Skeleton é um div com animação de pulso. Controle tamanho e forma via className ou style.
        </p>

        <h3 className={styles.h3}>Texto</h3>
        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>

        <h3 className={styles.h3}>Circular (avatar)</h3>
        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-12 w-12 rounded-full" />
          </div>
        </div>

        <h3 className={styles.h3}>Card</h3>
        <div className={styles.demo}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Skeleton className="h-12 w-12 rounded-full" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              <Skeleton className="h-4 w-[60%]" />
              <Skeleton className="h-4 w-[40%]" />
            </div>
          </div>
        </div>

        <h3 className={styles.h3}>Retangular (imagem)</h3>
        <div className={styles.demo}>
          <Skeleton className="h-[120px] w-full rounded-lg" />
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Skeleton } from 'cycle-design'

{/* Texto */}
<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-[80%]" />

{/* Avatar circular */}
<Skeleton className="h-12 w-12 rounded-full" />

{/* Imagem retangular */}
<Skeleton className="h-[120px] w-full rounded-lg" />

{/* Card skeleton */}
<div className="flex items-center gap-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="flex flex-col gap-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
        />
      </section>
    </div>
  )
}
