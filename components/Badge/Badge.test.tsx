import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Active</Badge>)
    expect(screen.getByText('Active')).toBeInTheDocument()
  })

  it('applies default classes (filled, neutral, md)', () => {
    render(<Badge data-testid="badge">Test</Badge>)
    const el = screen.getByTestId('badge')
    expect(el.className).toContain('cd-badge')
    expect(el.className).toContain('cd-badge--filled')
    expect(el.className).toContain('cd-badge--neutral')
    expect(el.className).toContain('cd-badge--md')
  })

  it.each(['filled', 'outline', 'ghost'] as const)('applies variant: %s', (variant) => {
    render(<Badge variant={variant} data-testid="badge">T</Badge>)
    expect(screen.getByTestId('badge').className).toContain(`cd-badge--${variant}`)
  })

  it.each(['brand', 'class', 'private', 'group', 'impulse', 'positive', 'warning', 'critical', 'neutral'] as const)(
    'applies color: %s', (color) => {
      render(<Badge color={color} data-testid="badge">T</Badge>)
      expect(screen.getByTestId('badge').className).toContain(`cd-badge--${color}`)
    },
  )

  it.each(['md', 'sm'] as const)('applies size: %s', (size) => {
    render(<Badge size={size} data-testid="badge">T</Badge>)
    expect(screen.getByTestId('badge').className).toContain(`cd-badge--${size}`)
  })

  it('renders dot indicator', () => {
    render(<Badge dot data-testid="badge" />)
    const el = screen.getByTestId('badge')
    expect(el.className).toContain('cd-badge--dot')
    expect(el.querySelector('.cd-badge__dot')).toBeInTheDocument()
  })

  it('sets color CSS custom properties for non-neutral colors', () => {
    render(<Badge color="brand" data-testid="badge">T</Badge>)
    const el = screen.getByTestId('badge')
    expect(el.style.getPropertyValue('--_badge-bg')).toBe('var(--bg-brand-primary)')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLSpanElement>()
    render(<Badge ref={ref}>Test</Badge>)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })
})
