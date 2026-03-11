/**
 * Cycle Design — build:icons
 *
 * Pipeline de geração de ícones:
 * 1. Lê SVGs de components/icons/_source/{categoria}/*.svg
 * 2. Otimiza com SVGO
 * 3. Gera componentes React em components/icons/_generated/
 * 4. Atualiza components/icons/manifest.ts (adiciona novos, preserva status existentes)
 * 5. Regenera components/icons/index.ts (apenas stable)
 * 6. Regenera components/icons/index.experimental.ts (apenas experimental)
 *
 * Uso: npm run build:icons
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs'
import { join, basename, dirname, relative } from 'path'
import { fileURLToPath } from 'url'
import { optimize } from 'svgo'
import { glob } from 'glob'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// ─── Caminhos ────────────────────────────────────────────────────────────────

const PATHS = {
  source:       join(ROOT, 'components/icons/_source'),
  generated:    join(ROOT, 'components/icons/_generated'),
  manifest:     join(ROOT, 'components/icons/manifest.ts'),
  index:        join(ROOT, 'components/icons/index.ts'),
  indexExp:     join(ROOT, 'components/icons/index.experimental.ts'),
}

// ─── SVGO config ─────────────────────────────────────────────────────────────

const SVGO_CONFIG = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          convertShapeToPath: false,
          collapseGroups: false,
          // Preserva stroke="none" explícito (ex: ReplayIcon que é fill puro)
          removeUselessStrokeAndFill: false,
        },
      },
    },
    'removeDimensions',
    // Plugin customizado: normaliza cores e stroke de todos os elementos.
    //
    // Regras por elemento filho (path, circle, rect, etc.):
    //   fill="#color"  → fill="currentColor"  (mantém preenchimento, usa cor dinâmica)
    //   fill="none"    → sem alteração         (preenchimento vazio intencional)
    //   stroke="#color"→ removido              (herda stroke="currentColor" do SVG pai)
    //   stroke-width   → removido              (herda strokeWidth calculado pelo BaseIcon)
    //   stroke-linecap → removido              (herda strokeLinecap="round" do BaseIcon)
    //   stroke-linejoin→ removido              (herda strokeLinejoin="round" do BaseIcon)
    //
    // Regras para o elemento <svg> raiz:
    //   todos os atributos de cor/stroke → removidos (BaseIcon define via props)
    {
      name: 'normalizeCycleIcon',
      fn: () => ({
        element: {
          enter(node) {
            if (node.name === 'svg') {
              // No SVG raiz, remove tudo — BaseIcon define via props
              delete node.attributes.fill
              delete node.attributes.stroke
              delete node.attributes['stroke-width']
              delete node.attributes['stroke-linecap']
              delete node.attributes['stroke-linejoin']
              delete node.attributes['stroke-miterlimit']
              delete node.attributes.color
              delete node.attributes.xmlns
              return
            }

            // Elementos filhos com fill colorido:
            //   fill="currentColor" + stroke="none"
            //   O stroke da BaseIcon não deve aparecer sobre elementos preenchidos
            if (node.attributes.fill && node.attributes.fill !== 'none') {
              node.attributes.fill = 'currentColor'
              node.attributes.stroke = 'none'
              // stroke props são irrelevantes num elemento fill — limpa de qualquer forma
              delete node.attributes['stroke-width']
              delete node.attributes['stroke-linecap']
              delete node.attributes['stroke-linejoin']
              delete node.attributes['stroke-miterlimit']
              return
            }

            // Elementos stroke-only: remove cor hardcoded — herda do SVG pai
            if (node.attributes.stroke && node.attributes.stroke !== 'none') {
              delete node.attributes.stroke
            }

            // Remove stroke props — herdam do BaseIcon via SVG pai
            delete node.attributes['stroke-width']
            delete node.attributes['stroke-linecap']
            delete node.attributes['stroke-linejoin']
            delete node.attributes['stroke-miterlimit']
          },
        },
      }),
    },
  ],
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * kebab-case → PascalCase + sufixo "Icon"
 * Ex: "chevron-left" → "ChevronLeftIcon"
 */
function toComponentName(filename) {
  const name = basename(filename, '.svg')
  return (
    name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Icon'
  )
}

/**
 * Extrai o conteúdo interno do SVG (sem o elemento <svg> wrapper).
 * Ex: "<svg viewBox="..."><path .../></svg>" → "<path .../>"
 */
