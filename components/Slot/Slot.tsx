import {
  forwardRef,
  cloneElement,
  isValidElement,
  type ReactNode,
  type HTMLAttributes,
  type Ref,
} from 'react'
import { cn } from '../../src/utils/cn'

/**
 * Slot — renderiza o filho direto com as props do componente pai.
 *
 * Usado internamente por componentes que suportam `asChild`.
 * Quando `asChild` é true, o componente não renderiza sua tag padrão —
 * em vez disso, clona o filho único, mergeando className, style e ref.
 *
 * Baseado no pattern do Radix UI Slot.
 *
 * @example
 * // Internamente no Button:
 * const Comp = asChild ? Slot : 'button'
 * return <Comp {...props}>{children}</Comp>
 *
 * // Uso pelo consumidor:
 * <Button asChild>
 *   <a href="/page">Link que parece botão</a>
 * </Button>
 */
export const Slot = forwardRef<HTMLElement, HTMLAttributes<HTMLElement> & { children?: ReactNode }>(
  function Slot({ children, ...props }, ref) {
    if (!isValidElement(children)) {
      console.warn('Slot: asChild requires a single valid React element as child.')
      return null
    }

    const childProps = children.props as Record<string, unknown>

    const mergedProps = {
      ...props,
      ...childProps,
      className: cn(props.className as string | undefined, childProps.className as string | undefined),
      style: { ...(props.style ?? {}), ...((childProps.style as object) ?? {}) },
      ref: mergeRefs(ref, (children as unknown as { ref?: Ref<HTMLElement> }).ref ?? null),
    }

    return cloneElement(children, mergedProps)
  },
)

/** Combina múltiplas refs em uma callback ref. */
function mergeRefs<T>(...refs: (Ref<T> | null | undefined)[]): (node: T | null) => void {
  return (node) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref && typeof ref === 'object') {
        ;(ref as { current: T | null }).current = node
      }
    }
  }
}
