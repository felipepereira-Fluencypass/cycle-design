import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Alert } from '@components/Alert'
import styles from '../Forms/Forms.module.css'

const VARIANTS = ['info', 'positive', 'warning', 'critical'] as const

export default function AlertPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Alert"
        description="Mensagem contextual com variante semantica, titulo opcional e botao de fechar."
      />

      {/* ── Variantes ───────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Variantes</h2>
        <p className={styles.p}>
          Quatro variantes semanticas para diferentes contextos de feedback.
        </p>

        <div className={styles.demo}>
          {VARIANTS.map((variant) => (
            <Alert key={variant} variant={variant}>
              Esta e uma mensagem de {variant}.
            </Alert>
          ))}
        </div>
      </section>

      {/* ── Com titulo ──────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Com titulo</h2>
        <p className={styles.p}>
          O titulo opcional adiciona destaque a mensagem.
        </p>

        <div className={styles.demo}>
          <Alert variant="info" title="Informacao">
            Sua sessao expira em 5 minutos.
          </Alert>
          <Alert variant="positive" title="Sucesso">
            Suas alteracoes foram salvas com sucesso.
          </Alert>
          <Alert variant="warning" title="Atencao">
            Verifique os campos obrigatorios antes de continuar.
          </Alert>
          <Alert variant="critical" title="Erro">
            Nao foi possivel conectar ao servidor.
          </Alert>
        </div>
      </section>

      {/* ── Com botao de fechar ─────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Com botao de fechar</h2>
        <p className={styles.p}>
          Quando onDismiss e informado, o alert exibe um botao de fechar.
        </p>

        <div className={styles.demo}>
          <Alert variant="info" title="Novidade" onDismiss={() => console.log('dismissed')}>
            Uma nova versao esta disponivel.
          </Alert>
          <Alert variant="critical" onDismiss={() => console.log('dismissed')}>
            Erro ao processar sua solicitacao.
          </Alert>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Alert } from 'cycle-design'

<Alert variant="positive" title="Salvo!">Suas alteracoes foram salvas.</Alert>
<Alert variant="critical" onDismiss={() => {}}>Erro ao salvar.</Alert>
<Alert variant="warning" title="Atencao">Verifique os campos.</Alert>`}
        />
      </section>
    </div>
  )
}
