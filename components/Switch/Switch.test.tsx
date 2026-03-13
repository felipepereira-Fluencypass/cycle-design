import { createRef } from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from './Switch'

describe('Switch', () => {
  it('renders with role="switch"', () => {
    render(<Switch />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('renders label text', () => {
    render(<Switch label="Notificacoes" />)
    expect(screen.getByText('Notificacoes')).toBeInTheDocument()
  })

  it('applies default size (md) and color (brand)', () => {
    const { container } = render(<Switch />)
    const wrapper = container.firstElementChild!
    expect(wrapper).toHaveClass('cd-switch', 'cd-switch--md')
    expect(wrapper).toHaveStyle({
      '--_switch-solid': 'var(--bg-brand-solid)',
      '--_switch-solid-hover': 'var(--bg-brand-solid_hover)',
    })
  })

  it.each(['md', 'sm'] as const)('applies size class cd-switch--%s', (size) => {
    const { container } = render(<Switch size={size} />)
    const wrapper = container.firstElementChild!
    expect(wrapper).toHaveClass('cd-switch', `cd-switch--${size}`)
  })

  it.each(['brand', 'class', 'private', 'group', 'impulse'] as const)(
    'applies correct CSS vars for color=%s',
    (color) => {
      const { container } = render(<Switch color={color} />)
      const wrapper = container.firstElementChild!
      expect(wrapper).toHaveStyle({
        '--_switch-solid': `var(--bg-${color}-solid)`,
        '--_switch-solid-hover': `var(--bg-${color}-solid_hover)`,
      })
    },
  )

  it('toggles on click', async () => {
    const user = userEvent.setup()
    render(<Switch label="Toggle me" />)
    const input = screen.getByRole('switch')

    expect(input).not.toBeChecked()
    await user.click(input)
    expect(input).toBeChecked()
    await user.click(input)
    expect(input).not.toBeChecked()
  })

  it('disabled state', () => {
    const { container } = render(<Switch disabled label="Off" />)
    const wrapper = container.firstElementChild!
    expect(wrapper).toHaveClass('cd-switch--disabled')
    expect(screen.getByRole('switch')).toBeDisabled()
  })

  it('forwards ref to input element', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Switch ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    expect(ref.current).toHaveClass('cd-switch__input')
  })
})
