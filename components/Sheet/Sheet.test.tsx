import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './Sheet'

describe('Sheet', () => {
  it('renders trigger', () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetTitle>Title</SheetTitle>
        </SheetContent>
      </Sheet>,
    )
    expect(screen.getByText('Open')).toBeInTheDocument()
  })

  it('opens sheet when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetContent>
      </Sheet>,
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByText('Sheet Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('applies side class (default right)', async () => {
    const user = userEvent.setup()
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent data-testid="sheet">
          <SheetTitle>Title</SheetTitle>
        </SheetContent>
      </Sheet>,
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByTestId('sheet').className).toContain('cd-sheet-content--right')
  })

  it.each(['left', 'right', 'top', 'bottom'] as const)('applies side: %s', async (side) => {
    const user = userEvent.setup()
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side={side} data-testid="sheet">
          <SheetTitle>Title</SheetTitle>
        </SheetContent>
      </Sheet>,
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByTestId('sheet').className).toContain(`cd-sheet-content--${side}`)
  })

  it('renders header and footer', async () => {
    const user = userEvent.setup()
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader><SheetTitle>Header</SheetTitle></SheetHeader>
          <SheetFooter><button>Save</button></SheetFooter>
        </SheetContent>
      </Sheet>,
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Save')).toBeInTheDocument()
  })

  it('includes close button with aria-label', async () => {
    const user = userEvent.setup()
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetTitle>Title</SheetTitle>
        </SheetContent>
      </Sheet>,
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByRole('button', { name: 'Fechar' })).toBeInTheDocument()
  })
})
