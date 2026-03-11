import { PageHeader } from '@/components/ui/PageHeader'
import { PaletteSwatch, ColorSwatch, GradientSwatch } from '@/components/ui/ColorSwatch'
import { Callout } from '@/components/ui/Callout'
import { Tabs } from '@/components/ui/Tabs'
import {
  colorPalettes,
  textTokensGrouped,
  borderTokensGrouped,
  fgTokensGrouped,
  bgTokensGrouped,
  alphaTokensMeta,
  gradientTokensGrouped,
} from '@/lib/tokens'
import styles from './Colors.module.css'

const colorTabs = [
  { key: 'primitivos', label: 'Primitivos' },
  { key: 'text', label: 'Text' },
  { key: 'border', label: 'Border' },
  { key: 'foreground', label: 'Foreground' },
  { key: 'background', label: 'Background' },
  { key: 'alpha', label: 'Alpha' },
  { key: 'gradients', label: 'Gradients' },
]

function GroupedSwatches({ groups }: { groups: typeof textTokensGrouped }) {
  return (
    <div className={styles.groupedList}>
      {groups.map((group) => (
        <div key={group.label} className={styles.tokenGroup}>
          <span className={styles.groupLabel}>{group.label}</span>
          <div className={styles.swatchList}>
            {group.tokens.map(([token, meta]) => (
              <ColorSwatch
                key={token}
                token={token}
                label={meta.label}
                description={meta.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Colors() {
  return (
    <div>
      <PageHeader
        badge="Foundation"
        title="Colors"
        description="O sistema de cores do Cycle Design é organizado em duas camadas: primitivos (valores base) e composições funcionais (tokens semânticos com suporte a light e dark mode)."
      />

      <Callout type="warning" title="Regra essencial">
        <p>
          Sempre use tokens <strong>funcionais</strong> (composições) nas interfaces —
          nunca os primitivos diretamente. Os funcionais mudam automaticamente com o tema.
          Exemplo: use <code>--text-primary</code>, não <code>--color-gray-light-900</code>.
        </p>
      </Callout>

      <Tabs tabs={colorTabs}>
        {(active) => (
          <>
            {/* ── PRIMITIVOS ── */}
            {active === 'primitivos' && (
              <div>
                <p className={styles.p}>
                  11 paletas com 12 tons cada (25 a 950), mais variações transparentes para Brand, Class, Private, Group e Impulse.
                  São os valores base — não os use diretamente nas interfaces.
                </p>
                <div className={styles.palettesGrid}>
                  {Object.entries(colorPalettes).map(([key, palette]) => (
                    <div key={key} className={styles.paletteBlock}>
                      <div className={styles.paletteHeader}>
                        <h3 className={styles.paletteName}>{palette.label}</h3>
                        <p className={styles.paletteDesc}>{palette.description}</p>
                      </div>
                      <div className={styles.paletteSwatches}>
                        {palette.steps.map((step) => (
                          <PaletteSwatch
                            key={step}
                            tokenName={palette.prefix}
                            step={step}
                          />
                        ))}
                        {palette.hasTransparent && (
                          <>
                            <PaletteSwatch tokenName={palette.prefix} step="transparent-10" />
                            <PaletteSwatch tokenName={palette.prefix} step="transparent-25" />
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── TEXT ── */}
            {active === 'text' && (
              <div>
                <p className={styles.p}>
                  Tokens funcionais de cor de texto. Mudam automaticamente entre light e dark mode.
                  Use sempre estes tokens em vez de valores hex diretos.
                </p>
                <GroupedSwatches groups={textTokensGrouped} />
              </div>
            )}

            {/* ── BORDER ── */}
            {active === 'border' && (
              <div>
                <p className={styles.p}>
                  Tokens de cor de borda para separar e delimitar componentes.
                  Incluem variantes hover e alt para cada paleta de marca.
                </p>
                <GroupedSwatches groups={borderTokensGrouped} />
              </div>
            )}

            {/* ── FOREGROUND ── */}
            {active === 'foreground' && (
              <div>
                <p className={styles.p}>
                  Tokens de cor para ícones e elementos gráficos (SVGs, pictogramas, indicadores visuais).
                  Incluem variantes por paleta e estados semânticos.
                </p>
                <GroupedSwatches groups={fgTokensGrouped} />
              </div>
            )}

            {/* ── BACKGROUND ── */}
            {active === 'background' && (
              <div>
                <p className={styles.p}>
                  Tokens de cor de fundo para superfícies, estados e hierarquias de camada.
                  Incluem variantes solid, hover, section e section_subtle por paleta.
                </p>
                <GroupedSwatches groups={bgTokensGrouped} />
              </div>
            )}

            {/* ── ALPHA ── */}
            {active === 'alpha' && (
              <div>
                <p className={styles.p}>
                  Tokens de cores com transparência para overlays e estados de sobreposição.
                  Estes tokens são idênticos em light e dark mode.
                </p>
                <div className={styles.swatchList}>
                  {Object.entries(alphaTokensMeta).map(([token, meta]) => (
                    <ColorSwatch
                      key={token}
                      token={token}
                      label={meta.label}
                      description={meta.description}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* ── GRADIENTS ── */}
            {active === 'gradients' && (
              <div>
                <p className={styles.p}>
                  Gradientes prontos para uso. Todos usam direção padrão <code>to left</code>.
                  Para alterar a direção, use os primitivos de cor diretamente com <code>linear-gradient()</code>.
                </p>
                <div className={styles.groupedList}>
                  {gradientTokensGrouped.map((group) => (
                    <div key={group.label} className={styles.tokenGroup}>
                      <span className={styles.groupLabel}>{group.label}</span>
                      <div className={styles.swatchList}>
                        {group.tokens.map(([token, meta]) => (
                          <GradientSwatch
                            key={token}
                            token={token}
                            label={meta.label}
                            description={meta.description}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </Tabs>
    </div>
  )
}
