import { useState, useMemo, useRef, useEffect } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import * as AllIcons from '@icons/index'
import { ICON_MANIFEST } from '@icons/manifest'
import type { IconSize, IconCategory, IconAnimation } from '@icons/types'
import styles from './Icons.module.css'

type IconComponent = React.FC<{
  size?: IconSize
  decorative?: boolean
  'aria-label'?: string
  animation?: IconAnimation
}>

type Tab = 'static' | 'animated'

const iconMap = Object.fromEntries(
  Object.entries(AllIcons).filter(([, v]) => typeof v === 'function')
) as Record<string, IconComponent>

const SIZES: { label: string; value: IconSize }[] = [
  { label: 'xs · 16px', value: 'xs' },
  { label: 'sm · 24px', value: 'sm' },
  { label: 'md · 32px', value: 'md' },
  { label: 'lg · 40px', value: 'lg' },
  { label: 'xl · 48px', value: 'xl' },
]

const ALL_CATEGORIES: { label: string; value: IconCategory | 'all' }[] = [
  { label: 'Todas as categorias', value: 'all' },
  { label: 'Navigation', value: 'navigation' },
  { label: 'Actions', value: 'actions' },
  { label: 'Status', value: 'status' },
  { label: 'Forms', value: 'forms' },
  { label: 'Files', value: 'files' },
  { label: 'Video', value: 'video' },
  { label: 'User', value: 'user' },
  { label: 'Language Learning', value: 'language-learning' },
  { label: 'Learning Core', value: 'learning-core' },
  { label: 'Lesson Formats', value: 'lesson-formats' },
  { label: 'Schedule', value: 'schedule' },
  { label: 'Marketplace', value: 'marketplace' },
  { label: 'Technology', value: 'technology' },
]

const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  ALL_CATEGORIES.filter(c => c.value !== 'all').map(c => [c.value, c.label])
)

// Ícones preferidos por preset de animação — mostra os mais representativos
const ANIMATION_PRESETS: {
  id: IconAnimation
  label: string
  desc: string
  preferred: string[]
  code: string
}[] = [
  {
    id: 'spin',
    label: 'Spin',
    desc: 'Rotação contínua em torno do centro. Ideal para ícones de carregamento, sincronização ou atualização.',
    preferred: [
      'ReplayIcon', 'AlarmIcon', 'ClockIcon', 'CalendarIcon',
      'CalendarCheckIcon', 'CalendarPlusIcon', 'AiIcon', 'ConversationIcon',
    ],
    code: `<ReplayIcon size="sm" animation="spin" decorative />`,
  },
  {
    id: 'pulse',
    label: 'Pulse',
    desc: 'Pulsação suave de escala e opacidade. Ideal para notificações, alertas e destaques de atenção.',
    preferred: [
      'BellIcon', 'AchievementIcon', 'BadgeIcon', 'CheckIcon',
      'ConfirmIcon', 'CompletionIcon', 'ChatIcon', 'CertificateIcon',
    ],
    code: `<BellIcon size="sm" animation="pulse" aria-label="Nova notificação" />`,
  },
  {
    id: 'bounce',
    label: 'Bounce',
    desc: 'Movimento vertical ritmado. Ideal para direcionar o olhar, indicar scroll ou destacar ações.',
    preferred: [
      'ArrowDownIcon', 'ArrowUpIcon', 'ArrowLeftIcon', 'ArrowRightIcon',
      'ChevronDownIcon', 'ChevronUpIcon', 'ChevronLeftIcon', 'ChevronRightIcon',
    ],
    code: `<ArrowDownIcon size="sm" animation="bounce" decorative />`,
  },
  {
    id: 'draw',
    label: 'Draw',
    desc: 'O traço do ícone se "desenha" continuamente do início ao fim. Funciona apenas em ícones stroke — ícones fill não são afetados.',
    preferred: [
      'BookIcon', 'BookOpenIcon', 'CartIcon', 'CertificateIcon',
      'CourseIcon', 'CalendarIcon', 'AttachmentIcon', 'BookmarkIcon',
    ],
    code: `<BookIcon size="sm" animation="draw" decorative />`,
  },
]

