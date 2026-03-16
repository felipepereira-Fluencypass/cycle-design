import { PageHeader } from '@/components/ui/PageHeader'
import { Callout } from '@/components/ui/Callout'
import { CodeBlock } from '@/components/ui/CodeBlock'
import styles from './FigmaSetup.module.css'

const colorMapping = [
  { shadcn: '--background', figma: 'bg/primary', light: '#FFFFFF', dark: '#0C0E12', use: 'Fundo geral de páginas e telas' },
  { shadcn: '--foreground', figma: 'text/primary', light: '#181D27', dark: '#F7F7F7', use: 'Texto principal do app' },
  { shadcn: '--card', figma: 'bg/primary', light: '#FFFFFF', dark: '#13161B', use: 'Fundo de cards, painéis' },
  { shadcn: '--card-foreground', figma: 'text/primary', light: '#181D27', dark: '#F7F7F7', use: 'Texto dentro de cards' },
  { shadcn: '--popover', figma: 'bg/primary', light: '#FFFFFF', dark: '#13161B', use: 'Fundo de dropdowns, menus, tooltips' },
  { shadcn: '--popover-foreground', figma: 'text/primary', light: '#181D27', dark: '#F7F7F7', use: 'Texto em popups' },
  { shadcn: '--primary', figma: 'bg/brand-solid', light: '#D45558', dark: '#ED6A6D', use: 'CTA, botão principal, links ativos' },
  { shadcn: '--primary-foreground', figma: 'text/white', light: '#FFFFFF', dark: '#FFF5F5', use: 'Texto sobre primary' },
  { shadcn: '--secondary', figma: 'bg/secondary', light: '#FAFAFA', dark: '#22262F', use: 'Botões secundários, áreas sutis' },
  { shadcn: '--secondary-foreground', figma: 'text/primary', light: '#181D27', dark: '#F7F7F7', use: 'Texto sobre secondary' },
  { shadcn: '--muted', figma: 'bg/tertiary', light: '#F5F5F5', dark: '#22262F', use: 'Áreas desabilitadas, placeholders' },
  { shadcn: '--muted-foreground', figma: 'text/tertiary', light: '#535862', dark: '#94979C', use: 'Texto de apoio, labels secundários' },
  { shadcn: '--accent', figma: 'bg/primary_hover', light: '#FAFAFA', dark: '#22262F', use: 'Hover em menus, item selecionado' },
  { shadcn: '--accent-foreground', figma: 'text/primary', light: '#181D27', dark: '#F7F7F7', use: 'Texto sobre accent' },
  { shadcn: '--destructive', figma: 'bg/critical-solid', light: '#B32020', dark: '#D42B2B', use: 'Ação perigosa (deletar, remover)' },
  { shadcn: '--destructive-foreground', figma: 'text/white', light: '#FFFFFF', dark: '#F7F7F7', use: 'Texto sobre destructive' },
  { shadcn: '--border', figma: 'border/secondary', light: '#E9EAEB', dark: '#373A41', use: 'Bordas gerais, separadores' },
  { shadcn: '--input', figma: 'border/primary', light: '#D5D7DA', dark: '#373A41', use: 'Bordas de inputs e selects' },
  { shadcn: '--ring', figma: 'border/brand', light: '#ED6A6D', dark: '#F57B7E', use: 'Focus ring (anel de foco)' },
]

const radiusMapping = [
  { shadcn: '--radius-sm', value: '4px', figma: 'radius/xs', use: 'Badges, tags, chips' },
  { shadcn: '--radius-md', value: '8px', figma: 'radius/sm', use: 'Inputs, botões, cards pequenos' },
  { shadcn: '--radius-lg', value: '12px', figma: 'radius/md', use: 'Cards, painéis' },
  { shadcn: '--radius-xl', value: '16px', figma: 'radius/lg', use: 'Modais, sheets, containers grandes' },
]

