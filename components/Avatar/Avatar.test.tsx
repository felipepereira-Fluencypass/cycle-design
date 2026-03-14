import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { createRef } from 'react'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders with fallback text', () => {
    render(<Avatar fallback="MF" />)
    expect(screen.getByText('MF')).toBeInTheDocument()
  })

  it('applies default size (md)', () => {
    render(<Avatar data-testid="avatar" />)
    const el = screen.getByTestId('avatar')
    expect(el.className).toContain('cd-avatar--md')
  })

  it.each(['xl', 'lg', 'md', 'sm', 'xs'] as const)('applies size: %s', (size) => {
    render(<Avatar size={size} data-testid="avatar" />)
    expect(screen.getByTestId('avatar').className).toContain(`cd-avatar--${size}`)
  })

  it('renders image when src is provided', () => {
    render(<Avatar src="/photo.jpg" alt="User" />)
    const img = screen.getByRole('img', { name: 'User' })
    expect(img).toBeInTheDocument()
    expect(img.querySelector('img')).toHaveAttribute('src', '/photo.jpg')
  })

  it('shows fallback when image fails to load', () => {
    render(<Avatar src="/bad.jpg" fallback="AB" />)
    const img = screen.getByRole('img').querySelector('img')!
    fireEvent.error(img)
    expect(screen.getByText('AB')).toBeInTheDocument()
  })

  it('truncates fallback to 2 characters', () => {
    render(<Avatar fallback="ABCDE" />)
    expect(screen.getByText('AB')).toBeInTheDocument()
  })

  it('uppercases fallback', () => {
    render(<Avatar fallback="mf" />)
    expect(screen.getByText('MF')).toBeInTheDocument()
  })

  it('renders status indicator', () => {
    render(<Avatar status="online" data-testid="avatar" />)
    const status = screen.getByTestId('avatar').querySelector('.cd-avatar__status--online')
    expect(status).toBeInTheDocument()
  })

  it.each(['online', 'offline', 'busy'] as const)('renders status: %s', (status) => {
    render(<Avatar status={status} data-testid="avatar" />)
    expect(screen.getByTestId('avatar').querySelector(`.cd-avatar__status--${status}`)).toBeInTheDocument()
  })

  it('uses aria-label from alt prop', () => {
    render(<Avatar alt="Maria Fernanda" />)
    expect(screen.getByRole('img', { name: 'Maria Fernanda' })).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLSpanElement>()
    render(<Avatar ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })
})