const STATIC_USAGE_CODE = `import { HomeIcon, PlusIcon } from '@cycle/design/icons'

// Decorativo — puramente visual, contexto já comunica o significado
<HomeIcon size="sm" decorative />

// Semântico — comunica algo ao usuário (aria-label obrigatório)
<HomeIcon size="md" aria-label="Ir para a home" />

// Tamanhos disponíveis: xs (16px) · sm (24px) · md (32px) · lg (40px) · xl (48px)`

const ANIMATED_USAGE_CODE = `import { ReplayIcon, BellIcon, ArrowDownIcon, BookIcon } from '@cycle/design/icons'

// Spin — rotação contínua
<ReplayIcon size="sm" animation="spin" decorative />

// Pulse — pulsação de escala e opacidade
<BellIcon size="sm" animation="pulse" aria-label="Nova notificação" />

// Bounce — movimento vertical ritmado
<ArrowDownIcon size="sm" animation="bounce" decorative />

// Draw — traço se desenha (apenas ícones stroke)
<BookIcon size="sm" animation="draw" decorative />`

export default function Icons() {
  const [tab, setTab] = useState<Tab>('static')
  const [search, setSearch] = useState('')
  const [size, setSize] = useState<IconSize>('sm')
  const [activeCategory, setActiveCategory] = useState<IconCategory | 'all'>('all')
  const [copied, setCopied] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filtered = useMemo(() => {
    return Object.entries(iconMap).filter(([name]) => {
      const manifest = ICON_MANIFEST[name]
      const matchesSearch = name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === 'all' || manifest?.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  const grouped = useMemo(() => {
    if (activeCategory !== 'all') return null
    const groups: Record<string, [string, IconComponent][]> = {}
    for (const [name, Icon] of filtered) {
      const cat = ICON_MANIFEST[name]?.category ?? 'other'
      if (!groups[cat]) groups[cat] = []
      groups[cat].push([name, Icon])
    }
    return groups
  }, [filtered, activeCategory])

  // Para cada preset de animação, resolve os ícones preferidos que existem no iconMap
  const animationIcons = useMemo(() => {
    return ANIMATION_PRESETS.map(preset => ({
      ...preset,
      icons: preset.preferred
        .filter(name => iconMap[name])
        .map(name => [name, iconMap[name]] as [string, IconComponent]),
    }))
  }, [])

  function handleCopy(name: string) {
    navigator.clipboard.writeText(name)
    setCopied(name)
    setTimeout(() => setCopied(null), 1500)
  }

  const activeCategoryLabel =
    ALL_CATEGORIES.find(c => c.value === activeCategory)?.label ?? 'Todas as categorias'

  function renderGrid(icons: [string, IconComponent][], animation?: IconAnimation) {
    return (
      <div className={styles.grid}>
        {icons.map(([name, Icon]) => (
          <button
            key={name}
            className={`${styles.iconCard} ${copied === name ? styles.copied : ''}`}
            onClick={() => handleCopy(name)}
            title={`Copiar: ${name}`}
          >
            <div className={styles.iconPreview}>
              <Icon size={size} decorative animation={animation} />
            </div>
            <span className={styles.iconName}>
              {copied === name ? 'Copiado!' : name.replace('Icon', '')}
            </span>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Icons"
        description={`${Object.keys(iconMap).length} ícones stroke-based organizados em 13 categorias. Tamanho e stroke são controlados pela prop size.`}
      />

      {/* Abas */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === 'static' ? styles.tabActive : ''}`}
          onClick={() => setTab('static')}
        >
          Estáticos
        </button>
        <button
          className={`${styles.tab} ${tab === 'animated' ? styles.tabActive : ''}`}
          onClick={() => setTab('animated')}
        >
          Animados
        </button>
      </div>

      {/* ── Aba Estáticos ── */}
      {tab === 'static' && (
        <>
          <section className={styles.usageSection}>
            <h2 className={styles.usageTitle}>Como usar</h2>
            <p className={styles.usageDesc}>
              Importe o ícone pelo nome e use a prop{' '}
              <code className={styles.inlineCode}>size</code> para controlar tamanho e stroke.
              Todo ícone requer <code className={styles.inlineCode}>decorative</code> ou{' '}
              <code className={styles.inlineCode}>aria-label</code> — o TypeScript vai avisar se
              nenhum for passado.
            </p>
            <CodeBlock code={STATIC_USAGE_CODE} language="tsx" />
            <p className={styles.usageTip}>
              Clique em qualquer ícone abaixo para copiar o nome do componente.
            </p>
          </section>

          <div className={styles.controls}>
            <input
              type="search"
              placeholder="Buscar ícone..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={styles.searchInput}
            />
            <div className={styles.controlsRow}>
              <div className={styles.dropdownWrapper} ref={dropdownRef}>
                <button
                  className={`${styles.dropdownTrigger} ${dropdownOpen ? styles.dropdownTriggerOpen : ''}`}
                  onClick={() => setDropdownOpen(o => !o)}
                >
                  <span>{activeCategoryLabel}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    {ALL_CATEGORIES.map(cat => (
                      <button
                        key={cat.value}
                        className={`${styles.dropdownItem} ${activeCategory === cat.value ? styles.dropdownItemActive : ''}`}
                        onClick={() => {
                          setActiveCategory(cat.value)
                          setDropdownOpen(false)
                        }}
                      >
                        {cat.label}
                        {activeCategory === cat.value && (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.sizeSelector}>
                {SIZES.map(s => (
                  <button
                    key={s.value}
                    onClick={() => setSize(s.value)}
                    className={`${styles.sizeButton} ${size === s.value ? styles.sizeActive : ''}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className={styles.count}>
            {filtered.length} ícone{filtered.length !== 1 ? 's' : ''}
            {search && ` para "${search}"`}
            {activeCategory !== 'all' && ` em ${activeCategoryLabel}`}
          </p>

          {filtered.length === 0 ? (
            <div className={styles.empty}>
              Nenhum ícone encontrado para <strong>"{search}"</strong>
            </div>
          ) : grouped ? (
            Object.entries(grouped).map(([cat, icons]) => (
              <section key={cat} className={styles.categorySection}>
                <h3 className={styles.categoryTitle}>
                  {CATEGORY_LABELS[cat] ?? cat}
                  <span className={styles.categoryCount}>{icons.length}</span>
                </h3>
                {renderGrid(icons)}
              </section>
            ))
          ) : (
            renderGrid(filtered)
          )}
        </>
      )}

      {/* ── Aba Animados ── */}
      {tab === 'animated' && (
        <>
          <section className={styles.usageSection}>
            <h2 className={styles.usageTitle}>Ícones animados</h2>
            <p className={styles.usageDesc}>
              Adicione a prop <code className={styles.inlineCode}>animation</code> em qualquer ícone
              para aplicar um preset de animação CSS. As animações respeitam automaticamente{' '}
              <code className={styles.inlineCode}>prefers-reduced-motion</code>.
            </p>
            <CodeBlock code={ANIMATED_USAGE_CODE} language="tsx" />
          </section>

          <div className={styles.animSizeBar}>
            <span className={styles.animSizeLabel}>Tamanho:</span>
            <div className={styles.sizeSelector}>
              {SIZES.map(s => (
                <button
                  key={s.value}
                  onClick={() => setSize(s.value)}
                  className={`${styles.sizeButton} ${size === s.value ? styles.sizeActive : ''}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {animationIcons.map(preset => (
            <section key={preset.id} className={styles.animSection}>
              <div className={styles.animHeader}>
                <span className={styles.animBadge}>{preset.label}</span>
                <p className={styles.animDesc}>{preset.desc}</p>
              </div>
              <div className={styles.animCodeBlock}>
                <CodeBlock code={preset.code} language="tsx" />
              </div>
              {preset.icons.length > 0 ? (
                renderGrid(preset.icons, preset.id)
              ) : (
                <div className={styles.empty}>Nenhum ícone disponível para este preset.</div>
              )}
            </section>
          ))}
        </>
      )}
    </div>
  )
}
