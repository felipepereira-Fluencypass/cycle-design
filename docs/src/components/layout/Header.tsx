import { Sun, Moon, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CycleLogo } from '@/components/ui/CycleLogo'
import styles from './Header.module.css'

interface HeaderProps {
  theme: 'light' | 'dark'
  isSidebarOpen: boolean
  onToggleTheme: () => void
  onToggleSidebar: () => void
}

export function Header({ theme, isSidebarOpen, onToggleTheme, onToggleSidebar }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button
          className={styles.menuToggle}
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={isSidebarOpen}
        >
          <Menu size={18} />
        </button>
        <Link to="/" className={styles.logo}>
          <CycleLogo size={28} />
          <span className={styles.logoText}>Cycle Design</span>
        </Link>
        <span className={styles.version}>v1.0</span>
      </div>

      <div className={styles.right}>
        <button
          className={styles.themeToggle}
          onClick={onToggleTheme}
          aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        >
          {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>
      </div>
    </header>
  )
}
