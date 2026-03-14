import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Progress } from '@components/Progress'
import styles from '../Forms/Forms.module.css'

export default function ProgressPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Progress"
        description="Barra de progresso acessivel com suporte a diferentes tamanhos e paletas de cor."
      />

      {/* ── Valores ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Valores</h2>
        <p className={styles.p}>
          O Progress aceita valores de 0 a 100, representando a porcentagem de conclusao.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <span className={styles.groupLabel}>0%</span>
            <Progress value={0} aria-label="Progresso 0%" />
            <span className={styles.groupLabel}>25%</span>
            <Progress value={25} aria-label="Progresso 25%" />
            <span className={styles.groupLabel}>50%</span>
            <Progress value={50} aria-label="Progresso 50%" />
            <span className={styles.groupLabel}>75%</span>
            <Progress value={75} aria-label="Progresso 75%" />
            <span className={styles.groupLabel}>100%</span>
            <Progress value={100} aria-label="Progresso 100%" />
          </div>
        </div>
      </section>

      {/* ── Tamanhos ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Tamanhos</h2>
        <p className={styles.p}>
          O Progress possui dois tamanhos: md (padrao) e sm.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <span className={styles.groupLabel}>md (padrao)</span>
            <Progress value={65} size="md" aria-label="Progresso md" />
            <span className={styles.groupLabel}>sm</span>
            <Progress value={65} size="sm" aria-label="Progresso sm" />
          </div>
        </div>
      </section>

      {/* ── Cores ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Cores</h2>
        <p className={styles.p}>
          O Progress suporta seis paletas de cor, alinhadas com as paletas da marca.
        </p>

        <div className={styles.demo}>
          <div className={styles.colorsGrid}>
            <div className={styles.colorRow}>
              <span className={styles.colorLabel}>brand</span>
              <Progress value={65} color="brand" aria-label="Progresso brand" style={{ flex: 1 }} />
            </div>
            <div className={styles.colorRow}>
              <span className={styles.colorLabel}>class</span>
              <Progress value={65} color="class" aria-label="Progresso class" style={{ flex: 1 }} />
            </div>
            <div className={styles.colorRow}>
              <span className={styles.colorLabel}>private</span>
              <Progress value={65} color="private" aria-label="Progresso private" style={{ flex: 1 }} />
            </div>
            <div className={styles.colorRow}>
              <span className={styles.colorLabel}>group</span>
              <Progress value={65} color="group" aria-label="Progresso group" style={{ flex: 1 }} />
            </div>
            <div className={styles.colorRow}>
              <span className={styles.colorLabel}>impulse</span>
              <Progress value={65} color="impulse" aria-label="Progresso impulse" style={{ flex: 1 }} />
            </div>
            <div className={styles.colorRow}>
              <span className={styles.colorLabel}>positive</span>
              <Progress value={65} color="positive" aria-label="Progresso positive" style={{ flex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Progress } from 'cycle-design'`}
        />
      </section>

      {/* ── Exemplo de uso ───────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Exemplo de uso</h2>
        <p className={styles.p}>
          Utilize o Progress para indicar o andamento de uma tarefa. Sempre inclua aria-label para acessibilidade.
        </p>

        <CodeBlock
          language="tsx"
          code={`import { Progress } from 'cycle-design'

{/* Basico */}
<Progress value={65} aria-label="Progresso do curso" />

{/* Tamanho pequeno */}
<Progress value={30} size="sm" aria-label="Progresso do modulo" />

{/* Diferentes cores */}
<Progress value={50} color="brand" aria-label="Progresso brand" />
<Progress value={50} color="class" aria-label="Progresso class" />
<Progress value={50} color="private" aria-label="Progresso private" />
<Progress value={50} color="group" aria-label="Progresso group" />
<Progress value={50} color="impulse" aria-label="Progresso impulse" />
<Progress value={50} color="positive" aria-label="Progresso positive" />`}
        />
      </section>
    </div>
  )
}
