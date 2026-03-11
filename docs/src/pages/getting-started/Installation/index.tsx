import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Callout } from '@/components/ui/Callout'
import styles from './Installation.module.css'

const installCode = `npm install @cycle/design
# ou
yarn add @cycle/design`

const importFullCode = `/* No seu arquivo CSS global (ex: main.css, globals.css) */

/* 1. Primitivos (base — não usar diretamente nas interfaces) */
@import '@cycle/design/tokens/typography-primitives.css';
@import '@cycle/design/tokens/color-primitives.css';

/* 2. Composições (tokens funcionais — use estes nas interfaces) */
@import '@cycle/design/tokens/typography-compositions.css';
@import '@cycle/design/tokens/color-compositions.css';
@import '@cycle/design/tokens/color-compositions-bg.css';
@import '@cycle/design/tokens/gradients.css';

/* 3. Utilitários */
@import '@cycle/design/tokens/border-width-tokens.css';
@import '@cycle/design/tokens/radius-tokens.css';
@import '@cycle/design/tokens/shadow-tokens.css';
@import '@cycle/design/tokens/opacity-tokens.css';
@import '@cycle/design/tokens/spacing-tokens.css';
@import '@cycle/design/tokens/grid-tokens.css';`

const importShortCode = `/* Alternativa: importar tudo de uma vez */
@import '@cycle/design/tokens/index.css';`

const htmlCode = `<!-- Light mode (padrão) -->
<html data-theme="light">

<!-- Dark mode -->
<html data-theme="dark">`

const usageCode = `/* ✅ Correto — usar tokens funcionais */
.card {
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: var(--border-hairline) solid var(--border-primary);
  border-radius: var(--radius-sm);
  padding: var(--spacing-inset-md);
  box-shadow: var(--shadow-sm);
}

/* ❌ Errado — hardcode de valores */
.card {
  color: #181D27;
  background: #FAFAFA;
  border: 1px solid #D5D7DA;
  border-radius: 8px;
  padding: 16px;
}`

export default function Installation() {
  return (
    <div>
      <PageHeader
        badge="Getting Started"
        title="Instalação"
        description="Como instalar o pacote @cycle/design e importar os tokens no seu projeto."
      />

      <section className={styles.section}>
        <h2 className={styles.h2}>1. Instalar o pacote</h2>
        <CodeBlock code={installCode} language="bash" filename="terminal" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>2. Importar os tokens</h2>
        <p className={styles.p}>
          Importe os tokens no seu CSS global. A ordem de importação é importante —
          primitivos antes das composições.
        </p>
        <CodeBlock code={importFullCode} language="css" filename="globals.css" />
        <p className={styles.p}>Ou use o atalho que importa tudo na ordem correta:</p>
        <CodeBlock code={importShortCode} language="css" filename="globals.css" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>3. Configurar o tema</h2>
        <p className={styles.p}>
          Defina o atributo <code>data-theme</code> no elemento <code>{'<html>'}</code> para
          ativar o tema correto. O dark mode também é ativado automaticamente via{' '}
          <code>prefers-color-scheme</code>.
        </p>
        <CodeBlock code={htmlCode} language="tsx" filename="index.html" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>4. Usar os tokens</h2>
        <p className={styles.p}>
          Com os tokens importados, use as CSS Custom Properties em qualquer lugar do seu CSS.
          Sempre use tokens <strong>funcionais</strong> (composições), não primitivos.
        </p>
        <CodeBlock code={usageCode} language="css" filename="component.css" />
      </section>

      <Callout type="warning" title="Regra importante">
        <p>
          Nunca use valores hardcoded como <code>#181D27</code> ou <code>16px</code> diretamente
          no CSS. Sempre use <code>var(--token-name)</code>. Isso garante consistência e suporte
          automático ao dark mode.
        </p>
      </Callout>

      <Callout type="tip" title="Próximo passo">
        <p>
          Entenda como o dark mode funciona e como alternar entre os temas
          no guia de <a href="/getting-started/dark-mode">Dark Mode</a>.
        </p>
      </Callout>
    </div>
  )
}
