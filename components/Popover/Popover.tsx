import { forwardRef } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'

/* ── Root & Trigger ────────────────────────────────────────────── */

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverAnchor = PopoverPrimitive.Anchor
export const PopoverClose = PopoverPrimitive.Close

/* ── Content ───────────────────────────────────────────────────── */

export interface PopoverContentProps
  extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  /** Mostrar seta. @default false */
  showArrow?: boolean
}

export const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(function PopoverContent({ className, align = 'center', sideOffset = 4, showArrow = false, children, ...rest }, ref) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={`cd-popover-content ${className ?? ''}`.trim()}
        {...rest}
      >
        {children}
        {showArrow && <PopoverPrimitive.Arrow className="cd-popover-arrow" />}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
})
