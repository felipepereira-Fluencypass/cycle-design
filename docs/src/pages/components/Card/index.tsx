import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Card } from '@components/Card'
import styles from '../Forms/Forms.module.css'

const ELEVATIONS = ['flat', 'sm', 'md', 'lg'] as const
const PADDINGS = ['none', 'sm', 'md', 'lg'] as const

export default function CardPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Card"
        description="Container com elevacao e padding variaveis. Suporta subcomponentes Header, Body e Footer para estruturar conteudo."
      />

      {/* ── Elevations ─────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Elevations</h2>
        <p className={styles.p}>
          Quatro niveis de sombra controlam a hierarquia visual do card.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            {ELEVATIONS.map((elevation) => (
              <Card key={elevation} elevation={elevation}>
                <Card.Body>{elevation}</Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Padding ────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Padding</h2>
        <p className={styles.p}>
          Quatro opcoes de padding interno para diferentes densidades de conteudo.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            {PADDINGS.map((padding) => (
              <Card key={padding} padding={padding}>
                <Card.Body>padding: {padding}</Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subcomponents ──────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Subcomponents</h2>
        <p className={styles.p}>
          Use Card.Header, Card.Body e Card.Footer para estruturar o conteudo do card.
        </p>

        <div className={styles.demo}>
          <Card>
            <Card.Header>Header</Card.Header>
            <Card.Body>Body com conteudo principal</Card.Body>
            <Card.Footer>Footer com acoes</Card.Footer>
          </Card>
        </div>
      </section>

      {/* ── Import ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Card } from 'cycle-design'

<Card elevation="md" padding="lg">
  <Card.Header>Titulo do card</Card.Header>
  <Card.Body>Conteudo principal</Card.Body>
  <Card.Footer>Acoes</Card.Footer>
</Card>

<Card elevation="flat" padding="sm">
  Conteudo simples sem subcomponentes
</Card>`}
        />
      </section>
    </div>
  )
}
