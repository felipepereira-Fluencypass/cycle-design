import { forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'

export type SheetSide = 'left' | 'right' | 'top' | 'bottom'

/* ── Root & Trigger ────────────────────────────────────────────── */

export const Sheet = DialogPrimitive.Root
export const SheetTrigger = DialogPrimitive.Trigger
export const SheetClose = DialogPrimitive.Close
export const SheetPortal = DialogPrimitive.Portal

/* ── Overlay ───────────────────────────────────────────────────── */

export const SheetOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(function SheetOverlay({ className, ...rest }, ref) {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={`cd-sheet-overlay ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Content ───────────────────────────────────────────────────── */

export interface SheetContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  /** Lado de onde o sheet aparece. @default 'right' */
  side?: SheetSide
}

export const SheetContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(function SheetContent({ className, side = 'right', children, ...rest }, ref) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={`cd-sheet-content cd-sheet-content--${side} ${className ?? ''}`.trim()}
        {...rest}
      >
        {children}
        <DialogPrimitive.Close className="cd-sheet-close" aria-label="Fechar">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" width="16" height="16">
            <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </SheetPortal>
  )
})

/* ── Header ────────────────────────────────────────────────────── */

export interface SheetHeaderProps {
  children: ReactNode
  className?: string
}

export function SheetHeader({ className, children }: SheetHeaderProps) {
  return (
    <div className={`cd-sheet-header ${className ?? ''}`.trim()}>
      {children}
    </div>
  )
}

/* ── Footer ────────────────────────────────────────────────────── */

export interface SheetFooterProps {
  children: ReactNode
  className?: string
}

export function SheetFooter({ className, children }: SheetFooterProps) {
  return (
    <div className={`cd-sheet-footer ${className ?? ''}`.trim()}>
      {children}
    </div>
  )
}

/* ── Title ─────────────────────────────────────────────────────── */

export const SheetTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(function SheetTitle({ className, ...rest }, ref) {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={`cd-sheet-title ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Description ───────────────────────────────────────────────── */

export const SheetDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(function SheetDescription({ className, ...rest }, ref) {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={`cd-sheet-description ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})