const componentMapping = [
  { shadcn: 'Button', figma: 'Button', notes: 'variant=default usa --primary (Brand coral). variant=destructive usa --destructive (Critical red).' },
  { shadcn: 'Dialog', figma: 'Modal', notes: 'Overlay usa --alpha-backdrop (rgba 0,0,0,0.6). Container usa --card com --shadow-xl e --radius-lg.' },
  { shadcn: 'Select', figma: 'Select / Dropdown', notes: 'Trigger usa --input como borda. Conteúdo usa --popover como fundo.' },
  { shadcn: 'Input', figma: 'Text Field', notes: 'Borda usa --input. Placeholder usa --muted-foreground. Focus ring usa --ring.' },
  { shadcn: 'Textarea', figma: 'Text Area', notes: 'Mesmos tokens do Input.' },
  { shadcn: 'Card', figma: 'Card', notes: 'Fundo --card, borda --border, texto --card-foreground.' },
  { shadcn: 'Badge', figma: 'Badge / Tag', notes: 'variant=default usa --primary. variant=secondary usa --secondary.' },
  { shadcn: 'Alert', figma: 'Alert / Banner', notes: 'variant=default usa --card. variant=destructive usa --destructive.' },
  { shadcn: 'Toast', figma: 'Toast / Snackbar', notes: 'Fundo --card, borda --border. Usa --destructive para toasts de erro.' },
  { shadcn: 'Tabs', figma: 'Tabs', notes: 'Tab ativa usa --foreground. Tab inativa usa --muted-foreground.' },
  { shadcn: 'Switch', figma: 'Switch / Toggle', notes: 'Ativo usa --primary (Brand). Inativo usa --input.' },
  { shadcn: 'Checkbox', figma: 'Checkbox', notes: 'Checked usa --primary (Brand). Unchecked usa --input como borda.' },
  { shadcn: 'Tooltip', figma: 'Tooltip', notes: 'Fundo usa --primary (escuro). Texto usa --primary-foreground.' },
  { shadcn: 'Popover', figma: 'Popover', notes: 'Fundo --popover, borda --border, sombra --shadow-lg.' },
  { shadcn: 'DropdownMenu', figma: 'Dropdown Menu', notes: 'Fundo --popover. Hover item usa --accent.' },
  { shadcn: 'Separator', figma: 'Divider', notes: 'Cor usa --border.' },
  { shadcn: 'Skeleton', figma: 'Skeleton', notes: 'Usa --muted como fundo animado.' },
  { shadcn: 'Avatar', figma: 'Avatar', notes: 'Fallback usa --muted como fundo, --muted-foreground como texto.' },
  { shadcn: 'Accordion', figma: 'Accordion', notes: 'Borda inferior usa --border. Ícone de chevron usa --foreground.' },
  { shadcn: 'Table', figma: 'Table', notes: 'Header usa --muted. Hover de row usa --accent.' },
]

const productPalettes = [
  { name: 'Brand', variable: '--brand', figma: 'brand', light: '#D45558', dark: '#ED6A6D', use: 'Identidade principal Fluencypass, CTAs' },
  { name: 'Class', variable: '--class', figma: 'class', light: '#1A5FE0', dark: '#2E74FF', use: 'Funcionalidade de aulas/turmas' },
  { name: 'Private', variable: '--private', figma: 'private', light: '#E56530', dark: '#FF8041', use: 'Funcionalidade de aulas particulares' },
  { name: 'Group', variable: '--group', figma: 'group', light: '#00C234', dark: '#00E73E', use: 'Funcionalidade de grupos' },
  { name: 'Impulse', variable: '--impulse', figma: 'impulse', light: '#7D0DD4', dark: '#9810FA', use: 'Funcionalidade de impulsos/promoções' },
]

const figmaVariablesCode = `/* Estrutura de variáveis no Figma */

/* Coleção: "shadcn" */
/* Modo: Light, Dark */

/* Grupo: Core */
background      → Light: #FFFFFF   | Dark: #0C0E12
foreground      → Light: #181D27   | Dark: #F7F7F7
primary         → Light: #D45558   | Dark: #ED6A6D
primary-fg      → Light: #FFFFFF   | Dark: #FFF5F5
secondary       → Light: #FAFAFA   | Dark: #22262F
secondary-fg    → Light: #181D27   | Dark: #F7F7F7
muted           → Light: #F5F5F5   | Dark: #22262F
muted-fg        → Light: #535862   | Dark: #94979C
accent          → Light: #FAFAFA   | Dark: #22262F
accent-fg       → Light: #181D27   | Dark: #F7F7F7
destructive     → Light: #B32020   | Dark: #D42B2B
destructive-fg  → Light: #FFFFFF   | Dark: #F7F7F7

/* Grupo: Surfaces */
card            → Light: #FFFFFF   | Dark: #13161B
card-fg         → Light: #181D27   | Dark: #F7F7F7
popover         → Light: #FFFFFF   | Dark: #13161B
popover-fg      → Light: #181D27   | Dark: #F7F7F7

/* Grupo: Borders */
border          → Light: #E9EAEB   | Dark: #373A41
input           → Light: #D5D7DA   | Dark: #373A41
ring            → Light: #ED6A6D   | Dark: #F57B7E

/* Grupo: Product */
brand           → Light: #D45558   | Dark: #ED6A6D
brand-fg        → Light: #FFFFFF   | Dark: #FFF5F5
class           → Light: #1A5FE0   | Dark: #2E74FF
class-fg        → Light: #FFFFFF   | Dark: #E0EBFF
private         → Light: #E56530   | Dark: #FF8041
private-fg      → Light: #FFFFFF   | Dark: #FFEDE0
group           → Light: #00C234   | Dark: #00E73E
group-fg        → Light: #FFFFFF   | Dark: #E0FFE9
impulse         → Light: #7D0DD4   | Dark: #9810FA
impulse-fg      → Light: #FFFFFF   | Dark: #F7E0FF

/* Grupo: Semantic */
warning         → Light: #D48E00   | Dark: #F5A800
warning-fg      → Light: #FFFFFF   | Dark: #332300
positive        → Light: #098A5E   | Dark: #0BA370
positive-fg     → Light: #FFFFFF   | Dark: #022318

/* Grupo: Charts */
chart-1         → Light: #D45558   | Dark: #ED6A6D
chart-2         → Light: #1A5FE0   | Dark: #4D8AFF
chart-3         → Light: #FF8041   | Dark: #FF9158
chart-4         → Light: #00C234   | Dark: #1AFF61
chart-5         → Light: #9810FA   | Dark: #B844FF`

