import { Checkbox } from '@ui/checkbox'
import { Label } from '@ui/label'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import styles from '../Components.module.css'

export default function CheckboxPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Checkbox"
        description="Controle de seleção baseado em Radix UI com acessibilidade nativa. Usa o tema Cycle Design para cores e focus ring."
      />

      {/* ── Exemplos ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Exemplos</h2>
        <p className={styles.p}>
          O Checkbox do shadcn/ui usa Radix primitives com suporte nativo a keyboard, focus trap e screen readers.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Checkbox id="terms" />
              <Label htmlFor="terms">Aceito os termos de uso</Label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Checkbox id="newsletter" defaultChecked />
              <Label htmlFor="newsletter">Receber newsletter</Label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Checkbox id="disabled-example" disabled />
              <Label htmlFor="disabled-example" style={{ opacity: 0.5 }}>Disabled</Label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Checkbox id="disabled-checked" disabled defaultChecked />
              <Label htmlFor="disabled-checked" style={{ opacity: 0.5 }}>Disabled checked</Label>
            </div>
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Checkbox } from 'cycle-design'
import { Label } from 'cycle-design'

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Aceito os termos</Label>
</div>

{/* Checked por padrão */}
<Checkbox defaultChecked />

{/* Disabled */}
<Checkbox disabled />`}
        />
      </section>
    </div>
  )
}
