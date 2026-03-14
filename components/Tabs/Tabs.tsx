import { forwardRef } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'

export type TabsVariant = 'underline' | 'filled' | 'outline'

/* ── Root ──────────────────────────────────────────────────────── */

export interface TabsProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  /** Estilo visual das tabs. @default 'underline' */
  variant?: TabsVariant
}

export const Tabs = forwardRef<
  ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(function Tabs({ className, variant = 'underline', ...rest }, ref) {
  return (
    <TabsPrimitive.Root
      ref={ref}
      className={`cd-tabs cd-tabs--${variant} ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── List ──────────────────────────────────────────────────────── */

export const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(function TabsList({ className, ...rest }, ref) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={`cd-tabs-list ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Trigger ───────────────────────────────────────────────────── */

export const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(function TabsTrigger({ className, ...rest }, ref) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={`cd-tabs-trigger ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Content ───────────────────────────────────────────────────── */

export const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(function TabsContent({ className, ...rest }, ref) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={`cd-tabs-content ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})
