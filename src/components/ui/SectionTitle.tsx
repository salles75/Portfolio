'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  badge?: string
  title: string
  description?: string | ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  badge,
  title,
  description,
  align = 'left',
  className,
}: SectionTitleProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={cn('max-w-2xl mb-12', alignStyles[align], className)}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="inline-block px-3 py-1 mb-4 text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full"
        >
          {badge}
        </motion.span>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4">
        {title}
      </h2>
      
      {description && (
        <p className="text-foreground-muted text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
