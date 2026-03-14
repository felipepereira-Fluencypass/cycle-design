import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Card } from './Card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Content</Card>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('applies default classes (elevation-sm, padding-md)', () => {
    render(<Card data-testid="card">Test</Card>)
    const el = screen.getByTestId('card')
    expect(el.className).toContain('cd-card')
    expect(el.className).toContain('cd-card--elevation-sm')
    expect(el.className).toContain('cd-card--padding-md')
  })

  it.each(['flat', 'sm', 'md', 'lg'] as const)('applies elevation: %s', (elevation) => {
    render(<Card elevation={elevation} data-testid="card">T</Card>)
    expect(screen.getByTestId('card').className).toContain(`cd-card--elevation-${elevation}`)
  })

  it.each(['none', 'sm', 'md', 'lg'] as const)('applies padding: %s', (padding) => {
    render(<Card padding={padding} data-testid="card">T</Card>)
    expect(screen.getByTestId('card').className).toContain(`cd-card--padding-${padding}`)
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Card ref={ref}>Test</Card>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('merges custom className', () => {
    render(<Card className="custom" data-testid="card">T</Card>)
    const el = screen.getByTestId('card')
    expect(el.className).toContain('cd-card')
    expect(el.className).toContain('custom')
  })

  describe('Card.Header', () => {
    it('renders with correct class', () => {
      render(<Card.Header data-testid="header">Title</Card.Header>)
      expect(screen.getByTestId('header').className).toContain('cd-card__header')
      expect(screen.getByText('Title')).toBeInTheDocument()
    })
  })

  describe('Card.Body', () => {
    it('renders with correct class', () => {
      render(<Card.Body data-testid="body">Body text</Card.Body>)
      expect(screen.getByTestId('body').className).toContain('cd-card__body')
    })
  })

  describe('Card.Footer', () => {
    it('renders with correct class', () => {
      render(<Card.Footer data-testid="footer">Actions</Card.Footer>)
      expect(screen.getByTestId('footer').className).toContain('cd-card__footer')
    })
  })
})
