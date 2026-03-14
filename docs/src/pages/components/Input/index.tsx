import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Input } from '@components/Input'
import { SearchIcon } from '@icons/_generated/SearchIcon'
import { EditIcon } from '@icons/_generated/EditIcon'
import styles from '../Forms/Forms.module.css'

export default function InputPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Input"
        description="Campo de texto com 3 tamanhos, estado de erro, e suporte a icones decorativos a esquerda e/ou direita."
      />

      {/* ── Tamanhos ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Tamanhos</h2>
        <p className={styles.p}>
          O Input suporta tres tamanhos: lg, md (default) e sm. Use o tamanho adequado ao contexto do formulario.
        </p>

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
      </section>

      {/* ── Com icones ───────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Com icones</h2>
        <p className={styles.p}>
          Use iconLeft e iconRight para adicionar icones decorativos ao campo. Ambos podem ser combinados.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>iconLeft</span>
              <Input iconLeft={<SearchIcon decorative />} placeholder="Buscar..." />
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>iconRight</span>
              <Input iconRight={<EditIcon decorative />} placeholder="Com icone a direita" />
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>both</span>
              <Input iconLeft={<SearchIcon decorative />} iconRight={<EditIcon decorative />} placeholder="Ambos os lados" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Estados ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Estados</h2>
        <p className={styles.p}>
          O Input suporta os estados default, error e disabled. O estado de erro e indicado visualmente pela borda vermelha.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>default</span>
              <Input placeholder="Default" />
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>error</span>
              <Input error placeholder="Erro" />
            </div>
            <div className={styles.sizesRow}>
              <span className={styles.colorLabel}>disabled</span>
              <Input disabled placeholder="Desabilitado" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Input } from 'cycle-design'
import { SearchIcon, EditIcon } from 'cycle-design/icons'

{/* Tamanhos */}
<Input size="lg" placeholder="Input large" />
<Input size="md" placeholder="Input medium (default)" />
<Input size="sm" placeholder="Input small" />

{/* Com icones */}
<Input iconLeft={<SearchIcon decorative />} placeholder="Buscar..." />
<Input iconRight={<EditIcon decorative />} placeholder="Com icone a direita" />
<Input iconLeft={<SearchIcon decorative />} iconRight={<EditIcon decorative />} placeholder="Ambos os lados" />

{/* Estados */}
<Input error placeholder="Campo com erro" />
<Input disabled placeholder="Desabilitado" />`}
        />
      </section>
    </div>
  )
}
