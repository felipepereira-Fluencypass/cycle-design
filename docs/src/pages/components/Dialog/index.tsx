import { useState } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@components/Dialog'
import { Button } from '@components/Button'
import styles from '../Forms/Forms.module.css'

const SIZES = ['sm', 'md', 'lg'] as const

export default function DialogPage() {
  const [basicOpen, setBasicOpen] = useState(false)
  const [sizeOpen, setSizeOpen] = useState<Record<string, boolean>>({
    sm: false,
    md: false,
    lg: false,
  })

  return (
    <div>
      <PageHeader
        badge="Components"
        title="Dialog"
        description="Janela modal para confirmacoes, formularios e conteudo que exige atencao do usuario."
      />

      {/* ── Basic ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Basic</h2>
        <p className={styles.p}>
          Dialog basico com titulo, descricao e botao de fechar.
        </p>

        <div className={styles.demo}>
          <Dialog open={basicOpen} onOpenChange={setBasicOpen}>
            <DialogTrigger asChild>
              <Button>Abrir dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirmar acao</DialogTitle>
                <DialogDescription>
                  Tem certeza de que deseja continuar? Esta acao nao pode ser desfeita.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost">Cancelar</Button>
                </DialogClose>
                <Button onClick={() => setBasicOpen(false)}>Confirmar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* ── Sizes ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Tamanhos</h2>
        <p className={styles.p}>
          Tres tamanhos disponiveis para diferentes contextos de conteudo.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            {SIZES.map((size) => (
              <Dialog
                key={size}
                open={sizeOpen[size]}
                onOpenChange={(open) =>
                  setSizeOpen((prev) => ({ ...prev, [size]: open }))
                }
              >
                <DialogTrigger asChild>
                  <Button variant="outline">{size.toUpperCase()}</Button>
                </DialogTrigger>
                <DialogContent size={size}>
                  <DialogHeader>
                    <DialogTitle>Dialog {size.toUpperCase()}</DialogTitle>
                    <DialogDescription>
                      Este dialog usa o tamanho {size}.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="ghost">Fechar</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* ── Import ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from 'cycle-design'

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Abrir dialog</Button>
  </DialogTrigger>
  <DialogContent size="md">
    <DialogHeader>
      <DialogTitle>Titulo</DialogTitle>
      <DialogDescription>Descricao do dialog.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">Cancelar</Button>
      </DialogClose>
      <Button onClick={() => setOpen(false)}>Confirmar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        />
      </section>
    </div>
  )
}