function extractInnerSVG(svgString) {
  const match = svgString.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i)
  return match ? match[1].trim() : ''
}

/**
 * Converte atributos SVG para JSX (camelCase).
 * SVGO já remove a maioria, mas paths podem ter fill-rule, clip-rule.
 */
function toJSXAttributes(content) {
  return content
    .replace(/fill-rule=/g,        'fillRule=')
    .replace(/clip-rule=/g,        'clipRule=')
    .replace(/stroke-linecap=/g,   'strokeLinecap=')
    .replace(/stroke-linejoin=/g,  'strokeLinejoin=')
    .replace(/stroke-width=/g,     'strokeWidth=')
    .replace(/stroke-dasharray=/g, 'strokeDasharray=')
    .replace(/stroke-dashoffset=/g,'strokeDashoffset=')
    .replace(/xlink:href=/g,       'xlinkHref=')
}

/**
 * Detecta a categoria a partir do caminho do arquivo.
 * Ex: "_source/navigation/home.svg" → "navigation"
 */
function extractCategory(filePath) {
  const rel = relative(PATHS.source, filePath)
  const parts = rel.split('/')
  return parts.length > 1 ? parts[0] : 'actions'
}

// ─── Templates ───────────────────────────────────────────────────────────────

function componentTemplate(componentName, innerSVG) {
  return `// AUTO-GENERATED — não edite manualmente
// Fonte: src/icons/_source → npm run build:icons
import { BaseIcon } from '../BaseIcon'
import type { IconProps } from '../types'

/**
 * @example
 * // Decorativo (ícone puramente visual)
 * <${componentName} size="sm" decorative />
 *
 * // Semântico (requer aria-label)
 * <${componentName} size="sm" aria-label="descrição do ícone" />
 */
export function ${componentName}(props: IconProps): JSX.Element {
  return (
    <BaseIcon {...props}>
      ${innerSVG}
    </BaseIcon>
  )
}
`
}

function manifestTemplate(existingEntries, newEntries) {
  const allEntries = { ...existingEntries }

  let addedCount = 0
  for (const [name, entry] of Object.entries(newEntries)) {
    if (!allEntries[name]) {
      allEntries[name] = entry
      addedCount++
    }
  }

  const lines = Object.entries(allEntries)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, entry]) => {
      const replacedBy = entry.replacedBy ? `, replacedBy: '${entry.replacedBy}'` : ''
      return `  ${name}: { category: '${entry.category}', status: '${entry.status}'${replacedBy} },`
    })
    .join('\n')

  return {
    content: `/**
 * Cycle Design — Icon Manifest
 *
 * Registro central de todos os ícones do sistema.
 * Este arquivo é MANTIDO MANUALMENTE — o build só adiciona novos ícones.
 *
 * Para publicar um ícone:
 * 1. Mude o status de 'experimental' para 'stable'
 * 2. Rode: npm run build:icons (regenera os barrels)
 *
 * Para deprecar um ícone:
 * 1. Mude o status para 'deprecated'
 * 2. Adicione replacedBy: 'NomeDoIconeNovo'
 */
import type { IconManifestEntry } from './types'

export const ICON_MANIFEST: Record<string, IconManifestEntry> = {
${lines}
}
`,
    addedCount,
  }
}

function indexTemplate(componentNames, isExperimental = false) {
  const header = isExperimental
    ? `/**
 * Cycle Design — Icons (experimental)
 *
 * Ícones em desenvolvimento — podem mudar sem aviso.
 * Use com cuidado. Não recomendado para produção.
 *
 * AUTO-GERADO pelo script build:icons. Não edite manualmente.
 */`
    : `/**
 * Cycle Design — Icons (stable)
 *
 * Importação recomendada:
 * import { HomeIcon, PlusIcon } from '@cycle/design/icons'
 *
 * AUTO-GERADO pelo script build:icons. Não edite manualmente.
 */

// Tipos sempre disponíveis
export type { IconProps, IconSize, IconCategory, IconStatus } from './types'`

  if (componentNames.length === 0) {
    return header + '\n\n// Nenhum ícone ainda.\n'
  }

  const exports = componentNames
    .sort()
    .map((name) => `export { ${name} } from './_generated/${name}'`)
    .join('\n')

  return `${header}\n\n${exports}\n`
}

// ─── Parser de manifest existente ────────────────────────────────────────────

