import styles from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
  description: string
  badge?: string
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className={styles.header}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <hr className={styles.divider} />
    </div>
  )
}
