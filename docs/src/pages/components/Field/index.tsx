import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Field } from '@components/Field'
import { Input } from '@components/Input'
import { Select } from '@components/Select'
import { Textarea } from '@components/Textarea'
import styles from '../Forms/Forms.module.css'

export default function FieldPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Field"
        description="Wrapper inteligente que conecta Label + controle + mensagem de erro/ajuda automaticamente. Elimina boilerplate de formularios."
      />

      {/* ── Com hint ─────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Com hint</h2>
        <p className={styles.p}>
          O Field exibe uma mensagem de ajuda abaixo do controle quando a prop hint é fornecida.
        </p>

        <div className={styles.demo}>
          <div className={styles.fieldDemo}>
            <Field label="Nome" hint="Como aparecera no certificado" required>
              <Input placeholder="Seu nome completo" />
            </Field>
          </div>
        </div>
      </section>

      {/* ── Com erro ─────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Com erro</h2>
        <p className={styles.p}>
          Quando a prop error é fornecida, o Field exibe a mensagem de erro e aplica o estado visual de erro ao controle filho.
        </p>

        <div className={styles.demo}>
          <div className={styles.fieldDemo}>
            <Field label="Email" error="Email invalido" required>
              <Input type="email" placeholder="seu@email.com" />
            </Field>
          </div>
        </div>
      </section>

      {/* ── Com Select ───────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Com Select</h2>
        <p className={styles.p}>
          O Field funciona com qualquer controle de formulario, incluindo o Select.
        </p>

        <div className={styles.demo}>
          <div className={styles.fieldDemo}>
            <Field label="Idioma">
              <Select placeholder="Selecione um idioma">
                <option value="en">Ingles</option>
                <option value="pt">Portugues</option>
                <option value="es">Espanhol</option>
              </Select>
            </Field>
          </div>
        </div>
      </section>

      {/* ── Com Textarea ─────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Com Textarea</h2>
        <p className={styles.p}>
          O Field tambem funciona com Textarea, mantendo a mesma estrutura de label e hint.
        </p>

        <div className={styles.demo}>
          <div className={styles.fieldDemo}>
            <Field label="Mensagem" hint="Maximo 500 caracteres">
              <Textarea placeholder="Escreva sua mensagem..." />
            </Field>
          </div>
        </div>
      </section>

      {/* ── Desabilitado ─────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Desabilitado</h2>
        <p className={styles.p}>
          A prop disabled no Field desabilita automaticamente o controle filho e aplica o estilo visual de desabilitado ao label.
        </p>

        <div className={styles.demo}>
          <div className={styles.fieldDemo}>
            <Field label="Campo desabilitado" disabled>
              <Input placeholder="Nao editavel" />
            </Field>
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Field, Input, Select, Textarea } from 'cycle-design'

{/* Com hint */}
<Field label="Nome" hint="Como aparecera no certificado" required>
  <Input placeholder="Seu nome completo" />
</Field>

{/* Com erro */}
<Field label="Email" error="Email invalido" required>
  <Input type="email" placeholder="seu@email.com" />
</Field>

{/* Com Select */}
<Field label="Idioma">
  <Select placeholder="Selecione um idioma">
    <option value="en">Ingles</option>
    <option value="pt">Portugues</option>
  </Select>
</Field>

{/* Com Textarea */}
<Field label="Mensagem" hint="Maximo 500 caracteres">
  <Textarea placeholder="Escreva sua mensagem..." />
</Field>

{/* Desabilitado */}
<Field label="Campo desabilitado" disabled>
  <Input placeholder="Nao editavel" />
</Field>`}
        />
      </section>
    </div>
  )
}
