'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'
import { SectionTitle, Button, Card } from '@/components/ui'

interface FormData {
  name: string
  email: string
  message: string
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: personalInfo.location,
  },
  {
    icon: Clock,
    label: 'Disponibilidade',
    value: 'Seg - Sex, 9h às 18h',
  },
]

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simulação de envio - substitua por sua lógica real
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          badge="Contato"
          title="Vamos trabalhar juntos?"
          description="Estou sempre aberto a novos projetos e oportunidades interessantes"
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-xl bg-background-secondary border border-border hover:border-accent/30 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-subtle mb-1">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-background-secondary border border-border">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-subtle mb-1">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-foreground-subtle mb-4">
                Ou me encontre nas redes:
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-background-secondary border border-border text-foreground-muted hover:text-accent hover:border-accent/30 transition-all"
                    aria-label={link.name}
                  >
                    <span className="text-sm font-medium">{link.name.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="p-6 md:p-8" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground-muted mb-2"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background-tertiary border border-border text-foreground placeholder:text-foreground-subtle focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground-muted mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background-tertiary border border-border text-foreground placeholder:text-foreground-subtle focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground-muted mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background-tertiary border border-border text-foreground placeholder:text-foreground-subtle focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={status === 'sending'}
                  disabled={status === 'sending'}
                  rightIcon={
                    status === 'idle' ? (
                      <Send className="w-4 h-4" />
                    ) : status === 'success' ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : status === 'error' ? (
                      <AlertCircle className="w-4 h-4" />
                    ) : undefined
                  }
                >
                  {status === 'idle' && 'Enviar mensagem'}
                  {status === 'sending' && 'Enviando...'}
                  {status === 'success' && 'Mensagem enviada!'}
                  {status === 'error' && 'Erro ao enviar'}
                </Button>

                <p className="text-xs text-foreground-subtle text-center">
                  Responderei em até 24 horas úteis.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
