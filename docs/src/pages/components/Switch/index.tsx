import { Switch } from '@ui/switch'
import { Label } from '@ui/label'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import styles from '../Components.module.css'

export default function SwitchPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Switch"
        description="Controle liga/desliga baseado em Radix UI com role=switch nativo, animação de slide e suporte a teclado."
      />

      {/* ── Exemplos ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Exemplos</h2>
        <p className={styles.p}>
          O Switch do shadcn/ui usa Radix primitives. Suporta interação por teclado (Space) e leitores de tela nativamente.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Switch id="notifications" />
              <Label htmlFor="notifications">Notificações</Label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Switch id="dark-mode" defaultChecked />
              <Label htmlFor="dark-mode">Dark mode</Label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Switch id="disabled-sw" disabled />
              <Label htmlFor="disabled-sw" style={{ opacity: 0.5 }}>Disabled</Label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Switch id="disabled-checked-sw" disabled defaultChecked />
              <Label htmlFor="disabled-checked-sw" style={{ opacity: 0.5 }}>Disabled checked</Label>
            </div>
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Switch } from 'cycle-design'
import { Label } from 'cycle-design'

<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Notificações</Label>
</div>

{/* Checked por padrão */}
<Switch defaultChecked />

{/* Disabled */}
<Switch disabled />`}
        />
      </section>
    </div>
  )
}
