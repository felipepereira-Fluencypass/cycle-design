import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Callout } from '@/components/ui/Callout'
import { Tabs } from '@/components/ui/Tabs'
import { typographyClasses, type TypographyClassMeta } from '@/lib/tokens'
import styles from './Typography.module.css'

const categoryTabs = [
  { key: 'body', label: 'Body' },
  { key: 'subtitle', label: 'Subtitle' },
  { key: 'headline', label: 'Headline' },
  { key: 'display', label: 'Display' },
  { key: 'button', label: 'Button' },
  { key: 'primitivos', label: 'Primitivos' },
]

const categoryDescriptions: Record<string, string> = {
  body: 'Textos de conteúdo e interface. O mais usado no produto. Disponível em 4 tamanhos × 2 pesos (regular e semibold).',
  subtitle: 'Subtítulos de apoio para seções e subseções. Sempre bold — com variações regular e strikethrough.',
  headline: 'Títulos de destaque e headings principais. 5 tamanhos × 2 pesos (bold e regular).',
  display: 'Tipografia decorativa para landing pages e heroes. Alto impacto — extrabold e light.',
  button: 'Estilo de texto para botões e links de ação. Sempre bold, com variante underline para links.',
}

const usageCode = `/* Usando as classes de tipografia */
<h1 class="headline-lg">Título da página</h1>
<p class="body-md">Texto de conteúdo padrão.</p>
<span class="body-sm-semibold">Label com ênfase</span>
<button class="button-md">Confirmar</button>`

// Primitive token data
const fontFamilies = [
  { token: '--font-family-body', value: "'Open Sans', sans-serif", usage: 'Textos de conteúdo, UI' },
  { token: '--font-family-headline', value: "'Open Sans', sans-serif", usage: 'Títulos e headings' },
  { token: '--font-family-display', value: "'Open Sans', sans-serif", usage: 'Tipografia decorativa' },
  { token: '--font-family-mono', value: "'Fira Code', monospace", usage: 'Código, tokens, snippets' },
]

const fontWeights = [
  { token: '--font-weight-light', value: '300', label: 'Light' },
  { token: '--font-weight-regular', value: '400', label: 'Regular' },
  { token: '--font-weight-semibold', value: '600', label: 'Semibold' },
  { token: '--font-weight-bold', value: '700', label: 'Bold' },
  { token: '--font-weight-extrabold', value: '800', label: 'Extrabold' },
]

const fontSizes = [
  { token: '--font-size-4xs', value: '10px', rem: '0.625rem' },
  { token: '--font-size-3xs', value: '12px', rem: '0.75rem' },
  { token: '--font-size-2xs', value: '14px', rem: '0.875rem' },
  { token: '--font-size-xs', value: '16px', rem: '1rem' },
  { token: '--font-size-sm', value: '18px', rem: '1.125rem' },
  { token: '--font-size-md', value: '20px', rem: '1.25rem' },
  { token: '--font-size-lg', value: '24px', rem: '1.5rem' },
  { token: '--font-size-xl', value: '32px', rem: '2rem' },
  { token: '--font-size-2xl', value: '40px', rem: '2.5rem' },
  { token: '--font-size-3xl', value: '48px', rem: '3rem' },
  { token: '--font-size-4xl', value: '64px', rem: '4rem' },
  { token: '--font-size-5xl', value: '72px', rem: '4.5rem' },
]

const lineHeights = [
  { token: '--line-height-5xs', value: '12px', rem: '0.75rem' },
  { token: '--line-height-4xs', value: '14px', rem: '0.875rem' },
  { token: '--line-height-3xs', value: '16px', rem: '1rem' },
  { token: '--line-height-2xs', value: '18px', rem: '1.125rem' },
  { token: '--line-height-xs', value: '20px', rem: '1.25rem' },
  { token: '--line-height-sm', value: '24px', rem: '1.5rem' },
  { token: '--line-height-md', value: '28px', rem: '1.75rem' },
  { token: '--line-height-lg', value: '30px', rem: '1.875rem' },
  { token: '--line-height-xl', value: '32px', rem: '2rem' },
  { token: '--line-height-2xl', value: '40px', rem: '2.5rem' },
  { token: '--line-height-3xl', value: '48px', rem: '3rem' },
  { token: '--line-height-4xl', value: '60px', rem: '3.75rem' },
  { token: '--line-height-5xl', value: '82px', rem: '5.125rem' },
  { token: '--line-height-6xl', value: '90px', rem: '5.625rem' },
]

