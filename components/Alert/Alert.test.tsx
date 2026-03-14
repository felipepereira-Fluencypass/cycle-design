import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { Alert } from './Alert'

describe('Alert', () => {
  it('renders message content', () => {
    render(<Alert>Something happened</Alert>)
    expect(screen.getByText('Something happened')).toBeInTheDocument()
  })

  it('renders title when provided', () => {
    render(<Alert title="Success">Details here</Alert>)
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('Details here')).toBeInTheDocument()
  })

  it('applies default variant (info) with role="status"', () => {
    render(<Alert>Info message</Alert>)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('uses role="alert" for critical variant', () => {
    render(<Alert variant="critical">Error!</Alert>)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it.each(['info', 'positive', 'warning', 'critical'] as const)('applies variant class: %s', (variant) => {
    render(<Alert variant={variant} data-testid="alert">T</Alert>)
    expect(screen.getByTestId('alert').className).toContain(`cd-alert--${variant}`)
  })

  it('renders dismiss button when onDismiss is provided', () => {
    render(<Alert onDismiss={() => {}}>T</Alert>)
    expect(screen.getByRole('button', { name: 'Fechar' })).toBeInTheDocument()
  })

  it('calls onDismiss when dismiss button is clicked', async () => {
    const user = userEvent.setup()
    const onDismiss = vi.fn()
    render(<Alert onDismiss={onDismiss}>T</Alert>)
    await user.click(screen.getByRole('button', { name: 'Fechar' }))
    expect(onDismiss).toHaveBeenCalledOnce()
  })

  it('does not render dismiss button when onDismiss is not provided', () => {
    render(<Alert>T</Alert>)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('sets color CSS custom properties', () => {
    render(<Alert variant="critical" data-testid="alert">T</Alert>)
    const el = screen.getByTestId('alert')
    expect(el.style.getPropertyValue('--_alert-bg')).toBe('var(--bg-critical-primary)')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Alert ref={ref}>Test</Alert>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
