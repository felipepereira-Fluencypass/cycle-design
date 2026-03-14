import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Table } from './Table'

describe('Table', () => {
  it('renders a semantic table', () => {
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Felipe</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    )
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Felipe')).toBeInTheDocument()
  })

  it('applies cd-table class', () => {
    render(<Table data-testid="table"><Table.Body><Table.Row><Table.Cell>T</Table.Cell></Table.Row></Table.Body></Table>)
    expect(screen.getByTestId('table').className).toContain('cd-table')
  })

  it('wraps table in overflow wrapper', () => {
    const { container } = render(<Table><Table.Body><Table.Row><Table.Cell>T</Table.Cell></Table.Row></Table.Body></Table>)
    expect(container.querySelector('.cd-table-wrapper')).toBeInTheDocument()
  })

  it('renders header with correct class', () => {
    render(
      <Table>
        <Table.Header data-testid="header">
          <Table.Row><Table.Head>H</Table.Head></Table.Row>
        </Table.Header>
        <Table.Body><Table.Row><Table.Cell>C</Table.Cell></Table.Row></Table.Body>
      </Table>,
    )
    expect(screen.getByTestId('header').className).toContain('cd-table-header')
  })

  it('renders row with correct class', () => {
    render(
      <Table><Table.Body><Table.Row data-testid="row"><Table.Cell>C</Table.Cell></Table.Row></Table.Body></Table>,
    )
    expect(screen.getByTestId('row').className).toContain('cd-table-row')
  })

  it('renders caption', () => {
    render(
      <Table>
        <Table.Caption>Test caption</Table.Caption>
        <Table.Body><Table.Row><Table.Cell>C</Table.Cell></Table.Row></Table.Body>
      </Table>,
    )
    expect(screen.getByText('Test caption')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = createRef<HTMLTableElement>()
    render(<Table ref={ref}><Table.Body><Table.Row><Table.Cell>T</Table.Cell></Table.Row></Table.Body></Table>)
    expect(ref.current).toBeInstanceOf(HTMLTableElement)
  })

  it('renders footer', () => {
    render(
      <Table>
        <Table.Body><Table.Row><Table.Cell>C</Table.Cell></Table.Row></Table.Body>
        <Table.Footer data-testid="footer"><Table.Row><Table.Cell>Total</Table.Cell></Table.Row></Table.Footer>
      </Table>,
    )
    expect(screen.getByTestId('footer').className).toContain('cd-table-footer')
  })
})
