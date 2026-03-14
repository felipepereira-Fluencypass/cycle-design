import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './Tooltip'

describe('Tooltip', () => {
  it('renders trigger', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )
    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('shows tooltip when open', () => {
    render(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )
    expect(screen.getAllByText('Tooltip text').length).toBeGreaterThan(0)
  })

  it('applies cd-tooltip-content class', () => {
    render(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent data-testid="tip">Content</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )
    expect(screen.getByTestId('tip').className).toContain('cd-tooltip-content')
  })

  it('does not show tooltip when closed', () => {
    render(
      <TooltipProvider>
        <Tooltip open={false}>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Hidden text</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )
    expect(screen.queryByText('Hidden text')).not.toBeInTheDocument()
  })
})
