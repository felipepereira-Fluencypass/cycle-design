import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from './Toast'

function renderToast(variant?: 'info' | 'positive' | 'warning' | 'critical') {
  return render(
    <ToastProvider>
      <Toast open variant={variant} data-testid="toast">
        <ToastTitle>Title</ToastTitle>
        <ToastDescription>Description</ToastDescription>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>,
  )
}

describe('Toast', () => {
  it('renders when open', () => {
    renderToast()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('applies default variant class (info)', () => {
    renderToast()
    expect(screen.getByTestId('toast').className).toContain('cd-toast--info')
  })

  it.each(['info', 'positive', 'warning', 'critical'] as const)('applies variant: %s', (variant) => {
    renderToast(variant)
    expect(screen.getByTestId('toast').className).toContain(`cd-toast--${variant}`)
  })

  it('renders close button with aria-label', () => {
    renderToast()
    expect(screen.getByRole('button', { name: 'Fechar' })).toBeInTheDocument()
  })

  it('applies cd-toast-viewport class', () => {
    const { container } = renderToast()
    const viewport = container.querySelector('.cd-toast-viewport')
    expect(viewport).toBeInTheDocument()
  })

  it('sets color CSS custom property', () => {
    renderToast('critical')
    const el = screen.getByTestId('toast')
    expect(el.style.getPropertyValue('--_toast-accent')).toBe('var(--bg-critical-solid)')
  })
})
