import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { Slot } from './Slot'

describe('Slot', () => {
  // ── Rendering ──────────────────────────────────────────────

  it('renders the child element instead of a wrapper', () => {
    render(
      <Slot data-testid="slot">
        <a href="/page">Link</a>
      </Slot>,
    )
    const el = screen.getByText('Link')
    expect(el.tagName).toBe('A')
    expect(el).toHaveAttribute('href', '/page')
  })

  it('returns null and warns when child is not a valid element', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const { container } = render(<Slot>plain text</Slot>)
    expect(container.innerHTML).toBe('')
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('asChild requires a single valid React element'),
    )
    warn.mockRestore()
  })

  // ── className merging ──────────────────────────────────────

  it('merges className from Slot and child', () => {
    render(
      <Slot className="from-slot">
        <div className="from-child" data-testid="target">Content</div>
      </Slot>,
    )
    const el = screen.getByTestId('target')
    expect(el.className).toContain('from-slot')
    expect(el.className).toContain('from-child')
  })

  it('works when only Slot has className', () => {
    render(
      <Slot className="from-slot">
        <div data-testid="target">Content</div>
      </Slot>,
    )
    expect(screen.getByTestId('target').className).toContain('from-slot')
  })

  it('works when only child has className', () => {
    render(
      <Slot>
        <div className="from-child" data-testid="target">Content</div>
      </Slot>,
    )
    expect(screen.getByTestId('target').className).toContain('from-child')
  })

  // ── Style merging ──────────────────────────────────────────

  it('merges style from Slot and child', () => {
    render(
      <Slot style={{ color: 'red' }}>
        <div style={{ background: 'blue' }} data-testid="target">Content</div>
      </Slot>,
    )
    const el = screen.getByTestId('target')
    expect(el.style.color).toBe('red')
    expect(el.style.background).toBe('blue')
  })

  it('child style overrides Slot style on conflict', () => {
    render(
      <Slot style={{ color: 'red' }}>
        <div style={{ color: 'blue' }} data-testid="target">Content</div>
      </Slot>,
    )
    expect(screen.getByTestId('target').style.color).toBe('blue')
  })

  // ── Ref forwarding ─────────────────────────────────────────

  it('forwards ref to the child element', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(
      <Slot ref={ref}>
        <a href="/test">Link</a>
      </Slot>,
    )
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement)
    expect(ref.current?.href).toContain('/test')
  })

  // ── Event handling ─────────────────────────────────────────

  it('merges onClick from Slot and child', async () => {
    const user = userEvent.setup()
    const slotClick = vi.fn()
    const childClick = vi.fn()
    render(
      <Slot onClick={slotClick}>
        <button onClick={childClick}>Click</button>
      </Slot>,
    )
    await user.click(screen.getByRole('button'))
    expect(childClick).toHaveBeenCalledTimes(1)
  })

  // ── Props passthrough ──────────────────────────────────────

  it('passes Slot props to the child', () => {
    render(
      <Slot aria-label="test label" role="button">
        <div data-testid="target">Content</div>
      </Slot>,
    )
    const el = screen.getByTestId('target')
    expect(el).toHaveAttribute('aria-label', 'test label')
    expect(el).toHaveAttribute('role', 'button')
  })

  it('child props take precedence over Slot props', () => {
    render(
      <Slot role="button">
        <div role="link" data-testid="target">Content</div>
      </Slot>,
    )
    expect(screen.getByTestId('target')).toHaveAttribute('role', 'link')
  })
})
