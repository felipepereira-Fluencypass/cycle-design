import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@components/Tabs'
import styles from '../Forms/Forms.module.css'

export default function TabsPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Tabs"
        description="Navegacao por abas para alternar entre paineis de conteudo relacionados."
      />

      {/* ── Underline (default) ────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Underline (padrao)</h2>
        <p className={styles.p}>
          Variante padrao com indicador inferior. Ideal para navegacao principal dentro de uma pagina.
        </p>

        <div className={styles.demo}>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Conta</TabsTrigger>
              <TabsTrigger value="tab2">Seguranca</TabsTrigger>
              <TabsTrigger value="tab3">Notificacoes</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Gerencie as informacoes da sua conta.</TabsContent>
            <TabsContent value="tab2">Altere sua senha e configuracoes de seguranca.</TabsContent>
            <TabsContent value="tab3">Escolha quais notificacoes deseja receber.</TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── Filled ─────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Filled</h2>
        <p className={styles.p}>
          Variante com fundo preenchido no trigger ativo. Boa para destaque visual mais forte.
        </p>

        <div className={styles.demo}>
          <Tabs defaultValue="tab1" variant="filled">
            <TabsList>
              <TabsTrigger value="tab1">Visao geral</TabsTrigger>
              <TabsTrigger value="tab2">Analiticos</TabsTrigger>
              <TabsTrigger value="tab3">Relatorios</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Resumo geral do sistema.</TabsContent>
            <TabsContent value="tab2">Metricas e graficos detalhados.</TabsContent>
            <TabsContent value="tab3">Exportacao e historico de relatorios.</TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── Outline ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Outline</h2>
        <p className={styles.p}>
          Variante com borda ao redor do trigger ativo. Util para contextos com fundo mais neutro.
        </p>

        <div className={styles.demo}>
          <Tabs defaultValue="tab1" variant="outline">
            <TabsList>
              <TabsTrigger value="tab1">Aulas</TabsTrigger>
              <TabsTrigger value="tab2">Exercicios</TabsTrigger>
              <TabsTrigger value="tab3">Materiais</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Lista de aulas disponiveis.</TabsContent>
            <TabsContent value="tab2">Exercicios para pratica.</TabsContent>
            <TabsContent value="tab3">Materiais complementares para download.</TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── Import ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from 'cycle-design'

{/* Underline (padrao) */}
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Conta</TabsTrigger>
    <TabsTrigger value="tab2">Seguranca</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Conteudo da aba Conta.</TabsContent>
  <TabsContent value="tab2">Conteudo da aba Seguranca.</TabsContent>
</Tabs>

{/* Filled */}
<Tabs defaultValue="tab1" variant="filled">
  <TabsList>
    <TabsTrigger value="tab1">Visao geral</TabsTrigger>
    <TabsTrigger value="tab2">Analiticos</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Resumo geral.</TabsContent>
  <TabsContent value="tab2">Metricas detalhadas.</TabsContent>
</Tabs>

{/* Outline */}
<Tabs defaultValue="tab1" variant="outline">
  <TabsList>
    <TabsTrigger value="tab1">Aulas</TabsTrigger>
    <TabsTrigger value="tab2">Exercicios</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Lista de aulas.</TabsContent>
  <TabsContent value="tab2">Exercicios para pratica.</TabsContent>
</Tabs>`}
        />
      </section>
    </div>
  )
}
