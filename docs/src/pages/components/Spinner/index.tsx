import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Spinner } from '@components/Spinner'
import styles from '../Components.module.css'

export default function SpinnerPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Spinner"
        description="Indicador de carregamento SVG animado com suporte a diferentes tamanhos e acessibilidade integrada."
      />

      {/* ── Tamanhos ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Tamanhos</h2>
        <p className={styles.p}>
          O Spinner possui quatro tamanhos: lg (32px), md (24px), sm (16px) e xs (12px).
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Spinner size="lg" aria-label="Carregando (lg)" />
            <Spinner size="md" aria-label="Carregando (md)" />
            <Spinner size="sm" aria-label="Carregando (sm)" />
            <Spinner size="xs" aria-label="Carregando (xs)" />
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Spinner } from 'cycle-design'`}
        />
      </section>

      {/* ── Exemplo de uso ───────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Exemplo de uso</h2>
        <p className={styles.p}>
          Utilize o Spinner para indicar carregamento. O componente ja inclui role="status" e aria-label padrao "Carregando", que pode ser personalizado.
        </p>

        <CodeBlock
          language="tsx"
          code={`import { Spinner } from 'cycle-design'

{/* Tamanho padrao (md) */}
<Spinner />

{/* Todos os tamanhos */}
<Spinner size="lg" />
<Spinner size="md" />
<Spinner size="sm" />
<Spinner size="xs" />

{/* Com aria-label personalizado */}
<Spinner size="lg" aria-label="Salvando..." />`}
        />
      </section>
    </div>
  )
}
