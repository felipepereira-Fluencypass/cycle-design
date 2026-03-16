/**
 * Token Contract Tests
 *
 * Estes testes verificam que os tokens CSS resolvem para os valores corretos.
 * Se alguém alterar um token por engano, o teste quebra antes de chegar a produção.
 *
 * Fonte de verdade: Figma → tokens/*.css → estes testes
 */
import { describe, it, expect, beforeAll } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

// Lê o CSS compilado dos tokens para validar os valores
let tokensCss: string

beforeAll(() => {
  // Concatena todos os arquivos de token
  const tokensDir = path.resolve(__dirname, '../tokens')
  const files = [
    'spacing-tokens.css',
    'border-width-tokens.css',
    'radius-tokens.css',
    'shadow-tokens.css',
    'opacity-tokens.css',
    'motion-tokens.css',
    'z-index-tokens.css',
    'typography-primitives.css',
  ]
  tokensCss = files
    .map((f) => {
      const filePath = path.join(tokensDir, f)
      return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : ''
    })
    .join('\n')
})

/** Extrai o valor de um token do CSS cru */
function getTokenValue(token: string): string | null {
  // Match: --token-name: value;
  const regex = new RegExp(`${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*([^;]+);`)
  const match = tokensCss.match(regex)
  return match ? match[1].trim() : null
}

describe('Token Contract — Spacing', () => {
  const spacingTokens: Record<string, string> = {
    '--spacing-quarck': '2px',
    '--spacing-nano': '4px',
    '--spacing-micro': '8px',
    '--spacing-mini': '12px',
    '--spacing-3xs': '16px',
    '--spacing-2xs': '20px',
    '--spacing-xs': '24px',
    '--spacing-sm': '32px',
    '--spacing-md': '40px',
    '--spacing-lg': '48px',
    '--spacing-xl': '56px',
    '--spacing-2xl': '64px',
    '--spacing-3xl': '80px',
    '--spacing-big': '120px',
    '--spacing-huge': '160px',
    '--spacing-giant': '200px',
  }

  it.each(Object.entries(spacingTokens))('%s should equal %s', (token, expected) => {
    expect(getTokenValue(token)).toBe(expected)
  })
})

describe('Token Contract — Spacing Inset', () => {
  const insetTokens: Record<string, string> = {
    '--spacing-inset-2xs': '4px',
    '--spacing-inset-xs': '8px',
    '--spacing-inset-sm': '12px',
    '--spacing-inset-md': '16px',
    '--spacing-inset-lg': '24px',
    '--spacing-inset-xl': '32px',
    '--spacing-inset-2xl': '40px',
  }

  it.each(Object.entries(insetTokens))('%s should equal %s', (token, expected) => {
    expect(getTokenValue(token)).toBe(expected)
  })
})

describe('Token Contract — Border Width', () => {
  const borderTokens: Record<string, string> = {
    '--border-none': '0px',
    '--border-hairline': '1px',
    '--border-thin': '2px',
    '--border-thick': '4px',
    '--border-heavy': '8px',
  }

  it.each(Object.entries(borderTokens))('%s should equal %s', (token, expected) => {
    expect(getTokenValue(token)).toBe(expected)
  })
})

describe('Token Contract — Radius', () => {
  const radiusTokens: Record<string, string> = {
    '--radius-none': '0px',
    '--radius-xs': '4px',
    '--radius-sm': '8px',
    '--radius-md': '12px',
    '--radius-lg': '16px',
    '--radius-xl': '20px',
    '--radius-xxl': '24px',
    '--radius-pill': '500px',
    '--radius-circular': '1000px',
  }

  it.each(Object.entries(radiusTokens))('%s should equal %s', (token, expected) => {
    expect(getTokenValue(token)).toBe(expected)
  })
})

describe('Token Contract — Opacity', () => {
  const opacityTokens: Record<string, string> = {
    '--opacity-transparent': '0',
    '--opacity-semitransparent': '0.08',
    '--opacity-light': '0.16',
    '--opacity-medium': '0.32',
    '--opacity-intense': '0.64',
    '--opacity-semiopaque': '0.72',
    '--opacity-opaque': '1',
  }

  it.each(Object.entries(opacityTokens))('%s should equal %s', (token, expected) => {
    expect(getTokenValue(token)).toBe(expected)
  })
})

describe('Token Contract — Motion Duration', () => {
  const durationTokens: Record<string, string> = {
    '--duration-instant': '0ms',
    '--duration-fast': '100ms',
    '--duration-normal': '200ms',
    '--duration-slow': '300ms',
    '--duration-slower': '500ms',
  }

  it.each(Object.entries(durationTokens))('%s should equal %s', (token, expected) => {
    expect(getTokenValue(token)).toBe(expected)
  })
})

describe('Token Contract — Z-Index', () => {
  const zTokens: Record<string, string> = {
    '--z-base': '0',
    '--z-dropdown': '100',
    '--z-sticky': '200',
    '--z-overlay': '300',
    '--z-modal': '400',
    '--z-popover': '500',
    '--z-toast': '600',
    '--z-tooltip': '700',
  }

  it.each(Object.entries(zTokens))('%s should equal %s', (token, expected) => {
    expect(getTokenValue(token)).toBe(expected)
  })
})

describe('Token Contract — Typography Primitives', () => {
  it('--font-family-body should use Open Sans', () => {
    const value = getTokenValue('--font-family-body')
    expect(value).toContain('Open Sans')
  })

  it('--font-family-mono should use Fira Code', () => {
    const value = getTokenValue('--font-family-mono')
    expect(value).toContain('Fira Code')
  })

  const fontWeights: Record<string, string> = {
    '--font-weight-light': '300',
    '--font-weight-regular': '400',
    '--font-weight-semibold': '600',
    '--font-weight-bold': '700',
    '--font-weight-extrabold': '800',
  }

  it.each(Object.entries(fontWeights))('%s should equal %s', (token, expected) => {
    expect(getTokenValue(token)).toBe(expected)
  })
})
