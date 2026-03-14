import { useState } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { RadioGroup, Radio } from '@components/RadioGroup'
import styles from '../Forms/Forms.module.css'

const COLORS = ['brand', 'class', 'private', 'group', 'impulse'] as const

export default function RadioGroupPage() {
  const [radioValue, setRadioValue] = useState('option-1')
  const [radioColor, setRadioColor] = useState<typeof COLORS[number]>('brand')

  return (
    <div>
      <PageHeader
        badge="Components"
        title="Radio Group"
        description="Grupo de radio buttons com contexto compartilhado. 5 paletas de cor e valor controlado."
      />

      {/* ── Cores ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Cores</h2>
        <p className={styles.p}>
          Cinco paletas de cor para alinhar o radio group ao contexto funcional da interface.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoGrid}>
            {COLORS.map((color) => (
              <div key={color}>
                <span className={styles.groupLabel}>{color}</span>
                <RadioGroup
                  name={`demo-${color}`}
                  color={color}
                  value={radioColor === color ? radioValue : undefined}
                  onChange={(v) => { setRadioColor(color); setRadioValue(v) }}
                >
                  <Radio value="option-1" label="Opcao A" />
                  <Radio value="option-2" label="Opcao B" />
                  <Radio value="option-3" label="Opcao C" />
                </RadioGroup>
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
            <RadioGroup name="size-md" size="md" value="a">
              <Radio value="a" label="Medium (default)" />
            </RadioGroup>
            <RadioGroup name="size-sm" size="sm" value="a">
              <Radio value="a" label="Small" />
            </RadioGroup>
          </div>
        </div>
      </section>

      {/* ── Desabilitado ─────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Desabilitado</h2>
        <p className={styles.p}>
          O estado disabled pode ser aplicado ao grupo inteiro, desabilitando todas as opcoes.
        </p>

        <div className={styles.demo}>
          <RadioGroup name="disabled-demo" disabled value="a">
            <Radio value="a" label="Selecionado (disabled)" />
            <Radio value="b" label="Nao selecionado (disabled)" />
          </RadioGroup>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { RadioGroup, Radio } from 'cycle-design'

<RadioGroup name="plan" color="class" value={plan} onChange={setPlan}>
  <Radio value="free" label="Free" />
  <Radio value="pro" label="Pro" />
  <Radio value="enterprise" label="Enterprise" />
</RadioGroup>`}
        />
      </section>
    </div>
  )
}
