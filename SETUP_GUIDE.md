# 📘 Guia de Setup Completo

Este guia irá te ajudar a configurar o portfólio do zero até o deploy em produção.

## 📋 Índice

1. [Pré-requisitos](#-pré-requisitos)
2. [Instalação Local](#-instalação-local)
3. [Personalização](#-personalização)
4. [Deploy](#-deploy)
5. [Troubleshooting](#-troubleshooting)

---

## ✅ Pré-requisitos

### Ferramentas Necessárias

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 (incluído com Node.js)
- **Git** ([Download](https://git-scm.com/))
- Editor de código (recomendado: [VS Code](https://code.visualstudio.com/))

### Verificar Instalação

```bash
# Verifique as versões instaladas
node --version    # Deve retornar v18.x.x ou superior
npm --version     # Deve retornar 9.x.x ou superior
git --version     # Qualquer versão recente
```

---

## 🚀 Instalação Local

### Passo 1: Clonar o Repositório

```bash
# Via HTTPS
git clone https://github.com/salles75/Portfolio.git

# Ou via SSH (se configurado)
git clone git@github.com:salles75/Portfolio.git

# Entre na pasta
cd Portfolio
```

### Passo 2: Instalar Dependências

```bash
npm install
```

**Isso irá instalar:**
- Next.js e dependências
- React e React DOM
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Todas as devDependencies

### Passo 3: Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

Você verá o portfólio rodando com os dados de exemplo!

---

## 🎨 Personalização

### 1. Informações Pessoais

Edite `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: 'Seu Nome Completo',
  role: 'Seu Cargo Principal',
  tagline: 'Sua frase de efeito',
  email: 'seu.email@dominio.com',
  location: 'Sua Cidade, Estado',
  bio: `Sua biografia completa aqui...`,
  shortBio: 'Biografia curta para SEO',
  avatar: '/avatar.jpg',
  resumeUrl: '/resume.pdf',
}
```

### 2. Redes Sociais

No mesmo arquivo:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/seu-usuario',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/seu-perfil',
    icon: 'linkedin',
  },
  // Adicione mais redes conforme necessário
]
```

### 3. Adicionar Projetos

```typescript
export const projects: Project[] = [
  {
    id: 'projeto-unico-id',          // ID único (sem espaços)
    title: 'Nome do Projeto',         // Título
    description: 'Descrição curta',   // Descrição para card
    longDescription: `Descrição      // Descrição detalhada para modal
      mais completa do projeto...`,
    image: '/img/projeto/main.png',   // Imagem principal
    images: [                         // Galeria (opcional)
      '/img/projeto/1.png',
      '/img/projeto/2.png',
    ],
    technologies: [                   // Stack do projeto
      'React',
      'TypeScript',
      'Node.js'
    ],
    category: 'fullstack',            // fullstack | frontend | backend | mobile | other
    githubUrl: 'https://github.com/user/repo',  // Opcional
    liveUrl: 'https://projeto.com',   // Opcional
    featured: true,                   // Destaque na home
    date: '2024-01',                  // YYYY-MM
  },
]
```

### 4. Adicionar Skills

```typescript
export const skills: Skill[] = [
  {
    name: 'Nome da Tecnologia',
    icon: 'nome-do-icone',        // Nome do ícone Lucide
    category: 'frontend',          // language | frontend | backend | database | tools | other
    level: 'expert',               // expert | advanced | intermediate
    color: '#hexcolor',            // Cor da marca
  },
]
```

### 5. Experiência Profissional

```typescript
export const experiences = [
  {
    company: 'Nome da Empresa',
    role: 'Seu Cargo',
    period: '2023 - Presente',
    description: 'Descrição das responsabilidades e conquistas',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
  },
]
```

### 6. Adicionar Imagens

#### Foto de Perfil
1. Coloque sua foto em `public/avatar.jpg`
2. Recomendação: 400x400px, formato JPG ou PNG

#### Currículo PDF
1. Coloque seu currículo em `public/resume.pdf`

#### Imagens de Projetos
1. Crie pastas em `public/img/` para cada projeto
2. Adicione screenshots do projeto
3. Recomendação: 1920x1080px, otimize as imagens

```bash
public/
└── img/
    ├── projeto-1/
    │   ├── home.png
    │   ├── dashboard.png
    │   └── mobile.png
    └── projeto-2/
        └── screenshot.png
```

### 7. Personalizar Cores

Edite `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: '#10b981',    // Sua cor principal
        hover: '#34d399',      // Hover state
        muted: '#064e3b',      // Versão suave
      },
    },
  },
}
```

### 8. Metadata e SEO

Edite `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Seu Nome | Desenvolvedor Full Stack',
  description: 'Sua descrição para SEO',
  // Adicione mais metadata conforme necessário
}
```

---

## 🌐 Deploy

### Deploy na Vercel (Recomendado)

#### Método 1: Via GitHub (Automático)

1. **Faça Push para o GitHub**
   ```bash
   git add .
   git commit -m "feat: personalização inicial"
   git push origin main
   ```

2. **Conecte com Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Add New Project"
   - Importe seu repositório do GitHub
   - Configure (geralmente auto-detecta Next.js)
   - Clique em "Deploy"

3. **Deploy Automático**
   - Cada push na branch `main` faz deploy automático
   - PRs criam preview deploys

#### Método 2: Via CLI

```bash
# Instale Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Deploy na Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Conecte o GitHub**
   - Novo site do Git
   - Selecione seu repositório
   - Configure as opções acima
   - Deploy

### Outras Plataformas

**AWS Amplify:**
```bash
# Build settings
npm run build
# Output: .next
```

**Railway:**
```bash
# Adicione railway.json na raiz
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

---

## 🐛 Troubleshooting

### Erro: "Module not found"

```bash
# Limpe node_modules e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port 3000 is already in use"

```bash
# Mate o processo na porta 3000
npx kill-port 3000

# Ou use outra porta
PORT=3001 npm run dev
```

### Erro no Build

```bash
# Limpe cache do Next.js
rm -rf .next

# Rebuild
npm run build
```

### Imagens não aparecem

- Verifique se as imagens estão em `public/`
- Caminhos devem começar com `/` (ex: `/img/projeto.png`)
- Verifique extensões (.jpg, .png)

### TypeScript Errors

```bash
# Verifique tipos
npx tsc --noEmit

# Se persistir, reinstale types
npm install --save-dev @types/react @types/node
```

### Performance Lenta

```bash
# Build de produção é muito mais rápido
npm run build
npm start

# Em desenvolvimento, é normal ser mais lento
```

---

## 📚 Recursos Adicionais

### Documentação Oficial

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

### Tutoriais Recomendados

- [Next.js 14 Tutorial](https://nextjs.org/learn)
- [Tailwind CSS Course](https://tailwindcss.com/docs/utility-first)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Comunidade

- [Next.js Discord](https://nextjs.org/discord)
- [React Community](https://react.dev/community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## 🎯 Checklist Final

Antes do deploy, verifique:

- [ ] Informações pessoais atualizadas
- [ ] Todos os projetos adicionados
- [ ] Skills listadas
- [ ] Experiências preenchidas
- [ ] Avatar e currículo em `/public`
- [ ] Imagens dos projetos otimizadas
- [ ] Links sociais corretos
- [ ] Metadata e SEO configurados
- [ ] Build funciona sem erros (`npm run build`)
- [ ] Testado em diferentes navegadores
- [ ] Testado em mobile
- [ ] Analytics configurado (opcional)

---

## 💬 Precisa de Ajuda?

- 📧 Email: contato@guilhermesalles.dev
- 🐛 [Abra uma Issue](https://github.com/salles75/Portfolio/issues)
- 💬 [Discussões](https://github.com/salles75/Portfolio/discussions)

---

**Boa sorte com seu novo portfólio! 🚀**
