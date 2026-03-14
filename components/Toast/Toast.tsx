import { forwardRef } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'

export type ToastVariant = 'info' | 'positive' | 'warning' | 'critical'

/* ── Provider ──────────────────────────────────────────────────── */

export const ToastProvider = ToastPrimitive.Provider

/* ── Viewport ──────────────────────────────────────────────────── */

export const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(function ToastViewport({ className, ...rest }, ref) {
  return (
    <ToastPrimitive.Viewport
      ref={ref}
      className={`cd-toast-viewport ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Toast ─────────────────────────────────────────────────────── */

export interface ToastProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  /** Variante semantica. @default 'info' */
  variant?: ToastVariant
}

const VARIANT_COLOR: Record<ToastVariant, string> = {
  info: 'brand',
  positive: 'positive',
  warning: 'warning',
  critical: 'critical',
}

export const Toast = forwardRef<
  ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(function Toast({ className, variant = 'info', style, ...rest }, ref) {
  const color = VARIANT_COLOR[variant]
  const colorVars = {
    '--_toast-accent': `var(--bg-${color}-solid)`,
    '--_toast-bg': `var(--bg-${color}-primary)`,
  } as React.CSSProperties

  return (
    <ToastPrimitive.Root
      ref={ref}
      className={`cd-toast cd-toast--${variant} ${className ?? ''}`.trim()}
      style={{ ...colorVars, ...style }}
      {...rest}
    />
  )
})

/* ── Title ─────────────────────────────────────────────────────── */

export const ToastTitle = forwardRef<
  ElementRef<typeof ToastPrimitive.Title>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(function ToastTitle({ className, ...rest }, ref) {
  return (
    <ToastPrimitive.Title
      ref={ref}
      className={`cd-toast-title ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Description ───────────────────────────────────────────────── */

export const ToastDescription = forwardRef<
  ElementRef<typeof ToastPrimitive.Description>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(function ToastDescription({ className, ...rest }, ref) {
  return (
    <ToastPrimitive.Description
      ref={ref}
      className={`cd-toast-description ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Action ────────────────────────────────────────────────────── */

export const ToastAction = forwardRef<
  ElementRef<typeof ToastPrimitive.Action>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(function ToastAction({ className, ...rest }, ref) {
  return (
    <ToastPrimitive.Action
      ref={ref}
      className={`cd-toast-action ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Close ─────────────────────────────────────────────────────── */

export const ToastClose = forwardRef<
  ElementRef<typeof ToastPrimitive.Close>,
  ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(function ToastClose({ className, ...rest }, ref) {
  return (
    <ToastPrimitive.Close
      ref={ref}
      className={`cd-toast-close ${className ?? ''}`.trim()}
      aria-label="Fechar"
      {...rest}
    >
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" width="14" height="14">
        <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </ToastPrimitive.Close>
  )
})
