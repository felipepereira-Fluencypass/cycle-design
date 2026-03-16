import { forwardRef, cloneElement } from 'react'
import type { ButtonHTMLAttributes, CSSProperties, ReactElement, ReactNode } from 'react'
import { cn } from '../../src/utils/cn'
import { Slot } from '../Slot'

// ── Types ────────────────────────────────────────────────────

export type ButtonSize = 'giant' | 'lg' | 'md' | 'sm' | 'tiny'
export type ButtonVariant = 'filled' | 'outline' | 'ghost'
export type ButtonColor = 'brand' | 'class' | 'private' | 'group' | 'impulse'

/** Maps button size to icon size token (Figma spec). */
const ICON_SIZE = {
  giant: 'sm',
  lg:    'sm',
  md:    'xs',
  sm:    'xs',
  tiny:  'xs',
} as const satisfies Record<ButtonSize, 'xs' | 'sm'>

type BaseProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  /** Visual style. @default 'filled' */
  variant?: ButtonVariant
  /**
   * Brand palette to apply.
   *
   * ⚠️ `group` has contrast < 4.5:1 on light text in light mode.
   * Only use `group` when the surrounding context meets WCAG AA
   * independently (e.g. large text ≥ 24px or ≥ 18.67px bold).
   *
   * @default 'brand'
   */
  color?: ButtonColor
  /** Size variant. @default 'md' */
  size?: ButtonSize
  /**
   * Render as the child element instead of `<button>`.
   * Useful for rendering as `<a>`, Next.js `<Link>`, or React Router `<Link>`.
   *
   * @example
   * <Button asChild>
   *   <a href="/page">Link styled as button</a>
   * </Button>
   *
   * @example
   * <Button asChild>
   *   <Link href="/dashboard">Dashboard</Link>
   * </Button>
   */
  asChild?: boolean
}

/**
 * Button with visible label.
 * Accepts an optional icon on the left, right, or both sides.
 */
type TextButtonProps = BaseProps & {
  /** Button label — required in text mode. */
  children: ReactNode
  iconOnly?: false
  /** Icon rendered to the left of the label (decorative). */
  iconLeft?: ReactElement
  /** Icon rendered to the right of the label (decorative). */
  iconRight?: ReactElement
  icon?: never
}

/**
 * Icon-only button.
 * `aria-label` is mandatory — it is the sole accessible name.
 *
 * @example
 * <Button iconOnly icon={<CloseIcon />} aria-label="Fechar" />
 */
type IconOnlyButtonProps = BaseProps & {
  children?: never
  iconOnly: true
  /** Icon to display — required in icon-only mode. */
  icon: ReactElement
  iconLeft?: never
  iconRight?: never
  /** Required: the only accessible name for this button. */
  'aria-label': string
}

export type ButtonProps = TextButtonProps | IconOnlyButtonProps

// ── Component ────────────────────────────────────────────────

/**
 * Button — primary interactive element of the Cycle Design System.
 *
 * @example
 * // Text only
 * <Button>Nova turma</Button>
 *
 * @example
 * // Icon left
 * <Button iconLeft={<PlusIcon />}>Nova turma</Button>
 *
 * @example
 * // Icon right
 * <Button variant="outline" iconRight={<ChevronDownIcon />}>Opções</Button>
 *
 * @example
 * // Icon left + right
 * <Button iconLeft={<SearchIcon />} iconRight={<ChevronDownIcon />}>Buscar</Button>
 *
 * @example
 * // Icon-only
 * <Button iconOnly icon={<CloseIcon />} aria-label="Fechar" />
 *
 * @example
 * // As link (asChild)
 * <Button asChild>
 *   <a href="/page">Link que parece botão</a>
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'filled',
    color = 'brand',
    size = 'md',
    asChild,
    iconOnly,
    icon,
    iconLeft,
    iconRight,
    children,
    disabled,
    className,
    style,
    ...rest
  },
  ref,
) {
  const cloneIcon = (el: ReactElement) =>
    cloneElement(el as ReactElement<Record<string, unknown>>, {
      size: ICON_SIZE[size],
      decorative: true,
    })

  const iconOnlyEl  = icon      ? cloneIcon(icon)      : null
  const iconLeftEl  = iconLeft  ? cloneIcon(iconLeft)  : null
  const iconRightEl = iconRight ? cloneIcon(iconRight) : null

  // Color-dependent CSS custom properties resolved at runtime.
  // This avoids generating 15 combinatorial CSS classes while keeping
  // all visual values tied to the official token system.
  const colorVars = {
    '--_btn-solid':           `var(--bg-${color}-solid)`,
    '--_btn-solid-hover':     `var(--bg-${color}-solid_hover)`,
    '--_btn-solid-pressed':   `var(--bg-${color}-section)`,
    '--_btn-surface':         `var(--bg-${color}-primary)`,
    '--_btn-surface-hover':   `var(--bg-${color}-hover)`,
    '--_btn-surface-pressed': `var(--bg-${color}-secondary)`,
    '--_btn-border':          `var(--border-${color})`,
    '--_btn-text-colored':    `var(--text-${color}-primary)`,
  }

  const classNamesMerged = cn(
    'cd-btn',
    `cd-btn--${variant}`,
    `cd-btn--${size}`,
    iconOnly && 'cd-btn--icon-only',
    className,
  )

  const sharedProps = {
    className: classNamesMerged,
    'aria-disabled': disabled || undefined,
    'data-variant': variant,
    'data-size': size,
    'data-color': color,
    'data-disabled': disabled || undefined,
    style: { ...colorVars, ...style } as CSSProperties,
    ...rest,
  }

  if (asChild) {
    // asChild: render the child element (e.g. <a>) with Button's styling props
    // The child's own children (text) are preserved.
    return (
      <Slot ref={ref as never} {...sharedProps}>
        {children as ReactNode}
      </Slot>
    )
  }

  return (
    <button
      ref={ref}
      disabled={disabled}
      {...sharedProps}
    >
      {iconOnly ? (
        iconOnlyEl
      ) : (
        <>
          {iconLeftEl}
          {children}
          {iconRightEl}
        </>
      )}
    </button>
  )
})