const letterSpacings = [
  { token: '--letter-spacing-none', value: '0', label: 'None' },
]

const textDecorations = [
  { token: '--text-decoration-none', value: 'none', label: 'None' },
  { token: '--text-decoration-underline', value: 'underline', label: 'Underline' },
  { token: '--text-decoration-strikethrough', value: 'line-through', label: 'Strikethrough' },
]

function TypographyRow({ item }: { item: TypographyClassMeta }) {
  const previewText =
    parseInt(item.size) >= 64
      ? 'Cycle'
      : parseInt(item.size) >= 32
        ? 'Cycle Design'
        : 'The quick brown fox'

  return (
    <div className={styles.typeRow}>
      <div className={styles.typeMeta}>
        <code className={styles.typeClass}>.{item.class}</code>
        <div className={styles.typeSpecs}>
          <span>{item.size}</span>
          <span className={styles.dot}>·</span>
          <span>weight {item.weight}</span>
          <span className={styles.dot}>·</span>
          <span>lh {item.lineHeight}</span>
        </div>
        <p className={styles.typeDesc}>{item.description}</p>
      </div>
      <div className={`${styles.typePreview} ${item.class}`}>
        {previewText}
      </div>
    </div>
  )
}

function PrimitivesTab() {
  return (
    <div className={styles.primitivesContent}>

      {/* Font Family */}
      <section className={styles.primSection}>
        <h3 className={styles.primTitle}>Font Family</h3>
        <p className={styles.primDesc}>4 famílias de fonte. Todas as composições de tipografia usam estes tokens.</p>
        <div className={styles.primTable}>
          <div className={styles.primTableHead}>
            <span>Token</span>
            <span>Valor</span>
            <span>Preview</span>
            <span>Uso</span>
          </div>
          {fontFamilies.map((item) => (
            <div key={item.token} className={styles.primTableRow}>
              <code className={styles.primToken}>{item.token}</code>
              <span className={styles.primValue}>{item.value}</span>
              <span style={{ fontFamily: `var(${item.token})` }} className={styles.primPreviewText}>
                The quick fox
              </span>
              <span className={styles.primUsage}>{item.usage}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Font Size */}
      <section className={styles.primSection}>
        <h3 className={styles.primTitle}>Font Size</h3>
        <p className={styles.primDesc}>12 tamanhos de fonte, de 10px a 72px. Base: 16px = 1rem.</p>
        <div className={styles.primTable}>
          <div className={styles.primTableHead}>
            <span>Token</span>
            <span>px</span>
            <span>rem</span>
            <span>Preview</span>
          </div>
          {fontSizes.map((item) => (
            <div key={item.token} className={styles.primTableRow}>
              <code className={styles.primToken}>{item.token}</code>
              <span className={styles.primValue}>{item.value}</span>
              <span className={styles.primValue}>{item.rem}</span>
              <span
                style={{ fontSize: `var(${item.token})`, lineHeight: 1.2 }}
                className={styles.primPreviewText}
              >
                Aa
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weight */}
      <section className={styles.primSection}>
        <h3 className={styles.primTitle}>Font Weight</h3>
        <p className={styles.primDesc}>5 pesos de fonte, de 300 (light) a 800 (extrabold).</p>
        <div className={`${styles.primTable} ${styles.primTable3}`}>
          <div className={styles.primTableHead}>
            <span>Token</span>
            <span>Valor</span>
            <span>Preview</span>
          </div>
          {fontWeights.map((item) => (
            <div key={item.token} className={styles.primTableRow}>
              <code className={styles.primToken}>{item.token}</code>
              <span className={styles.primValue}>{item.value} — {item.label}</span>
              <span
                style={{ fontWeight: `var(${item.token})`, fontSize: '18px' }}
                className={styles.primPreviewText}
              >
                The quick brown fox
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Line Height */}
      <section className={styles.primSection}>
        <h3 className={styles.primTitle}>Line Height</h3>
        <p className={styles.primDesc}>14 valores de line-height, de 12px a 90px. Base: 16px = 1rem.</p>
        <div className={`${styles.primTable} ${styles.primTable2}`}>
          <div className={styles.primTableHead}>
            <span>Token</span>
            <span>px</span>
            <span>rem</span>
          </div>
          {lineHeights.map((item) => (
            <div key={item.token} className={styles.primTableRow}>
              <code className={styles.primToken}>{item.token}</code>
              <span className={styles.primValue}>{item.value}</span>
              <span className={styles.primValue}>{item.rem}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Letter Spacing */}
      <section className={styles.primSection}>
        <h3 className={styles.primTitle}>Letter Spacing</h3>
        <p className={styles.primDesc}>Token de espaçamento entre letras. Atualmente apenas o valor neutro.</p>
        <div className={`${styles.primTable} ${styles.primTable3}`}>
          <div className={styles.primTableHead}>
            <span>Token</span>
            <span>Valor</span>
            <span>Preview</span>
          </div>
          {letterSpacings.map((item) => (
            <div key={item.token} className={styles.primTableRow}>
              <code className={styles.primToken}>{item.token}</code>
              <span className={styles.primValue}>{item.value}</span>
              <span
                style={{ letterSpacing: `var(${item.token})`, fontSize: '14px' }}
                className={styles.primPreviewText}
              >
                The quick brown fox
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Text Decoration */}
      <section className={styles.primSection}>
        <h3 className={styles.primTitle}>Text Decoration</h3>
        <p className={styles.primDesc}>3 valores de decoração de texto. Usados nas classes button-underline e subtitle-strikethrough.</p>
        <div className={`${styles.primTable} ${styles.primTable3}`}>
          <div className={styles.primTableHead}>
            <span>Token</span>
            <span>Valor</span>
            <span>Preview</span>
          </div>
          {textDecorations.map((item) => (
            <div key={item.token} className={styles.primTableRow}>
              <code className={styles.primToken}>{item.token}</code>
              <span className={styles.primValue}>{item.value}</span>
              <span
                style={{ textDecoration: `var(${item.token})`, fontSize: '14px' }}
                className={styles.primPreviewText}
              >
                The quick brown fox
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default function Typography() {
  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Typography"
        description="38 estilos de tipografia prontos para uso. Organize o conteúdo com as categorias Body, Subtitle, Headline, Display e Button."
      />

      <section className={styles.intro}>
        <h2 className={styles.h2}>Como usar</h2>
        <p className={styles.p}>
          As composições tipográficas são classes CSS globais. Aplique-as diretamente no HTML
          ou via <code>className</code> no React. Cada classe já define font-size, font-weight e line-height corretos.
        </p>
        <CodeBlock code={usageCode} language="tsx" filename="component.tsx" />
      </section>

      <Callout type="info" title="Fontes">
        <p>
          O Cycle Design usa <strong>Open Sans</strong> para body, subtitle, headline e display,
          e <strong>Fira Code</strong> para código. Importe-as via Google Fonts ou inclua localmente.
        </p>
      </Callout>

      <Tabs tabs={categoryTabs}>
        {(active) => (
          <>
            {active !== 'primitivos' && (
              <div>
                <p className={styles.p}>{categoryDescriptions[active]}</p>
                <div className={styles.typeList}>
                  {typographyClasses
                    .filter((t) => t.category === active)
                    .map((item) => (
                      <TypographyRow key={item.class} item={item} />
                    ))}
                </div>
              </div>
            )}
            {active === 'primitivos' && <PrimitivesTab />}
          </>
        )}
      </Tabs>
    </div>
  )
}
