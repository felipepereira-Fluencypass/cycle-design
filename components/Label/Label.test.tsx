import { createRef } from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Label } from './Label'

describe('Label', () => {
  it('renders text content', () => {
    render(<Label>Email</Label>)
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('renders required asterisk and sr-only text', () => {
    render(<Label required>Nome</Label>)

    const asterisk = screen.getByText('*')
    expect(asterisk).toHaveAttribute('aria-hidden', 'true')
    expect(asterisk).toHaveClass('cd-label__required')

    expect(screen.getByText('(obrigatorio)')).toHaveClass('sr-only')
  })

  it('applies disabled class', () => {
    render(<Label disabled>Campo</Label>)
    expect(screen.getByText('Campo')).toHaveClass('cd-label', 'cd-label--disabled')
  })

  it('forwards htmlFor attribute', () => {
    render(<Label htmlFor="email-field">Email</Label>)
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email-field')
  })

  it('accepts custom className', () => {
    render(<Label className="my-custom">Label</Label>)
    expect(screen.getByText('Label')).toHaveClass('cd-label', 'my-custom')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLLabelElement>()
    render(<Label ref={ref}>Ref test</Label>)
    expect(ref.current).toBeInstanceOf(HTMLLabelElement)
  })
})
