import { PageHeader } from '@/components/ui/PageHeader'
import { Callout } from '@/components/ui/Callout'
import { CodeBlock } from '@/components/ui/CodeBlock'
import styles from './Components.module.css'

const shadcnComponents = [
  { name: 'Button', category: 'Actions', desc: 'Botões primários, secundários, ghost, outline e destructive.' },
  { name: 'Dialog', category: 'Overlay', desc: 'Modais e diálogos de confirmação com focus trap e keyboard support.' },
  { name: 'Select', category: 'Forms', desc: 'Dropdown de seleção com busca, grupos e multi-select.' },
  { name: 'Input', category: 'Forms', desc: 'Campo de texto com validação, ícones e estados de erro.' },
  { name: 'Textarea', category: 'Forms', desc: 'Área de texto multilinhas com auto-resize.' },
  { name: 'Checkbox', category: 'Forms', desc: 'Checkbox com estados checked, unchecked e indeterminate.' },
  { name: 'Switch', category: 'Forms', desc: 'Toggle on/off com animação e acessibilidade nativa.' },
  { name: 'Toast', category: 'Feedback', desc: 'Notificações temporárias com variantes de sucesso, erro e warning.' },
  { name: 'Alert', category: 'Feedback', desc: 'Banners informativos com ícone, título e descrição.' },
  { name: 'Tabs', category: 'Navigation', desc: 'Navegação por abas com conteúdo associado.' },
  { name: 'Card', category: 'Layout', desc: 'Container de conteúdo com header, body e footer.' },
  { name: 'Badge', category: 'Data Display', desc: 'Indicadores de status, contagem e categoria.' },
  { name: 'Avatar', category: 'Data Display', desc: 'Imagem de perfil com fallback para iniciais.' },
  { name: 'Tooltip', category: 'Overlay', desc: 'Dica contextual ao passar o mouse sobre um elemento.' },
  { name: 'Popover', category: 'Overlay', desc: 'Container flutuante para conteúdo interativo.' },
  { name: 'DropdownMenu', category: 'Navigation', desc: 'Menus contextuais com atalhos de teclado.' },
  { name: 'Table', category: 'Data Display', desc: 'Tabelas com ordenação, paginação e seleção.' },
  { name: 'Accordion', category: 'Layout', desc: 'Painéis colapsáveis para organizar conteúdo.' },
  { name: 'Separator', category: 'Layout', desc: 'Divisor visual horizontal ou vertical.' },
  { name: 'Skeleton', category: 'Feedback', desc: 'Placeholder animado para estados de carregamento.' },
  { name: 'Sheet', category: 'Overlay', desc: 'Painel lateral deslizante (drawer) para formulários e detalhes.' },
  { name: 'Command', category: 'Navigation', desc: 'Paleta de comandos com busca e atalhos (Cmd+K).' },
  { name: 'Form', category: 'Forms', desc: 'Gerenciamento de formulários com validação via react-hook-form + zod.' },
  { name: 'Calendar', category: 'Forms', desc: 'Seletor de datas com navegação por mês e ano.' },
  { name: 'DatePicker', category: 'Forms', desc: 'Input de data com calendário em popover.' },
]

const addCode = `# Adicionar componentes individualmente
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add select

# Ou vários de uma vez
npx shadcn@latest add button dialog select input textarea toast tabs card badge`

// Group by category
const categories = shadcnComponents.reduce<Record<string, typeof shadcnComponents>>((acc, comp) => {
  if (!acc[comp.category]) acc[comp.category] = []
  acc[comp.category].push(comp)
  return acc
}, {})

const categoryOrder = ['Forms', 'Actions', 'Overlay', 'Feedback', 'Navigation', 'Data Display', 'Layout']

export default function Components() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Componentes"
        description="58+ componentes do shadcn/ui, todos customizados com a identidade visual da Fluencypass via Cycle Design foundations."
      />

      <Callout type="info" title="shadcn/ui como base">
        <p>
          Os componentes são do <strong>shadcn/ui</strong>, construídos sobre Radix UI primitives
          com acessibilidade nativa (keyboard, focus trap, screen readers). O tema do Cycle Design
          é aplicado via CSS variables — cores, radius e sombras refletem os foundations do Figma.
        </p>
      </Callout>

      <section className={styles.section} style={{ marginTop: 24 }}>
        <h2 className={styles.h2}>Como adicionar componentes</h2>
        <p className={styles.p}>
          O shadcn copia os componentes no seu projeto. Use o CLI para adicionar conforme necessário:
        </p>
        <CodeBlock code={addCode} language="bash" filename="terminal" />
      </section>

      {categoryOrder.map((category) => (
        <section key={category} className={styles.section}>
          <h2 className={styles.h2}>{category}</h2>
          <div className={styles.plannedGrid}>
            {(categories[category] || []).map((c) => (
              <div key={c.name} className={styles.plannedCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardName}>{c.name}</span>
                  <span className={styles.stable}>shadcn</span>
                </div>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <Callout type="tip" title="Lista completa">
        <p>
          Para ver todos os 58+ componentes disponíveis, consulte a{' '}
          <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noopener noreferrer">
            documentação oficial do shadcn/ui
          </a>.
          Todos funcionam com o tema Cycle Design sem configuração adicional.
        </p>
      </Callout>
    </div>
  )
}
