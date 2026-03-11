import { NavLink } from 'react-router-dom'
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
    ],
  },
  {
    label: 'Guidelines',
    items: [
      { label: 'Decisões de Design', path: '/guidelines/decisions' },
    ],
  },
  {
    label: 'AI Ready',
    items: [
      { label: 'llms.txt', path: '/ai/llms-txt' },
      { label: 'MCP Server', path: '/ai/mcp' },
    ],
  },
  {
    label: 'Components',
    items: [
      { label: 'Em breve', path: '/components', disabled: true },
    ],
  },
]

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
        <nav>
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
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `${styles.navItem} ${isActive ? styles.active : ''}`
                    }
                    onClick={onClose}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
