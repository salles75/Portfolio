'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Terminal } from 'lucide-react'
import { personalInfo, navItems, socialLinks } from '@/data/portfolio'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border bg-background-secondary/50">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-accent" />
              </div>
              <span className="font-heading font-bold text-lg">
                {personalInfo.name.split(' ')[0]}
                <span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-xs">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-foreground-muted hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-background-tertiary border border-border text-foreground-muted hover:text-accent hover:border-accent/30 transition-all"
                  aria-label={link.name}
                >
                  <span className="text-xs font-mono">{link.name.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-subtle text-sm flex items-center gap-1">
            © {currentYear} {personalInfo.name}. Feito com{' '}
            <Heart className="w-4 h-4 text-red-500 inline" /> e muito café.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 text-sm text-foreground-muted hover:text-accent transition-colors rounded-lg hover:bg-background-tertiary"
          >
            Voltar ao topo
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </footer>
  )
}
