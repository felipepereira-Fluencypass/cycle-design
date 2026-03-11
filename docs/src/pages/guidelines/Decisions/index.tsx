import { PageHeader } from '@/components/ui/PageHeader'
import { Callout } from '@/components/ui/Callout'
import { UsageExample } from '@/components/ui/UsageExample'
import styles from './Decisions.module.css'

export default function Decisions() {
  return (
    <div>
      <PageHeader
        badge="Guidelines"
        title="Decisões de Design"
        description="Princípios e decisões que guiam a evolução do Cycle Design. Entender o porquê é tão importante quanto saber o quê usar."
      />

      <section className={styles.section}>
        <h2 className={styles.h2}>Tokens em camadas</h2>
        <p className={styles.p}>
          O Cycle Design usa um modelo de tokens em duas camadas: <strong>primitivos</strong> e{' '}
          <strong>composições funcionais</strong>.
        </p>
        <p className={styles.p}>
          Os primitivos definem os valores base — como <code>--color-brand-500: #ED6A6D</code>.
          As composições funcionais mapeiam esses primitivos para contextos semânticos —
          como <code>--text-brand-primary: var(--color-brand-600)</code>.
        </p>
        <p className={styles.p}>
          Nas interfaces, sempre use as composições funcionais. Isso garante que o dark mode
          funcione sem esforço adicional e facilita mudanças globais de visual.
        </p>

        <UsageExample
          doExample={{
            label: 'Composição funcional',
            code: `.title { color: var(--text-primary); }
.card { background: var(--bg-secondary); }
.input { border-color: var(--border-primary); }`,
          }}
          dontExample={{
            label: 'Primitivo direto',
            code: `.title { color: var(--color-gray-light-900); }
.card { background: var(--color-gray-light-50); }
.input { border-color: var(--color-gray-light-300); }`,
          }}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Open Sans como fonte única</h2>
        <p className={styles.p}>
          O Cycle Design usa Open Sans para todos os estilos de texto — body, subtitle,
          headline e display. Isso cria coesão visual e simplifica o gerenciamento de fontes.
          A única exceção é o Fira Code, usado exclusivamente para código monospace.
        </p>
        <p className={styles.p}>
          A variação de peso (300 a 800) cria hierarquia suficiente sem precisar de fontes diferentes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Dark mode por atributo, não por classe</h2>
        <p className={styles.p}>
          O tema é controlado pelo atributo <code>data-theme="dark"</code> no elemento{' '}
          <code>{'<html>'}</code>, não por uma classe CSS. Isso alinha com as melhores práticas
          modernas e permite coexistência com <code>prefers-color-scheme</code>.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>5 paletas de marca</h2>
        <p className={styles.p}>
          Além das paletas neutras e semânticas, o Cycle Design tem 5 paletas de marca —
          Brand, Class, Private, Group e Impulse. Cada paleta representa uma funcionalidade
          do produto Fluencypass e tem tokens completos de text, border, foreground e background.
        </p>
        <p className={styles.p}>
          Isso permite que cada funcionalidade tenha sua identidade visual sem quebrar a
          coerência do design system.
        </p>
      </section>

      <Callout type="tip" title="Fonte de verdade">
        <p>
          Em caso de conflito entre esta documentação e o Figma, o Figma (Cycle • Design System)
          é a fonte de verdade para os valores de tokens.
        </p>
      </Callout>
    </div>
  )
}
