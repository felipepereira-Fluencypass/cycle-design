import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Select } from './Select'

describe('Select', () => {
  // ── Rendering ──────────────────────────────────────────────

  it('renders a select with options', () => {
    render(
      <Select aria-label="Language">
        <option value="en">English</option>
        <option value="pt">Portuguese</option>
      </Select>,
    )
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
    expect(select.tagName).toBe('SELECT')
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByText('Portuguese')).toBeInTheDocument()
  })

  // ── Placeholder ────────────────────────────────────────────

  it('renders placeholder as a disabled option', () => {
    render(
      <Select placeholder="Choose one" aria-label="Language">
        <option value="en">English</option>
      </Select>,
    )
    const placeholder = screen.getByText('Choose one')
    expect(placeholder.tagName).toBe('OPTION')
    expect(placeholder).toBeDisabled()
  })

  it('does not render placeholder option when not provided', () => {
    render(
      <Select aria-label="Language">
        <option value="en">English</option>
      </Select>,
    )
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(1)
  })

  // ── Sizes ──────────────────────────────────────────────────

  it('applies default size class (md)', () => {
    const { container } = render(<Select aria-label="Language"><option>A</option></Select>)
    const wrapper = container.firstElementChild!
    expect(wrapper.className).toContain('cd-select--md')
  })

  it.each(['lg', 'md', 'sm'] as const)('applies size class: %s', (size) => {
    const { container } = render(
      <Select size={size} aria-label="Language"><option>A</option></Select>,
    )
    const wrapper = container.firstElementChild!
    expect(wrapper.className).toContain(`cd-select--${size}`)
  })

  // ── Error ──────────────────────────────────────────────────

  it('applies error class on wrapper and aria-invalid on select', () => {
    const { container } = render(
      <Select error aria-label="Language"><option>A</option></Select>,
    )
    const wrapper = container.firstElementChild!
    expect(wrapper.className).toContain('cd-select--error')
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('does not apply error class or aria-invalid when error is falsy', () => {
    const { container } = render(
      <Select aria-label="Language"><option>A</option></Select>,
    )
    const wrapper = container.firstElementChild!
    expect(wrapper.className).not.toContain('cd-select--error')
    expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-invalid')
  })

  // ── Disabled ───────────────────────────────────────────────

  it('applies disabled class and disables the select element', () => {
    const { container } = render(
      <Select disabled aria-label="Language"><option>A</option></Select>,
    )
    const wrapper = container.firstElementChild!
    expect(wrapper.className).toContain('cd-select--disabled')
    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  // ── Ref forwarding ─────────────────────────────────────────

  it('forwards ref to the select element', () => {
    const ref = createRef<HTMLSelectElement>()
    render(
      <Select ref={ref} aria-label="Language"><option>A</option></Select>,
    )
    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
    expect(ref.current?.className).toBe('cd-select__field')
  })

  // ── Chevron icon ───────────────────────────────────────────

  it('renders chevron icon span', () => {
    const { container } = render(
      <Select aria-label="Language"><option>A</option></Select>,
    )
    const chevron = container.querySelector('.cd-select__chevron')
    expect(chevron).toBeInTheDocument()
    expect(chevron).toHaveAttribute('aria-hidden', 'true')
    expect(chevron?.querySelector('svg')).toBeInTheDocument()
  })

  // ── className passthrough ──────────────────────────────────

  it('appends custom className to wrapper', () => {
    const { container } = render(
      <Select className="my-custom" aria-label="Language"><option>A</option></Select>,
    )
    const wrapper = container.firstElementChild!
    expect(wrapper.className).toContain('cd-select')
    expect(wrapper.className).toContain('my-custom')
  })
})
