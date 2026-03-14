import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@components/Accordion'
import styles from '../Forms/Forms.module.css'

export default function AccordionPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Accordion"
        description="Paineis colapsaveis que exibem conteudo sob demanda, reduzindo a carga visual da pagina."
      />

      {/* ── Single (collapsible) ──────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Single (collapsible)</h2>
        <p className={styles.p}>
          Apenas um item aberto por vez. Clicar em outro fecha o anterior.
        </p>

        <div className={styles.demo}>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>O que e o Cycle Design?</AccordionTrigger>
              <AccordionContent>
                Cycle Design e o Design System da Fluencypass, com tokens, componentes e guidelines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como instalar?</AccordionTrigger>
              <AccordionContent>
                Instale via npm com npm install cycle-design e importe os estilos no entry point.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Suporta dark mode?</AccordionTrigger>
              <AccordionContent>
                Sim. Use tokens funcionais e o dark mode funciona automaticamente via data-theme.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ── Multiple ──────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Multiple</h2>
        <p className={styles.p}>
          Varios itens podem ficar abertos ao mesmo tempo.
        </p>

        <div className={styles.demo}>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>Tokens de cor</AccordionTrigger>
              <AccordionContent>
                Use tokens funcionais como --text-primary e --bg-primary para garantir suporte a temas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Tokens de espacamento</AccordionTrigger>
              <AccordionContent>
                Espacamentos vao de --spacing-quarck (2px) ate --spacing-giant (200px).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Tokens de tipografia</AccordionTrigger>
              <AccordionContent>
                A escala tipografica vai de --font-size-4xs (10px) ate --font-size-5xl (72px).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ── Import ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from 'cycle-design'

{/* Single — apenas um aberto por vez */}
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Titulo do item</AccordionTrigger>
    <AccordionContent>Conteudo colapsavel</AccordionContent>
  </AccordionItem>
</Accordion>

{/* Multiple — varios abertos simultaneamente */}
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Titulo do item</AccordionTrigger>
    <AccordionContent>Conteudo colapsavel</AccordionContent>
  </AccordionItem>
</Accordion>`}
        />
      </section>
    </div>
  )
}
