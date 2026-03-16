import { Link } from 'react-router-dom'
import { ArrowRight, Palette, Type, Ruler, Layers } from 'lucide-react'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { CycleLogo } from '@/components/ui/CycleLogo'
import styles from './Home.module.css'

const brandPalettes = [
  { name: 'Brand', token: '--color-brand-500', label: 'Coral' },
  { name: 'Class', token: '--color-class-500', label: 'Azul' },
  { name: 'Private', token: '--color-private-500', label: 'Laranja' },
  { name: 'Group', token: '--color-group-500', label: 'Verde' },
  { name: 'Impulse', token: '--color-impulse-500', label: 'Roxo' },
]

const stats = [
  { value: '58+', label: 'Componentes shadcn/ui' },
  { value: '11', label: 'Paletas de cor' },
  { value: '5', label: 'Paletas de marca' },
  { value: '2', label: 'Temas — light & dark' },
]

const sections = [
  {
    icon: Palette,
    title: 'Foundation',
    description: 'Tokens de cor, tipografia, espaçamento, sombras, bordas e grid. A base de tudo.',
    href: '/tokens/colors',
    label: 'Ver tokens',
    color: 'brand',
  },
  {
    icon: Type,
    title: 'Typography',
    description: '38 classes CSS prontas. Body, subtitle, headline, display e button com todas as variações.',
    href: '/tokens/typography',
    label: 'Ver tipografia',
    color: 'class',
  },
  {
    icon: Ruler,
    title: 'Spacing',
    description: 'Escala de espaçamento consistente. Spacing para gaps e Spacing Inset para padding.',
    href: '/tokens/spacing',
    label: 'Ver espaçamento',
    color: 'group',
  },
  {
    icon: Layers,
    title: 'Getting Started',
    description: 'Como instalar, importar os tokens e configurar light e dark mode no seu projeto.',
    href: '/getting-started/installation',
    label: 'Começar',
    color: 'impulse',
  },
]

const installCode = `/* 1. Inicialize o shadcn no projeto */
npx shadcn@latest init

/* 2. Substitua globals.css pelo tema Cycle */
/* (veja Setup shadcn/ui na documentação) */

/* 3. Adicione componentes conforme necessário */
npx shadcn@latest add button dialog select toast`

export default function Home() {
  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <CycleLogo size={56} className={styles.heroLogo} />

        <div className={styles.heroEyebrow}>
          <span className={styles.heroDot} />
          Design System da Fluencypass
        </div>

        <h1 className={styles.heroTitle}>
          Cycle Design
        </h1>

        <p className={styles.heroSubtitle}>
          shadcn/ui + foundations Fluencypass. 58+ componentes prontos, acessíveis
          e com a identidade visual da marca.
        </p>

        <div className={styles.heroActions}>
          <Link to="/getting-started/installation" className={styles.btnPrimary}>
            Começar agora
            <ArrowRight size={16} />
          </Link>
          <Link to="/tokens/colors" className={styles.btnSecondary}>
            Ver tokens
          </Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className={styles.statsRow}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── BRAND PALETTES ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Paletas de marca</h2>
          <p className={styles.sectionDesc}>
            Cinco paletas com 12 tons cada. Cada paleta representa uma
            funcionalidade do produto Fluencypass.
          </p>
        </div>

        <div className={styles.paletteStrip}>
          {brandPalettes.map((p) => (
            <div key={p.name} className={styles.paletteItem}>
              <div
                className={styles.paletteColor}
                style={{ background: `var(${p.token})` }}
              />
              <span className={styles.paletteName}>{p.name}</span>
              <span className={styles.paletteLabel}>{p.label}</span>
            </div>
          ))}
        </div>

        <Link to="/tokens/colors" className={styles.sectionLink}>
          Ver todas as paletas <ArrowRight size={14} />
        </Link>
      </section>

      {/* ── QUICK INSTALL ── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Instalação rápida</h2>
          <p className={styles.sectionDesc}>
            Três passos para usar os tokens do Cycle Design em qualquer projeto.
          </p>
        </div>
        <CodeBlock code={installCode} language="bash" filename="terminal" />
        <Link to="/getting-started/installation" className={styles.sectionLink}>
          Ver guia completo de instalação <ArrowRight size={14} />
        </Link>
      </section>

      {/* ── SECTION CARDS ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Explorar</h2>
        <div className={styles.cardsGrid}>
          {sections.map((s) => (
            <Link key={s.title} to={s.href} className={`${styles.card} ${styles[`card--${s.color}`]}`}>
              <div className={`${styles.cardIcon} ${styles[`cardIcon--${s.color}`]}`}>
                <s.icon size={20} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.description}</p>
              </div>
              <span className={styles.cardLink}>
                {s.label} <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
