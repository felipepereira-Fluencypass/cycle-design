import { useState, useCallback } from 'react'

export function useClipboard(timeout = 1500) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        const el = document.createElement('textarea')
        el.value = text
        el.style.position = 'fixed'
        el.style.opacity = '0'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), timeout)
    },
    [timeout]
  )

  // Texto anunciado por leitores de tela via aria-live.
  // String vazia em repouso — preenchida durante o período de feedback.
  const announcement = copied ? 'Copiado para a área de transferência' : ''

  return { copy, copied, announcement }
}
