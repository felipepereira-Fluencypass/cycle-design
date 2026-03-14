import { forwardRef } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'

/* ── Root & Trigger ────────────────────────────────────────────── */

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuGroup = DropdownMenuPrimitive.Group
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal
export const DropdownMenuSub = DropdownMenuPrimitive.Sub
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/* ── Content ───────────────────────────────────────────────────── */

export const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(function DropdownMenuContent({ className, sideOffset = 4, ...rest }, ref) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={`cd-dropdown-content ${className ?? ''}`.trim()}
        {...rest}
      />
    </DropdownMenuPrimitive.Portal>
  )
})

/* ── Item ──────────────────────────────────────────────────────── */

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }
>(function DropdownMenuItem({ className, inset, ...rest }, ref) {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={`cd-dropdown-item ${inset ? 'cd-dropdown-item--inset' : ''} ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Checkbox Item ─────────────────────────────────────────────── */

export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(function DropdownMenuCheckboxItem({ className, children, checked, ...rest }, ref) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={`cd-dropdown-item cd-dropdown-item--check ${className ?? ''}`.trim()}
      checked={checked}
      {...rest}
    >
      <span className="cd-dropdown-indicator">
        <DropdownMenuPrimitive.ItemIndicator>
          <svg viewBox="0 0 12 12" fill="none" width="12" height="12">
            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
})

/* ── Radio Item ────────────────────────────────────────────────── */

export const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(function DropdownMenuRadioItem({ className, children, ...rest }, ref) {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={`cd-dropdown-item cd-dropdown-item--check ${className ?? ''}`.trim()}
      {...rest}
    >
      <span className="cd-dropdown-indicator">
        <DropdownMenuPrimitive.ItemIndicator>
          <svg viewBox="0 0 12 12" width="12" height="12">
            <circle cx="6" cy="6" r="3" fill="currentColor" />
          </svg>
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
})

/* ── Label ─────────────────────────────────────────────────────── */

export const DropdownMenuLabel = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }
>(function DropdownMenuLabel({ className, inset, ...rest }, ref) {
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={`cd-dropdown-label ${inset ? 'cd-dropdown-label--inset' : ''} ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Separator ─────────────────────────────────────────────────── */

export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(function DropdownMenuSeparator({ className, ...rest }, ref) {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={`cd-dropdown-separator ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Sub Trigger ───────────────────────────────────────────────── */

export const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }
>(function DropdownMenuSubTrigger({ className, inset, children, ...rest }, ref) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={`cd-dropdown-item cd-dropdown-subtrigger ${inset ? 'cd-dropdown-item--inset' : ''} ${className ?? ''}`.trim()}
      {...rest}
    >
      {children}
      <svg className="cd-dropdown-chevron" viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true">
        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </DropdownMenuPrimitive.SubTrigger>
  )
})

/* ── Sub Content ───────────────────────────────────────────────── */

export const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(function DropdownMenuSubContent({ className, ...rest }, ref) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={`cd-dropdown-content ${className ?? ''}`.trim()}
        {...rest}
      />
    </DropdownMenuPrimitive.Portal>
  )
})
