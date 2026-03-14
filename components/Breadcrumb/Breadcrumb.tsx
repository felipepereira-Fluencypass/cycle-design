import { forwardRef } from 'react'
import type { HTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

/* ── Breadcrumb (nav) ──────────────────────────────────────────── */

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  /** Separador entre itens. @default '/' */
  separator?: ReactNode
}

const BreadcrumbRoot = forwardRef<HTMLElement, BreadcrumbProps>(function Breadcrumb(
  { className, separator = '/', children, ...rest },
  ref,
) {
  return (
    <nav
      ref={ref}
      className={`cd-breadcrumb ${className ?? ''}`.trim()}
      aria-label="Breadcrumb"
      {...rest}
    >
      <ol className="cd-breadcrumb__list">
        {Array.isArray(children)
          ? children.map((child, i) => (
              <li key={i} className="cd-breadcrumb__item">
                {i > 0 && (
                  <span className="cd-breadcrumb__separator" aria-hidden="true">
                    {separator}
                  </span>
                )}
                {child}
              </li>
            ))
          : <li className="cd-breadcrumb__item">{children}</li>
        }
      </ol>
    </nav>
  )
})

/* ── BreadcrumbItem ────────────────────────────────────────────── */

export interface BreadcrumbItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Marca como pagina atual (nao clicavel). */
  current?: boolean
  children: ReactNode
}

const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(function BreadcrumbItem(
  { current, className, children, href, ...rest },
  ref,
) {
  if (current) {
    return (
      <span
        className={`cd-breadcrumb__link cd-breadcrumb__link--current ${className ?? ''}`.trim()}
        aria-current="page"
      >
        {children}
      </span>
    )
  }

  return (
    <a
      ref={ref}
      href={href}
      className={`cd-breadcrumb__link ${className ?? ''}`.trim()}
      {...rest}
    >
      {children}
    </a>
  )
})

/* ── Compound export ───────────────────────────────────────────── */

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
})
