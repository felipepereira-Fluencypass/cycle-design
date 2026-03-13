import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioGroup, Radio } from './RadioGroup'

describe('RadioGroup', () => {
  it('renders a container with role="radiogroup"', () => {
    render(
      <RadioGroup name="fruit" value="apple" onChange={() => {}}>
        <Radio value="apple" label="Apple" />
      </RadioGroup>,
    )

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })

  it('renders radio inputs with the correct name attribute', () => {
    render(
      <RadioGroup name="fruit" value="apple" onChange={() => {}}>
        <Radio value="apple" label="Apple" />
        <Radio value="banana" label="Banana" />
      </RadioGroup>,
    )

    const radios = screen.getAllByRole('radio')
    expect(radios).toHaveLength(2)
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute('name', 'fruit')
    })
  })

  it('checks the radio matching the value prop', () => {
    render(
      <RadioGroup name="fruit" value="banana" onChange={() => {}}>
        <Radio value="apple" label="Apple" />
        <Radio value="banana" label="Banana" />
      </RadioGroup>,
    )

    expect(screen.getByRole('radio', { name: 'Apple' })).not.toBeChecked()
    expect(screen.getByRole('radio', { name: 'Banana' })).toBeChecked()
  })

  it('calls onChange with the value when clicking a radio', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(
      <RadioGroup name="fruit" value="apple" onChange={handleChange}>
        <Radio value="apple" label="Apple" />
        <Radio value="banana" label="Banana" />
      </RadioGroup>,
    )

    await user.click(screen.getByRole('radio', { name: 'Banana' }))
    expect(handleChange).toHaveBeenCalledWith('banana')
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it.each(['md', 'sm'] as const)('applies size class cd-radio--%s from group context', (size) => {
    render(
      <RadioGroup name="fruit" value="apple" size={size} onChange={() => {}}>
        <Radio value="apple" label="Apple" />
      </RadioGroup>,
    )

    const label = screen.getByText('Apple').closest('label')!
    expect(label).toHaveClass(`cd-radio--${size}`)
  })

  it.each(['brand', 'class', 'private', 'group', 'impulse'] as const)(
    'applies correct CSS vars for color=%s on the Radio label',
    (color) => {
      render(
        <RadioGroup name="fruit" value="apple" color={color} onChange={() => {}}>
          <Radio value="apple" label="Apple" />
        </RadioGroup>,
      )

      const label = screen.getByText('Apple').closest('label')!
      expect(label.style.getPropertyValue('--_radio-solid')).toBe(`var(--bg-${color}-solid)`)
      expect(label.style.getPropertyValue('--_radio-solid-hover')).toBe(
        `var(--bg-${color}-solid_hover)`,
      )
      expect(label.style.getPropertyValue('--_radio-border')).toBe(`var(--border-${color})`)
    },
  )

  it('disables all radios when the group is disabled', () => {
    render(
      <RadioGroup name="fruit" value="apple" disabled onChange={() => {}}>
        <Radio value="apple" label="Apple" />
        <Radio value="banana" label="Banana" />
      </RadioGroup>,
    )

    screen.getAllByRole('radio').forEach((radio) => {
      expect(radio).toBeDisabled()
    })
  })

  it('allows an individual radio to be disabled', () => {
    render(
      <RadioGroup name="fruit" value="apple" onChange={() => {}}>
        <Radio value="apple" label="Apple" />
        <Radio value="banana" label="Banana" disabled />
      </RadioGroup>,
    )

    expect(screen.getByRole('radio', { name: 'Apple' })).toBeEnabled()
    expect(screen.getByRole('radio', { name: 'Banana' })).toBeDisabled()
  })

  it('renders label text', () => {
    render(
      <RadioGroup name="fruit" value="apple" onChange={() => {}}>
        <Radio value="apple" label="Apple" />
      </RadioGroup>,
    )

    expect(screen.getByText('Apple')).toBeInTheDocument()
  })

  it('throws an error when Radio is used outside RadioGroup', () => {
    // Suppress React error boundary / console.error noise
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => render(<Radio value="orphan" label="Orphan" />)).toThrow(
      'Radio must be used inside RadioGroup',
    )

    spy.mockRestore()
  })
})
