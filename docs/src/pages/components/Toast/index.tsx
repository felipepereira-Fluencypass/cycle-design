import { useState } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from '@components/Toast'
import { Button } from '@components/Button'
import styles from '../Forms/Forms.module.css'

const VARIANTS = ['info', 'positive', 'warning', 'critical'] as const

const VARIANT_MESSAGES: Record<string, { title: string; description: string }> = {
  info: {
    title: 'Informacao',
    description: 'Uma nova versao esta disponivel.',
  },
  positive: {
    title: 'Sucesso',
    description: 'Suas alteracoes foram salvas com sucesso.',
  },
  warning: {
    title: 'Atencao',
    description: 'Sua sessao expira em 5 minutos.',
  },
  critical: {
    title: 'Erro',
    description: 'Nao foi possivel conectar ao servidor.',
  },
}

export default function ToastPage() {
  const [openState, setOpenState] = useState<Record<string, boolean>>({
    info: false,
    positive: false,
    warning: false,
    critical: false,
  })

  return (
    <div>
      <PageHeader
        badge="Components"
        title="Toast"
        description="Notificacao temporaria para feedback de acoes do usuario."
      />

      {/* ── Variantes ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Variantes</h2>
        <p className={styles.p}>
          Quatro variantes semanticas para diferentes contextos de feedback.
          Clique nos botoes para exibir cada toast.
        </p>

        <div className={styles.demo}>
          <ToastProvider>
            <div className={styles.demoRow}>
              {VARIANTS.map((variant) => (
                <Button
                  key={variant}
                  variant="outline"
                  onClick={() =>
                    setOpenState((prev) => ({ ...prev, [variant]: true }))
                  }
                >
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              ))}
            </div>

            {VARIANTS.map((variant) => (
              <Toast
                key={variant}
                variant={variant}
                open={openState[variant]}
                onOpenChange={(open) =>
                  setOpenState((prev) => ({ ...prev, [variant]: open }))
                }
              >
                <ToastTitle>{VARIANT_MESSAGES[variant].title}</ToastTitle>
                <ToastDescription>
                  {VARIANT_MESSAGES[variant].description}
                </ToastDescription>
                <ToastAction altText="Fechar notificacao" asChild>
                  <Button variant="ghost" size="sm">
                    Desfazer
                  </Button>
                </ToastAction>
                <ToastClose />
              </Toast>
            ))}

            <ToastViewport />
          </ToastProvider>
        </div>
      </section>

      {/* ── Import ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from 'cycle-design'

<ToastProvider>
  <Toast variant="positive" open={open} onOpenChange={setOpen}>
    <ToastTitle>Sucesso</ToastTitle>
    <ToastDescription>Suas alteracoes foram salvas.</ToastDescription>
    <ToastAction altText="Desfazer acao" asChild>
      <Button variant="ghost" size="sm">Desfazer</Button>
    </ToastAction>
    <ToastClose />
  </Toast>
  <ToastViewport />
</ToastProvider>`}
        />
      </section>
    </div>
  )
}
