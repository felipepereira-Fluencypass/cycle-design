import { Link } from 'react-router-dom'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Callout } from '@/components/ui/Callout'
import { componentRegistry, categoryOrder, getComponentsByCategory } from '@/data/component-registry'
import styles from './Components.module.css'

const componentsByCategory = getComponentsByCategory()

const installCode = `# Instale o pacote
npm install cycle-design

# Importe o tema no seu app
import 'cycle-design/globals.css'

# Use os componentes
import { Button, Card, Dialog } from 'cycle-design'`

export default function Components() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Componentes"
        description="40+ componentes shadcn/ui customizados com o tema Cycle Design. Todos com acessibilidade nativa via Radix UI."
      />

      <Callout type="info" title="shadcn/ui + Cycle Design">
        <p>
          Os componentes são do <strong>shadcn/ui</strong>, construídos sobre Radix UI primitives
          com acessibilidade nativa (keyboard, focus trap, screen readers). O tema Cycle Design
          é aplicado automaticamente via CSS variables — cores, radius e sombras da Fluencypass.
        </p>
      </Callout>

      <section className={styles.section} style={{ marginTop: 24 }}>
        <h2 className={styles.h2}>Instalação rápida</h2>
        <CodeBlock code={installCode} language="bash" />
      </section>

      {categoryOrder.map((category) => {
        const comps = componentsByCategory[category]
        if (!comps?.length) return null
        return (
          <section key={category} className={styles.section}>
            <h2 className={styles.h2}>{category}</h2>
            <div className={styles.plannedGrid}>
              {comps.map((c) => (
                <Link
                  key={c.slug}
                  to={`/components/${c.slug}`}
                  className={styles.plannedCard}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.cardName}>{c.name}</span>
                    <span className={styles.stable}>shadcn</span>
                  </div>
                  <p className={styles.cardDesc}>{c.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
