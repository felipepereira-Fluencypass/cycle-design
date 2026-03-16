import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Callout } from '@/components/ui/Callout'
import { Link } from 'react-router-dom'
import styles from './Installation.module.css'

const initCode = `# Criar projeto (Next.js recomendado)
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app

# Inicializar shadcn
npx shadcn@latest init`

const addComponentsCode = `# Adicionar componentes conforme necessário
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add select
npx shadcn@latest add input
npx shadcn@latest add toast

# Ou vários de uma vez
npx shadcn@latest add button dialog select input textarea toast tabs`

const usageCode = `import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function LoginForm() {
  return (
    <form>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Senha" type="password" />
      <Button>Entrar</Button>
      <Button variant="outline">Cancelar</Button>
    </form>
  )
}`

const fontsCode = `<!-- Google Fonts — adicionar no <head> -->
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Fira+Code:wght@400;500&display=swap"
  rel="stylesheet"
/>`

export default function Installation() {
  return (
    <div>
      <PageHeader
        badge="Getting Started"
        title="Instalação"
        description="Como configurar um novo projeto com shadcn/ui usando o tema Cycle Design."
      />

      <Callout type="info" title="Pré-requisitos">
        <p>
          Node.js 18+, React 18+, TypeScript. O shadcn/ui funciona com Next.js, Vite, Remix
          e outros frameworks React.
        </p>
      </Callout>

      <section className={styles.section}>
        <h2 className={styles.h2}>1. Criar projeto e inicializar shadcn</h2>
        <p className={styles.p}>
          Ao rodar <code>npx shadcn@latest init</code>, escolha <strong>New York</strong> como
          estilo e <strong>Neutral</strong> como cor base. Esses defaults serão substituídos
          pelo tema Cycle no próximo passo.
        </p>
        <CodeBlock code={initCode} language="bash" filename="terminal" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>2. Aplicar o tema Cycle Design</h2>
        <p className={styles.p}>
          Substitua o conteúdo do <code>globals.css</code> gerado pelo shadcn pelo tema
          do Cycle Design. O tema completo está documentado na página{' '}
          <Link to="/getting-started/shadcn-setup">Setup com shadcn/ui</Link>.
        </p>
        <p className={styles.p}>
          Esse arquivo contém todas as variáveis CSS (cores, radius, shadows) mapeadas
          para os foundations do Cycle, incluindo light mode, dark mode e as 5 paletas
          de produto da Fluencypass.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>3. Configurar fontes</h2>
        <p className={styles.p}>
          O Cycle Design usa <strong>Open Sans</strong> para textos e títulos e{' '}
          <strong>Fira Code</strong> para código monospace.
        </p>
        <CodeBlock code={fontsCode} language="html" filename="index.html" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>4. Adicionar componentes</h2>
        <p className={styles.p}>
          Use o CLI do shadcn para adicionar componentes conforme necessário.
          Cada componente é copiado no seu projeto em <code>components/ui/</code>.
        </p>
        <CodeBlock code={addComponentsCode} language="bash" filename="terminal" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>5. Usar</h2>
        <p className={styles.p}>
          Importe e use os componentes. Todas as cores, radius e sombras já refletem
          o Cycle Design automaticamente.
        </p>
        <CodeBlock code={usageCode} language="tsx" filename="app/login.tsx" />
      </section>

      <Callout type="tip" title="Próximo passo">
        <p>
          Veja o <Link to="/getting-started/shadcn-setup">Setup com shadcn/ui</Link> para
          o globals.css completo e configuração de dark mode.
        </p>
      </Callout>
    </div>
  )
}
