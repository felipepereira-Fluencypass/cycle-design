import { PageHeader } from '@/components/ui/PageHeader'
import { Callout } from '@/components/ui/Callout'
import { Link } from 'react-router-dom'
import styles from './Introduction.module.css'

const principles = [
  {
    title: 'Foundations do Cycle, componentes do shadcn',
    desc: 'Os tokens de cor, tipografia, radius e spacing vêm do Figma (Cycle Design). Os componentes de UI são do shadcn/ui, customizados com esses tokens.',
  },
  {
    title: 'Dark mode nativo',
    desc: 'Ao usar as variáveis CSS do tema, o dark mode funciona automaticamente em todos os componentes shadcn.',
  },
  {
    title: 'Fonte única de verdade',
    desc: 'Todos os valores visuais vêm do Figma. O globals.css traduz esses valores para as variáveis CSS que o shadcn espera.',
  },
  {
    title: '58+ componentes prontos',
    desc: 'Dialog, Select, Toast, Tabs, Popover, Tooltip e dezenas de outros — todos com a identidade visual da Fluencypass.',
  },
]

export default function Introduction() {
  return (
    <div>
      <PageHeader
        badge="Getting Started"
        title="Introdução"
        description="Cycle Design é o design system da Fluencypass. Usa shadcn/ui como base de componentes, customizado com os foundations (cores, tipografia, radius, shadows) da identidade visual Fluencypass."
      />

      <section className={styles.section}>
        <h2 className={styles.h2}>O que é o Cycle Design?</h2>
        <p className={styles.p}>
          O Cycle Design combina os <strong>foundations visuais da Fluencypass</strong> (cores,
          tipografia, espaçamento, sombras) com os <strong>componentes do shadcn/ui</strong>.
          Os foundations definem <em>como as coisas parecem</em>, o shadcn define{' '}
          <em>como elas se comportam</em>.
        </p>
        <p className={styles.p}>
          Na prática, isso significa que você usa componentes do shadcn normalmente
          (Button, Dialog, Select, Toast...) e eles já saem com a identidade visual da
          Fluencypass — incluindo dark mode automático.
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
          O Cycle Design usa <strong>shadcn/ui + Tailwind CSS v4</strong> para componentes
          e <strong>CSS Custom Properties</strong> para os tokens de design.
        </p>
        <div className={styles.techList}>
          <div className={styles.techItem}>
            <span className={styles.techName}>Componentes</span>
            <span>shadcn/ui (58+ componentes)</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techName}>Estilização</span>
            <span>Tailwind CSS v4 + CSS Variables</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techName}>Primitivos</span>
            <span>Radix UI (acessibilidade nativa)</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techName}>Framework</span>
            <span>React + TypeScript</span>
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
          Pronto para começar? Veja o{' '}
          <Link to="/getting-started/shadcn-setup">setup com shadcn/ui</Link> para
          configurar seu projeto com o tema Cycle Design.
        </p>
      </Callout>
    </div>
  )
}
