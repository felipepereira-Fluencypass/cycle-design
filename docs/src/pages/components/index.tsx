import { PageHeader } from '@/components/ui/PageHeader'
import { Callout } from '@/components/ui/Callout'
import styles from './Components.module.css'

const planned = [
  { name: 'Button', desc: 'Botões primários, secundários, ghost e destrutivos.' },
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
        description="Componentes React tipados e acessíveis construídos sobre os tokens do Cycle Design. Em desenvolvimento."
      />

      <Callout type="info" title="Em breve">
        <p>
          Os componentes estão sendo construídos com base na fundação de tokens já estabelecida.
          Cada componente será 100% tipado em TypeScript, acessível e com suporte nativo
          a light e dark mode.
        </p>
      </Callout>

      <div className={styles.plannedGrid}>
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
