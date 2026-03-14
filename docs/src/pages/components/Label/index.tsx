import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Label } from '@components/Label'
import styles from '../Forms/Forms.module.css'

export default function LabelPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Label"
        description="Rotulo acessivel para campos de formulario. Suporta indicador de obrigatoriedade com texto acessivel para leitores de tela."
      />

      {/* ── Variantes ────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Variantes</h2>
        <p className={styles.p}>
          O Label possui tres variantes principais: normal, obrigatorio (com asterisco) e desabilitado.
        </p>

        <h3 className={styles.h3}>Normal</h3>
        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Label>Nome completo</Label>
          </div>
        </div>

        <h3 className={styles.h3}>Obrigatorio</h3>
        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Label required>Email</Label>
          </div>
        </div>

        <h3 className={styles.h3}>Desabilitado</h3>
        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Label disabled>Desabilitado</Label>
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Label } from 'cycle-design'`}
        />
      </section>

      {/* ── Exemplo de uso ───────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Exemplo de uso</h2>
        <p className={styles.p}>
          Utilize o Label para identificar campos de formulario. A prop required adiciona um asterisco visual e texto acessivel para leitores de tela. A prop disabled aplica estilo de desabilitado.
        </p>

        <CodeBlock
          language="tsx"
          code={`import { Label } from 'cycle-design'

{/* Label simples */}
<Label>Nome completo</Label>

{/* Label obrigatorio — exibe asterisco e inclui texto acessivel */}
<Label required>Email</Label>

{/* Label desabilitado */}
<Label disabled>Desabilitado</Label>

{/* Label associado a um campo via htmlFor */}
<Label htmlFor="email-field" required>Email</Label>
<input id="email-field" type="email" />`}
        />
      </section>
    </div>
  )
}
