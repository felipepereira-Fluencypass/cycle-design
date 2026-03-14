import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Select } from '@components/Select'
import styles from '../Forms/Forms.module.css'

export default function SelectPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Select"
        description="Seletor nativo estilizado com chevron customizado. Usa <select> nativo para acessibilidade maxima (mobile picker, teclado, screen readers)."
      />

      {/* ── Tamanhos ─────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Tamanhos</h2>
        <p className={styles.p}>
          O Select suporta 3 tamanhos: lg, md (default) e sm. Todos mantêm a mesma estrutura visual e acessibilidade.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>lg</span>
              <Select size="lg" placeholder="Selecione um idioma">
                <option value="en">Ingles</option>
                <option value="pt">Portugues</option>
                <option value="es">Espanhol</option>
              </Select>
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>md</span>
              <Select size="md" placeholder="Selecione um idioma">
                <option value="en">Ingles</option>
                <option value="pt">Portugues</option>
                <option value="es">Espanhol</option>
              </Select>
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>sm</span>
              <Select size="sm" placeholder="Selecione um idioma">
                <option value="en">Ingles</option>
                <option value="pt">Portugues</option>
                <option value="es">Espanhol</option>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* ── Estados ──────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Estados</h2>
        <p className={styles.p}>
          Estados visuais do Select: default, error e disabled.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>default</span>
              <Select placeholder="Selecione um idioma">
                <option value="en">Ingles</option>
                <option value="pt">Portugues</option>
                <option value="es">Espanhol</option>
              </Select>
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>error</span>
              <Select error placeholder="Selecione um idioma">
                <option value="en">Ingles</option>
                <option value="pt">Portugues</option>
                <option value="es">Espanhol</option>
              </Select>
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>disabled</span>
              <Select disabled placeholder="Selecione um idioma">
                <option value="en">Ingles</option>
                <option value="pt">Portugues</option>
                <option value="es">Espanhol</option>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Select } from 'cycle-design'

<Select placeholder="Selecione um idioma">
  <option value="en">Ingles</option>
  <option value="pt">Portugues</option>
  <option value="es">Espanhol</option>
</Select>

<Select size="lg" placeholder="Selecione um idioma">
  <option value="en">Ingles</option>
  <option value="pt">Portugues</option>
  <option value="es">Espanhol</option>
</Select>

<Select error placeholder="Select com erro">
  <option value="en">Ingles</option>
</Select>

<Select disabled placeholder="Select desabilitado">
  <option value="en">Ingles</option>
</Select>`}
        />
      </section>
    </div>
  )
}
