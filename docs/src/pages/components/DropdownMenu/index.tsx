import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@components/DropdownMenu'
import { Button } from '@components/Button'
import styles from '../Forms/Forms.module.css'

export default function DropdownMenuPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Dropdown Menu"
        description="Menu de acoes contextuais acionado por um botao trigger."
      />

      {/* ── Basico ─────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Basico</h2>
        <p className={styles.p}>
          Um dropdown menu com label, itens e separador.
        </p>

        <div className={styles.demo}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Opcoes</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Acoes</DropdownMenuLabel>
              <DropdownMenuItem>Editar</DropdownMenuItem>
              <DropdownMenuItem>Duplicar</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Excluir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* ── Com itens desabilitados ────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Com itens desabilitados</h2>
        <p className={styles.p}>
          Itens podem ser desabilitados individualmente com a prop disabled.
        </p>

        <div className={styles.demo}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Conta</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configuracoes</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>Plano gratuito</DropdownMenuItem>
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* ── Import ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from 'cycle-design'

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Opcoes</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Acoes</DropdownMenuLabel>
    <DropdownMenuItem>Editar</DropdownMenuItem>
    <DropdownMenuItem>Duplicar</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Excluir</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        />
      </section>
    </div>
  )
}
