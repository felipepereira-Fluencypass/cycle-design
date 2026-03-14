import { useState } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Pagination } from '@components/Pagination'
import styles from '../Forms/Forms.module.css'

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageSmall, setCurrentPageSmall] = useState(1)

  return (
    <div>
      <PageHeader
        badge="Components"
        title="Pagination"
        description="Componente de paginacao controlada para navegar entre paginas de conteudo. Suporta diferentes quantidades de paginas."
      />

      {/* ── Default Pagination ───────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Default Pagination</h2>
        <p className={styles.p}>
          Paginacao controlada com 10 paginas. Use useState para controlar a pagina atual.
        </p>

        <div className={styles.demo}>
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      {/* ── Small Pagination ─────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Small Pagination</h2>
        <p className={styles.p}>
          Paginacao com poucas paginas, ideal para listas curtas.
        </p>

        <div className={styles.demo}>
          <Pagination
            currentPage={currentPageSmall}
            totalPages={5}
            onPageChange={setCurrentPageSmall}
          />
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { useState } from 'react'
import { Pagination } from 'cycle-design'

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
    />
  )
}`}
        />
      </section>
    </div>
  )
}
