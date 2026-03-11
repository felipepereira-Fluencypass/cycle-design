import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Callout } from '@/components/ui/Callout'
import styles from './Mcp.module.css'

const buildCode = `cd mcp
npm install
npm run build`

const claudeCode = `claude mcp add cycle-design -- node /path/to/cycle-design/mcp/dist/index.js

# Para escopo global (todos os projetos):
claude mcp add cycle-design -s user -- node /path/to/cycle-design/mcp/dist/index.js`

const vscodeCode = `{
  "servers": {
    "cycle-design": {
      "command": "node",
      "args": ["/path/to/cycle-design/mcp/dist/index.js"]
    }
  }
}`

const cursorCode = `{
  "mcpServers": {
    "cycle-design": {
      "command": "node",
      "args": ["/path/to/cycle-design/mcp/dist/index.js"]
    }
  }
}`

const tools = [
  {
    name: 'list_topics',
    description: 'Lista todos os tópicos de documentação disponíveis com IDs, títulos e categorias.',
    example: '"What documentation is available in Cycle Design?"',
  },
  {
    name: 'get_doc',
    description: 'Retorna a documentação completa de um tópico específico pelo ID.',
    example: '"Show me the Cycle Design color documentation"',
  },
  {
    name: 'search_docs',
    description: 'Busca em toda a documentação por token, classe CSS ou conceito. Retorna trechos com contexto.',
    example: '"Search for brand colors in Cycle Design"',
  },
  {
    name: 'get_token_value',
    description: 'Busca um token CSS específico pelo nome. Retorna valor, categoria e exemplos de uso.',
    example: '"What is the value of --spacing-md?"',
  },
  {
    name: 'get_all_docs',
    description: 'Retorna toda a documentação em uma única resposta (conteúdo do llms-full.txt).',
    example: '"Give me all the Cycle Design documentation"',
  },
]

export default function Mcp() {
  return (
    <div>
      <PageHeader
        badge="AI Ready"
        title="MCP Server"
        description="Integre o Cycle Design diretamente no seu assistente de IA via Model Context Protocol."
      />

      <section className={styles.section}>
        <h2 className={styles.h2}>O que é MCP?</h2>
        <p className={styles.p}>
          <strong>Model Context Protocol (MCP)</strong> é um protocolo aberto que permite que
          assistentes de IA se conectem a fontes externas de dados e ferramentas. Com o MCP do
          Cycle Design, você pode perguntar ao seu assistente sobre tokens, classes de tipografia,
          dark mode e mais — e ele responderá com dados reais da documentação, sem alucinar.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>1. Build do server</h2>
        <p className={styles.p}>
          O server MCP está em <code>mcp/</code> na raiz do repositório. Faça o build antes de usar:
        </p>
        <CodeBlock code={buildCode} language="bash" filename="terminal" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>2. Configurar no seu cliente</h2>

        <div className={styles.tabSection}>
          <h3 className={styles.h3}>Claude Code</h3>
          <CodeBlock code={claudeCode} language="bash" filename="terminal" />
        </div>

        <div className={styles.tabSection}>
          <h3 className={styles.h3}>VS Code</h3>
          <p className={styles.p}>Adicione em <code>.vscode/mcp.json</code>:</p>
          <CodeBlock code={vscodeCode} language="json" filename=".vscode/mcp.json" />
        </div>

        <div className={styles.tabSection}>
          <h3 className={styles.h3}>Cursor</h3>
          <p className={styles.p}>Adicione em <code>.cursor/mcp.json</code>:</p>
          <CodeBlock code={cursorCode} language="json" filename=".cursor/mcp.json" />
        </div>

        <Callout type="warning" title="Substitua o caminho">
          <p>
            Troque <code>/path/to/cycle-design</code> pelo caminho real do repositório na sua máquina.
          </p>
        </Callout>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>3. Ferramentas disponíveis</h2>
        <p className={styles.p}>
          O server expõe 5 ferramentas que o assistente usa automaticamente:
        </p>

        <div className={styles.toolList}>
          {tools.map((tool) => (
            <div key={tool.name} className={styles.toolCard}>
              <div className={styles.toolName}>{tool.name}</div>
              <p className={styles.toolDesc}>{tool.description}</p>
              <div className={styles.toolExample}>
                <span className={styles.toolExampleLabel}>Exemplo:</span>
                {tool.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Prompts de exemplo</h2>
        <ul className={styles.promptList}>
          <li>"Que cores usar para estados de erro no Cycle Design?"</li>
          <li>"Mostre todas as classes de tipografia disponíveis"</li>
          <li>"Qual é a escala de espaçamento do Cycle Design?"</li>
          <li>"Como implemento dark mode com os tokens do Cycle Design?"</li>
          <li>"Qual border radius usar em um card?"</li>
          <li>"O que é o token --bg-brand-solid?"</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Roadmap</h2>
        <p className={styles.p}>
          O server atual (Fase 2A) foca em <strong>acesso à documentação</strong>. Quando os
          primeiros componentes React estiverem prontos, o MCP será estendido com ferramentas de
          registry (Fase 2B):
        </p>
        <ul className={styles.roadmapList}>
          <li><span className={styles.done}>✓</span> <code>list_topics</code>, <code>get_doc</code>, <code>search_docs</code>, <code>get_token_value</code>, <code>get_all_docs</code></li>
          <li><span className={styles.pending}>○</span> <code>list_components</code> — listar componentes disponíveis</li>
          <li><span className={styles.pending}>○</span> <code>get_component</code> — obter código e documentação de um componente</li>
          <li><span className={styles.pending}>○</span> <code>install_component</code> — instalar componente no projeto</li>
        </ul>
      </section>
    </div>
  )
}
