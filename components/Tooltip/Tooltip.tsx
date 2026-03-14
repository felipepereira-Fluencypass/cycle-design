import { forwardRef } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'

/* ── Provider ──────────────────────────────────────────────────── */

export const TooltipProvider = TooltipPrimitive.Provider

/* ── Root & Trigger ────────────────────────────────────────────── */

export const Tooltip = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

/* ── Content ───────────────────────────────────────────────────── */

export interface TooltipContentProps
  extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  /** Mostrar seta. @default true */
  showArrow?: boolean
}

export const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(function TooltipContent({ className, sideOffset = 4, showArrow = true, children, ...rest }, ref) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={`cd-tooltip-content ${className ?? ''}`.trim()}
        {...rest}
      >
        {children}
        {showArrow && <TooltipPrimitive.Arrow className="cd-tooltip-arrow" />}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
})
