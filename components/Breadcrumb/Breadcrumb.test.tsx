import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Breadcrumb } from './Breadcrumb'

describe('Breadcrumb', () => {
  it('renders as nav with aria-label', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item current>Page</Breadcrumb.Item>
      </Breadcrumb>,
    )
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument()
  })

  it('renders items', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/cursos">Cursos</Breadcrumb.Item>
        <Breadcrumb.Item current>Ingles</Breadcrumb.Item>
      </Breadcrumb>,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Cursos')).toBeInTheDocument()
    expect(screen.getByText('Ingles')).toBeInTheDocument()
  })

  it('renders links for non-current items', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item current>Page</Breadcrumb.Item>
      </Breadcrumb>,
    )
    expect(screen.getByText('Home').tagName).toBe('A')
    expect(screen.getByText('Home')).toHaveAttribute('href', '/')
  })

  it('renders span for current item', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item current>Page</Breadcrumb.Item>
      </Breadcrumb>,
    )
    const current = screen.getByText('Page')
    expect(current.tagName).toBe('SPAN')
    expect(current).toHaveAttribute('aria-current', 'page')
  })

  it('renders default separator /', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item current>Page</Breadcrumb.Item>
      </Breadcrumb>,
    )
    const separators = container.querySelectorAll('.cd-breadcrumb__separator')
    expect(separators.length).toBe(1)
    expect(separators[0].textContent).toBe('/')
  })

  it('renders custom separator', () => {
    const { container } = render(
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item current>Page</Breadcrumb.Item>
      </Breadcrumb>,
    )
    expect(container.querySelector('.cd-breadcrumb__separator')?.textContent).toBe('>')
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLElement>()
    render(
      <Breadcrumb ref={ref}>
        <Breadcrumb.Item current>Page</Breadcrumb.Item>
      </Breadcrumb>,
    )
    expect(ref.current?.tagName).toBe('NAV')
  })
})
