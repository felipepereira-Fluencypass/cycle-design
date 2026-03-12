import type { SVGAttributes } from 'react'
import type { IconSize } from './sizes'


export type { IconSize }

/**
 * Categorias de ícones — espelho da organização no Figma.
 * Usado no manifest para documentação, não afeta imports.
 */
export type IconCategory =
  | 'navigation'
  | 'actions'
  | 'status'
  | 'forms'
  | 'files'
  | 'video'
  | 'user'
  | 'language-learning'
  | 'learning-core'
  | 'lesson-formats'
  | 'schedule'
  | 'marketplace'
  | 'technology'

/**
 * Status de publicação do ícone.
 * - stable: publicado, seguro para uso em produção
 * - experimental: criado, pode mudar — importar de /experimental
 * - deprecated: não usar, será removido — ver substituto no manifest
 */
export type IconStatus = 'stable' | 'experimental' | 'deprecated'

/**
 * Entrada no manifest de ícones.
 */
export interface IconManifestEntry {
  category: IconCategory
  status: IconStatus
  /** Nome do componente substituto, quando status = 'deprecated' */
  replacedBy?: string
}

/**
 * Base de props compartilhada por todos os ícones.
 */
type BaseIconSharedProps = Omit<SVGAttributes<SVGSVGElement>, 'aria-label'> & {
  /** Tamanho visual. Define width, height e strokeWidth automaticamente. Default: 'sm' */
  size?: IconSize
}

/**
 * Ícone SEMÂNTICO — comunica algo para o usuário.
 * aria-label é obrigatório.
 *
 * @example <HomeIcon size="sm" aria-label="Ir para a home" />
 */
type SemanticIconProps = BaseIconSharedProps & {
  decorative?: false
  'aria-label': string
}

/**
 * Ícone DECORATIVO — puramente visual, o contexto já comunica o significado.
 * Escondido de leitores de tela via aria-hidden.
 *
 * @example <HomeIcon size="sm" decorative />
 */
type DecorativeIconProps = BaseIconSharedProps & {
  decorative: true
  'aria-label'?: never
}

/**
 * Props de todos os ícones do Cycle Design.
 * TypeScript força aria-label em ícones semânticos em tempo de compilação.
 */
export type IconProps = SemanticIconProps | DecorativeIconProps
