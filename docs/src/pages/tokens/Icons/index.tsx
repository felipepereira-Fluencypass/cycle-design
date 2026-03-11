import { useState, useMemo, useRef, useEffect } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import * as AllIcons from '@icons/index'
import { ICON_MANIFEST } from '@icons/manifest'
import type { IconSize, IconCategory } from '@icons/types'
import styles from './Icons.module.css'

type IconComponent = React.FC<{ size?: IconSize; decorative?: boolean; 'aria-label'?: string }>

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

const USAGE_CODE = `import { HomeIcon, PlusIcon } from '@cycle/design/icons'

// Decorativo — puramente visual, contexto já comunica o significado
<HomeIcon size="sm" decorative />

// Semântico — comunica algo ao usuário (aria-label obrigatório)
<HomeIcon size="md" aria-label="Ir para a home" />

// Tamanhos disponíveis: xs (16px) · sm (24px) · md (32px) · lg (40px) · xl (48px)`

export default function Icons() {
  const [search, setSearch] = useState('')
  const [size, setSize] = useState<IconSize>('sm')
  const [activeCategory, setActiveCategory] = useState<IconCategory | 'all'>('all')
  const [copied, setCopied] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Fecha dropdown ao clicar fora
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

  // Agrupa por categoria quando não há filtro de categoria ativo
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

  function handleCopy(name: string) {
    navigator.clipboard.writeText(name)
    setCopied(name)
    setTimeout(() => setCopied(null), 1500)
  }

  const activeCategoryLabel = ALL_CATEGORIES.find(c => c.value === activeCategory)?.label ?? 'Todas as categorias'

  function renderGrid(icons: [string, IconComponent][]) {
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
              <Icon size={size} decorative />
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

      {/* Documentação de uso */}
      <section className={styles.usageSection}>
        <h2 className={styles.usageTitle}>Como usar</h2>
        <p className={styles.usageDesc}>
          Importe o ícone pelo nome e use a prop <code className={styles.inlineCode}>size</code> para
          controlar tamanho e stroke. Todo ícone requer <code className={styles.inlineCode}>decorative</code> ou{' '}
          <code className={styles.inlineCode}>aria-label</code> — o TypeScript vai avisar se nenhum for passado.
        </p>
        <CodeBlock code={USAGE_CODE} language="tsx" />
        <p className={styles.usageTip}>
          Clique em qualquer ícone abaixo para copiar o nome do componente.
        </p>
      </section>

      {/* Controles */}
      <div className={styles.controls}>
        <input
          type="search"
          placeholder="Buscar ícone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.controlsRow}>
          {/* Dropdown de categoria */}
          <div className={styles.dropdownWrapper} ref={dropdownRef}>
            <button
              className={`${styles.dropdownTrigger} ${dropdownOpen ? styles.dropdownTriggerOpen : ''}`}
              onClick={() => setDropdownOpen(o => !o)}
            >
              <span>{activeCategoryLabel}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                {ALL_CATEGORIES.map(cat => (
                  <button
                    key={cat.value}
                    className={`${styles.dropdownItem} ${activeCategory === cat.value ? styles.dropdownItemActive : ''}`}
                    onClick={() => { setActiveCategory(cat.value); setDropdownOpen(false) }}
                  >
                    {cat.label}
                    {activeCategory === cat.value && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Seletor de tamanho */}
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

      {/* Contagem */}
      <p className={styles.count}>
        {filtered.length} ícone{filtered.length !== 1 ? 's' : ''}
        {search && ` para "${search}"`}
        {activeCategory !== 'all' && ` em ${activeCategoryLabel}`}
      </p>

      {/* Grid — agrupado por categoria ou plano */}
      {filtered.length === 0 ? (
        <div className={styles.empty}>
          Nenhum ícone encontrado para <strong>"{search}"</strong>
        </div>
      ) : grouped ? (
        // Modo "Todas" — agrupado por categoria com títulos
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
        // Modo filtrado — grid plano
        renderGrid(filtered)
      )}
    </div>
  )
}
