import { Button } from '@ui/button'
import { ChevronRight, Plus, Search, X, Loader2 } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Callout } from '@/components/ui/Callout'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { ButtonPlayground } from './ButtonPlayground'
import styles from './Button.module.css'

// ── Props table data ──────────────────────────────────────────

const propsData = [
  {
    name: 'children',
    type: 'ReactNode',
    required: 'obrigatória',
    defaultVal: '—',
    description: 'Conteúdo do botão (texto, ícones, etc.).',
  },
  {
    name: 'variant',
    type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
    required: 'opcional',
    defaultVal: '"default"',
    description: 'Estilo visual do botão.',
  },
  {
    name: 'size',
    type: '"default" | "sm" | "lg" | "icon"',
    required: 'opcional',
    defaultVal: '"default"',
    description: 'Tamanho do botão. "icon" cria botão quadrado para ícones.',
  },
  {
    name: 'asChild',
    type: 'boolean',
    required: 'opcional',
    defaultVal: 'false',
    description: 'Renderiza como o elemento filho (útil para links com aparência de botão).',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: 'opcional',
    defaultVal: 'false',
    description: 'Desativa o botão visualmente e funcionalmente.',
  },
]

// ── Page ──────────────────────────────────────────────────────

export default function ButtonPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Button"
        description="Elemento interativo primário do Cycle Design. Baseado no shadcn/ui Button com variantes, tamanhos e suporte a ícones via Lucide React."
      />

      {/* ── Visão geral ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Visão geral</h2>
        <p className={styles.p}>
          O Button é usado para acionar uma ação. Escolha a <strong>variante</strong> pelo nível de
          hierarquia visual (default → secondary → outline → ghost) e combine com ícones do Lucide React.
        </p>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Variants</span>
          <div className={styles.examplesRow}>
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Sizes</span>
          <div className={styles.examplesRow}>
            <Button size="lg">Large</Button>
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="icon" aria-label="Adicionar"><Plus /></Button>
          </div>
        </div>
      </section>

      {/* ── Importação ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Importação</h2>
        <CodeBlock
          language="tsx"
          code={`import { Button } from 'cycle-design'

// Ícones via Lucide React
import { Plus, Search, ChevronRight } from 'lucide-react'`}
        />

        <p className={styles.p} style={{ marginTop: 16 }}>Exemplos prontos de uso:</p>
        <CodeBlock
          language="tsx"
          code={`// Apenas texto
<Button>Nova turma</Button>

// Com ícone à esquerda
<Button><Plus className="mr-2 h-4 w-4" /> Nova turma</Button>

// Com ícone à direita
<Button variant="outline">Próximo <ChevronRight className="ml-2 h-4 w-4" /></Button>

// Icon-only — aria-label obrigatório
<Button size="icon" aria-label="Buscar"><Search /></Button>

// Como link
<Button variant="link">Ver mais</Button>

// Com loading
<Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...</Button>`}
        />
      </section>

      {/* ── Props ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Props</h2>
        <p className={styles.p}>
          Além das props listadas, o Button aceita todos os atributos nativos de <code>&lt;button&gt;</code>.
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.propsTable}>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Tipo</th>
                <th>Obrigatória</th>
                <th>Default</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {propsData.map((row) => (
                <tr key={row.name}>
                  <td><span className={styles.propName}>{row.name}</span></td>
                  <td><span className={styles.propType}>{row.type}</span></td>
                  <td>
                    <span className={row.required === 'opcional' ? styles.badgeOptional : styles.badgeRequired}>
                      {row.required}
                    </span>
                  </td>
                  <td><code>{row.defaultVal}</code></td>
                  <td>{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Exemplos ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Exemplos de uso</h2>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Com ícones</span>
          <div className={styles.examplesRow}>
            <Button><Plus className="mr-2 h-4 w-4" /> Nova turma</Button>
            <Button variant="outline"><Search className="mr-2 h-4 w-4" /> Buscar</Button>
            <Button variant="ghost">Próximo <ChevronRight className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Icon-only</span>
          <div className={styles.examplesRow}>
            <Button size="icon" aria-label="Adicionar"><Plus /></Button>
            <Button size="icon" variant="outline" aria-label="Buscar"><Search /></Button>
            <Button size="icon" variant="ghost" aria-label="Fechar"><X /></Button>
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Disabled</span>
          <div className={styles.examplesRow}>
            <Button disabled>Default disabled</Button>
            <Button variant="outline" disabled>Outline disabled</Button>
            <Button variant="ghost" disabled>Ghost disabled</Button>
            <Button size="icon" disabled aria-label="Adicionar"><Plus /></Button>
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Loading</span>
          <div className={styles.examplesRow}>
            <Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...</Button>
          </div>
        </div>
      </section>

      {/* ── Estados ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Estados</h2>
        <p className={styles.p}>
          Os estados <strong>hover</strong> e <strong>pressed</strong> são puramente CSS e só
          aparecem com interação real. Use o playground abaixo para testá-los.
        </p>
        <div className={styles.statesGrid}>
          <div className={styles.stateCard}>
            <Button>Default</Button>
            <span className={styles.stateLabel}>Default</span>
          </div>
          <div className={styles.stateCard}>
            <Button>Hover</Button>
            <span className={styles.stateLabel}>Hover</span>
            <span className={styles.stateNote}>Passe o cursor</span>
          </div>
          <div className={styles.stateCard}>
            <Button>Pressed</Button>
            <span className={styles.stateLabel}>Pressed</span>
            <span className={styles.stateNote}>Clique e segure</span>
          </div>
          <div className={styles.stateCard}>
            <Button>Focus</Button>
            <span className={styles.stateLabel}>Focus</span>
            <span className={styles.stateNote}>Tab até o botão</span>
          </div>
          <div className={styles.stateCard}>
            <Button disabled>Disabled</Button>
            <span className={styles.stateLabel}>Disabled</span>
          </div>
        </div>
      </section>

      {/* ── Playground ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Playground</h2>
        <p className={styles.p}>
          Ajuste as props e veja o componente real renderizando ao vivo.
        </p>
        <ButtonPlayground />
      </section>

      {/* ── Acessibilidade ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Acessibilidade</h2>

        <Callout type="warning" title="Icon-only exige aria-label">
          <p>
            Quando <code>size="icon"</code>, o botão não tem texto visível.
            O <code>aria-label</code> é obrigatório — é o único nome acessível para leitores
            de tela.
          </p>
        </Callout>

        <div style={{ marginTop: 16 }}>
          <Callout type="info" title="Focus ring via Tailwind">
            <p>
              O componente usa <code>focus-visible:ring-2</code> com offset para garantir
              visibilidade do indicador de foco. O ring segue os tokens de cor do tema.
            </p>
          </Callout>
        </div>

        <div style={{ marginTop: 16 }}>
          <Callout type="info" title="asChild para navegação">
            <p>
              Use <code>asChild</code> com um <code>&lt;a&gt;</code> ou componente de rota
              quando o botão funcionar como link. Isso preserva a semântica HTML correta.
            </p>
          </Callout>
        </div>
      </section>
    </div>
  )
}
