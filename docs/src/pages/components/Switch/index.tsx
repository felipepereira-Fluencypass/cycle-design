import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Switch } from '@components/Switch'
import styles from '../Components.module.css'

const COLORS = ['brand', 'class', 'private', 'group', 'impulse'] as const

export default function SwitchPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Switch"
        description="Controle liga/desliga com role=&quot;switch&quot; nativo. 5 paletas de cor e animacao de slide."
      />

      {/* ── Cores ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Cores</h2>
        <p className={styles.p}>
          Cinco paletas de cor alinham o switch ao contexto funcional da interface.
        </p>

        <div className={styles.demo}>
          <div className={styles.colorsGrid}>
            {COLORS.map((color) => (
              <div key={color} className={styles.colorRow}>
                <span className={styles.colorLabel}>{color}</span>
                <Switch color={color} label="Off" />
                <Switch color={color} label="On" defaultChecked />
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
            <Switch size="md" label="Medium (default)" defaultChecked />
            <Switch size="sm" label="Small" defaultChecked />
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
            <Switch label="Default" />
            <Switch label="Checked" defaultChecked />
            <Switch label="Disabled" disabled />
            <Switch label="Disabled checked" disabled defaultChecked />
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Switch } from 'cycle-design'

<Switch label="Notificacoes" />
<Switch color="class" label="Dark mode" defaultChecked />
<Switch color="impulse" size="sm" label="Compacto" />`}
        />
      </section>
    </div>
  )
}
