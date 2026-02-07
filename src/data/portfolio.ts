/**
 * Arquivo de dados do portfólio
 * Edite este arquivo para personalizar seu portfólio
 */

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image?: string
  images?: string[]
  technologies: string[]
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile' | 'other'
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  date: string
}

export interface Skill {
  name: string
  icon: string
  category: 'language' | 'frontend' | 'backend' | 'database' | 'tools' | 'other'
  level: 'expert' | 'advanced' | 'intermediate'
  color: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

// ===== DADOS PESSOAIS =====
export const personalInfo = {
  name: 'Guilherme Salles',
  role: 'Desenvolvedor Full Stack',
  tagline: 'Transformando ideias em código de alta performance',
  email: 'contato@guilhermesalles.dev',
  location: 'Brasil',
  bio: `Desenvolvedor Full Stack com 4 anos de experiência, formado em Análise e 
Desenvolvimento de Sistemas. Especializado em criar soluções web completas 
utilizando Python, React, Next.js e FastAPI.

Focado em entregar projetos que combinam código limpo, performance e 
experiências de usuário memoráveis. Sempre em busca de novos desafios 
e aprendizado contínuo.`,
  shortBio: 'Full Stack Developer com 4 anos de experiência, formado em ADS. Especializado em React, Next.js e Python.',
  avatar: '/avatar.jpg', // Adicione sua foto aqui
  resumeUrl: '/resume.pdf', // Adicione seu currículo aqui
}

// ===== REDES SOCIAIS =====
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/salles75',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/guiisalles',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/salles.dev/',
    icon: 'instagram',
  },
]

// ===== SKILLS / TECNOLOGIAS =====
export const skills: Skill[] = [
  // Languages
  {
    name: 'Python',
    icon: 'python',
    category: 'language',
    level: 'expert',
    color: '#3776ab',
  },
  {
    name: 'TypeScript',
    icon: 'typescript',
    category: 'language',
    level: 'expert',
    color: '#3178c6',
  },
  {
    name: 'JavaScript',
    icon: 'javascript',
    category: 'language',
    level: 'expert',
    color: '#f7df1e',
  },
  // Frontend
  {
    name: 'React',
    icon: 'react',
    category: 'frontend',
    level: 'expert',
    color: '#61dafb',
  },
  {
    name: 'Next.js',
    icon: 'nextjs',
    category: 'frontend',
    level: 'expert',
    color: '#ffffff',
  },
  {
    name: 'Angular',
    icon: 'angular',
    category: 'frontend',
    level: 'advanced',
    color: '#dd0031',
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwind',
    category: 'frontend',
    level: 'expert',
    color: '#06b6d4',
  },
  // Backend
  {
    name: 'FastAPI',
    icon: 'fastapi',
    category: 'backend',
    level: 'expert',
    color: '#009688',
  },
  {
    name: 'Node.js',
    icon: 'nodejs',
    category: 'backend',
    level: 'advanced',
    color: '#339933',
  },
  // Database
  {
    name: 'PostgreSQL',
    icon: 'postgresql',
    category: 'database',
    level: 'advanced',
    color: '#4169e1',
  },
  {
    name: 'MongoDB',
    icon: 'mongodb',
    category: 'database',
    level: 'advanced',
    color: '#47a248',
  },
  {
    name: 'Redis',
    icon: 'redis',
    category: 'database',
    level: 'intermediate',
    color: '#dc382d',
  },
  // Tools
  {
    name: 'Docker',
    icon: 'docker',
    category: 'tools',
    level: 'advanced',
    color: '#2496ed',
  },
  {
    name: 'Git',
    icon: 'git',
    category: 'tools',
    level: 'expert',
    color: '#f05032',
  },
  {
    name: 'AWS',
    icon: 'aws',
    category: 'tools',
    level: 'intermediate',
    color: '#ff9900',
  },
]

