import { Button } from '@components/Button'
import { PlusIcon } from '@icons/_generated/PlusIcon'
import { ChevronDownIcon } from '@icons/_generated/ChevronDownIcon'
import { CloseIcon } from '@icons/_generated/CloseIcon'
import { SearchIcon } from '@icons/_generated/SearchIcon'
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
    required: 'obrigatória*',
    defaultVal: '—',
    description: 'Texto do botão. Obrigatório no modo texto; proibido em iconOnly.',
  },
  {
    name: 'variant',
    type: '"filled" | "outline" | "ghost"',
    required: 'opcional',
    defaultVal: '"filled"',
    description: 'Estilo visual do botão.',
  },
  {
    name: 'color',
    type: '"brand" | "class" | "private" | "group" | "impulse"',
    required: 'opcional',
    defaultVal: '"brand"',
    description: 'Paleta de cores aplicada ao botão.',
  },
  {
    name: 'size',
    type: '"giant" | "lg" | "md" | "sm" | "tiny"',
    required: 'opcional',
    defaultVal: '"md"',
    description: 'Tamanho do botão. Controla altura, padding e fonte.',
  },
  {
    name: 'iconLeft',
    type: 'ReactElement',
    required: 'opcional',
    defaultVal: '—',
    description: 'Ícone à esquerda do texto. Automaticamente decorativo. Não disponível em iconOnly.',
  },
  {
    name: 'iconRight',
    type: 'ReactElement',
    required: 'opcional',
    defaultVal: '—',
    description: 'Ícone à direita do texto. Automaticamente decorativo. Não disponível em iconOnly.',
  },
  {
    name: 'iconOnly',
    type: 'true',
    required: 'opcional',
    defaultVal: 'false',
    description: 'Ativa o modo icon-only. O botão fica quadrado. Exige icon e aria-label.',
  },
  {
    name: 'icon',
    type: 'ReactElement',
    required: 'obrigatória*',
    defaultVal: '—',
    description: 'Ícone exibido no modo iconOnly. Proibido no modo texto.',
  },
  {
    name: 'aria-label',
    type: 'string',
    required: 'obrigatória*',
    defaultVal: '—',
    description: 'Nome acessível. Obrigatório e único em iconOnly — é a única fonte de significado para leitores de tela.',
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
        description="Elemento interativo primário do Cycle Design. Suporta texto, ícones laterais e modo icon-only, com três variantes e cinco paletas de cores."
      />

      {/* ── Visão geral ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Visão geral</h2>
        <p className={styles.p}>
          O Button é usado para acionar uma ação. Escolha a <strong>variante</strong> pelo nível de
          hierarquia visual (filled → outline → ghost) e a <strong>color</strong> pela paleta
          funcional do contexto.
        </p>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Variants</span>
          <div className={styles.examplesRow}>
            <Button variant="filled">Filled</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Colors (filled)</span>
          <div className={styles.examplesRow}>
            <Button color="brand">Brand</Button>
            <Button color="class">Class</Button>
            <Button color="private">Private</Button>
            <Button color="group">Group</Button>
            <Button color="impulse">Impulse</Button>
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Sizes</span>
          <div className={styles.examplesRow}>
            <Button size="giant">Giant</Button>
            <Button size="lg">Large</Button>
            <Button size="md">Medium</Button>
            <Button size="sm">Small</Button>
            <Button size="tiny">Tiny</Button>
          </div>
        </div>
      </section>

      {/* ── Importação ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Importação</h2>
        <CodeBlock
          language="tsx"
          code={`import { Button } from '@cycle/design'

// Para usar ícones junto ao botão:
import { PlusIcon } from '@cycle/design/icons'`}
        />

        <p className={styles.p} style={{ marginTop: 16 }}>Exemplos prontos de uso:</p>
        <CodeBlock
          language="tsx"
          code={`// Apenas texto
<Button>Nova turma</Button>

// Ícone à esquerda
<Button iconLeft={<PlusIcon />}>Nova turma</Button>

// Ícone à direita
<Button variant="outline" iconRight={<ChevronDownIcon />}>Opções</Button>

// Ícone nos dois lados
<Button iconLeft={<SearchIcon />} iconRight={<ChevronDownIcon />}>Buscar</Button>

// Icon-only — aria-label obrigatório
<Button iconOnly icon={<CloseIcon />} aria-label="Fechar" />`}
        />
      </section>

      {/* ── Props ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Props</h2>
        <p className={styles.p}>
          * As props marcadas como obrigatória dependem do modo: <code>children</code> é obrigatório
          no modo texto; <code>icon</code> e <code>aria-label</code> são obrigatórios em{' '}
          <code>iconOnly</code>.
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
          <span className={styles.examplesGroupLabel}>Apenas texto</span>
          <div className={styles.examplesRow}>
            <Button>Nova turma</Button>
            <Button variant="outline">Ver detalhes</Button>
            <Button variant="ghost">Cancelar</Button>
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>iconLeft + texto</span>
          <div className={styles.examplesRow}>
            <Button iconLeft={<PlusIcon />}>Nova turma</Button>
            <Button variant="outline" iconLeft={<SearchIcon />}>Buscar</Button>
            <Button variant="ghost" iconLeft={<PlusIcon />}>Adicionar</Button>
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>texto + iconRight</span>
          <div className={styles.examplesRow}>
            <Button iconRight={<ChevronDownIcon />}>Opções</Button>
            <Button variant="outline" iconRight={<ChevronDownIcon />}>Filtrar</Button>
            <Button variant="ghost" iconRight={<ChevronDownIcon />}>Mais</Button>
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>iconLeft + texto + iconRight</span>
          <div className={styles.examplesRow}>
            <Button iconLeft={<SearchIcon />} iconRight={<ChevronDownIcon />}>Buscar turmas</Button>
            <Button variant="outline" iconLeft={<SearchIcon />} iconRight={<ChevronDownIcon />}>Buscar turmas</Button>
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Icon-only</span>
          <div className={styles.examplesRow}>
            <Button iconOnly icon={<PlusIcon />} aria-label="Adicionar" />
            <Button iconOnly icon={<CloseIcon />} aria-label="Fechar" variant="outline" />
            <Button iconOnly icon={<SearchIcon />} aria-label="Buscar" variant="ghost" />
            <Button iconOnly icon={<PlusIcon />} aria-label="Adicionar" size="sm" />
            <Button iconOnly icon={<PlusIcon />} aria-label="Adicionar" size="tiny" />
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Disabled</span>
          <div className={styles.examplesRow}>
            <Button disabled>Filled disabled</Button>
            <Button variant="outline" disabled>Outline disabled</Button>
            <Button variant="ghost" disabled>Ghost disabled</Button>
            <Button iconOnly icon={<PlusIcon />} aria-label="Adicionar" disabled />
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Todas as colors — outline</span>
          <div className={styles.examplesRow}>
            <Button variant="outline" color="brand">Brand</Button>
            <Button variant="outline" color="class">Class</Button>
            <Button variant="outline" color="private">Private</Button>
            <Button variant="outline" color="group">Group</Button>
            <Button variant="outline" color="impulse">Impulse</Button>
          </div>
        </div>

        <div className={styles.examplesGroup}>
          <span className={styles.examplesGroupLabel}>Todos os tamanhos — iconLeft</span>
          <div className={styles.examplesRow}>
            <Button size="giant" iconLeft={<PlusIcon />}>Giant</Button>
            <Button size="lg"    iconLeft={<PlusIcon />}>Large</Button>
            <Button size="md"    iconLeft={<PlusIcon />}>Medium</Button>
            <Button size="sm"    iconLeft={<PlusIcon />}>Small</Button>
            <Button size="tiny"  iconLeft={<PlusIcon />}>Tiny</Button>
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
            Quando <code>iconOnly</code> é <code>true</code>, o botão não tem texto visível.
            O <code>aria-label</code> é obrigatório — é o único nome acessível para leitores
            de tela. O TypeScript exigirá a prop em tempo de compilação.
          </p>
        </Callout>

        <div style={{ marginTop: 16 }}>
          <Callout type="info" title="Ícones ao lado do texto são decorativos">
            <p>
              <code>iconLeft</code> e <code>iconRight</code> recebem <code>decorative=true</code>{' '}
              automaticamente. O texto do botão já fornece o nome acessível — duplicar com
              aria-label nos ícones causaria repetição para leitores de tela.
            </p>
          </Callout>
        </div>

        <div style={{ marginTop: 16 }}>
          <Callout type="info" title="Focus ring via tokens do sistema">
            <p>
              O componente usa <code>:focus-visible</code> com <code>box-shadow</code> duplo
              baseado nos tokens <code>--focus-ring-offset</code>, <code>--focus-ring-width</code>{' '}
              e <code>--focus-ring-color</code>. O <code>outline</code> nativo é suprimido para
              evitar conflito com o <code>border-radius</code>, mas o indicador visual está sempre
              presente — nunca é removido.
            </p>
          </Callout>
        </div>

        <div style={{ marginTop: 16 }}>
          <Callout type="warning" title="Restrição de contraste: color=&quot;group&quot;">
            <p>
              A paleta <code>group</code> tem contraste inferior a 4.5:1 no modo filled em light
              mode. Use <code>color="group"</code> apenas quando o contexto ao redor garante
              legibilidade independente — por exemplo, texto grande (≥ 24px) ou em superfícies
              já sinalizadas com a paleta group. Adicione um comentário no código justificando
              o uso.
            </p>
          </Callout>
        </div>
      </section>
    </div>
  )
}
