import { forwardRef } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'

export type CardElevation = 'flat' | 'sm' | 'md' | 'lg'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Shadow elevation. @default 'sm' */
  elevation?: CardElevation
  /** Internal padding. @default 'md' */
  padding?: CardPadding
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Card — container com elevacao e padding variaveis.
 *
 * @example
 * <Card>
 *   <Card.Header>Titulo</Card.Header>
 *   <Card.Body>Conteudo</Card.Body>
 *   <Card.Footer>Acoes</Card.Footer>
 * </Card>
 */
export const Card = Object.assign(
  forwardRef<HTMLDivElement, CardProps>(function Card(
    {
      elevation = 'sm',
      padding = 'md',
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const classNames = [
      'cd-card',
      `cd-card--elevation-${elevation}`,
      `cd-card--padding-${padding}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div ref={ref} className={classNames} {...rest}>
        {children}
      </div>
    )
  }),
  {
    Header: forwardRef<HTMLDivElement, CardHeaderProps>(function CardHeader(
      { className, children, ...rest },
      ref,
    ) {
      return (
        <div ref={ref} className={`cd-card__header ${className ?? ''}`.trim()} {...rest}>
          {children}
        </div>
      )
    }),
    Body: forwardRef<HTMLDivElement, CardBodyProps>(function CardBody(
      { className, children, ...rest },
      ref,
    ) {
      return (
        <div ref={ref} className={`cd-card__body ${className ?? ''}`.trim()} {...rest}>
          {children}
        </div>
      )
    }),
    Footer: forwardRef<HTMLDivElement, CardFooterProps>(function CardFooter(
      { className, children, ...rest },
      ref,
    ) {
      return (
        <div ref={ref} className={`cd-card__footer ${className ?? ''}`.trim()} {...rest}>
          {children}
        </div>
      )
    }),
  },
)
