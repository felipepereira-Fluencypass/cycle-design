import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with role="status"', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has default aria-label "Carregando"', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Carregando')
  })

  it('accepts custom aria-label', () => {
    render(<Spinner aria-label="Salvando..." />)
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Salvando...')
  })

  it('renders as SVG', () => {
    render(<Spinner />)
    expect(screen.getByRole('status').tagName).toBe('svg')
  })

  it.each(['lg', 'md', 'sm', 'xs'] as const)('applies size: %s', (size) => {
    const sizeMap = { lg: '32', md: '24', sm: '16', xs: '12' }
    render(<Spinner size={size} />)
    const svg = screen.getByRole('status')
    expect(svg).toHaveAttribute('width', sizeMap[size])
    expect(svg).toHaveAttribute('height', sizeMap[size])
  })

  it('applies cd-spinner class', () => {
    render(<Spinner />)
    expect(screen.getByRole('status').classList.contains('cd-spinner')).toBe(true)
  })

  it('forwards ref', () => {
    const ref = createRef<SVGSVGElement>()
    render(<Spinner ref={ref} />)
    expect(ref.current).toBeInstanceOf(SVGSVGElement)
  })

  // ── Data attributes ──────────────────────────────────────

  it('exposes data-size', () => {
    render(<Spinner size="lg" />)
    expect(screen.getByRole('status')).toHaveAttribute('data-size', 'lg')
  })
})
