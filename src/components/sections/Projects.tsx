'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Folder, Eye } from 'lucide-react'
import { projects, type Project } from '@/data/portfolio'
import { SectionTitle, Badge, Button, ProjectModal } from '@/components/ui'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
]

function ProjectCard({
  project,
  index,
  featured = false,
  onViewDetails,
}: {
  project: Project
  index: number
  featured?: boolean
  onViewDetails: (project: Project) => void
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        'group relative bento-card rounded-2xl bg-background-secondary border border-border overflow-hidden',
        featured ? 'md:col-span-2' : ''
      )}
    >
      {/* Project Image / Placeholder */}
      <div 
        className="relative h-48 md:h-56 overflow-hidden bg-background-tertiary cursor-pointer"
        onClick={() => project.images && project.images.length > 0 && onViewDetails(project)}
      >
        {project.image ? (
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Folder className="w-12 h-12 text-foreground-subtle mx-auto mb-2" />
              <span className="text-xs text-foreground-subtle font-mono">
                {project.category}
              </span>
            </div>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent opacity-60" />
        
        {/* View Details Button - Only show if project has images */}
        {project.images && project.images.length > 0 && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/40 backdrop-blur-sm">
            <div className="px-4 py-2 rounded-lg bg-accent text-background font-medium text-sm flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Ver Imagens
            </div>
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="accent">Destaque</Badge>
          </div>
        )}

        {/* Links overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground-muted hover:text-accent transition-colors"
              aria-label="Ver código no GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground-muted hover:text-accent transition-colors"
              aria-label="Ver projeto ao vivo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-heading font-bold group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-foreground-subtle font-mono whitespace-nowrap">
            {new Date(project.date).toLocaleDateString('pt-BR', {
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>

        <p className="text-foreground-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="muted" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="muted" size="sm">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </div>

      {/* Bottom border glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.article>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6)

  const featuredProjects = filteredProjects.filter((p) => p.featured)
  const regularProjects = filteredProjects.filter((p) => !p.featured)
  const orderedProjects = [...featuredProjects, ...regularProjects]
  const finalProjects = showAll
    ? orderedProjects
    : orderedProjects.slice(0, 6)

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          badge="Portfólio"
          title="Projetos em destaque"
          description="Uma seleção dos meus trabalhos mais recentes e relevantes"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setShowAll(false)
              }}
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {finalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured={project.featured && index < 2}
                onViewDetails={handleViewDetails}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button
              variant="secondary"
              onClick={() => setShowAll(!showAll)}
              rightIcon={
                <ArrowRight
                  className={cn(
                    'w-4 h-4 transition-transform',
                    showAll && 'rotate-90'
                  )}
                />
              }
            >
              {showAll ? 'Mostrar menos' : 'Ver todos os projetos'}
            </Button>
          </motion.div>
        )}

        {/* Empty State */}
        {finalProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Folder className="w-16 h-16 text-foreground-subtle mx-auto mb-4" />
            <p className="text-foreground-muted">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
