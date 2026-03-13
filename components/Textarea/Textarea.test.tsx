import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { Textarea } from './Textarea'

describe('Textarea', () => {
  // ── Rendering ──────────────────────────────────────────────

  it('renders a textarea element', () => {
    render(<Textarea aria-label="Message" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('textbox').tagName).toBe('TEXTAREA')
  })

  it('applies base cd-textarea class', () => {
    render(<Textarea aria-label="Message" />)
    expect(screen.getByRole('textbox').className).toContain('cd-textarea')
  })

  // ── Sizes ──────────────────────────────────────────────────

  it('applies default size class (md)', () => {
    render(<Textarea aria-label="Message" />)
    expect(screen.getByRole('textbox').className).toContain('cd-textarea--md')
  })

  it.each(['lg', 'md', 'sm'] as const)('applies size class: %s', (size) => {
    render(<Textarea size={size} aria-label="Message" />)
    expect(screen.getByRole('textbox').className).toContain(`cd-textarea--${size}`)
  })

  // ── Error ──────────────────────────────────────────────────

  it('applies error class and aria-invalid when error is true', () => {
    render(<Textarea error aria-label="Message" />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.className).toContain('cd-textarea--error')
    expect(textarea).toHaveAttribute('aria-invalid', 'true')
  })

  it('does not apply error class or aria-invalid when error is falsy', () => {
    render(<Textarea aria-label="Message" />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.className).not.toContain('cd-textarea--error')
    expect(textarea).not.toHaveAttribute('aria-invalid')
  })

  // ── Disabled ───────────────────────────────────────────────

  it('applies disabled class and disables the textarea', () => {
    render(<Textarea disabled aria-label="Message" />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.className).toContain('cd-textarea--disabled')
    expect(textarea).toBeDisabled()
  })

  it('does not apply disabled class when not disabled', () => {
    render(<Textarea aria-label="Message" />)
    expect(screen.getByRole('textbox').className).not.toContain('cd-textarea--disabled')
  })

  // ── onChange ────────────────────────────────────────────────

  it('calls onChange when user types', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Textarea onChange={handleChange} aria-label="Message" />)
    await user.type(screen.getByRole('textbox'), 'hello')
    expect(handleChange).toHaveBeenCalledTimes(5)
  })

  // ── Ref forwarding ─────────────────────────────────────────

  it('forwards ref to the textarea element', () => {
    const ref = createRef<HTMLTextAreaElement>()
    render(<Textarea ref={ref} aria-label="Message" />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })

  // ── Auto id ────────────────────────────────────────────────

  it('generates an auto id when none is provided', () => {
    render(<Textarea aria-label="Message" />)
    expect(screen.getByRole('textbox').id).toBeTruthy()
  })

  it('uses provided id over auto-generated one', () => {
    render(<Textarea id="custom-id" aria-label="Message" />)
    expect(screen.getByRole('textbox').id).toBe('custom-id')
  })

  // ── className passthrough ──────────────────────────────────

  it('appends custom className', () => {
    render(<Textarea className="my-custom" aria-label="Message" />)
    const textarea = screen.getByRole('textbox')
    expect(textarea.className).toContain('cd-textarea')
    expect(textarea.className).toContain('my-custom')
  })
})
