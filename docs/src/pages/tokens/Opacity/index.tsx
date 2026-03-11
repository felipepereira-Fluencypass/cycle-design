import { PageHeader } from '@/components/ui/PageHeader'
import { TokenTable } from '@/components/ui/TokenTable'
import { opacityTokensMeta } from '@/lib/tokens'

export default function Opacity() {
  const rows = Object.entries(opacityTokensMeta).map(([token, meta]) => ({
    token,
    meta,
    previewType: 'opacity' as const,
    value: meta.value,
  }))

  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Opacity"
        description="Escala de opacidade do Cycle Design. Sete níveis de transparência para overlays, estados e hierarquias visuais."
      />
      <TokenTable rows={rows} showValue={true} />
    </div>
  )
}