function parseExistingManifest(filePath) {
  if (!existsSync(filePath)) return {}

  const content = readFileSync(filePath, 'utf-8')
  const entries = {}

  // Extrai entradas do objeto ICON_MANIFEST
  const matches = content.matchAll(
    /(\w+Icon):\s*\{\s*category:\s*'([^']+)',\s*status:\s*'([^']+)'(?:,\s*replacedBy:\s*'([^']+)')?\s*\}/g
  )

  for (const match of matches) {
    const [, name, category, status, replacedBy] = match
    entries[name] = { category, status, ...(replacedBy ? { replacedBy } : {}) }
  }

  return entries
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n🔨 Cycle Design — build:icons\n')

  // 1. Encontrar todos os SVGs
  const svgFiles = await glob('**/*.svg', { cwd: PATHS.source, absolute: true })

  if (svgFiles.length === 0) {
    console.log('⚠️  Nenhum SVG encontrado em components/icons/_source/')
    console.log('   Exporte os SVGs do Figma e organize por categoria:')
    console.log('   components/icons/_source/{categoria}/{nome}.svg\n')
    return
  }

  console.log(`📂 ${svgFiles.length} SVG(s) encontrado(s)\n`)

  const newManifestEntries = {}
  let successCount = 0
  let errorCount = 0

  // 2. Processar cada SVG
  for (const filePath of svgFiles) {
    const filename = basename(filePath)
    const componentName = toComponentName(filename)
    const category = extractCategory(filePath)
    const outputPath = join(PATHS.generated, `${componentName}.tsx`)

    try {
      const rawSVG = readFileSync(filePath, 'utf-8')

      // Otimizar com SVGO
      const { data: optimizedSVG } = optimize(rawSVG, {
        path: filePath,
        ...SVGO_CONFIG,
      })

      // Extrair conteúdo interno e converter atributos para JSX
      const innerSVG = toJSXAttributes(extractInnerSVG(optimizedSVG))

      if (!innerSVG) {
        console.warn(`  ⚠️  ${filename} — SVG vazio após otimização, pulando`)
        errorCount++
        continue
      }

      // Gerar componente
      const component = componentTemplate(componentName, innerSVG)
      writeFileSync(outputPath, component, 'utf-8')

      // Registrar no manifest (novos entram como experimental)
      newManifestEntries[componentName] = { category, status: 'experimental' }

      console.log(`  ✅ ${componentName} (${category})`)
      successCount++
    } catch (err) {
      console.error(`  ❌ ${filename} — ${err.message}`)
      errorCount++
    }
  }

  // 3. Atualizar manifest
  const existingEntries = parseExistingManifest(PATHS.manifest)
  const { content: manifestContent, addedCount } = manifestTemplate(
    existingEntries,
    newManifestEntries
  )
  writeFileSync(PATHS.manifest, manifestContent, 'utf-8')

  // 4. Regenerar barrels a partir do manifest atualizado
  // Existente sempre prevalece — preserva status definido manualmente (stable, deprecated)
  // Novos ícones entram como experimental
  const allEntries = { ...newManifestEntries, ...existingEntries }

  const stableIcons = Object.entries(allEntries)
    .filter(([, e]) => e.status === 'stable')
    .map(([name]) => name)

  const experimentalIcons = Object.entries(allEntries)
    .filter(([, e]) => e.status === 'experimental')
    .map(([name]) => name)

  writeFileSync(PATHS.index, indexTemplate(stableIcons, false), 'utf-8')
  writeFileSync(PATHS.indexExp, indexTemplate(experimentalIcons, true), 'utf-8')

  // 5. Resumo
  console.log('\n─────────────────────────────────────')
  console.log(`  ✅ ${successCount} componente(s) gerado(s)`)
  if (errorCount > 0) console.log(`  ❌ ${errorCount} erro(s)`)
  if (addedCount > 0) console.log(`  📋 ${addedCount} novo(s) ícone(s) no manifest (status: experimental)`)
  console.log(`  📦 ${stableIcons.length} stable / ${experimentalIcons.length} experimental`)
  console.log('\n  Para publicar um ícone:')
  console.log("  → Edite src/icons/manifest.ts: status: 'stable'")
  console.log('  → Rode: npm run build:icons\n')
}

main().catch((err) => {
  console.error('\n❌ Falha no build:', err)
  process.exit(1)
})
