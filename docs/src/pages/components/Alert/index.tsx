import { Alert, AlertTitle, AlertDescription } from '@ui/alert'
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import styles from '../Components.module.css'

export default function AlertPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Alert"
        description="Mensagem contextual com variantes default e destructive. Composto por Alert, AlertTitle e AlertDescription."
      />

      {/* ── Variantes ───────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Variantes</h2>
        <p className={styles.p}>
          Duas variantes semânticas: default para informações e destructive para erros.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Informação</AlertTitle>
              <AlertDescription>Sua sessão expira em 5 minutos.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>Não foi possível conectar ao servidor.</AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* ── Com ícones ──────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Com ícones</h2>
        <p className={styles.p}>
          Use ícones do Lucide React como primeiro filho para adicionar contexto visual.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Sucesso</AlertTitle>
              <AlertDescription>Suas alterações foram salvas com sucesso.</AlertDescription>
            </Alert>
            <Alert>
              <TriangleAlert className="h-4 w-4" />
              <AlertTitle>Atenção</AlertTitle>
              <AlertDescription>Verifique os campos obrigatórios antes de continuar.</AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* ── Sem título ─────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Sem título</h2>
        <div className={styles.demo}>
          <div className={styles.demoColumn}>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>Uma nova versão está disponível.</AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Alert, AlertTitle, AlertDescription } from 'cycle-design'
import { Info, AlertCircle } from 'lucide-react'

{/* Default */}
<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Informação</AlertTitle>
  <AlertDescription>Sua sessão expira em 5 minutos.</AlertDescription>
</Alert>

{/* Destructive */}
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Erro</AlertTitle>
  <AlertDescription>Não foi possível conectar.</AlertDescription>
</Alert>`}
        />
      </section>
    </div>
  )
}
