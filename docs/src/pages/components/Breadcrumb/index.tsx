import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Breadcrumb } from '@components/Breadcrumb'
import styles from '../Forms/Forms.module.css'

export default function BreadcrumbPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Breadcrumb"
        description="Navegacao hierarquica que mostra a localizacao atual do usuario dentro da estrutura do site."
      />

      {/* ── Basic ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Basic</h2>
        <p className={styles.p}>
          Breadcrumb basico com separador padrao (/).
        </p>

        <div className={styles.demo}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/cursos">Cursos</Breadcrumb.Item>
            <Breadcrumb.Item current>Ingles Basico</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>

      {/* ── Custom separator ──────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Custom separator</h2>
        <p className={styles.p}>
          Use a prop separator para trocar o caractere entre os itens.
        </p>

        <div className={styles.demo}>
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/cursos">Cursos</Breadcrumb.Item>
            <Breadcrumb.Item current>Ingles Basico</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>

      {/* ── Import ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Breadcrumb } from 'cycle-design'

<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/cursos">Cursos</Breadcrumb.Item>
  <Breadcrumb.Item current>Ingles Basico</Breadcrumb.Item>
</Breadcrumb>

{/* Custom separator */}
<Breadcrumb separator=">">
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/cursos">Cursos</Breadcrumb.Item>
  <Breadcrumb.Item current>Ingles Basico</Breadcrumb.Item>
</Breadcrumb>`}
        />
      </section>
    </div>
  )
}
