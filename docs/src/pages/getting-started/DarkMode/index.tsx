import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Callout } from '@/components/ui/Callout'
import { UsageExample } from '@/components/ui/UsageExample'
import styles from './DarkMode.module.css'

const htmlAttrCode = `<!-- Light mode (padrão) -->
<html data-theme="light">

<!-- Dark mode -->
<html data-theme="dark">`

const jsToggleCode = `// Alternando o tema via JavaScript
function toggleTheme() {
  const html = document.documentElement
  const current = html.getAttribute('data-theme')
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark')
  localStorage.setItem('theme', current === 'dark' ? 'light' : 'dark')
}

// Restaurar preferência salva ao carregar
const saved = localStorage.getItem('theme')
const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark' : 'light'
document.documentElement.setAttribute('data-theme', saved ?? preferred)`

const reactHookCode = `// hooks/useTheme.ts
import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light')
  return { theme, toggle }
}`

export default function DarkMode() {
  return (
    <div>
      <PageHeader
        badge="Getting Started"
        title="Dark Mode"
        description="O Cycle Design suporta light e dark mode nativamente. Ao usar tokens funcionais, a troca de tema é automática — sem CSS adicional."
      />

      <section className={styles.section}>
        <h2 className={styles.h2}>Como funciona</h2>
        <p className={styles.p}>
          O tema é controlado pelo atributo <code>data-theme</code> no elemento{' '}
          <code>{'<html>'}</code>. Os tokens funcionais de cor (como <code>--text-primary</code>{' '}
          e <code>--bg-secondary</code>) têm valores diferentes para cada tema,
          definidos em <code>color-compositions.css</code>.
        </p>
        <p className={styles.p}>
          O sistema também respeita <code>prefers-color-scheme</code> automaticamente —
          se nenhum <code>data-theme</code> estiver definido, o tema do sistema operacional
          é usado.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Por que usar tokens funcionais</h2>
        <UsageExample
          doExample={{
            label: 'Correto — token funcional',
            code: `.card {
  color: var(--text-primary);
  background: var(--bg-secondary);
  border-color: var(--border-primary);
}
/* Funciona em light e dark automaticamente */`,
          }}
          dontExample={{
            label: 'Evitar — primitivo ou hardcode',
            code: `.card {
  color: var(--color-gray-light-900);
  background: #FAFAFA;
  border-color: #D5D7DA;
}
/* Quebra no dark mode */`,
          }}
        />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Ativando via atributo HTML</h2>
        <CodeBlock code={htmlAttrCode} language="tsx" filename="index.html" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Toggle via JavaScript</h2>
        <CodeBlock code={jsToggleCode} language="javascript" filename="theme.js" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Hook React (recomendado)</h2>
        <p className={styles.p}>
          Para projetos React, use um hook que persiste a preferência no{' '}
          <code>localStorage</code> e sincroniza com o atributo HTML:
        </p>
        <CodeBlock code={reactHookCode} language="tsx" filename="hooks/useTheme.ts" />
      </section>

      <Callout type="success" title="Dark mode sem esforço">
        <p>
          Se todos os componentes usam tokens funcionais, o dark mode funciona
          sem nenhuma linha extra de CSS. O Cycle Design faz todo o trabalho.
        </p>
      </Callout>
    </div>
  )
}
