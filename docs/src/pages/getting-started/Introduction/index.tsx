import { PageHeader } from '@/components/ui/PageHeader'
import { Callout } from '@/components/ui/Callout'
import { Link } from 'react-router-dom'
import styles from './Introduction.module.css'

const principles = [
  {
    title: 'Tokens em camadas',
    desc: 'Primitivos definem valores base; composições funcionais os mapeiam para contextos semânticos. Sempre use as composições nas interfaces.',
  },
  {
    title: 'Dark mode nativo',
    desc: 'Ao usar tokens funcionais, o dark mode funciona automaticamente. Não é necessário escrever CSS adicional para temas.',
  },
  {
    title: 'Fonte única de verdade',
    desc: 'Todos os valores vêm do Figma e são exportados como CSS Custom Properties. Nunca hardcode valores — sempre use var(--token-name).',
  },
  {
    title: 'Extensível por design',
    desc: 'A estrutura é preparada para crescer. Novos componentes seguem as mesmas convenções de tokens e estilos já estabelecidas.',
  },
]

export default function Introduction() {
  return (
    <div>
      <PageHeader
        badge="Getting Started"
        title="Introdução"
        description="Cycle Design é o design system da Fluencypass. Uma coleção de tokens, padrões e (em breve) componentes para construir produtos consistentes e com alta qualidade visual."
      />

      <section className={styles.section}>
        <h2 className={styles.h2}>O que é o Cycle Design?</h2>
        <p className={styles.p}>
          O Cycle Design é a camada de abstração visual entre o Figma e o código.
          Ele define <strong>como as coisas devem parecer</strong> em todos os produtos
          da Fluencypass — cores, tipografia, espaçamentos, sombras e muito mais.
        </p>
        <p className={styles.p}>
          Em vez de cada time inventar seus próprios valores, o Cycle Design fornece
          um vocabulário comum. Isso garante consistência entre produtos e facilita
          a comunicação entre designers e desenvolvedores.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Princípios</h2>
        <div className={styles.principlesGrid}>
          {principles.map((p) => (
            <div key={p.title} className={styles.principleCard}>
              <h3 className={styles.principleTitle}>{p.title}</h3>
              <p className={styles.principleDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Tecnologia</h2>
        <p className={styles.p}>
          O Cycle Design usa <strong>CSS Custom Properties</strong> como mecanismo
          de entrega dos tokens. Isso significa que funciona com qualquer framework —
          React, Vue, Angular, ou HTML puro.
        </p>
        <div className={styles.techList}>
          <div className={styles.techItem}>
            <span className={styles.techName}>Pacote</span>
            <code>@cycle/design</code>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techName}>Framework</span>
            <span>React + TypeScript</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techName}>Estilização</span>
            <span>CSS Custom Properties</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techName}>Fontes</span>
            <span>Open Sans + Fira Code</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techName}>Temas</span>
            <span>Light + Dark mode</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techName}>Fonte de verdade</span>
            <span>Figma → Cycle • Design System</span>
          </div>
        </div>
      </section>

      <Callout type="info" title="Próximo passo">
        <p>
          Pronto para começar? Veja como{' '}
          <Link to="/getting-started/installation">instalar e configurar</Link> o
          Cycle Design no seu projeto.
        </p>
      </Callout>
    </div>
  )
}
