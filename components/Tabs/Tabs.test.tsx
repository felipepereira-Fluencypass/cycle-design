import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'

describe('Tabs', () => {
  const renderTabs = (variant?: 'underline' | 'filled' | 'outline') => {
    render(
      <Tabs defaultValue="tab1" variant={variant}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>,
    )
  }

  it('renders tabs with default content', () => {
    renderTabs()
    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Tab 2')).toBeInTheDocument()
    expect(screen.getByText('Content 1')).toBeInTheDocument()
  })

  it('switches content when clicking a tab', async () => {
    const user = userEvent.setup()
    renderTabs()
    await user.click(screen.getByText('Tab 2'))
    expect(screen.getByText('Content 2')).toBeInTheDocument()
  })

  it('applies default variant (underline)', () => {
    renderTabs()
    const tabs = screen.getByText('Tab 1').closest('.cd-tabs')
    expect(tabs?.className).toContain('cd-tabs--underline')
  })

  it.each(['underline', 'filled', 'outline'] as const)('applies variant: %s', (variant) => {
    renderTabs(variant)
    const tabs = screen.getByText('Tab 1').closest('.cd-tabs')
    expect(tabs?.className).toContain(`cd-tabs--${variant}`)
  })

  it('applies correct classes to list and trigger', () => {
    renderTabs()
    expect(screen.getByRole('tablist').className).toContain('cd-tabs-list')
    expect(screen.getByText('Tab 1').className).toContain('cd-tabs-trigger')
  })

  it('applies correct class to content', () => {
    renderTabs()
    expect(screen.getByText('Content 1').className).toContain('cd-tabs-content')
  })
})
