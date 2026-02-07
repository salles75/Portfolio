'use client'

import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'glass' | 'bordered' | 'elevated'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      variant = 'default',
      hover = true,
      padding = 'md',
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      rounded-2xl
      overflow-hidden
      transition-all duration-300 ease-out
    `

    const variants = {
      default: 'bg-background-secondary border border-border',
      glass: 'glass border border-border/50',
      bordered: 'bg-transparent border border-border',
      elevated: 'bg-background-secondary shadow-xl shadow-black/20',
    }

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    const hoverStyles = hover
      ? 'hover:border-border-hover hover:shadow-lg hover:shadow-black/10 hover:-translate-y-1'
      : ''

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export { Card }
