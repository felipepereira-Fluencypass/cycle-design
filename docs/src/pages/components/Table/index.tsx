import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Table } from '@components/Table'
import styles from '../Forms/Forms.module.css'

export default function TablePage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Table"
        description="Componente de tabela semantica com subcomponentes para header, body, rows e cells. Suporta caption para acessibilidade."
      />

      {/* ── Basic Table ──────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Basic Table</h2>
        <p className={styles.p}>
          Use Table.Header, Table.Head, Table.Body, Table.Row e Table.Cell para estruturar dados tabulares.
        </p>

        <div className={styles.demo}>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>Nome</Table.Head>
                <Table.Head>Email</Table.Head>
                <Table.Head>Funcao</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Ana Silva</Table.Cell>
                <Table.Cell>ana.silva@email.com</Table.Cell>
                <Table.Cell>Designer</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Carlos Souza</Table.Cell>
                <Table.Cell>carlos.souza@email.com</Table.Cell>
                <Table.Cell>Desenvolvedor</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Maria Oliveira</Table.Cell>
                <Table.Cell>maria.oliveira@email.com</Table.Cell>
                <Table.Cell>Product Manager</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </section>

      {/* ── Caption ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Caption</h2>
        <p className={styles.p}>
          Use Table.Caption para adicionar uma descricao acessivel a tabela.
        </p>

        <div className={styles.demo}>
          <Table>
            <Table.Caption>Lista de membros da equipe</Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.Head>Nome</Table.Head>
                <Table.Head>Email</Table.Head>
                <Table.Head>Funcao</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Ana Silva</Table.Cell>
                <Table.Cell>ana.silva@email.com</Table.Cell>
                <Table.Cell>Designer</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Carlos Souza</Table.Cell>
                <Table.Cell>carlos.souza@email.com</Table.Cell>
                <Table.Cell>Desenvolvedor</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Maria Oliveira</Table.Cell>
                <Table.Cell>maria.oliveira@email.com</Table.Cell>
                <Table.Cell>Product Manager</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Table } from 'cycle-design'

<Table>
  <Table.Caption>Lista de membros da equipe</Table.Caption>
  <Table.Header>
    <Table.Row>
      <Table.Head>Nome</Table.Head>
      <Table.Head>Email</Table.Head>
      <Table.Head>Funcao</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Ana Silva</Table.Cell>
      <Table.Cell>ana.silva@email.com</Table.Cell>
      <Table.Cell>Designer</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Carlos Souza</Table.Cell>
      <Table.Cell>carlos.souza@email.com</Table.Cell>
      <Table.Cell>Desenvolvedor</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`}
        />
      </section>
    </div>
  )
}
