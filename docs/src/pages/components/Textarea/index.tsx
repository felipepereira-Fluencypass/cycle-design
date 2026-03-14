import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Textarea } from '@components/Textarea'
import styles from '../Forms/Forms.module.css'

export default function TextareaPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Textarea"
        description="Campo multi-linha com 3 tamanhos, auto-resize opcional e mesmos estados do Input (error, disabled)."
      />

      {/* ── Tamanhos ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Tamanhos</h2>
        <p className={styles.p}>
          O Textarea suporta tres tamanhos: lg, md (default) e sm. Use o tamanho adequado ao contexto do formulario.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>lg</span>
              <Textarea size="lg" placeholder="Textarea large" />
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>md</span>
              <Textarea size="md" placeholder="Textarea medium (default)" />
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>sm</span>
              <Textarea size="sm" placeholder="Textarea small" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Estados ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Estados</h2>
        <p className={styles.p}>
          O Textarea suporta os estados default, error e disabled. O estado de erro e indicado visualmente pela borda vermelha.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>default</span>
              <Textarea placeholder="Default" />
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>error</span>
              <Textarea error placeholder="Erro" />
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>disabled</span>
              <Textarea disabled placeholder="Desabilitado" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Textarea } from 'cycle-design'

{/* Tamanhos */}
<Textarea size="lg" placeholder="Textarea large" />
<Textarea size="md" placeholder="Textarea medium (default)" />
<Textarea size="sm" placeholder="Textarea small" />

{/* Estados */}
<Textarea placeholder="Default" />
<Textarea error placeholder="Com erro" />
<Textarea disabled placeholder="Desabilitado" />`}
        />
      </section>
    </div>
  )
}
