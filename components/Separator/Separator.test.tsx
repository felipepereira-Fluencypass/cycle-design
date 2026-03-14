import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Separator } from './Separator'

describe('Separator', () => {
  it('renders as an hr element', () => {
    render(<Separator />)
    expect(screen.getByRole('separator')).toBeInTheDocument()
    expect(screen.getByRole('separator').tagName).toBe('HR')
  })

  it('applies default orientation (horizontal)', () => {
    render(<Separator />)
    const el = screen.getByRole('separator')
    expect(el.className).toContain('cd-separator--horizontal')
    expect(el).toHaveAttribute('aria-orientation', 'horizontal')
  })

  it('applies vertical orientation', () => {
    render(<Separator orientation="vertical" />)
    const el = screen.getByRole('separator')
    expect(el.className).toContain('cd-separator--vertical')
    expect(el).toHaveAttribute('aria-orientation', 'vertical')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLHRElement>()
    render(<Separator ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLHRElement)
  })

  it('merges custom className', () => {
    render(<Separator className="custom" />)
    const el = screen.getByRole('separator')
    expect(el.className).toContain('cd-separator')
    expect(el.className).toContain('custom')
  })
})
