import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { Button } from './Button'

// Stub icon component for testing
function StubIcon(props: Record<string, unknown>) {
  return <svg data-testid="stub-icon" {...props} />
}

describe('Button', () => {
  // ── Rendering ──────────────────────────────────────────────

  it('renders with text content', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('renders as a <button> element', () => {
    render(<Button>Test</Button>)
    expect(screen.getByRole('button').tagName).toBe('BUTTON')
  })

  // ── Defaults ───────────────────────────────────────────────

  it('applies default variant (filled), size (md), and color (brand)', () => {
    render(<Button>Default</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('cd-btn')
    expect(btn.className).toContain('cd-btn--filled')
    expect(btn.className).toContain('cd-btn--md')
    expect(btn.style.getPropertyValue('--_btn-solid')).toBe('var(--bg-brand-solid)')
  })

  // ── Variants ───────────────────────────────────────────────

  it.each(['filled', 'outline', 'ghost'] as const)('applies variant class: %s', (variant) => {
    render(<Button variant={variant}>Test</Button>)
    expect(screen.getByRole('button').className).toContain(`cd-btn--${variant}`)
  })

  // ── Sizes ──────────────────────────────────────────────────

  it.each(['giant', 'lg', 'md', 'sm', 'tiny'] as const)('applies size class: %s', (size) => {
    render(<Button size={size}>Test</Button>)
    expect(screen.getByRole('button').className).toContain(`cd-btn--${size}`)
  })

  // ── Colors ─────────────────────────────────────────────────

  it.each(['brand', 'class', 'private', 'group', 'impulse'] as const)(
    'applies color tokens via CSS variables: %s',
    (color) => {
      render(<Button color={color}>Test</Button>)
      const btn = screen.getByRole('button')
      expect(btn.style.getPropertyValue('--_btn-solid')).toBe(`var(--bg-${color}-solid)`)
      expect(btn.style.getPropertyValue('--_btn-border')).toBe(`var(--border-${color})`)
      expect(btn.style.getPropertyValue('--_btn-text-colored')).toBe(`var(--text-${color}-primary)`)
    },
  )

  // ── Icons ──────────────────────────────────────────────────

  it('renders icon-only button with aria-label', () => {
    render(<Button iconOnly icon={<StubIcon />} aria-label="Close" />)
    const btn = screen.getByRole('button', { name: 'Close' })
    expect(btn.className).toContain('cd-btn--icon-only')
    expect(btn.querySelector('svg')).toBeInTheDocument()
  })

  it('renders iconLeft before children', () => {
    const { container } = render(
      <Button iconLeft={<StubIcon />}>Label</Button>,
    )
    const btn = container.querySelector('button')!
    const svg = btn.querySelector('svg')!
    // SVG should come before text
    expect(btn.firstElementChild).toBe(svg)
  })

  it('renders iconRight after children', () => {
    const { container } = render(
      <Button iconRight={<StubIcon />}>Label</Button>,
    )
    const btn = container.querySelector('button')!
    expect(btn.lastElementChild?.tagName.toLowerCase()).toBe('svg')
  })

  it('renders both iconLeft and iconRight', () => {
    const { container } = render(
      <Button
        iconLeft={<StubIcon data-testid="left" />}
        iconRight={<StubIcon data-testid="right" />}
      >
        Label
      </Button>,
    )
    const svgs = container.querySelectorAll('svg')
    expect(svgs).toHaveLength(2)
  })

  it('passes size and decorative props to cloned icons', () => {
    // cloneElement passes size/decorative as React props, not HTML attributes.
    // We verify via a spy icon that captures received props.
    let receivedProps: Record<string, unknown> = {}
    function SpyIcon(props: Record<string, unknown>) {
      receivedProps = props
      return <svg data-testid="spy-icon" />
    }

    render(
      <Button size="lg" iconLeft={<SpyIcon />}>
        Test
      </Button>,
    )
    expect(receivedProps.size).toBe('sm') // lg maps to icon size 'sm'
    expect(receivedProps.decorative).toBe(true)
  })

  it('maps button size to correct icon size', () => {
    const sizeMap = { giant: 'sm', lg: 'sm', md: 'xs', sm: 'xs', tiny: 'xs' } as const

    for (const [btnSize, iconSize] of Object.entries(sizeMap)) {
      let receivedSize: unknown
      function SpyIcon(props: Record<string, unknown>) {
        receivedSize = props.size
        return <svg data-testid="spy-icon" />
      }

      const { unmount } = render(
        <Button size={btnSize as keyof typeof sizeMap} iconLeft={<SpyIcon />}>
          Test
        </Button>,
      )
      expect(receivedSize).toBe(iconSize)
      unmount()
    }
  })

  // ── Disabled ───────────────────────────────────────────────

  it('sets disabled and aria-disabled when disabled', () => {
    render(<Button disabled>Disabled</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
    expect(btn).toHaveAttribute('aria-disabled', 'true')
  })

  it('does not set aria-disabled when not disabled', () => {
    render(<Button>Enabled</Button>)
    expect(screen.getByRole('button')).not.toHaveAttribute('aria-disabled')
  })

  // ── className & style ──────────────────────────────────────

  it('appends custom className', () => {
    render(<Button className="my-custom">Test</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('cd-btn')
    expect(btn.className).toContain('my-custom')
  })

  it('merges custom style with color variables', () => {
    render(<Button style={{ marginTop: '10px' }}>Test</Button>)
    const btn = screen.getByRole('button')
    expect(btn.style.marginTop).toBe('10px')
    // Color variables should still be present
    expect(btn.style.getPropertyValue('--_btn-solid')).toBeTruthy()
  })

  // ── Ref forwarding ─────────────────────────────────────────

  it('forwards ref to the button element', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Ref test</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    expect(ref.current?.textContent).toBe('Ref test')
  })

  // ── Event handling ─────────────────────────────────────────

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>Click</Button>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  // ── HTML attributes passthrough ────────────────────────────

  it('passes through native button attributes', () => {
    render(<Button type="submit" data-testid="my-btn">Submit</Button>)
    const btn = screen.getByTestId('my-btn')
    expect(btn).toHaveAttribute('type', 'submit')
  })
})
