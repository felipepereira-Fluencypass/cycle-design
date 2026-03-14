import { forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'

/* ── Root ──────────────────────────────────────────────────────── */

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogPortal = DialogPrimitive.Portal
export const DialogClose = DialogPrimitive.Close

/* ── Overlay ───────────────────────────────────────────────────── */

export const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(function DialogOverlay({ className, ...rest }, ref) {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={`cd-dialog-overlay ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Content ───────────────────────────────────────────────────── */

export interface DialogContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  /** Tamanho do dialog. @default 'md' */
  size?: 'sm' | 'md' | 'lg'
}

export const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(function DialogContent({ className, size = 'md', children, ...rest }, ref) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={`cd-dialog-content cd-dialog-content--${size} ${className ?? ''}`.trim()}
        {...rest}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})

/* ── Header ────────────────────────────────────────────────────── */

export interface DialogHeaderProps {
  children: ReactNode
  className?: string
}

export function DialogHeader({ className, children }: DialogHeaderProps) {
  return (
    <div className={`cd-dialog-header ${className ?? ''}`.trim()}>
      {children}
    </div>
  )
}

/* ── Footer ────────────────────────────────────────────────────── */

export interface DialogFooterProps {
  children: ReactNode
  className?: string
}

export function DialogFooter({ className, children }: DialogFooterProps) {
  return (
    <div className={`cd-dialog-footer ${className ?? ''}`.trim()}>
      {children}
    </div>
  )
}

/* ── Title ─────────────────────────────────────────────────────── */

export const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(function DialogTitle({ className, ...rest }, ref) {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={`cd-dialog-title ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Description ───────────────────────────────────────────────── */

export const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(function DialogDescription({ className, ...rest }, ref) {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={`cd-dialog-description ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})
