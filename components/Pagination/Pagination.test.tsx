import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders navigation with aria-label', () => {
    render(<Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />)
    expect(screen.getByRole('navigation', { name: 'Paginacao' })).toBeInTheDocument()
  })

  it('renders page buttons', () => {
    render(<Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />)
    expect(screen.getByRole('button', { name: 'Pagina 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pagina 5' })).toBeInTheDocument()
  })

  it('marks current page with aria-current', () => {
    render(<Pagination totalPages={5} currentPage={3} onPageChange={() => {}} />)
    expect(screen.getByRole('button', { name: 'Pagina 3' })).toHaveAttribute('aria-current', 'page')
  })

  it('calls onPageChange when a page is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Pagination totalPages={5} currentPage={1} onPageChange={onChange} />)
    await user.click(screen.getByRole('button', { name: 'Pagina 3' }))
    expect(onChange).toHaveBeenCalledWith(3)
  })

  it('disables prev button on first page', () => {
    render(<Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />)
    expect(screen.getByRole('button', { name: 'Pagina anterior' })).toBeDisabled()
  })

  it('disables next button on last page', () => {
    render(<Pagination totalPages={5} currentPage={5} onPageChange={() => {}} />)
    expect(screen.getByRole('button', { name: 'Proxima pagina' })).toBeDisabled()
  })

  it('navigates to prev page', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Pagination totalPages={5} currentPage={3} onPageChange={onChange} />)
    await user.click(screen.getByRole('button', { name: 'Pagina anterior' }))
    expect(onChange).toHaveBeenCalledWith(2)
  })

  it('navigates to next page', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Pagination totalPages={5} currentPage={3} onPageChange={onChange} />)
    await user.click(screen.getByRole('button', { name: 'Proxima pagina' }))
    expect(onChange).toHaveBeenCalledWith(4)
  })

  it('shows dots for many pages', () => {
    render(<Pagination totalPages={20} currentPage={10} onPageChange={() => {}} />)
    const dots = screen.getAllByText('...')
    expect(dots.length).toBeGreaterThanOrEqual(1)
  })

  it('returns null for 1 or fewer pages', () => {
    const { container } = render(<Pagination totalPages={1} currentPage={1} onPageChange={() => {}} />)
    expect(container.innerHTML).toBe('')
  })
})
