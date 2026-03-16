/**
 * Combina nomes de classe, filtrando valores falsy.
 *
 * @example
 * cn('cd-btn', `cd-btn--${variant}`, disabled && 'cd-btn--disabled', className)
 * // => 'cd-btn cd-btn--filled'
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ')
}
