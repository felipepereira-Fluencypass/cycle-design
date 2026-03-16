import { PageHeader } from '@/components/ui/PageHeader'
import { Callout } from '@/components/ui/Callout'
import styles from './Testing.module.css'

// ── Test coverage data ─────────────────────────────────────
// This data MUST be updated whenever tests are added/changed.
// See CLAUDE.md rule: "Checklist de testes obrigatório por componente"

interface LayerStatus {
  name: string
  passed: boolean
}

interface ComponentCoverage {
  name: string
  layers: LayerStatus[]
}

const components: ComponentCoverage[] = [
  {
    name: 'Button',
    layers: [
      { name: 'Renderização e props', passed: true },
      { name: 'Interação e comportamento', passed: true },
      { name: 'Acessibilidade', passed: true },
      { name: 'Data attributes', passed: true },
    ],
  },
  {
    name: 'Checkbox',
    layers: [
      { name: 'Renderização e props', passed: true },
      { name: 'Interação e comportamento', passed: true },
      { name: 'Acessibilidade', passed: true },
      { name: 'Data attributes', passed: true },
    ],
  },
  {
    name: 'Switch',
    layers: [
      { name: 'Renderização e props', passed: true },
      { name: 'Interação e comportamento', passed: true },
      { name: 'Acessibilidade', passed: true },
      { name: 'Data attributes', passed: true },
    ],
  },
  {
    name: 'Alert',
    layers: [
      { name: 'Renderização e props', passed: true },
      { name: 'Interação e comportamento', passed: true },
      { name: 'Acessibilidade', passed: true },
      { name: 'Data attributes', passed: true },
    ],
  },
  {
    name: 'Skeleton',
    layers: [
      { name: 'Renderização e props', passed: true },
      { name: 'Interação e comportamento', passed: true },
      { name: 'Acessibilidade', passed: true },
      { name: 'Data attributes', passed: true },
    ],
  },
  {
    name: 'Spinner',
    layers: [
      { name: 'Renderização e props', passed: true },
      { name: 'Interação e comportamento', passed: true },
      { name: 'Acessibilidade', passed: true },
      { name: 'Data attributes', passed: true },
    ],
  },
  {
    name: 'Slot',
    layers: [
      { name: 'Renderização e props', passed: true },
      { name: 'Interação e comportamento', passed: true },
      { name: 'Acessibilidade', passed: true },
      { name: 'Data attributes', passed: true },
    ],
  },
]

interface TokenCoverage {
  category: string
  count: number
  passed: boolean
}

const tokenTests: TokenCoverage[] = [
  { category: 'Spacing', count: 16, passed: true },
  { category: 'Spacing Inset', count: 7, passed: true },
  { category: 'Border Width', count: 5, passed: true },
  { category: 'Radius', count: 9, passed: true },
  { category: 'Opacity', count: 7, passed: true },
  { category: 'Motion Duration', count: 5, passed: true },
  { category: 'Z-Index', count: 8, passed: true },
  { category: 'Typography Primitives', count: 7, passed: true },
]

// ── Helpers ────────────────────────────────────────────────

function getStatus(layers: LayerStatus[]): 'passed' | 'partial' | 'missing' {
  const passed = layers.filter((l) => l.passed).length
  if (passed === layers.length) return 'passed'
  if (passed > 0) return 'partial'
  return 'missing'
}

function StatusBadge({ status }: { status: 'passed' | 'partial' | 'missing' }) {
  const labels = { passed: '4/4 camadas', partial: 'Parcial', missing: 'Sem testes' }
  return <span className={styles[status]}>{labels[status]}</span>
}

function CheckIcon({ passed }: { passed: boolean }) {
  return passed ? (
    <svg className={`${styles.icon} ${styles.pass}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 8l1.5 2 3.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg className={`${styles.icon} ${styles.fail}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// ── Page ───────────────────────────────────────────────────

export default function Testing() {
  const totalComponents = components.length
  const fullyTested = components.filter((c) => getStatus(c.layers) === 'passed').length
  const totalTokenTests = tokenTests.reduce((sum, t) => sum + t.count, 0)
  const totalTests = 198 // Atualizar com o número real de `npx vitest run`

  return (
    <div>
      <PageHeader
        badge="Guidelines"
        title="Test Coverage"
        description="Dashboard de cobertura de testes do Cycle Design. Todo componente deve passar nas 4 camadas antes de ser publicado."
      />

      <Callout type="info" title="Regra obrigatória">
        <p>
          Nenhum componente pode ser marcado como <strong>stable</strong> sem
          passar nas 4 camadas de teste: renderização, interação, acessibilidade e data attributes.
          Ver <code>CLAUDE.md</code> para o checklist completo.
        </p>
      </Callout>

      {/* Summary */}
      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <span className={styles.summaryNumber}>{totalTests}</span>
          <span className={styles.summaryLabel}>Testes totais</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryNumber}>{fullyTested}/{totalComponents}</span>
          <span className={styles.summaryLabel}>Componentes completos</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryNumber}>{totalTokenTests}</span>
          <span className={styles.summaryLabel}>Token contracts</span>
        </div>
      </div>

      {/* Component coverage */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Componentes</h2>
        <p className={styles.sectionDesc}>
          Cada componente é testado em 4 camadas: renderização e props, interação e comportamento,
          acessibilidade, e data attributes.
        </p>
      </div>

      <div className={styles.grid}>
        {components.map((comp) => (
          <div key={comp.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.componentName}>{comp.name}</span>
              <StatusBadge status={getStatus(comp.layers)} />
            </div>
            <ul className={styles.layerList}>
              {comp.layers.map((layer) => (
                <li key={layer.name} className={styles.layerItem}>
                  <CheckIcon passed={layer.passed} />
                  {layer.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Token contract tests */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Token Contracts</h2>
        <p className={styles.sectionDesc}>
          Testes que verificam se os valores dos tokens CSS conferem com a especificação do Figma.
          Se alguém alterar um token por engano, o teste quebra antes de chegar a produção.
        </p>
      </div>

      <div className={styles.grid}>
        {tokenTests.map((token) => (
          <div key={token.category} className={styles.tokenCard}>
            <div className={styles.cardHeader}>
              <span className={styles.componentName}>{token.category}</span>
              <span className={token.passed ? styles.passed : styles.missing}>
                {token.count} tokens
              </span>
            </div>
            <ul className={styles.layerList}>
              <li className={styles.layerItem}>
                <CheckIcon passed={token.passed} />
                Valores conferem com especificação
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
