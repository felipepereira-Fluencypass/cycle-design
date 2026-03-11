import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react'
import styles from './Callout.module.css'

type CalloutType = 'info' | 'warning' | 'tip' | 'success'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
  success: CheckCircle,
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const Icon = icons[type]

  return (
    <div className={`${styles.callout} ${styles[type]}`}>
      <div className={styles.icon}>
        <Icon size={16} />
      </div>
      <div className={styles.body}>
        {title && <p className={styles.title}>{title}</p>}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
