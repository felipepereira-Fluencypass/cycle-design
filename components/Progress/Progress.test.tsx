import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Progress } from './Progress'

describe('Progress', () => {
  it('renders with role="progressbar"', () => {
    render(<Progress aria-label="Loading" />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('sets aria-valuenow, aria-valuemin, aria-valuemax', () => {
    render(<Progress value={50} aria-label="Loading" />)
    const el = screen.getByRole('progressbar')
    expect(el).toHaveAttribute('aria-valuenow', '50')
    expect(el).toHaveAttribute('aria-valuemin', '0')
    expect(el).toHaveAttribute('aria-valuemax', '100')
  })

  it('applies default classes (md, brand)', () => {
    render(<Progress aria-label="Loading" />)
    const el = screen.getByRole('progressbar')
    expect(el.className).toContain('cd-progress--md')
    expect(el.style.getPropertyValue('--_progress-fill')).toBe('var(--bg-brand-solid)')
  })

  it.each(['md', 'sm'] as const)('applies size: %s', (size) => {
    render(<Progress size={size} aria-label="Loading" />)
    expect(screen.getByRole('progressbar').className).toContain(`cd-progress--${size}`)
  })

  it.each(['brand', 'class', 'private', 'group', 'impulse', 'positive'] as const)(
    'applies color: %s', (color) => {
      render(<Progress color={color} aria-label="Loading" />)
      expect(screen.getByRole('progressbar').style.getPropertyValue('--_progress-fill'))
        .toBe(`var(--bg-${color}-solid)`)
    },
  )

  it('sets fill width based on value', () => {
    const { container } = render(<Progress value={75} aria-label="Loading" />)
    const fill = container.querySelector('.cd-progress__fill') as HTMLElement
    expect(fill.style.width).toBe('75%')
  })

  it('clamps value to 0-100%', () => {
    const { container } = render(<Progress value={150} aria-label="Loading" />)
    const fill = container.querySelector('.cd-progress__fill') as HTMLElement
    expect(fill.style.width).toBe('100%')
  })

  it('supports custom max', () => {
    render(<Progress value={5} max={10} aria-label="Loading" />)
    const el = screen.getByRole('progressbar')
    expect(el).toHaveAttribute('aria-valuemax', '10')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Progress ref={ref} aria-label="Loading" />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
