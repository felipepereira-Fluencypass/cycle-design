import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Separator } from '@components/Separator'
import styles from '../Forms/Forms.module.css'

export default function SeparatorPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Separator"
        description="Divisor visual horizontal ou vertical para separar conteudo em secoes."
      />

      {/* ── Orientacoes ─────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Orientacoes</h2>
        <p className={styles.p}>
          O Separator possui duas orientacoes: horizontal (padrao) e vertical.
        </p>

        <h3 className={styles.h3}>Horizontal (padrao)</h3>
        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <span>Conteudo acima</span>
            <Separator />
            <span>Conteudo abaixo</span>
          </div>
        </div>

        <h3 className={styles.h3}>Vertical</h3>
        <div className={styles.demo}>
          <div className={styles.demoRow} style={{ height: 40 }}>
            <span>Esquerda</span>
            <Separator orientation="vertical" />
            <span>Direita</span>
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Separator } from 'cycle-design'`}
        />
      </section>

      {/* ── Exemplo de uso ───────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Exemplo de uso</h2>
        <p className={styles.p}>
          Utilize o Separator para dividir visualmente secoes de conteudo. A orientacao vertical e util dentro de containers flex para separar itens lado a lado.
        </p>

        <CodeBlock
          language="tsx"
          code={`import { Separator } from 'cycle-design'

{/* Horizontal (padrao) */}
<Separator />

{/* Vertical — dentro de um flex container */}
<div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 40 }}>
  <span>Esquerda</span>
  <Separator orientation="vertical" />
  <span>Direita</span>
</div>`}
        />
      </section>
    </div>
  )
}
