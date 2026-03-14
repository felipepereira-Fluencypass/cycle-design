import { PageHeader } from '@/components/ui/PageHeader'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Avatar } from '@components/Avatar'
import styles from '../Forms/Forms.module.css'

const SIZES = ['xl', 'lg', 'md', 'sm', 'xs'] as const

export default function AvatarPage() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Avatar"
        description="Imagem de perfil com fallback de iniciais e indicador de status."
      />

      {/* ── Tamanhos ─────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Tamanhos</h2>
        <p className={styles.p}>
          Cinco tamanhos disponiveis: xl (56px), lg (48px), md (40px), sm (32px) e xs (24px).
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            {SIZES.map((size) => (
              <Avatar key={size} size={size} fallback="MF" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Fallback de iniciais ────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Fallback de iniciais</h2>
        <p className={styles.p}>
          Quando nao ha imagem, o avatar exibe as iniciais informadas via prop fallback.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Avatar size="lg" fallback="MF" />
            <Avatar size="lg" fallback="JS" />
            <Avatar size="lg" fallback="AB" />
            <Avatar size="lg" fallback="?" />
          </div>
        </div>
      </section>

      {/* ── Status ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Status</h2>
        <p className={styles.p}>
          Indicador de status: online, offline ou busy.
        </p>

        <div className={styles.demo}>
          <div className={styles.demoRow}>
            <Avatar size="lg" fallback="MF" status="online" />
            <Avatar size="lg" fallback="JS" status="offline" />
            <Avatar size="lg" fallback="AB" status="busy" />
          </div>
        </div>
      </section>

      {/* ── Import ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Avatar } from 'cycle-design'

<Avatar src="/photo.jpg" alt="Maria Fernanda" size="lg" />
<Avatar fallback="MF" status="online" />
<Avatar fallback="JS" size="sm" status="busy" />`}
        />
      </section>
    </div>
  )
}
