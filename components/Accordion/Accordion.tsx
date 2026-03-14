import { forwardRef } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'

/* ── Root ──────────────────────────────────────────────────────── */

export type AccordionSingleProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  type: 'single'
}

export type AccordionMultipleProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  type: 'multiple'
}

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps

export const Accordion = forwardRef<
  ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(function Accordion({ className, ...rest }, ref) {
  return (
    <AccordionPrimitive.Root
      ref={ref}
      className={`cd-accordion ${className ?? ''}`.trim()}
      {...(rest as ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>)}
    />
  )
})

/* ── Item ──────────────────────────────────────────────────────── */

export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(function AccordionItem({ className, ...rest }, ref) {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={`cd-accordion-item ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Trigger ───────────────────────────────────────────────────── */

export const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(function AccordionTrigger({ className, children, ...rest }, ref) {
  return (
    <AccordionPrimitive.Header className="cd-accordion-header">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={`cd-accordion-trigger ${className ?? ''}`.trim()}
        {...rest}
      >
        {children}
        <svg
          className="cd-accordion-chevron"
          viewBox="0 0 16 16"
          fill="none"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

/* ── Content ───────────────────────────────────────────────────── */

export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(function AccordionContent({ className, children, ...rest }, ref) {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={`cd-accordion-content ${className ?? ''}`.trim()}
      {...rest}
    >
      <div className="cd-accordion-content__inner">
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
})
