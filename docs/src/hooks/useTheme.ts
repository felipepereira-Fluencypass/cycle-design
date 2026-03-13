import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Lê o data-theme já aplicado pelo script bloqueante em index.html
    // Isso evita divergência entre o atributo no DOM e o estado do React
    const applied = document.documentElement.getAttribute('data-theme') as Theme | null
    if (applied === 'light' || applied === 'dark') return applied
    // Fallback defensivo caso o script tenha sido bloqueado
    const stored = localStorage.getItem('cycle-docs-theme') as Theme | null
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('cycle-docs-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return { theme, toggle }
}
