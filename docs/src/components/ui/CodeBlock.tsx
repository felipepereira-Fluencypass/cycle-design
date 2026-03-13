import { Highlight, themes } from 'prism-react-renderer'
import { Check, Copy } from 'lucide-react'
import { useClipboard } from '@/hooks/useClipboard'
import styles from './CodeBlock.module.css'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = 'css', filename }: CodeBlockProps) {
  const { copy, copied, announcement } = useClipboard()
  const trimmed = code.trim()

  return (
    <div className={styles.wrapper}>
      {filename && <div className={styles.filename}>{filename}</div>}
      <div className={styles.container}>
        <span aria-live="polite" aria-atomic="true" className="sr-only">
          {announcement}
        </span>
        <button
          className={styles.copyButton}
          onClick={() => copy(trimmed)}
          aria-label="Copiar código"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? 'Copiado!' : 'Copiar'}</span>
        </button>
        <Highlight theme={themes.nightOwl} code={trimmed} language={language as 'css' | 'tsx' | 'bash' | 'javascript'}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${styles.pre} ${className}`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className={styles.lineNumber}>{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
