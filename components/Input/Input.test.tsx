import { createRef } from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'

function StubIcon(props: Record<string, unknown>) {
  return <svg data-testid="stub-icon" {...props} />
}

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input placeholder="Digite aqui" />)
    expect(screen.getByPlaceholderText('Digite aqui')).toBeInTheDocument()
  })

  it.each(['lg', 'md', 'sm'] as const)('applies size class cd-input--%s', (size) => {
    const { container } = render(<Input size={size} />)
    const wrapper = container.firstElementChild!
    expect(wrapper).toHaveClass('cd-input', `cd-input--${size}`)
  })

  it('defaults to md size', () => {
    const { container } = render(<Input />)
    const wrapper = container.firstElementChild!
    expect(wrapper).toHaveClass('cd-input--md')
  })

  it('applies error class and aria-invalid', () => {
    const { container } = render(<Input error placeholder="err" />)
    const wrapper = container.firstElementChild!
    expect(wrapper).toHaveClass('cd-input--error')
    expect(screen.getByPlaceholderText('err')).toHaveAttribute('aria-invalid', 'true')
  })

  it('renders iconLeft', () => {
    const { container } = render(<Input iconLeft={<StubIcon />} />)
    const wrapper = container.firstElementChild!
    expect(wrapper).toHaveClass('cd-input--has-icon-left')
    expect(wrapper.querySelector('.cd-input__icon--left')).toBeInTheDocument()
  })

  it('renders iconRight', () => {
    const { container } = render(<Input iconRight={<StubIcon />} />)
    const wrapper = container.firstElementChild!
    expect(wrapper).toHaveClass('cd-input--has-icon-right')
    expect(wrapper.querySelector('.cd-input__icon--right')).toBeInTheDocument()
  })

  it('applies disabled class and disables the input', () => {
    const { container } = render(<Input disabled placeholder="off" />)
    const wrapper = container.firstElementChild!
    expect(wrapper).toHaveClass('cd-input--disabled')
    expect(screen.getByPlaceholderText('off')).toBeDisabled()
  })

  it('forwards ref to input element', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Input ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    expect(ref.current).toHaveClass('cd-input__field')
  })

  it('generates an auto id when none is provided', () => {
    render(<Input placeholder="auto" />)
    const input = screen.getByPlaceholderText('auto')
    expect(input.id).toBeTruthy()
  })

  it('accepts a custom id', () => {
    render(<Input id="my-input" placeholder="custom" />)
    expect(screen.getByPlaceholderText('custom')).toHaveAttribute('id', 'my-input')
  })
})
