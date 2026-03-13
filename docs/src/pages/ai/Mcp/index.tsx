import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Callout } from '@/components/ui/Callout'
import styles from './Mcp.module.css'

const buildCode = `cd mcp
npm install
npm run build`

const mcpJsonShared = `{
  "mcpServers": {
    "cycle-design": {
      "command": "npx",
      "args": ["cycle-design-mcp"]
    }
  }
}`

const claudeCodeExternal = `claude mcp add cycle-design -- npx cycle-design-mcp`

const vscodeExternal = `{
  "servers": {
    "cycle-design": {
      "command": "npx",
      "args": ["cycle-design-mcp"]
    }
  }
}`

const cursorExternal = `{
  "mcpServers": {
    "cycle-design": {
      "command": "npx",
      "args": ["cycle-design-mcp"]
    }
  }
}`

const mcpJsonLocal = `{
  "mcpServers": {
    "cycle-design": {
      "command": "node",
      "args": ["mcp/dist/index.js"]
    }
  }
}`

const validateClaude = `claude mcp list`

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
        <h2 className={styles.h2}>Quando usar cada abordagem</h2>
        <p className={styles.p}>
          Existem duas formas de usar o MCP do Cycle Design, dependendo do contexto:
        </p>
        <div className={styles.scenarioGrid}>
          <div className={styles.scenarioCard}>
            <h3 className={styles.scenarioTitle}>Neste repositório</h3>
            <p className={styles.scenarioDesc}>
              Você contribui diretamente no Cycle Design. O MCP roda a partir do código-fonte local.
            </p>
          </div>
          <div className={styles.scenarioCard}>
            <h3 className={styles.scenarioTitle}>Em projetos externos</h3>
            <p className={styles.scenarioDesc}>
              Seu projeto consome o Cycle Design como dependência. O MCP é instalado via npm.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Uso neste repositório</h2>
        <p className={styles.p}>
          O repositório já inclui um arquivo <code>.mcp.json</code> na raiz com a configuração pronta.
          Claude Code, VS Code e Cursor detectam esse arquivo automaticamente ao abrir o projeto.
        </p>

        <h3 className={styles.h3}>Pré-requisito: build do server</h3>
        <p className={styles.p}>
          Como o <code>.mcp.json</code> aponta para <code>mcp/dist/index.js</code>, você precisa
          fazer o build uma vez antes de usar:
        </p>
        <CodeBlock code={buildCode} language="bash" filename="terminal" />

        <h3 className={styles.h3}>Configuração automática</h3>
        <p className={styles.p}>
          Após o build, basta abrir o projeto. O <code>.mcp.json</code> na raiz configura o MCP
          automaticamente:
        </p>
        <CodeBlock code={mcpJsonLocal} language="json" filename=".mcp.json (já incluído no repositório)" />

        <Callout type="info" title="Nenhuma configuração adicional necessária">
          <p>
            Não é preciso rodar <code>claude mcp add</code> nem criar arquivos em <code>.vscode/</code> ou <code>.cursor/</code>.
            O <code>.mcp.json</code> na raiz é detectado automaticamente por todos os clientes compatíveis.
          </p>
        </Callout>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Uso em projetos externos</h2>
        <p className={styles.p}>
          Para projetos que consomem o Cycle Design como dependência, o MCP está publicado no
          npm como <code>cycle-design-mcp</code>. Não é necessário clonar o repositório nem fazer build.
        </p>

        <div className={styles.tabSection}>
          <h3 className={styles.h3}>Configuração compartilhada (recomendado)</h3>
          <p className={styles.p}>
            Crie um arquivo <code>.mcp.json</code> na raiz do seu projeto. Toda a equipe recebe
            a configuração automaticamente ao clonar o repositório:
          </p>
          <CodeBlock code={mcpJsonShared} language="json" filename=".mcp.json" />
        </div>

        <div className={styles.tabSection}>
          <h3 className={styles.h3}>Configuração individual — Claude Code</h3>
          <p className={styles.p}>
            Se preferir configurar apenas para você, sem criar arquivo no projeto:
          </p>
          <CodeBlock code={claudeCodeExternal} language="bash" filename="terminal" />
        </div>

        <div className={styles.tabSection}>
          <h3 className={styles.h3}>Configuração individual — VS Code</h3>
          <p className={styles.p}>Adicione em <code>.vscode/mcp.json</code>:</p>
          <CodeBlock code={vscodeExternal} language="json" filename=".vscode/mcp.json" />
        </div>

        <div className={styles.tabSection}>
          <h3 className={styles.h3}>Configuração individual — Cursor</h3>
          <p className={styles.p}>Adicione em <code>.cursor/mcp.json</code>:</p>
          <CodeBlock code={cursorExternal} language="json" filename=".cursor/mcp.json" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Validando a configuração</h2>
        <p className={styles.p}>
          Para verificar se o MCP está ativo, use o comando abaixo no Claude Code:
        </p>
        <CodeBlock code={validateClaude} language="bash" filename="terminal" />
        <p className={styles.p}>
          O servidor <code>cycle-design</code> deve aparecer na lista. Em seguida, teste com
          um prompt como <em>"Liste os tópicos de documentação do Cycle Design"</em> — o assistente
          deve chamar a tool <code>list_topics</code> automaticamente.
        </p>
        <Callout type="tip" title="Dica">
          <p>
            No VS Code e Cursor, o MCP aparece no painel de ferramentas do assistente.
            Se o servidor não aparecer, verifique se o build foi feito (uso local) ou se
            o <code>npx</code> está acessível no PATH (uso externo).
          </p>
        </Callout>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Ferramentas disponíveis</h2>
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
          O server atual foca em <strong>acesso à documentação</strong>. Quando os
          primeiros componentes React estiverem prontos, o MCP será estendido com ferramentas de
          registry:
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
