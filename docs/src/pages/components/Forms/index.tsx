import { useState } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Label } from '@components/Label'
import { Input } from '@components/Input'
import { Textarea } from '@components/Textarea'
import { Select } from '@components/Select'
import { Checkbox } from '@components/Checkbox'
import { RadioGroup, Radio } from '@components/RadioGroup'
import { Switch } from '@components/Switch'
import { Field } from '@components/Field'
import { SearchIcon } from '@icons/_generated/SearchIcon'
import { EditIcon } from '@icons/_generated/EditIcon'
import styles from './Forms.module.css'

const COLORS = ['brand', 'class', 'private', 'group', 'impulse'] as const

export default function FormsPage() {
  const [radioValue, setRadioValue] = useState('option-1')
  const [radioColor, setRadioColor] = useState<typeof COLORS[number]>('brand')

  return (
    <div>
      <PageHeader
        badge="Components"
        title="Form Components"
        description="Componentes de formulario do Cycle Design System. Label, Input, Textarea, Select, Checkbox, Radio Group, Switch e Field."
      />

      {/* ── Label ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Label</h2>
        <p className={styles.p}>
          Rotulo acessivel para campos de formulario. Suporta indicador de obrigatoriedade com texto acessivel para leitores de tela.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Label>Nome completo</Label>
            <Label required>Email</Label>
            <Label disabled>Desabilitado</Label>
          </div>
        </div>

        <CodeBlock
          language="tsx"
          code={`import { Label } from 'cycle-design'

<Label>Nome completo</Label>
<Label required>Email</Label>
<Label disabled>Desabilitado</Label>`}
        />
      </section>

      {/* ── Input ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Input</h2>
        <p className={styles.p}>
          Campo de texto com 3 tamanhos, estado de erro, e suporte a icones decorativos.
        </p>

        <h3 className={styles.h3}>Tamanhos</h3>
        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>lg</span>
              <Input size="lg" placeholder="Input large" />
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>md</span>
              <Input size="md" placeholder="Input medium (default)" />
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>sm</span>
              <Input size="sm" placeholder="Input small" />
            </div>
          </div>
        </div>

        <h3 className={styles.h3}>Com icones</h3>
        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <Input iconLeft={<SearchIcon decorative />} placeholder="Buscar..." />
            <Input iconRight={<EditIcon decorative />} placeholder="Com icone a direita" />
            <Input iconLeft={<SearchIcon decorative />} iconRight={<EditIcon decorative />} placeholder="Ambos os lados" />
          </div>
        </div>

        <h3 className={styles.h3}>Estados</h3>
        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <Input placeholder="Default" />
            <Input error placeholder="Erro" />
            <Input disabled placeholder="Desabilitado" />
          </div>
        </div>

        <CodeBlock
          language="tsx"
          code={`import { Input } from 'cycle-design'
import { SearchIcon } from 'cycle-design/icons'

<Input size="lg" placeholder="Input large" />
<Input iconLeft={<SearchIcon decorative />} placeholder="Buscar..." />
<Input error placeholder="Campo com erro" />
<Input disabled placeholder="Desabilitado" />`}
        />
      </section>

      {/* ── Textarea ───────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Textarea</h2>
        <p className={styles.p}>
          Campo multi-linha com auto-resize opcional. Mesmos estados do Input (error, disabled).
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <Textarea placeholder="Textarea default" />
            <Textarea size="sm" placeholder="Textarea small" />
            <Textarea error placeholder="Textarea com erro" />
            <Textarea disabled placeholder="Textarea desabilitado" />
          </div>
        </div>

        <CodeBlock
          language="tsx"
          code={`import { Textarea } from 'cycle-design'

<Textarea placeholder="Escreva aqui..." />
<Textarea autoResize placeholder="Auto-resize" />
<Textarea error placeholder="Com erro" />`}
        />
      </section>

      {/* ── Select ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Select</h2>
        <p className={styles.p}>
          Seletor nativo estilizado com chevron customizado. Usa {'<select>'} nativo para acessibilidade maxima (mobile picker, teclado, screen readers).
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <Select size="lg" placeholder="Select large">
              <option value="en">Ingles</option>
              <option value="pt">Portugues</option>
              <option value="es">Espanhol</option>
            </Select>
            <Select placeholder="Selecione um idioma">
              <option value="en">Ingles</option>
              <option value="pt">Portugues</option>
              <option value="es">Espanhol</option>
            </Select>
            <Select size="sm" placeholder="Select small">
              <option value="en">Ingles</option>
              <option value="pt">Portugues</option>
            </Select>
            <Select error placeholder="Select com erro">
              <option value="en">Ingles</option>
            </Select>
            <Select disabled placeholder="Select desabilitado">
              <option value="en">Ingles</option>
            </Select>
          </div>
        </div>

        <CodeBlock
          language="tsx"
          code={`import { Select } from 'cycle-design'

<Select placeholder="Selecione um idioma">
  <option value="en">Ingles</option>
  <option value="pt">Portugues</option>
</Select>`}
        />
      </section>

      {/* ── Checkbox ───────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Checkbox</h2>
        <p className={styles.p}>
          Controle de selecao com 5 paletas de cor, 2 tamanhos, e estado indeterminate. Usa input nativo para acessibilidade.
        </p>

        <h3 className={styles.h3}>Cores</h3>
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

        <h3 className={styles.h3}>Tamanhos</h3>
        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Checkbox size="md" label="Medium (default)" defaultChecked />
            <Checkbox size="sm" label="Small" defaultChecked />
          </div>
        </div>

        <h3 className={styles.h3}>Estados</h3>
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

        <CodeBlock
          language="tsx"
          code={`import { Checkbox } from 'cycle-design'

<Checkbox label="Aceito os termos" />
<Checkbox color="class" label="Selecionar todos" indeterminate />
<Checkbox color="impulse" label="Notificacoes" defaultChecked />`}
        />
      </section>

      {/* ── RadioGroup ─────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Radio Group</h2>
        <p className={styles.p}>
          Grupo de radio buttons com contexto compartilhado. 5 paletas de cor e valor controlado.
        </p>

        <h3 className={styles.h3}>Cores</h3>
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

        <h3 className={styles.h3}>Tamanhos</h3>
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

        <h3 className={styles.h3}>Desabilitado</h3>
        <div className={styles.demo}>
          <RadioGroup name="disabled-demo" disabled value="a">
            <Radio value="a" label="Selecionado (disabled)" />
            <Radio value="b" label="Nao selecionado (disabled)" />
          </RadioGroup>
        </div>

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

      {/* ── Switch ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Switch</h2>
        <p className={styles.p}>
          Controle liga/desliga com role="switch" nativo. 5 paletas de cor e animacao de slide.
        </p>

        <h3 className={styles.h3}>Cores</h3>
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

        <h3 className={styles.h3}>Tamanhos</h3>
        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Switch size="md" label="Medium (default)" defaultChecked />
            <Switch size="sm" label="Small" defaultChecked />
          </div>
        </div>

        <h3 className={styles.h3}>Estados</h3>
        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Switch label="Default" />
            <Switch label="Checked" defaultChecked />
            <Switch label="Disabled" disabled />
            <Switch label="Disabled checked" disabled defaultChecked />
          </div>
        </div>

        <CodeBlock
          language="tsx"
          code={`import { Switch } from 'cycle-design'

<Switch label="Notificacoes" />
<Switch color="class" label="Dark mode" defaultChecked />
<Switch color="impulse" size="sm" label="Compacto" />`}
        />
      </section>

      {/* ── Field ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Field</h2>
        <p className={styles.p}>
          Wrapper inteligente que conecta Label + controle + mensagem de erro/ajuda automaticamente. Elimina boilerplate de formularios.
        </p>

        <div className={styles.demo}>
          <div className={styles.fieldDemo}>
            <div className={styles.demoColumn}>
              <Field label="Nome" hint="Como aparecera no certificado" required>
                <Input placeholder="Seu nome completo" />
              </Field>

              <Field label="Email" error="Email invalido" required>
                <Input type="email" placeholder="seu@email.com" />
              </Field>

              <Field label="Idioma">
                <Select placeholder="Selecione">
                  <option value="en">Ingles</option>
                  <option value="pt">Portugues</option>
                </Select>
              </Field>

              <Field label="Mensagem" hint="Maximo 500 caracteres">
                <Textarea placeholder="Escreva sua mensagem..." />
              </Field>

              <Field label="Campo desabilitado" disabled>
                <Input placeholder="Nao editavel" />
              </Field>
            </div>
          </div>
        </div>

        <CodeBlock
          language="tsx"
          code={`import { Field, Input, Select, Textarea } from 'cycle-design'

<Field label="Nome" hint="Como aparecera no certificado" required>
  <Input placeholder="Seu nome completo" />
</Field>

<Field label="Email" error="Email invalido" required>
  <Input type="email" placeholder="seu@email.com" />
</Field>

<Field label="Idioma">
  <Select placeholder="Selecione">
    <option value="en">Ingles</option>
    <option value="pt">Portugues</option>
  </Select>
</Field>`}
        />
      </section>
    </div>
  )
}
