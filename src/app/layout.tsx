import type { Metadata, Viewport } from 'next'
import { Syne, Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { personalInfo } from '@/data/portfolio'

// ===== FONTES =====
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

// ===== METADATA =====
export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.role}`,
  description: personalInfo.shortBio,
  keywords: [
    'Desenvolvedor Full Stack',
    'React',
    'Next.js',
    'Python',
    'FastAPI',
    'TypeScript',
    'Portfolio',
    personalInfo.name,
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.shortBio,
    siteName: personalInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.shortBio,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

// ===== ROOT LAYOUT =====
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="pt-BR" 
      className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased">
        {/* Noise overlay para textura */}
        <div className="fixed inset-0 noise-overlay pointer-events-none z-50" />
        
        {/* Grid pattern de fundo */}
        <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
        
        {/* Gradiente radial sutil */}
        <div className="fixed inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Conteúdo principal */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
