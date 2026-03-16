import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Callout } from '@/components/ui/Callout'
import styles from './ShadcnSetup.module.css'

const initCode = `# 1. Criar projeto Next.js (ou Vite)
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app

# 2. Inicializar o shadcn
npx shadcn@latest init`

const themeCode = `/* app/globals.css — Substituir o conteúdo gerado pelo shadcn */

@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is([data-theme="dark"] *));

:root {
  /* ── Radius ── */
  --radius: 8px;

  /* ── Background & Foreground ── */
  --background: #FFFFFF;
  --foreground: #181D27;

  /* ── Card ── */
  --card: #FFFFFF;
  --card-foreground: #181D27;

  /* ── Popover ── */
  --popover: #FFFFFF;
  --popover-foreground: #181D27;

  /* ── Primary (Brand — vermelho/coral) ── */
  --primary: #D45558;
  --primary-foreground: #FFFFFF;

  /* ── Secondary ── */
  --secondary: #FAFAFA;
  --secondary-foreground: #181D27;

  /* ── Muted ── */
  --muted: #F5F5F5;
  --muted-foreground: #535862;

  /* ── Accent ── */
  --accent: #FAFAFA;
  --accent-foreground: #181D27;

  /* ── Destructive ── */
  --destructive: #B32020;
  --destructive-foreground: #FFFFFF;

  /* ── Border, Input, Ring ── */
  --border: #E9EAEB;
  --input: #D5D7DA;
  --ring: #ED6A6D;

  /* ── Charts (paletas de marca) ── */
  --chart-1: #D45558;
  --chart-2: #1A5FE0;
  --chart-3: #FF8041;
  --chart-4: #00C234;
  --chart-5: #9810FA;

  /* ── Sidebar ── */
  --sidebar: #FAFAFA;
  --sidebar-foreground: #181D27;
  --sidebar-primary: #D45558;
  --sidebar-primary-foreground: #FFFFFF;
  --sidebar-accent: #F5F5F5;
  --sidebar-accent-foreground: #181D27;
  --sidebar-border: #E9EAEB;
  --sidebar-ring: #ED6A6D;

  /* ── Paletas de produto Fluencypass ── */
  --brand: #D45558;
  --brand-foreground: #FFFFFF;
  --class: #1A5FE0;
  --class-foreground: #FFFFFF;
  --private: #E56530;
  --private-foreground: #FFFFFF;
  --group: #00C234;
  --group-foreground: #FFFFFF;
  --impulse: #7D0DD4;
  --impulse-foreground: #FFFFFF;

  /* ── Semânticas extras ── */
  --warning: #D48E00;
  --warning-foreground: #FFFFFF;
  --positive: #098A5E;
  --positive-foreground: #FFFFFF;
}

[data-theme="dark"] {
  --background: #0C0E12;
  --foreground: #F7F7F7;
  --card: #13161B;
  --card-foreground: #F7F7F7;
  --popover: #13161B;
  --popover-foreground: #F7F7F7;
  --primary: #ED6A6D;
  --primary-foreground: #FFF5F5;
  --secondary: #22262F;
  --secondary-foreground: #F7F7F7;
  --muted: #22262F;
  --muted-foreground: #94979C;
  --accent: #22262F;
  --accent-foreground: #F7F7F7;
  --destructive: #D42B2B;
  --destructive-foreground: #F7F7F7;
  --border: #373A41;
  --input: #373A41;
  --ring: #F57B7E;
  --chart-1: #ED6A6D;
  --chart-2: #4D8AFF;
  --chart-3: #FF9158;
  --chart-4: #1AFF61;
  --chart-5: #B844FF;
  --sidebar: #13161B;
  --sidebar-foreground: #F7F7F7;
  --sidebar-primary: #ED6A6D;
  --sidebar-primary-foreground: #FFF5F5;
  --sidebar-accent: #22262F;
  --sidebar-accent-foreground: #F7F7F7;
  --sidebar-border: #373A41;
  --sidebar-ring: #F57B7E;
  --brand: #ED6A6D;
  --brand-foreground: #FFF5F5;
  --class: #2E74FF;
  --class-foreground: #E0EBFF;
  --private: #FF8041;
  --private-foreground: #FFEDE0;
  --group: #00E73E;
  --group-foreground: #E0FFE9;
  --impulse: #9810FA;
  --impulse-foreground: #F7E0FF;
  --warning: #F5A800;
  --warning-foreground: #332300;
  --positive: #0BA370;
  --positive-foreground: #022318;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-brand: var(--brand);
  --color-brand-foreground: var(--brand-foreground);
  --color-class: var(--class);
  --color-class-foreground: var(--class-foreground);
  --color-private: var(--private);
  --color-private-foreground: var(--private-foreground);
  --color-group: var(--group);
  --color-group-foreground: var(--group-foreground);
  --color-impulse: var(--impulse);
  --color-impulse-foreground: var(--impulse-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-positive: var(--positive);
  --color-positive-foreground: var(--positive-foreground);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius));
  --radius-lg: calc(var(--radius) + 4px);
  --radius-xl: calc(var(--radius) + 8px);
  --font-sans: 'Open Sans', sans-serif;
  --font-mono: 'Fira Code', monospace;
}`

