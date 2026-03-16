import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders a checkbox input', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders label text when provided', () => {
    render(<Checkbox label="Accept terms" />)
    expect(screen.getByText('Accept terms')).toBeInTheDocument()
  })

  it('does not render label span when label is not provided', () => {
    const { container } = render(<Checkbox />)
    expect(container.querySelector('.cd-checkbox__label')).not.toBeInTheDocument()
  })

  it('applies default size (md) and color (brand) classes/vars', () => {
    const { container } = render(<Checkbox />)
    const label = container.querySelector('label')!
    expect(label.classList.contains('cd-checkbox')).toBe(true)
    expect(label.classList.contains('cd-checkbox--md')).toBe(true)
    expect(label.style.getPropertyValue('--_check-solid')).toBe('var(--bg-brand-solid)')
  })

  it.each(['md', 'sm'] as const)('applies size class cd-checkbox--%s', (size) => {
    const { container } = render(<Checkbox size={size} />)
    const label = container.querySelector('label')!
    expect(label.classList.contains(`cd-checkbox--${size}`)).toBe(true)
  })

  it.each(['brand', 'class', 'private', 'group', 'impulse'] as const)(
    'applies CSS vars for color=%s',
    (color) => {
      const { container } = render(<Checkbox color={color} />)
      const label = container.querySelector('label')!
      expect(label.style.getPropertyValue('--_check-solid')).toBe(`var(--bg-${color}-solid)`)
      expect(label.style.getPropertyValue('--_check-solid-hover')).toBe(
        `var(--bg-${color}-solid_hover)`,
      )
      expect(label.style.getPropertyValue('--_check-border')).toBe(`var(--border-${color})`)
    },
  )

  it('toggles checked state on click', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Checkbox onChange={onChange} />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()

    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(onChange).toHaveBeenCalledTimes(1)

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  it('sets indeterminate property on the input', () => {
    render(<Checkbox indeterminate />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.indeterminate).toBe(true)
  })

  it('unsets indeterminate when prop changes to false', () => {
    const { rerender } = render(<Checkbox indeterminate />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.indeterminate).toBe(true)

    rerender(<Checkbox indeterminate={false} />)
    expect(checkbox.indeterminate).toBe(false)
  })

  it('applies error class and aria-invalid', () => {
    const { container } = render(<Checkbox error />)
    const label = container.querySelector('label')!
    const checkbox = screen.getByRole('checkbox')

    expect(label.classList.contains('cd-checkbox--error')).toBe(true)
    expect(checkbox).toHaveAttribute('aria-invalid', 'true')
  })

  it('does not apply error class or aria-invalid when error is false', () => {
    const { container } = render(<Checkbox />)
    const label = container.querySelector('label')!
    const checkbox = screen.getByRole('checkbox')

    expect(label.classList.contains('cd-checkbox--error')).toBe(false)
    expect(checkbox).not.toHaveAttribute('aria-invalid')
  })

  it('applies disabled class and disables the checkbox', () => {
    const { container } = render(<Checkbox disabled />)
    const label = container.querySelector('label')!
    const checkbox = screen.getByRole('checkbox')

    expect(label.classList.contains('cd-checkbox--disabled')).toBe(true)
    expect(checkbox).toBeDisabled()
  })

  it('forwards ref to the input element', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Checkbox ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    expect(ref.current).toBe(screen.getByRole('checkbox'))
  })

  it('forwards callback ref to the input element', () => {
    const refFn = vi.fn()
    render(<Checkbox ref={refFn} />)

    expect(refFn).toHaveBeenCalledWith(expect.any(HTMLInputElement))
  })

  it('merges custom className', () => {
    const { container } = render(<Checkbox className="custom" />)
    const label = container.querySelector('label')!
    expect(label.classList.contains('cd-checkbox')).toBe(true)
    expect(label.classList.contains('custom')).toBe(true)
  })

  // ── Keyboard interaction ─────────────────────────────────

  it('toggles with Space key', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Checkbox onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox')

    await user.tab()
    expect(checkbox).toHaveFocus()

    await user.keyboard(' ')
    expect(checkbox).toBeChecked()
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('is focusable via Tab', async () => {
    const user = userEvent.setup()
    render(<Checkbox label="Focus me" />)
    await user.tab()
    expect(screen.getByRole('checkbox')).toHaveFocus()
  })

  it('is not focusable when disabled', async () => {
    const user = userEvent.setup()
    render(<Checkbox disabled label="Disabled" />)
    await user.tab()
    expect(screen.getByRole('checkbox')).not.toHaveFocus()
  })

  it('does not toggle when disabled and clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Checkbox disabled onChange={onChange} />)
    await user.click(screen.getByRole('checkbox'))
    expect(onChange).not.toHaveBeenCalled()
  })

  // ── Data attributes ──────────────────────────────────────

  it('exposes data attributes', () => {
    const { container } = render(<Checkbox size="sm" color="class" error disabled />)
    const label = container.querySelector('label')!
    expect(label).toHaveAttribute('data-size', 'sm')
    expect(label).toHaveAttribute('data-color', 'class')
    expect(label).toHaveAttribute('data-disabled', 'true')
    expect(label).toHaveAttribute('data-error', 'true')
  })
})
