import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('renders with aria-hidden', () => {
    const { container } = render(<Skeleton />)
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies default variant (text)', () => {
    const { container } = render(<Skeleton />)
    expect((container.firstChild as HTMLElement).className).toContain('cd-skeleton--text')
  })

  it.each(['text', 'circular', 'rectangular'] as const)('applies variant: %s', (variant) => {
    const { container } = render(<Skeleton variant={variant} />)
    expect((container.firstChild as HTMLElement).className).toContain(`cd-skeleton--${variant}`)
  })

  it('applies width and height as numbers (px)', () => {
    const { container } = render(<Skeleton width={100} height={40} />)
    const el = container.firstChild as HTMLElement
    expect(el.style.width).toBe('100px')
    expect(el.style.height).toBe('40px')
  })

  it('applies width and height as strings', () => {
    const { container } = render(<Skeleton width="50%" height="2em" />)
    const el = container.firstChild as HTMLElement
    expect(el.style.width).toBe('50%')
    expect(el.style.height).toBe('2em')
  })

  it('applies static class when static prop is true', () => {
    const { container } = render(<Skeleton static />)
    expect((container.firstChild as HTMLElement).className).toContain('cd-skeleton--static')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLSpanElement>()
    render(<Skeleton ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })
})
