import { NavLink, useMatch, useResolvedPath } from 'react-router-dom'
import styles from './Sidebar.module.css'

interface NavItem {
  label: string
  path: string
  disabled?: boolean
}

interface NavGroup {
  label: string
  items: NavItem[]
}

const navigation: NavGroup[] = [
  {
    label: 'Getting Started',
    items: [
      { label: 'Introdução', path: '/' },
      { label: 'Instalação', path: '/getting-started/installation' },
      { label: 'Dark Mode', path: '/getting-started/dark-mode' },
      { label: 'llms.txt', path: '/ai/llms-txt' },
      { label: 'MCP Server', path: '/ai/mcp' },
    ],
  },
  {
    label: 'Foundation',
    items: [
      { label: 'Colors', path: '/tokens/colors' },
      { label: 'Typography', path: '/tokens/typography' },
      { label: 'Spacing', path: '/tokens/spacing' },
      { label: 'Shadows', path: '/tokens/shadows' },
      { label: 'Borders & Radius', path: '/tokens/borders-radius' },
      { label: 'Opacity', path: '/tokens/opacity' },
      { label: 'Grid', path: '/tokens/grid' },
      { label: 'Icons', path: '/tokens/icons' },
    ],
  },
  {
    label: 'Guidelines',
    items: [
      { label: 'Decisões de Design', path: '/guidelines/decisions' },
      { label: 'Acessibilidade', path: '/guidelines/accessibility' },
    ],
  },
  {
    label: 'Components',
    items: [
      { label: 'Button', path: '/components/button' },
      { label: 'Label', path: '/components/label' },
      { label: 'Input', path: '/components/input' },
      { label: 'Textarea', path: '/components/textarea' },
      { label: 'Select', path: '/components/select' },
      { label: 'Checkbox', path: '/components/checkbox' },
      { label: 'Radio Group', path: '/components/radio-group' },
      { label: 'Switch', path: '/components/switch' },
      { label: 'Field', path: '/components/field' },
      { label: 'Card', path: '/components/card' },
      { label: 'Badge', path: '/components/badge' },
      { label: 'Avatar', path: '/components/avatar' },
      { label: 'Alert', path: '/components/alert' },
      { label: 'Separator', path: '/components/separator' },
      { label: 'Skeleton', path: '/components/skeleton' },
      { label: 'Spinner', path: '/components/spinner' },
      { label: 'Progress', path: '/components/progress' },
      { label: 'Dialog', path: '/components/dialog' },
      { label: 'Toast', path: '/components/toast' },
      { label: 'Dropdown Menu', path: '/components/dropdown-menu' },
      { label: 'Tooltip', path: '/components/tooltip' },
      { label: 'Popover', path: '/components/popover' },
      { label: 'Tabs', path: '/components/tabs' },
      { label: 'Sheet', path: '/components/sheet' },
      { label: 'Table', path: '/components/table' },
      { label: 'Pagination', path: '/components/pagination' },
      { label: 'Breadcrumb', path: '/components/breadcrumb' },
      { label: 'Accordion', path: '/components/accordion' },
    ],
  },
]

function SidebarNavLink({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const resolved = useResolvedPath(item.path)
  const match = useMatch({ path: resolved.pathname, end: item.path === '/' })
  const isActive = match !== null

  return (
    <NavLink
      to={item.path}
      end={item.path === '/'}
      className={`${styles.navItem} ${isActive ? styles.active : ''}`}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClose}
    >
      {item.label}
    </NavLink>
  )
}

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <nav aria-label="Seções da documentação">
          {navigation.map((group) => (
            <div key={group.label} className={styles.navGroup}>
              <span className={styles.navGroupLabel}>{group.label}</span>
              {group.items.map((item) =>
                item.disabled ? (
                  <span key={item.path} className={`${styles.navItem} ${styles.disabled}`}>
                    {item.label}
                    <span className={styles.badge}>Em breve</span>
                  </span>
                ) : (
                  <SidebarNavLink key={item.path} item={item} onClose={onClose} />
                )
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
