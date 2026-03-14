import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Popover, PopoverTrigger, PopoverContent } from '@components/Popover'
import { Button } from '@components/Button'
import styles from '../Forms/Forms.module.css'

export default function PopoverPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Popover"
        description="Painel flutuante com conteudo rico, acionado por clique."
      />

      {/* ── Basico ─────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Basico</h2>
        <p className={styles.p}>
          Um popover simples com conteudo de texto acionado por um botao.
        </p>

        <div className={styles.demo}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Abrir popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p style={{ margin: 0 }}>
                Este e um exemplo de conteudo dentro do popover.
                Voce pode colocar qualquer elemento aqui.
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      {/* ── Com conteudo estruturado ───────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Com conteudo estruturado</h2>
        <p className={styles.p}>
          Popovers podem conter conteudo rico como formularios, listas e acoes.
        </p>

        <div className={styles.demo}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Configuracoes</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <strong>Preferencias</strong>
                <p style={{ margin: 0, fontSize: 'var(--font-size-3xs)', color: 'var(--text-secondary)' }}>
                  Ajuste suas configuracoes de notificacao e privacidade.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      {/* ── Import ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from 'cycle-design'

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Abrir popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Conteudo do popover.</p>
  </PopoverContent>
</Popover>`}
        />
      </section>
    </div>
  )
}
