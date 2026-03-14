import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Badge } from '@components/Badge'
import styles from '../Forms/Forms.module.css'

const VARIANTS = ['filled', 'outline', 'ghost'] as const
const COLORS = ['brand', 'class', 'private', 'group', 'impulse', 'positive', 'warning', 'critical', 'neutral'] as const

export default function BadgePage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Badge"
        description="Indicador compacto com variantes de estilo, paletas de cor e suporte a dot indicator."
      />

      {/* ── Variants ───────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Variants</h2>
        <p className={styles.p}>
          Tres variantes visuais: filled (padrao), outline e ghost.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            {VARIANTS.map((variant) => (
              <Badge key={variant} variant={variant} color="brand">
                {variant}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* ── Colors ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Colors</h2>
        <p className={styles.p}>
          Nove paletas de cor alinham o badge ao contexto funcional da interface.
        </p>

        <div className={styles.demo}>
          <div className={styles.colorsGrid}>
            {COLORS.map((color) => (
              <div key={color} className={styles.colorRow}>
                <span className={styles.colorLabel}>{color}</span>
                <Badge color={color} variant="filled">{color}</Badge>
                <Badge color={color} variant="outline">{color}</Badge>
                <Badge color={color} variant="ghost">{color}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sizes ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Sizes</h2>
        <p className={styles.p}>
          Dois tamanhos disponiveis: md (padrao) e sm para contextos compactos.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Badge size="md" color="brand">Medium</Badge>
            <Badge size="sm" color="brand">Small</Badge>
          </div>
        </div>
      </section>

      {/* ── Dot indicator ──────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Dot indicator</h2>
        <p className={styles.p}>
          Use a prop dot para exibir apenas um indicador circular sem texto.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Badge color="positive" dot />
            <Badge color="critical" dot />
            <Badge color="brand" dot />
          </div>
        </div>
      </section>

      {/* ── Import ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Badge } from 'cycle-design'

<Badge color="positive">Ativo</Badge>
<Badge color="critical" variant="outline">Erro</Badge>
<Badge color="brand" size="sm">Novo</Badge>
<Badge color="warning" dot />`}
        />
      </section>
    </div>
  )
}
