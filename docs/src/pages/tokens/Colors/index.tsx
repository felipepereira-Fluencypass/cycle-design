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
                badge={meta.badge}
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

                <Callout type="info" title="Como ler os badges de contraste">
                  <p>
                    Os badges indicam as condições de uso de cada token <strong>em light mode</strong> sobre <code>--bg-primary</code> (#FFFFFF), seguindo WCAG 2.1:
                  </p>
                  <ul className={styles.badgeLegend}>
                    <li><span className={styles.legendBadgeRecomendado}>recomendado</span> — Passa WCAG AA (≥ 4.5:1 texto normal) sem restrição de contexto.</li>
                    <li><span className={styles.legendBadgeRestrito}>restrito</span> — Uso condicional. Leia o callout da categoria para as condições exatas.</li>
                    <li><span className={styles.legendBadgeDecorativo}>decorativo</span> — Somente ornamental ou disabled. Nunca use para texto ou ícone informativo.</li>
                  </ul>
                  <p className={styles.calloutNote}>Em dark mode todos os tokens -primary de marca e semântica passam AA sem restrição.</p>
                </Callout>

                <Callout type="warning" title="--text-quaternary — restrito por fundo (4.6:1)">
                  <p>
                    Seguro <strong>apenas sobre <code>--bg-primary</code> (#FFFFFF)</strong>. Não usar sobre <code>--bg-secondary</code> (#FAFAFA, ratio 4.3:1) ou <code>--bg-tertiary</code> (#F5F5F5, ratio 4.0:1) — nenhum destes atinge AA para texto normal.
                  </p>
                </Callout>

                <Callout type="warning" title="--text-brand-primary e --text-private-primary — restritos em light mode">
                  <p>
                    <strong>--text-brand-primary</strong> (#D45558): 4.0:1 — abaixo de AA para texto normal. Use apenas em <strong>texto grande</strong> (≥ 18pt regular / ≥ 14pt bold) ou elementos decorativos. Decisão de identidade visual — primitivo não será alterado.
                  </p>
                  <p>
                    <strong>--text-private-primary</strong> (#E56530): 3.4:1 — somente texto grande ou ícones UI (limiar 3:1). Para corpo de texto, use <code>--text-private-secondary</code> (7.1:1).
                  </p>
                </Callout>

                <Callout type="warning" title="--text-warning-primary — restrito em light mode (4.1:1)">
                  <p>
                    Não atinge AA para texto normal em light mode. Use apenas em <strong>texto grande</strong> (≥ 18pt regular / ≥ 14pt bold). Em dark mode (<code>--color-warning-300</code>) passa AA sem restrição.
                  </p>
                </Callout>

                <Callout type="warning" title="--text-group-primary — decorativo em light mode (2.4:1)">
                  <p>
                    Contraste insuficiente para qualquer texto ou ícone informativo em light mode. Use <strong>apenas como elemento decorativo</strong>.
                    Para texto na cor Group, use <code>--text-group-secondary</code> (6.1:1). Revisão visual no Figma pendente (Group 3).
                  </p>
                </Callout>

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

                <Callout type="warning" title="--fg-warning-primary — restrito em light mode (4.1:1)">
                  <p>
                    Remapeado de warning-600 → warning-700 na auditoria a11y v1. Atinge o limiar de UI (3:1) mas <strong>não serve para texto</strong>. Use somente para ícones informativos. Em dark mode passa sem restrição.
                  </p>
                </Callout>

                <Callout type="warning" title="--fg-group-primary e --fg-group-secondary — decorativos em light mode">
                  <p>
                    <strong>--fg-group-primary</strong> (#00C234): 2.4:1 — não usar como ícone informativo em light mode. Use sobre fundos escuros ou substitua por <code>--text-group-secondary</code> em contextos textuais.
                  </p>
                  <p>
                    <strong>--fg-group-secondary</strong> (#00E73E): 1.7:1 — decorativo apenas. Revisão visual no Figma pendente (Group 3).
                  </p>
                </Callout>

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

                <div className={styles.solidBgSection}>
                  <h3 className={styles.solidBgTitle}>Texto sobre fundos sólidos — light mode</h3>
                  <p className={styles.solidBgDesc}>
                    Fundos sólidos (<code>-solid</code>) têm cor saturada e exigem atenção ao texto sobreposto.
                    Abaixo estão os ratios de contraste medidos e a recomendação de texto para cada token.
                  </p>
                  <div className={styles.solidBgTableWrapper}>
                    <table className={styles.solidBgTable}>
                      <thead>
                        <tr>
                          <th>Token</th>
                          <th>Fundo</th>
                          <th>Texto branco</th>
                          <th>Texto dark (<code>--text-primary</code>)</th>
                          <th>Recomendação</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>--bg-brand-solid</code></td>
                          <td><span className={styles.colorDot} style={{ background: '#D45558' }} />#D45558</td>
                          <td><span className={styles.chipWarn}>4.0:1</span></td>
                          <td><span className={styles.chipWarn}>4.2:1</span></td>
                          <td>Nenhuma opção atinge AA para texto normal. Somente <strong>texto grande</strong>.</td>
                        </tr>
                        <tr>
                          <td><code>--bg-private-solid</code></td>
                          <td><span className={styles.colorDot} style={{ background: '#E56530' }} />#E56530</td>
                          <td><span className={styles.chipWarn}>3.4:1 (UI only)</span></td>
                          <td><span className={styles.chipPass}>5.0:1 ✓</span></td>
                          <td>Preferir <code>--text-primary</code> para texto. Branco somente para ícones UI (≥ 3:1).</td>
                        </tr>
                        <tr>
                          <td><code>--bg-group-solid</code></td>
                          <td><span className={styles.colorDot} style={{ background: '#00C234' }} />#00C234</td>
                          <td><span className={styles.chipFail}>2.4:1 ✗</span></td>
                          <td><span className={styles.chipPass}>7.1:1 ✓</span></td>
                          <td>Usar obrigatoriamente <code>--text-primary</code>. Texto branco não passa.</td>
                        </tr>
                        <tr>
                          <td><code>--bg-warning-solid</code></td>
                          <td><span className={styles.colorDot} style={{ background: '#D48E00' }} />#D48E00</td>
                          <td><span className={styles.chipFail}>2.7:1 ✗</span></td>
                          <td><span className={styles.chipPass}>6.2:1 ✓</span></td>
                          <td>Usar obrigatoriamente <code>--text-primary</code>. Texto branco não passa.</td>
                        </tr>
                        <tr>
                          <td><code>--bg-positive-solid</code></td>
                          <td><span className={styles.colorDot} style={{ background: '#098A5E' }} />#098A5E</td>
                          <td><span className={styles.chipWarn}>4.4:1</span></td>
                          <td>—</td>
                          <td>Texto branco somente em <strong>texto grande</strong>. Para corpo de texto preferir <code>--text-primary</code>.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

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
