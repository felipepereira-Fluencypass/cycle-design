import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@components/Sheet'
import { Button } from '@components/Button'
import styles from '../Forms/Forms.module.css'

const SIDES = ['right', 'left', 'top', 'bottom'] as const

export default function SheetPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Sheet"
        description="Painel deslizante que aparece sobre o conteudo a partir de qualquer lado da tela."
      />

      {/* ── Lados ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Lados</h2>
        <p className={styles.p}>
          O Sheet pode aparecer pela direita (padrao), esquerda, topo ou base.
        </p>

        <div className={styles.demo}>
          {SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline">Abrir {side}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Sheet {side}</SheetTitle>
                  <SheetDescription>
                    Este sheet aparece pelo lado {side} da tela.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </section>

      {/* ── Com conteudo ───────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Com conteudo</h2>
        <p className={styles.p}>
          Exemplo completo com titulo, descricao e conteudo personalizado.
        </p>

        <div className={styles.demo}>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Editar perfil</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Editar perfil</SheetTitle>
                <SheetDescription>
                  Faca alteracoes no seu perfil. Clique em salvar quando terminar.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      {/* ── Import ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from 'cycle-design'
import { Button } from 'cycle-design'

{/* Padrao (direita) */}
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Abrir Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Titulo do Sheet</SheetTitle>
      <SheetDescription>Descricao do conteudo.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

{/* Lado esquerdo */}
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Abrir esquerda</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Sheet esquerdo</SheetTitle>
      <SheetDescription>Aparece pela esquerda.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
        />
      </section>
    </div>
  )
}
