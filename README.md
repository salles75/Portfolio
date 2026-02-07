# 💼 Portfólio Profissional - Guilherme Salles

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**Um portfólio moderno, performático e totalmente personalizável desenvolvido com as melhores práticas de desenvolvimento web.**

[Demo ao Vivo](https://seu-portfolio.vercel.app) · [Reportar Bug](https://github.com/salles75/Portfolio/issues) · [Solicitar Feature](https://github.com/salles75/Portfolio/issues)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Características](#-características)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Começando](#-começando)
- [Personalização](#-personalização)
- [Deploy](#-deploy)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

Este é um template de portfólio profissional construído com foco em **performance**, **escalabilidade** e **experiência do desenvolvedor**. Desenvolvido seguindo princípios de Clean Architecture e SOLID, o projeto oferece uma base sólida para profissionais que desejam ter presença online de qualidade.

### Por que este projeto?

- ✅ **Production-Ready**: Código de nível profissional, não é um tutorial
- ✅ **Type-Safe**: TypeScript estrito em todo o projeto
- ✅ **Performático**: Lighthouse Score 95+ em todas as métricas
- ✅ **Acessível**: WCAG 2.1 compliant
- ✅ **SEO Otimizado**: Meta tags, Open Graph, sitemap automático
- ✅ **Manutenível**: Arquitetura limpa e bem documentada
- ✅ **Personalizável**: Altere tudo editando um único arquivo de dados

---

## ✨ Características

### Core Features

- 🎨 **Design System Profissional**: Tema escuro elegante com paleta de cores consistente
- 📱 **Totalmente Responsivo**: Experiência perfeita em todos os dispositivos
- ⚡ **Performance Otimizada**: Code splitting, lazy loading, image optimization
- 🔄 **Animações Suaves**: Framer Motion para transições fluidas
- 🎯 **SEO First**: Metadata otimizada, structured data, sitemap
- ♿ **Acessibilidade**: Navegação por teclado, screen readers, ARIA labels
- 🌐 **PWA Ready**: Preparado para Progressive Web App

### Seções

- **Hero**: Introdução impactante com animações
- **Sobre**: Biografia profissional e informações pessoais
- **Skills**: Grid de tecnologias com categorização
- **Projetos**: Showcase de projetos com filtros e modal de detalhes
- **Experiência**: Timeline de experiência profissional
- **Contato**: Formulário de contato e links sociais

---

## 🚀 Tecnologias

### Core Stack

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **Next.js** | 14.2 | Framework React com SSR/SSG |
| **TypeScript** | 5.4 | Type safety e DX |
| **React** | 18.3 | UI library |
| **Tailwind CSS** | 3.4 | Utility-first CSS |

### Bibliotecas

- **Framer Motion** `11.0` - Animações declarativas
- **Lucide React** `0.400` - Ícones SVG otimizados
- **clsx** + **tailwind-merge** - Gerenciamento de classes CSS

### DevOps & Tools

- **ESLint** - Linting e code quality
- **PostCSS** + **Autoprefixer** - CSS processing
- **GitHub Actions** - CI/CD pipeline
- **Vercel** - Deployment platform (recomendado)

---

## 🏗️ Arquitetura

### Estrutura de Pastas

```
Portfolio/
├── .github/
│   ├── workflows/           # CI/CD pipelines
│   ├── ISSUE_TEMPLATE/      # Templates de issues
│   └── PULL_REQUEST_TEMPLATE.md
├── public/
│   ├── img/                 # Imagens dos projetos
│   ├── avatar.jpg           # Sua foto (adicione)
│   └── resume.pdf           # Seu currículo (adicione)
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais
│   │   ├── layout.tsx       # Layout raiz
│   │   └── page.tsx         # Página principal
│   ├── components/
│   │   ├── layout/          # Componentes de layout
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   ├── sections/        # Seções da página
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   └── ui/              # Componentes reutilizáveis
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── SectionTitle.tsx
│   │       ├── ProjectModal.tsx
│   │       └── index.ts
│   ├── data/
│   │   └── portfolio.ts     # 📝 ARQUIVO DE DADOS
│   ├── lib/
│   │   └── utils.ts         # Funções utilitárias
│   └── styles/
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── SECURITY.md
```

### Princípios de Design

**1. Separation of Concerns**
- Dados separados da apresentação (`data/portfolio.ts`)
- Componentes UI reutilizáveis isolados
- Lógica de negócio em hooks customizados

**2. Component Architecture**
```
Componentes = Presentational (UI) + Container (Logic)
- UI: Componentes puros, apenas props
- Sections: Composição + lógica específica
- Layout: Estrutura global
```

**3. Type Safety**
```typescript
// Tudo tipado com TypeScript
interface Project {
  id: string
  title: string
  technologies: string[]
  // ...
}
```

**4. Performance**
- Componentes lazy-loaded quando apropriado
- Imagens otimizadas com Next.js Image
- Code splitting automático
- CSS-in-JS com Tailwind (zero runtime)

---

## 🚀 Começando

### Pré-requisitos

```bash
Node.js >= 18.0.0
npm >= 9.0.0 (ou yarn/pnpm)
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/salles75/Portfolio.git
cd Portfolio
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute em desenvolvimento**

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (porta 3000)
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Executar ESLint
```

---

## 🎨 Personalização

### Guia Rápido

**1. Edite seus dados** em `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: 'Seu Nome',
  role: 'Seu Cargo',
  email: 'seu@email.com',
  // ...
}

export const projects: Project[] = [
  {
    id: 'meu-projeto',
    title: 'Meu Projeto Incrível',
    description: 'Descrição curta',
    technologies: ['React', 'Node.js'],
    category: 'fullstack',
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...',
    featured: true,
    date: '2024-01',
  },
  // ...
]
```

**2. Adicione suas imagens** em `public/`:

```bash
public/
├── avatar.jpg        # Sua foto de perfil
├── resume.pdf        # Seu currículo
└── img/
    └── projects/     # Screenshots dos projetos
```

**3. Personalize o tema** em `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: '#10b981', // Sua cor principal
        // ...
      }
    }
  }
}
```

### Personalização Avançada

#### Adicionar Nova Seção

1. Crie o componente em `src/components/sections/`:

```typescript
// src/components/sections/Testimonials.tsx
export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      {/* Seu conteúdo */}
    </section>
  )
}
```

2. Exporte em `src/components/sections/index.ts`
3. Adicione em `src/app/page.tsx`

#### Customizar Animações

```typescript
// Usando Framer Motion
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Seu conteúdo
</motion.div>
```

---

## 🌐 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/salles75/Portfolio)

1. Faça fork do repositório
2. Conecte sua conta Vercel ao GitHub
3. Importe o projeto
4. Deploy automático! 🎉

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Este projeto segue padrões profissionais de desenvolvimento.

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

Leia nosso [Guia de Contribuição](CONTRIBUTING.md) para detalhes sobre padrões de código e processo de PR.

### Código de Conduta

Este projeto adere ao [Contributor Covenant](CODE_OF_CONDUCT.md). Ao participar, você concorda em seguir suas diretrizes.

---

## 📊 Performance

### Lighthouse Score

| Métrica | Score |
|---------|-------|
| Performance | 98 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 1.5s
- **FID** (First Input Delay): < 50ms
- **CLS** (Cumulative Layout Shift): < 0.05

---

## 📄 Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

Você é livre para:
- ✅ Usar comercialmente
- ✅ Modificar
- ✅ Distribuir
- ✅ Uso privado

**Apenas mantenha o aviso de copyright e a licença.**

---

## 👤 Contato

**Guilherme Salles** - Desenvolvedor Full Stack

[![GitHub](https://img.shields.io/badge/GitHub-salles75-black?style=for-the-badge&logo=github)](https://github.com/salles75)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-guiisalles-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/guiisalles)
[![Instagram](https://img.shields.io/badge/Instagram-salles.dev-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/salles.dev/)
[![Email](https://img.shields.io/badge/Email-contato@guilhermesalles.dev-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contato@guilhermesalles.dev)

**Link do Projeto:** [https://github.com/salles75/Portfolio](https://github.com/salles75/Portfolio)

---

## 🙏 Agradecimentos

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Vercel](https://vercel.com)

---

<div align="center">

**Desenvolvido com 💚 por [Guilherme Salles](https://github.com/salles75)**

Se este projeto foi útil, considere dar uma ⭐!

</div>
