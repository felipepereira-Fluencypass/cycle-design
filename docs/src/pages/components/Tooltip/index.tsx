import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@components/Tooltip'
import { Button } from '@components/Button'
import styles from '../Forms/Forms.module.css'

export default function TooltipPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Tooltip"
        description="Texto informativo exibido ao passar o mouse ou focar em um elemento."
      />

      {/* ── Posicoes ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Posicoes</h2>
        <p className={styles.p}>
          Tooltips podem ser posicionados nos quatro lados do elemento trigger.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">Tooltip no topo</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">Tooltip a direita</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Tooltip embaixo</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">Tooltip a esquerda</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </section>

      {/* ── Uso basico ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Uso basico</h2>
        <p className={styles.p}>
          O TooltipProvider deve envolver todos os tooltips da aplicacao.
          Ele controla o delay e o comportamento global.
        </p>

        <div className={styles.demo}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Passe o mouse</Button>
              </TooltipTrigger>
              <TooltipContent>Informacao adicional</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </section>

      {/* ── Import ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from 'cycle-design'

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent side="top">Tooltip no topo</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        />
      </section>
    </div>
  )
}
