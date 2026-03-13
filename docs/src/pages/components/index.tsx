import { Link } from 'react-router-dom'
import { PageHeader } from '@/components/ui/PageHeader'
import { Callout } from '@/components/ui/Callout'
import styles from './Components.module.css'

const available = [
  { name: 'Button', path: '/components/button', desc: 'Botões primários, secundários e ghost com suporte a ícones e icon-only.' },
]

const planned = [
  { name: 'Input', desc: 'Campos de texto, com validação e estados de erro.' },
  { name: 'Card', desc: 'Container de conteúdo com variações de elevação.' },
  { name: 'Badge', desc: 'Indicadores de status, contagem e categoria.' },
  { name: 'Avatar', desc: 'Imagem de perfil com fallback para iniciais.' },
  { name: 'Modal', desc: 'Diálogos e painéis de confirmação.' },
  { name: 'Toast', desc: 'Notificações temporárias de sistema.' },
  { name: 'Dropdown', desc: 'Menus de seleção e ações contextuais.' },
]

export default function Components() {
  return (
    <div>
      <PageHeader
        badge="Components"
        title="Componentes"
        description="Componentes React tipados e acessíveis construídos sobre os tokens do Cycle Design."
      />

      <Callout type="info" title="Em desenvolvimento">
        <p>
          Os componentes estão sendo construídos com base na fundação de tokens já estabelecida.
          Cada componente é 100% tipado em TypeScript, acessível e com suporte nativo
          a light e dark mode.
        </p>
      </Callout>

      {available.length > 0 && (
        <div className={styles.plannedGrid} style={{ marginTop: 24 }}>
          {available.map((c) => (
            <Link key={c.name} to={c.path} className={styles.plannedCard} style={{ textDecoration: 'none' }}>
              <div className={styles.cardTop}>
                <span className={styles.cardName}>{c.name}</span>
                <span className={styles.stable}>Disponível</span>
              </div>
              <p className={styles.cardDesc}>{c.desc}</p>
            </Link>
          ))}
        </div>
      )}

      <div className={styles.plannedGrid} style={{ marginTop: 12 }}>
        {planned.map((c) => (
          <div key={c.name} className={styles.plannedCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardName}>{c.name}</span>
              <span className={styles.soon}>Em breve</span>
            </div>
            <p className={styles.cardDesc}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
