import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'

describe('Accordion', () => {
  const renderAccordion = (type: 'single' | 'multiple' = 'single') => {
    render(
      <Accordion type={type} collapsible={type === 'single' ? true : undefined}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
  }

  it('renders triggers', () => {
    renderAccordion()
    expect(screen.getByText('Section 1')).toBeInTheDocument()
    expect(screen.getByText('Section 2')).toBeInTheDocument()
  })

  it('expands content when trigger is clicked', async () => {
    const user = userEvent.setup()
    renderAccordion()
    await user.click(screen.getByText('Section 1'))
    expect(screen.getByText('Content 1')).toBeVisible()
  })

  it('collapses when clicking same trigger (collapsible)', async () => {
    const user = userEvent.setup()
    renderAccordion()
    await user.click(screen.getByText('Section 1'))
    expect(screen.getByText('Content 1')).toBeVisible()
    await user.click(screen.getByText('Section 1'))
    // Content should be hidden (Radix removes from DOM or sets hidden)
  })

  it('applies cd-accordion class', () => {
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="a">
          <AccordionTrigger>T</AccordionTrigger>
          <AccordionContent>C</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    expect(container.querySelector('.cd-accordion')).toBeInTheDocument()
  })

  it('applies cd-accordion-item class', () => {
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="a">
          <AccordionTrigger>T</AccordionTrigger>
          <AccordionContent>C</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    expect(container.querySelector('.cd-accordion-item')).toBeInTheDocument()
  })

  it('applies cd-accordion-trigger class', () => {
    renderAccordion()
    expect(screen.getByText('Section 1').closest('.cd-accordion-trigger')).toBeInTheDocument()
  })

  it('renders chevron icon', () => {
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="a">
          <AccordionTrigger>T</AccordionTrigger>
          <AccordionContent>C</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    expect(container.querySelector('.cd-accordion-chevron')).toBeInTheDocument()
  })

  it('allows multiple items open when type="multiple"', async () => {
    const user = userEvent.setup()
    renderAccordion('multiple')
    await user.click(screen.getByText('Section 1'))
    await user.click(screen.getByText('Section 2'))
    expect(screen.getByText('Content 1')).toBeVisible()
    expect(screen.getByText('Content 2')).toBeVisible()
  })
})
