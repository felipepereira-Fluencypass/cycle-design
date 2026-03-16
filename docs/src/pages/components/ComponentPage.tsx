import { useParams, Navigate } from 'react-router-dom'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { getComponent } from '@/data/component-registry'
import styles from './Components.module.css'

export default function ComponentPage() {
  const { slug } = useParams<{ slug: string }>()
  const comp = slug ? getComponent(slug) : undefined

  if (!comp) {
    return <Navigate to="/components" replace />
  }

  return (
    <div>
      <PageHeader
        badge={comp.category}
        title={comp.name}
        description={comp.description}
      />

      {/* ── Demos ────────────────────────────────────────── */}
      {comp.demos.map((demo, i) => (
        <section key={i} className={styles.section}>
          <h2 className={styles.h2}>{demo.title}</h2>
          {demo.description && <p className={styles.p}>{demo.description}</p>}
          <div className={styles.demo}>
            {demo.render}
          </div>
        </section>
      ))}

      {/* ── Import ───────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Importação</h2>
        <CodeBlock language="tsx" code={comp.imports} />
      </section>
    </div>
  )
}
