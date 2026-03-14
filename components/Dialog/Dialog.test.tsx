import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './Dialog'

describe('Dialog', () => {
  it('renders trigger button', () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>,
    )
    expect(screen.getByText('Open')).toBeInTheDocument()
  })

  it('opens dialog when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Test Dialog</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogContent>
      </Dialog>,
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByText('Test Dialog')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('applies size class to content', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent size="lg" data-testid="content">
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>,
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByTestId('content').className).toContain('cd-dialog-content--lg')
  })

  it('renders header and footer', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader><DialogTitle>Header Title</DialogTitle></DialogHeader>
          <DialogFooter><button>Save</button></DialogFooter>
        </DialogContent>
      </Dialog>,
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByText('Header Title')).toBeInTheDocument()
    expect(screen.getByText('Save')).toBeInTheDocument()
  })

  it('closes when close button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <DialogClose>Close</DialogClose>
        </DialogContent>
      </Dialog>,
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByText('Title')).toBeInTheDocument()
    await user.click(screen.getByText('Close'))
    expect(screen.queryByText('Title')).not.toBeInTheDocument()
  })
})