export default function FigmaSetup() {
  return (
    <div>
      <PageHeader
        badge="Guidelines"
        title="Configurar Figma para shadcn"
        description="Guia para o time de design configurar a biblioteca Figma alinhada com o shadcn/ui + Cycle Design. Cada variável, cada componente, cada decisão documentada."
      />

      <Callout type="warning" title="Para designers">
        <p>
          Este guia explica como a biblioteca de componentes do Figma deve ser estruturada
          para que o resultado no código usando shadcn/ui seja pixel-perfect. O shadcn tem
          um vocabulário próprio de variáveis — este documento traduz esse vocabulário para
          os tokens do Cycle.
        </p>
      </Callout>

      {/* ── Seção 1: Visão geral ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Como funciona</h2>
        <p className={styles.p}>
          O shadcn/ui usa <strong>CSS variables</strong> para todas as cores, radius e sombras.
          A customização acontece substituindo os valores default do shadcn pelos valores do Cycle Design.
        </p>
        <div className={styles.flowDiagram}>
          <div className={styles.flowStep}>
            <span className={styles.flowNumber}>1</span>
            <span className={styles.flowLabel}>Figma Variables</span>
            <span className={styles.flowDesc}>Cores definidas como variáveis com modo Light/Dark</span>
          </div>
          <span className={styles.flowArrow}>→</span>
          <div className={styles.flowStep}>
            <span className={styles.flowNumber}>2</span>
            <span className={styles.flowLabel}>globals.css</span>
            <span className={styles.flowDesc}>Variáveis CSS que o shadcn consome</span>
          </div>
          <span className={styles.flowArrow}>→</span>
          <div className={styles.flowStep}>
            <span className={styles.flowNumber}>3</span>
            <span className={styles.flowLabel}>Componentes</span>
            <span className={styles.flowDesc}>shadcn usa as variáveis automaticamente</span>
          </div>
        </div>
      </section>

      {/* ── Seção 2: Variáveis do Figma ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Variáveis no Figma</h2>
        <p className={styles.p}>
          Crie uma coleção de variáveis chamada <strong>&quot;shadcn&quot;</strong> no Figma com dois modos:
          {' '}<strong>Light</strong> e <strong>Dark</strong>. Organize as variáveis nos grupos abaixo.
        </p>
        <CodeBlock code={figmaVariablesCode} language="css" filename="Figma Variables" />
      </section>

      {/* ── Seção 3: Mapeamento de cores ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Mapeamento de cores: shadcn → Cycle</h2>
        <p className={styles.p}>
          Cada variável CSS do shadcn corresponde a um token funcional do Cycle Design.
          Na biblioteca do Figma, use os valores da coluna <strong>Figma</strong> como nome
          da variável ou estilo.
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Variável shadcn</th>
                <th>Token Figma (Cycle)</th>
                <th>Light</th>
                <th>Dark</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              {colorMapping.map((row) => (
                <tr key={row.shadcn}>
                  <td><code>{row.shadcn}</code></td>
                  <td><code>{row.figma}</code></td>
                  <td>
                    <span className={styles.colorCell}>
                      <span className={styles.colorDot} style={{ background: row.light }} />
                      {row.light}
                    </span>
                  </td>
                  <td>
                    <span className={styles.colorCell}>
                      <span className={styles.colorDot} style={{ background: row.dark }} />
                      {row.dark}
                    </span>
                  </td>
                  <td>{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4: Paletas de produto ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Paletas de produto Fluencypass</h2>
        <p className={styles.p}>
          Estas paletas são <strong>extras do Cycle</strong> e não existem no shadcn padrão.
          Elas representam funcionalidades do produto e devem ser criadas como variáveis
          adicionais no Figma.
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Paleta</th>
                <th>Variável CSS</th>
                <th>Grupo Figma</th>
                <th>Light</th>
                <th>Dark</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              {productPalettes.map((row) => (
                <tr key={row.name}>
                  <td><strong>{row.name}</strong></td>
                  <td><code>{row.variable}</code></td>
                  <td><code>{row.figma}</code></td>
                  <td>
                    <span className={styles.colorCell}>
                      <span className={styles.colorDot} style={{ background: row.light }} />
                      {row.light}
                    </span>
                  </td>
                  <td>
                    <span className={styles.colorCell}>
                      <span className={styles.colorDot} style={{ background: row.dark }} />
                      {row.dark}
                    </span>
                  </td>
                  <td>{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5: Radius ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Border Radius</h2>
        <p className={styles.p}>
          O shadcn usa um sistema de radius relativo com base em <code>--radius: 8px</code>.
          Os valores calculados coincidem com os tokens do Cycle.
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>shadcn</th>
                <th>Valor</th>
                <th>Token Figma (Cycle)</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              {radiusMapping.map((row) => (
                <tr key={row.shadcn}>
                  <td><code>{row.shadcn}</code></td>
                  <td>{row.value}</td>
                  <td><code>{row.figma}</code></td>
                  <td>{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 6: Componente por componente ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Componente por componente</h2>
        <p className={styles.p}>
          Para cada componente do shadcn, esta tabela mostra o equivalente no Figma e
          quais tokens/variáveis ele usa. Use isso como referência ao criar ou atualizar
          componentes na biblioteca do Figma.
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Componente shadcn</th>
                <th>Nome no Figma</th>
                <th>Tokens e decisões</th>
              </tr>
            </thead>
            <tbody>
              {componentMapping.map((row) => (
                <tr key={row.shadcn}>
                  <td><strong>{row.shadcn}</strong></td>
                  <td>{row.figma}</td>
                  <td>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7: Tipografia ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Tipografia</h2>
        <p className={styles.p}>
          O shadcn não define variáveis de tipografia — usa classes Tailwind. No Figma,
          mantenha os estilos de texto do Cycle Design (Open Sans) como estão. O{' '}
          <code>@theme inline</code> mapeia:
        </p>
        <ul className={styles.list}>
          <li><code>--font-sans</code> → Open Sans (body, headline, display)</li>
          <li><code>--font-mono</code> → Fira Code (código)</li>
        </ul>
        <p className={styles.p}>
          Os 38 estilos de tipografia do Cycle (.body-md, .headline-lg, etc.) continuam
          válidos e podem coexistir com as classes Tailwind do shadcn.
        </p>
      </section>

      {/* ── Seção 8: Shadows ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Shadows</h2>
        <p className={styles.p}>
          O shadcn usa sombras via Tailwind (<code>shadow-sm</code>, <code>shadow-md</code>, etc).
          No Figma, configure os estilos de efeito usando os mesmos valores dos tokens Cycle:
        </p>
        <ul className={styles.list}>
          <li><strong>shadow-sm</strong> → Cards, inputs (Cycle: <code>--shadow-sm</code>)</li>
          <li><strong>shadow-md</strong> → Dropdowns (Cycle: <code>--shadow-md</code>)</li>
          <li><strong>shadow-lg</strong> → Popovers (Cycle: <code>--shadow-lg</code>)</li>
          <li><strong>shadow-xl</strong> → Modais, dialogs (Cycle: <code>--shadow-xl</code>)</li>
        </ul>
      </section>

      {/* ── Seção 9: Checklist ── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Checklist para designers</h2>
        <div className={styles.checklist}>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Criar coleção de variáveis &quot;shadcn&quot; no Figma com modos Light e Dark</span>
          </div>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Preencher variáveis Core (background, foreground, primary, secondary, muted, accent, destructive)</span>
          </div>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Preencher variáveis Surfaces (card, popover)</span>
          </div>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Preencher variáveis Borders (border, input, ring)</span>
          </div>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Preencher variáveis Product (brand, class, private, group, impulse)</span>
          </div>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Preencher variáveis Semantic (warning, positive)</span>
          </div>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Preencher variáveis Charts (chart-1 a chart-5)</span>
          </div>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Criar estilos de radius: xs (4px), sm (8px), md (12px), lg (16px)</span>
          </div>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Criar estilos de efeito: shadow-sm, shadow-md, shadow-lg, shadow-xl</span>
          </div>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Manter estilos de texto Open Sans (38 estilos do Cycle)</span>
          </div>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Vincular variáveis nos componentes de cada categoria</span>
          </div>
          <div className={styles.checkItem}>
            <span className={styles.checkBox} />
            <span>Testar Dark Mode alternando o modo na coleção de variáveis</span>
          </div>
        </div>
      </section>

      <Callout type="info" title="Fonte de verdade">
        <p>
          O Figma continua sendo a fonte de verdade para valores visuais. Se houver conflito
          entre o Figma e o código, o Figma prevalece e o código deve ser ajustado.
        </p>
      </Callout>
    </div>
  )
}
