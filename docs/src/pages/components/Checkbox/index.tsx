import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Checkbox } from '@components/Checkbox'
import styles from '../Forms/Forms.module.css'

const COLORS = ['brand', 'class', 'private', 'group', 'impulse'] as const

export default function CheckboxPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Checkbox"
        description="Controle de selecao com 5 paletas de cor, 2 tamanhos, e estado indeterminate. Usa input nativo para acessibilidade."
      />

      {/* ── Cores ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Cores</h2>
        <p className={styles.p}>
          Cinco paletas de cor alinham o checkbox ao contexto funcional da interface.
        </p>

        <div className={styles.demo}>
          <div className={styles.colorsGrid}>
            {COLORS.map((color) => (
              <div key={color} className={styles.colorRow}>
                <span className={styles.colorLabel}>{color}</span>
                <Checkbox color={color} label="Unchecked" />
                <Checkbox color={color} label="Checked" defaultChecked />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tamanhos ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Tamanhos</h2>
        <p className={styles.p}>
          Dois tamanhos disponiveis: md (padrao) e sm para contextos compactos.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Checkbox size="md" label="Medium (default)" defaultChecked />
            <Checkbox size="sm" label="Small" defaultChecked />
          </div>
        </div>
      </section>

      {/* ── Estados ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Estados</h2>
        <p className={styles.p}>
          Todos os estados visuais suportados pelo componente.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Checkbox label="Default" />
            <Checkbox label="Checked" defaultChecked />
            <Checkbox label="Indeterminate" indeterminate />
            <Checkbox label="Error" error />
            <Checkbox label="Disabled" disabled />
            <Checkbox label="Disabled checked" disabled defaultChecked />
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Checkbox } from 'cycle-design'

<Checkbox label="Aceito os termos" />
<Checkbox color="class" label="Selecionar todos" indeterminate />
<Checkbox color="impulse" label="Notificacoes" defaultChecked />`}
        />
      </section>
    </div>
  )
}
