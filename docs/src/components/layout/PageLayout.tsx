import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import styles from './PageLayout.module.css'

interface PageLayoutProps {
  isSidebarOpen: boolean
  onCloseSidebar: () => void
}

export function PageLayout({ isSidebarOpen, onCloseSidebar }: PageLayoutProps) {
  return (
    <div className={styles.layout}>
      <Sidebar isOpen={isSidebarOpen} onClose={onCloseSidebar} />
      <main id="main-content" className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