const addComponentsCode = `# Adicionar componentes conforme necessário
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add select
npx shadcn@latest add toast
npx shadcn@latest add tabs

# Ou adicionar vários de uma vez
npx shadcn@latest add button dialog select input textarea`

const usageCode = `import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export function MyPage() {
  return (
    <div>
      {/* Botão principal — usa cor Brand (coral) automaticamente */}
      <Button>Salvar</Button>

      {/* Variantes do shadcn — todas com cores Cycle */}
      <Button variant="outline">Cancelar</Button>
      <Button variant="destructive">Deletar</Button>
      <Button variant="ghost">Mais opções</Button>

      {/* Dialog — já sai com radius, shadows e cores do Cycle */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Abrir</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Título do modal</DialogTitle>
          </DialogHeader>
          <p>Conteúdo do diálogo aqui.</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}`

const darkModeCode = `/* O tema é controlado via atributo data-theme no <html> */

<!-- Light (padrão) -->
<html data-theme="light">

<!-- Dark -->
<html data-theme="dark">

/* Alternativa: usar .dark class (padrão do shadcn) */
/* Se preferir, troque @custom-variant para: */
@custom-variant dark (&:is(.dark *));`

const fontsCode = `/* Importar no <head> do HTML ou via next/font */

/* Opção 1: Google Fonts */
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Fira+Code:wght@400;500&display=swap"
  rel="stylesheet"
/>

/* Opção 2: next/font (Next.js) */
import { Open_Sans, Fira_Code } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
})`

export default function ShadcnSetup() {
  return (
    <div>
      <PageHeader
        badge="Getting Started"
        title="Setup com shadcn/ui"
        description="Como configurar o shadcn/ui com o tema Cycle Design. Todos os componentes do shadcn saem com a identidade visual da Fluencypass automaticamente."
      />

      <Callout type="info" title="Nova arquitetura">
        <p>
          O Cycle Design agora usa o <strong>shadcn/ui</strong> como base de componentes.
          Os foundations (cores, tipografia, radius, shadows) continuam sendo a fonte de verdade
          do Figma. O shadcn consome esses valores via CSS variables.
        </p>
      </Callout>

      <section className={styles.section}>
        <h2 className={styles.h2}>1. Criar projeto e inicializar shadcn</h2>
        <p className={styles.p}>
          O shadcn funciona com Next.js, Vite, Remix e outros. Ao rodar{' '}
          <code>npx shadcn@latest init</code>, escolha <strong>New York</strong> como estilo
          e <strong>Neutral</strong> como cor base (vamos substituir em seguida).
        </p>
        <CodeBlock code={initCode} language="bash" filename="terminal" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>2. Substituir o tema (globals.css)</h2>
        <p className={styles.p}>
          Substitua o conteúdo do <code>globals.css</code> gerado pelo shadcn pelo tema
          abaixo. Ele mapeia todas as variáveis CSS do shadcn para os valores do Cycle Design,
          incluindo as 5 paletas de produto (brand, class, private, group, impulse).
        </p>
        <CodeBlock code={themeCode} language="css" filename="app/globals.css" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>3. Configurar fontes</h2>
        <p className={styles.p}>
          O Cycle Design usa <strong>Open Sans</strong> para textos e títulos e{' '}
          <strong>Fira Code</strong> para código. O <code>@theme inline</code> já define{' '}
          <code>--font-sans</code> e <code>--font-mono</code>.
        </p>
        <CodeBlock code={fontsCode} language="tsx" filename="app/layout.tsx" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>4. Adicionar componentes</h2>
        <p className={styles.p}>
          Use o CLI do shadcn para adicionar componentes conforme necessário.
          Cada componente é copiado no projeto com as cores do Cycle aplicadas automaticamente.
        </p>
        <CodeBlock code={addComponentsCode} language="bash" filename="terminal" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>5. Usar os componentes</h2>
        <p className={styles.p}>
          Importe e use os componentes normalmente. Todas as cores, radius e sombras
          já refletem o Cycle Design.
        </p>
        <CodeBlock code={usageCode} language="tsx" filename="app/page.tsx" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>6. Dark mode</h2>
        <p className={styles.p}>
          O tema já está configurado para usar <code>data-theme</code> ao invés da
          classe <code>.dark</code> padrão do shadcn. Basta alternar o atributo no{' '}
          <code>{'<html>'}</code>.
        </p>
        <CodeBlock code={darkModeCode} language="html" filename="index.html" />
      </section>

      <Callout type="warning" title="Paletas de produto">
        <p>
          As variáveis <code>--brand</code>, <code>--class</code>, <code>--private</code>,{' '}
          <code>--group</code> e <code>--impulse</code> são extras do Cycle Design e não
          existem no shadcn padrão. Para usá-las em componentes shadcn, utilize as classes
          Tailwind <code>bg-brand</code>, <code>text-class-foreground</code>, etc.
        </p>
      </Callout>

      <Callout type="tip" title="Referência completa">
        <p>
          O mapeamento completo entre variáveis shadcn e tokens Cycle está documentado
          em <code>ai/shadcn-theme-mapping.md</code> no repositório.
        </p>
      </Callout>
    </div>
  )
}
