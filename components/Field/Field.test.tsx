import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Field } from './Field'
import { Input } from '../Input'

describe('Field', () => {
  it('renders label text', () => {
    render(
      <Field label="Email">
        <Input />
      </Field>,
    )
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('connects label to input via htmlFor/id', () => {
    render(
      <Field label="Email">
        <Input />
      </Field>,
    )
    const label = screen.getByText('Email')
    const input = screen.getByRole('textbox')
    expect(label).toHaveAttribute('for', input.id)
  })

  it('renders hint message', () => {
    render(
      <Field label="Email" hint="Usaremos para login">
        <Input />
      </Field>,
    )
    expect(screen.getByText('Usaremos para login')).toBeInTheDocument()
  })

  it('renders error message (replaces hint)', () => {
    render(
      <Field label="Email" hint="Dica" error="Campo obrigatorio">
        <Input />
      </Field>,
    )
    expect(screen.getByText('Campo obrigatorio')).toBeInTheDocument()
    expect(screen.queryByText('Dica')).not.toBeInTheDocument()
  })

  it('error message has role="alert"', () => {
    render(
      <Field label="Email" error="Invalido">
        <Input />
      </Field>,
    )
    expect(screen.getByRole('alert')).toHaveTextContent('Invalido')
  })

  it('renders required asterisk', () => {
    render(
      <Field label="Email" required>
        <Input />
      </Field>,
    )
    expect(screen.getByText('*')).toBeInTheDocument()
    expect(screen.getByText('(obrigatorio)')).toBeInTheDocument()
  })

  it('passes disabled to child input', () => {
    render(
      <Field label="Email" disabled>
        <Input />
      </Field>,
    )
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('passes error to child input (aria-invalid)', () => {
    render(
      <Field label="Email" error="Erro">
        <Input />
      </Field>,
    )
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('connects message to input via aria-describedby', () => {
    render(
      <Field label="Email" hint="Dica util">
        <Input />
      </Field>,
    )
    const input = screen.getByRole('textbox')
    const message = screen.getByText('Dica util')
    expect(input).toHaveAttribute('aria-describedby', message.id)
  })
})
