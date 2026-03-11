import { useState } from 'react'
import styles from './Tabs.module.css'

export interface TabDef {
  key: string
  label: string
}

interface TabsProps {
  tabs: TabDef[]
  defaultTab?: string
  children: (activeKey: string) => React.ReactNode
}

export function Tabs({ tabs, defaultTab, children }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0].key)

  return (
    <div>
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={active === tab.key}
            className={`${styles.tab} ${active === tab.key ? styles.active : ''}`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{children(active)}</div>
    </div>
  )
}
