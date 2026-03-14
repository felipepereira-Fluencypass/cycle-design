import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Popover, PopoverTrigger, PopoverContent } from './Popover'

describe('Popover', () => {
  it('renders trigger', () => {
    render(
      <Popover>
        <PopoverTrigger>Click me</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>,
    )
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('opens popover on click', async () => {
    const user = userEvent.setup()
    render(
      <Popover>
        <PopoverTrigger>Click me</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>,
    )
    await user.click(screen.getByText('Click me'))
    expect(screen.getByText('Popover content')).toBeInTheDocument()
  })

  it('applies cd-popover-content class', async () => {
    const user = userEvent.setup()
    render(
      <Popover>
        <PopoverTrigger>Click me</PopoverTrigger>
        <PopoverContent data-testid="pop">Content</PopoverContent>
      </Popover>,
    )
    await user.click(screen.getByText('Click me'))
    expect(screen.getByTestId('pop').className).toContain('cd-popover-content')
  })
})
