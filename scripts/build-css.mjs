/**
 * build-css.mjs — Builds CSS assets for the cycle-design npm package.
 *
 * Produces two files in dist/:
 *   tokens.css  — All design tokens (CSS custom properties), inlined.
 *   styles.css  — tokens.css + component CSS (Button, etc.).
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const ROOT = resolve(dirname(__filename), '..')
const DIST = join(ROOT, 'dist')

if (!existsSync(DIST)) mkdirSync(DIST, { recursive: true })

// ─── 1. Build tokens.css (inline all @imports) ─────────────────────────

function inlineCssImports(filePath, seen = new Set()) {
  const abs = resolve(filePath)
  if (seen.has(abs)) return ''
  seen.add(abs)

  const css = readFileSync(abs, 'utf-8')
  const dir = dirname(abs)

  return css.replace(/@import\s+["']([^"']+)["']\s*;/g, (_match, importPath) => {
    const resolved = resolve(dir, importPath)
    return inlineCssImports(resolved, seen)
  })
}

const tokensEntry = join(ROOT, 'tokens', 'index.css')
const tokensCss = inlineCssImports(tokensEntry)

const fullTokensCss = [
  '/* Cycle Design — Tokens */',
  tokensCss,
  ':root {',
  '  font-family: var(--font-family-body, system-ui);',
  '}',
].join('\n')

writeFileSync(join(DIST, 'tokens.css'), fullTokensCss)
console.log('✓ dist/tokens.css')

// ─── 2. Collect component CSS ───────────────────────────────────────────

const componentCssFiles = [
  join(ROOT, 'components', 'Button', 'Button.css'),
  join(ROOT, 'components', 'Checkbox', 'Checkbox.css'),
  join(ROOT, 'components', 'Switch', 'Switch.css'),
  join(ROOT, 'components', 'Alert', 'Alert.css'),
  join(ROOT, 'components', 'Skeleton', 'Skeleton.css'),
  join(ROOT, 'components', 'Spinner', 'Spinner.css'),
]

const componentCss = componentCssFiles
  .filter(f => existsSync(f))
  .map(f => readFileSync(f, 'utf-8'))
  .join('\n')

// ─── 3. Build styles.css (tokens + components) ─────────────────────────

const stylesCss = [
  '/* Cycle Design — Styles (tokens + components) */',
  '',
  fullTokensCss,
  '',
  '/* ── Components ─────────────────────────────────────────── */',
  '',
  componentCss,
].join('\n')

writeFileSync(join(DIST, 'styles.css'), stylesCss)
console.log('✓ dist/styles.css')

console.log('\nCSS build complete.')
