'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills, type Skill } from '@/data/portfolio'
import { SectionTitle } from '@/components/ui'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'language', label: 'Linguagens' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Ferramentas' },
]

const levelColors = {
  expert: 'from-accent to-accent-hover',
  advanced: 'from-blue-500 to-blue-400',
  intermediate: 'from-purple-500 to-purple-400',
}

const levelLabels = {
  expert: 'Expert',
  advanced: 'Avançado',
  intermediate: 'Intermediário',
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className="tech-badge p-4 rounded-xl bg-background-secondary border border-border hover:border-border-hover transition-all cursor-default">
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"
          style={{ backgroundColor: `${skill.color}20` }}
        />

        <div className="flex items-center gap-3">
          {/* Icon placeholder - usando primeira letra */}
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-transform group-hover:scale-110"
            style={{
              backgroundColor: `${skill.color}15`,
              color: skill.color,
            }}
          >
            {skill.name.charAt(0)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-medium text-foreground truncate">
                {skill.name}
              </h4>
              <span
                className={cn(
                  'px-2 py-0.5 text-[10px] font-mono rounded-full bg-gradient-to-r text-white',
                  levelColors[skill.level]
                )}
              >
                {levelLabels[skill.level]}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-2 h-1 bg-background-tertiary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width:
                    skill.level === 'expert'
                      ? '95%'
                      : skill.level === 'advanced'
                      ? '80%'
                      : '65%',
                }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          badge="Skills & Tecnologias"
          title="Meu arsenal tecnológico"
          description="Ferramentas e linguagens que uso para transformar ideias em realidade"
          align="center"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-all',
                activeCategory === category.id
                  ? 'bg-accent text-background'
                  : 'bg-background-secondary text-foreground-muted hover:text-foreground border border-border hover:border-border-hover'
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground-subtle text-sm">
            Sempre aprendendo novas tecnologias e aprimorando as existentes.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-foreground-subtle">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-accent-hover" />
              Expert
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-400" />
              Avançado
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-400" />
              Intermediário
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
