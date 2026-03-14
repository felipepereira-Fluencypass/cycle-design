import { forwardRef, useState } from 'react'
import type { HTMLAttributes, CSSProperties } from 'react'

export type AvatarSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type AvatarStatus = 'online' | 'offline' | 'busy'

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** URL da imagem. */
  src?: string
  /** Texto alternativo para a imagem. */
  alt?: string
  /** Tamanho. @default 'md' */
  size?: AvatarSize
  /** Iniciais exibidas quando nao ha imagem. @default '?' */
  fallback?: string
  /** Indicador de status. */
  status?: AvatarStatus
}

const SIZE_PX: Record<AvatarSize, number> = {
  xl: 56,
  lg: 48,
  md: 40,
  sm: 32,
  xs: 24,
}

const STATUS_LABEL: Record<AvatarStatus, string> = {
  online: 'Online',
  offline: 'Offline',
  busy: 'Ocupado',
}

/**
 * Avatar — imagem de perfil com fallback e status.
 *
 * @example
 * <Avatar src="/photo.jpg" alt="Maria" size="lg" />
 * <Avatar fallback="MF" status="online" />
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  {
    src,
    alt = '',
    size = 'md',
    fallback = '?',
    status,
    className,
    style,
    ...rest
  },
  ref,
) {
  const [imgError, setImgError] = useState(false)
  const showImage = src && !imgError

  const classNames = [
    'cd-avatar',
    `cd-avatar--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const sizeVars = {
    '--_avatar-size': `${SIZE_PX[size]}px`,
  } as CSSProperties

  return (
    <span
      ref={ref}
      className={classNames}
      style={{ ...sizeVars, ...style } as CSSProperties}
      role="img"
      aria-label={alt || fallback}
      {...rest}
    >
      {showImage ? (
        <img
          className="cd-avatar__img"
          src={src}
          alt=""
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="cd-avatar__fallback" aria-hidden="true">
          {fallback.slice(0, 2).toUpperCase()}
        </span>
      )}
      {status && (
        <span
          className={`cd-avatar__status cd-avatar__status--${status}`}
          aria-label={STATUS_LABEL[status]}
          role="status"
        />
      )}
    </span>
  )
})
