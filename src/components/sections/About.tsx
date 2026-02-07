'use client'

import { motion } from 'framer-motion'
import { Code2, Coffee, Rocket, Sparkles, Calendar, Award } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { SectionTitle } from '@/components/ui'

const stats = [
  { label: 'Anos de Experiência', value: '4+', icon: Calendar },
  { label: 'Projetos Reais', value: '5', icon: Rocket },
  { label: 'Linhas de Código', value: '50K+', icon: Code2 },
  { label: 'Cafés Tomados', value: '∞', icon: Coffee },
]

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Código limpo, testável e documentado. Sempre.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Aplicações otimizadas para velocidade e escalabilidade.',
  },
  {
    icon: Sparkles,
    title: 'UX First',
    description: 'Interfaces intuitivas com foco na experiência do usuário.',
  },
  {
    icon: Award,
    title: 'Best Practices',
    description: 'SOLID, DRY, KISS aplicados em cada linha de código.',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          badge="Sobre Mim"
          title="Transformando café em código desde 2021"
          description="Formado em ADS, apaixonado por criar soluções que fazem a diferença"
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content - Bento Style */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bento-card p-6 md:p-8 rounded-2xl bg-background-secondary border border-border"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-heading font-bold text-accent">
                    {personalInfo.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-1">
                    {personalInfo.name}
                  </h3>
                  <p className="text-accent text-sm font-mono">{personalInfo.role}</p>
                </div>
              </div>

              <div className="space-y-4 text-foreground-muted leading-relaxed">
                {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card p-5 rounded-2xl bg-background-secondary border border-border group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                      <stat.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-heading font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground-subtle">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Highlights - Right Side */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bento-card p-5 rounded-2xl bg-background-secondary border border-border group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-background-tertiary border border-border group-hover:border-accent/30 group-hover:bg-accent/10 transition-all">
                    <highlight.icon className="w-5 h-5 text-foreground-muted group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1 group-hover:text-accent transition-colors">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-foreground-subtle leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Code Snippet Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bento-card p-5 rounded-2xl bg-background-secondary border border-border"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-foreground-subtle font-mono ml-2">
                  developer.ts
                </span>
              </div>
              <pre className="text-sm font-mono overflow-x-auto">
                <code className="text-foreground-muted">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = {'{'}
                  {'\n'}
                  {'  '}
                  <span className="text-accent">name</span>:{' '}
                  <span className="text-yellow-300">&quot;Guilherme&quot;</span>,{'\n'}
                  {'  '}
                  <span className="text-accent">passion</span>:{' '}
                  <span className="text-yellow-300">&quot;coding&quot;</span>,{'\n'}
                  {'  '}
                  <span className="text-accent">coffee</span>:{' '}
                  <span className="text-orange-400">Infinity</span>,{'\n'}
                  {'  '}
                  <span className="text-accent">available</span>:{' '}
                  <span className="text-green-400">true</span>
                  {'\n'}
                  {'}'};
                </code>
              </pre>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
