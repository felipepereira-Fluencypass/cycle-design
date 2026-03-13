import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Callout } from '@/components/ui/Callout'
import styles from './LlmsTxt.module.css'

const llmsTxtExample = `# Cycle Design

> Cycle Design is the design system for Fluencypass...

## Getting Started

- [Overview](ai/overview.md): Architecture, token categories, and rules.
- [Installation](ai/installation.md): How to install and use.
- [Dark Mode](ai/dark-mode.md): Theme switching guide.

## Tokens

- [Colors](ai/tokens/colors.md): Complete color system.
- [Typography](ai/tokens/typography.md): 38 composition classes.
...`

const llmsFullExample = `# Cycle Design

> Cycle Design is the design system for Fluencypass...

---

# Cycle Design — Overview

Cycle Design is the Design System for **Fluencypass**...

## Key Facts

- **Package:** \`cycle-design\`
- **Framework:** React + TypeScript
...`

export default function LlmsTxt() {
  return (
    <div>
      <PageHeader
        badge="AI Ready"
        title="llms.txt"
        description="Documentação estruturada para LLMs — como o Cycle Design expõe seu conteúdo para assistentes de IA."
      />

      <section className={styles.section}>
        <h2 className={styles.h2}>O que é llms.txt?</h2>
        <p className={styles.p}>
          <strong>llms.txt</strong> é um padrão que permite que ferramentas de IA encontrem e
          consumam a documentação de um projeto de forma estruturada.
        </p>
        <p className={styles.p}>
          É um arquivo de texto na raiz do repositório com um índice navegável: título, descrição
          e links para seções de documentação, cada uma com uma breve descrição do conteúdo.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Arquivos disponíveis</h2>

        <div className={styles.fileGrid}>
          <div className={styles.fileCard}>
            <div className={styles.fileName}>llms.txt</div>
            <p className={styles.fileDesc}>
              Índice navegável. Contém título, descrição e links para todos os tópicos
              da documentação. Ideal para LLMs que buscam contexto específico.
            </p>
          </div>
          <div className={styles.fileCard}>
            <div className={styles.fileName}>llms-full.txt</div>
            <p className={styles.fileDesc}>
              Conteúdo completo inline. Todo o conteúdo de <code>ai/</code> concatenado
              em um único arquivo. Para LLMs que preferem consumir tudo de uma vez.
            </p>
          </div>
          <div className={styles.fileCard}>
            <div className={styles.fileName}>ai/</div>
            <p className={styles.fileDesc}>
              Pasta com 13 arquivos Markdown — um por tópico. Podem ser lidos
              individualmente por qualquer ferramenta que acesse arquivos.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Formato do llms.txt</h2>
        <p className={styles.p}>
          O arquivo segue o padrão da indústria: <code># Título</code>, uma descrição em
          blockquote, e seções <code>## Section</code> com listas de links comentados.
        </p>
        <CodeBlock code={llmsTxtExample} language="markdown" filename="llms.txt" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Formato do llms-full.txt</h2>
        <p className={styles.p}>
          O arquivo completo concatena todo o conteúdo de <code>ai/*.md</code> separado por
          divisores, com o mesmo cabeçalho do <code>llms.txt</code>.
        </p>
        <CodeBlock code={llmsFullExample} language="markdown" filename="llms-full.txt" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Tópicos disponíveis em ai/</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Arquivo</th>
              <th>Conteúdo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>ai/overview.md</code></td><td>Visão geral, arquitetura, regras obrigatórias</td></tr>
            <tr><td><code>ai/installation.md</code></td><td>Instalação, imports CSS, estrutura de arquivos</td></tr>
            <tr><td><code>ai/dark-mode.md</code></td><td>Tema, data-theme, prefers-color-scheme</td></tr>
            <tr><td><code>ai/decisions.md</code></td><td>Decisões de design, proteções contra erros de IA</td></tr>
            <tr><td><code>ai/mcp.md</code></td><td>MCP server, ferramentas disponíveis, setup</td></tr>
            <tr><td><code>ai/tokens/colors.md</code></td><td>Sistema de cores completo (primitivos + funcionais)</td></tr>
            <tr><td><code>ai/tokens/typography.md</code></td><td>38 classes de tipografia + tokens primitivos</td></tr>
            <tr><td><code>ai/tokens/spacing.md</code></td><td>Tokens de gap e padding</td></tr>
            <tr><td><code>ai/tokens/shadows.md</code></td><td>7 níveis de sombra</td></tr>
            <tr><td><code>ai/tokens/borders-radius.md</code></td><td>Border width e border radius</td></tr>
            <tr><td><code>ai/tokens/opacity.md</code></td><td>7 níveis de opacidade</td></tr>
            <tr><td><code>ai/tokens/gradients.md</code></td><td>Gradients com suporte light/dark</td></tr>
            <tr><td><code>ai/tokens/grid.md</code></td><td>Grid responsivo e breakpoints</td></tr>
          </tbody>
        </table>
      </section>

      <Callout type="tip" title="Para usar com MCP">
        <p>
          Quer que seu assistente de IA acesse essa documentação de forma interativa?
          Veja a página de <a href="/ai/mcp">MCP Server</a> para configurar a integração.
        </p>
      </Callout>
    </div>
  )
}
