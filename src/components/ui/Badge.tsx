'use client'

import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: 'default' | 'accent' | 'outline' | 'muted'
  size?: 'sm' | 'md'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, variant = 'default', size = 'sm', ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium font-mono
      rounded-full
      whitespace-nowrap
      transition-all duration-200
    `

    const variants = {
      default: 'bg-background-tertiary text-foreground-muted border border-border',
      accent: 'bg-accent/10 text-accent border border-accent/20',
      outline: 'bg-transparent text-foreground-muted border border-border',
      muted: 'bg-background-secondary text-foreground-subtle',
    }

    const sizes = {
      sm: 'px-2.5 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
    }

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
