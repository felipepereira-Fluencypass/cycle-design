import { forwardRef, cloneElement } from 'react'
import type { HTMLAttributes, CSSProperties, ReactElement, ReactNode } from 'react'
import { cn } from '../../src/utils/cn'

export type AlertVariant = 'info' | 'positive' | 'warning' | 'critical'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Variante semantica. @default 'info' */
  variant?: AlertVariant
  /** Titulo opcional. */
  title?: ReactNode
  /** Icone customizado (substitui o padrao). */
  icon?: ReactElement
  /** Callback para fechar o alert. Quando presente, exibe botao de fechar. */
  onDismiss?: () => void
}

const DEFAULT_ICONS: Record<AlertVariant, ReactElement> = {
  info: (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7v4M8 5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  positive: (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 8l1.5 2 3.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5L14.5 13H1.5L8 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 6v3M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  critical: (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
}

const VARIANT_COLOR: Record<AlertVariant, string> = {
  info: 'brand',
  positive: 'positive',
  warning: 'warning',
  critical: 'critical',
}

/**
 * Alert — mensagem contextual com variante semantica.
 *
 * Usa `role="alert"` para variantes criticas e `role="status"` para info.
 *
 * @example
 * <Alert variant="positive" title="Salvo!">Suas alteracoes foram salvas.</Alert>
 * <Alert variant="critical" onDismiss={() => {}}>Erro ao salvar.</Alert>
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  {
    variant = 'info',
    title,
    icon,
    onDismiss,
    className,
    style,
    children,
    ...rest
  },
  ref,
) {
  const color = VARIANT_COLOR[variant]
  const colorVars = {
    '--_alert-bg': `var(--bg-${color}-primary)`,
    '--_alert-fg': `var(--fg-${color}-primary)`,
    '--_alert-text': `var(--text-${color}-primary)`,
  } as CSSProperties

  const classNames = cn(
    'cd-alert',
    `cd-alert--${variant}`,
    className,
  )

  const iconEl = icon
    ? cloneElement(icon as ReactElement<Record<string, unknown>>, { decorative: true })
    : DEFAULT_ICONS[variant]

  const role = variant === 'critical' ? 'alert' : 'status'

  return (
    <div
      ref={ref}
      className={classNames}
      role={role}
      data-variant={variant}
      style={{ ...colorVars, ...style } as CSSProperties}
      {...rest}
    >
      <span className="cd-alert__icon" aria-hidden="true">
        {iconEl}
      </span>
      <div className="cd-alert__content">
        {title && <div className="cd-alert__title">{title}</div>}
        {children && <div className="cd-alert__message">{children}</div>}
      </div>
      {onDismiss && (
        <button
          type="button"
          className="cd-alert__dismiss"
          onClick={onDismiss}
          aria-label="Fechar"
        >
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  )
})
