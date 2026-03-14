import { forwardRef, useMemo } from 'react'
import type { HTMLAttributes } from 'react'

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Total de paginas. */
  totalPages: number
  /** Pagina atual (1-indexed). */
  currentPage: number
  /** Callback ao mudar de pagina. */
  onPageChange: (page: number) => void
  /** Quantas paginas mostrar ao redor da atual. @default 1 */
  siblingCount?: number
}

function range(start: number, end: number): number[] {
  const result: number[] = []
  for (let i = start; i <= end; i++) result.push(i)
  return result
}

const DOTS = -1

function usePaginationRange(totalPages: number, currentPage: number, siblingCount: number) {
  return useMemo(() => {
    const totalSlots = siblingCount * 2 + 5 // siblings + first + last + current + 2 dots

    if (totalSlots >= totalPages) {
      return range(1, totalPages)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

    const showLeftDots = leftSiblingIndex > 2
    const showRightDots = rightSiblingIndex < totalPages - 1

    if (!showLeftDots && showRightDots) {
      const leftCount = 3 + 2 * siblingCount
      return [...range(1, leftCount), DOTS, totalPages]
    }

    if (showLeftDots && !showRightDots) {
      const rightCount = 3 + 2 * siblingCount
      return [1, DOTS, ...range(totalPages - rightCount + 1, totalPages)]
    }

    return [1, DOTS, ...range(leftSiblingIndex, rightSiblingIndex), DOTS, totalPages]
  }, [totalPages, currentPage, siblingCount])
}

/**
 * Pagination — navegacao de paginas.
 *
 * @example
 * <Pagination totalPages={10} currentPage={3} onPageChange={setPage} />
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(function Pagination(
  {
    totalPages,
    currentPage,
    onPageChange,
    siblingCount = 1,
    className,
    ...rest
  },
  ref,
) {
  const pages = usePaginationRange(totalPages, currentPage, siblingCount)

  if (totalPages <= 1) return null

  return (
    <nav
      ref={ref}
      className={`cd-pagination ${className ?? ''}`.trim()}
      aria-label="Paginacao"
      {...rest}
    >
      <button
        type="button"
        className="cd-pagination__btn cd-pagination__btn--prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Pagina anterior"
      >
        <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true">
          <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {pages.map((page, i) =>
        page === DOTS ? (
          <span key={`dots-${i}`} className="cd-pagination__dots" aria-hidden="true">
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            className={`cd-pagination__btn ${page === currentPage ? 'cd-pagination__btn--active' : ''}`.trim()}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
            aria-label={`Pagina ${page}`}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        className="cd-pagination__btn cd-pagination__btn--next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Proxima pagina"
      >
        <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </nav>
  )
})
