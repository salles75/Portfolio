'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react'
import { type Project } from '@/data/portfolio'
import { Badge } from './Badge'
import { Button } from './Button'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageMaximized, setIsImageMaximized] = useState(false)

  // Declarar variáveis antes dos useEffects para evitar erro de inicialização
  const images = project?.images || (project?.image ? [project.image] : [])
  const hasMultipleImages = images.length > 1

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setCurrentImageIndex(0)
      setIsImageMaximized(false)
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isImageMaximized) {
          setIsImageMaximized(false)
        } else {
          onClose()
        }
      }
      if (hasMultipleImages) {
        if (e.key === 'ArrowLeft') prevImage()
        if (e.key === 'ArrowRight') nextImage()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, hasMultipleImages, isImageMaximized])

  if (!project) return null

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/95 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-background-secondary border border-border rounded-2xl shadow-2xl"
          >
            {/* Close & Maximize Buttons */}
            <div className="sticky top-4 right-4 z-10 ml-auto flex items-center gap-2">
              {images.length > 0 && (
                <button
                  onClick={() => setIsImageMaximized(!isImageMaximized)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-background-tertiary border border-border text-foreground-muted hover:text-foreground hover:border-accent/50 transition-all"
                  aria-label={isImageMaximized ? 'Minimizar imagem' : 'Maximizar imagem'}
                >
                  {isImageMaximized ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </button>
              )}
              <button
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background-tertiary border border-border text-foreground-muted hover:text-foreground hover:border-accent/50 transition-all"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 pt-0">
              {/* Image Gallery */}
              {images.length > 0 && (
                <div className="relative mb-8 -mx-8 -mt-8">
                  <div className="relative aspect-video bg-background-tertiary overflow-hidden">
                    <motion.img
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={images[currentImageIndex]}
                      alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23262626" width="800" height="600"/%3E%3Ctext fill="%23737373" font-family="system-ui" font-size="24" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle"%3EImagem não disponível%3C/text%3E%3C/svg%3E'
                      }}
                    />

                    {/* Navigation Arrows */}
                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground-muted hover:text-foreground hover:border-accent/50 transition-all"
                          aria-label="Imagem anterior"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground-muted hover:text-foreground hover:border-accent/50 transition-all"
                          aria-label="Próxima imagem"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-sm text-foreground-muted font-mono">
                          {currentImageIndex + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {hasMultipleImages && (
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                      {images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? 'border-accent'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="space-y-6">
                {/* Title & Category */}
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-2">
                    {project.title}
                  </h2>
                  <Badge variant="accent">{project.category}</Badge>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-sm font-medium text-foreground-subtle uppercase tracking-wide mb-2">
                    Sobre o Projeto
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-medium text-foreground-subtle uppercase tracking-wide mb-3">
                    Tecnologias
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="muted">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.githubUrl && (
                    <Button
                      variant="primary"
                      leftIcon={<Github className="w-4 h-4" />}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      Ver no GitHub
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      leftIcon={<ExternalLink className="w-4 h-4" />}
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      Ver Projeto ao Vivo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        )}
      </AnimatePresence>

      {/* Maximized Image Overlay */}
      <AnimatePresence>
        {isImageMaximized && isOpen && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setIsImageMaximized(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsImageMaximized(false)}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground hover:text-accent transition-all"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground hover:text-accent transition-all z-10"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground hover:text-accent transition-all z-10"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {hasMultipleImages && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground-muted font-mono text-sm z-10">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}

            {/* Image Container - Altura ajustada para caber na tela */}
            <div className="w-full flex items-center justify-center" style={{ height: 'calc(100vh - 200px)' }}>
              <motion.img
                key={`maximized-${currentImageIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                src={images[currentImageIndex]}
                alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                className="max-w-[90vw] max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Thumbnails */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto pb-2 scrollbar-hide max-w-[90%] z-10">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(index)
                    }}
                    className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-accent ring-2 ring-accent/50'
                        : 'border-border opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Hint */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-foreground-subtle text-sm opacity-50 pointer-events-none">
              Pressione ESC ou clique fora para fechar
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