// ===== PROJETOS =====
export const projects: Project[] = [
  {
    id: 'eclat-ecommerce',
    title: 'Eclat E-commerce',
    description: 'Plataforma completa de e-commerce com design moderno, carrinho de compras e gestão de produtos.',
    longDescription: `E-commerce completo desenvolvido com foco em experiência 
    do usuário e performance. Apresenta catálogo de produtos, sistema de 
    carrinho, checkout integrado e painel administrativo para gestão.`,
    image: '/img/ECLAT/HOME.png',
    images: [
      '/img/ECLAT/HOME.png',
      '/img/ECLAT/2.png',
      '/img/ECLAT/3.png',
      '/img/ECLAT/4.png',
      '/img/ECLAT/5.png',
      '/img/ECLAT/6.png',
      '/img/ECLAT/7.png',
      '/img/ECLAT/carrinho.png',
    ],
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Stripe'],
    category: 'fullstack',
    githubUrl: 'https://github.com/salles75/eclat-ecommerce',
    featured: true,
    date: '2024-05',
  },
  {
    id: 'lumina-port',
    title: 'Lumina Portfolio',
    description: 'Template de portfólio moderno com design minimalista, animações suaves e tema claro elegante.',
    longDescription: `Um template de portfólio profissional desenvolvido com 
    foco em design limpo e experiência de usuário fluida. Apresenta transições 
    elegantes, layout responsivo e estrutura otimizada para apresentação pessoal.`,
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Framer Motion'],
    category: 'frontend',
    githubUrl: 'https://github.com/salles75/lumina-port',
    featured: true,
    date: '2024-01',
  },
  {
    id: 'vertex-cripto-port',
    title: 'Vertex Crypto',
    description: 'Dashboard de criptomoedas com interface futurista, gráficos interativos e tracking de portfólio.',
    longDescription: `Aplicação web para acompanhamento de criptomoedas com 
    design inspirado em interfaces de trading profissionais. Inclui visualização 
    de dados em tempo real, gráficos dinâmicos e gestão de portfólio cripto.`,
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    category: 'frontend',
    githubUrl: 'https://github.com/salles75/vertex-cripto-port',
    featured: true,
    date: '2024-02',
  },
  {
    id: 'velo-port',
    title: 'Velo Kanban',
    description: 'Aplicação estilo Kanban para gestão de tarefas e projetos com interface intuitiva e drag-and-drop.',
    longDescription: `Sistema de gerenciamento de projetos inspirado no método 
    Kanban, com funcionalidades de arrastar e soltar, organização por colunas 
    e acompanhamento visual do progresso das tarefas.`,
    technologies: ['TypeScript', 'React', 'Tailwind CSS'],
    category: 'frontend',
    githubUrl: 'https://github.com/salles75/velo-port',
    featured: true,
    date: '2024-03',
  },
  {
    id: 'vita-port',
    title: 'Vita Portfolio',
    description: 'Template de portfólio com foco em saúde e bem-estar, design clean e seções personalizáveis.',
    longDescription: `Portfólio temático desenvolvido com estética voltada para 
    profissionais da área de saúde e bem-estar. Design acolhedor, paleta de 
    cores suaves e estrutura flexível para diferentes tipos de conteúdo.`,
    technologies: ['TypeScript', 'React', 'Tailwind CSS'],
    category: 'frontend',
    githubUrl: 'https://github.com/salles75/vita-port',
    featured: false,
    date: '2024-04',
  },
]

// ===== EXPERIÊNCIA =====
export const experiences = [
  {
    company: 'Tech Company',
    role: 'Senior Full Stack Developer',
    period: '2023 - Presente',
    description: 'Desenvolvimento de aplicações web escaláveis com React, Next.js e Python.',
    technologies: ['React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    company: 'Startup XYZ',
    role: 'Full Stack Developer',
    period: '2021 - 2023',
    description: 'Construção de MVPs e features core para produtos SaaS.',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'AWS'],
  },
]

// ===== NAVEGAÇÃO =====
export const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]
