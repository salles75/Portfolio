# 📚 Índice de Documentação - Portfolio

Guia completo de toda a documentação do projeto.

---

## 🚀 Para Começar

### Iniciantes - Leia Nesta Ordem:

1. **[QUICK_START.md](QUICK_START.md)** ⚡
   - Setup em 5 minutos
   - Comandos essenciais
   - Deploy rápido na Vercel

2. **[README.md](README.md)** 📖
   - Visão geral do projeto
   - Tecnologias utilizadas
   - Características principais
   - Instalação e uso

3. **[SETUP_GUIDE.md](SETUP_GUIDE.md)** 🎯
   - Guia completo de instalação
   - Personalização passo a passo
   - Deploy em diferentes plataformas
   - Troubleshooting

---

## 🔧 Desenvolvimento

### Para Desenvolvedores:

4. **[GIT_SETUP.md](GIT_SETUP.md)** 🌿
   - Comandos Git úteis
   - Configurar SSH
   - Workflow de branches
   - Conventional Commits

5. **[CONTRIBUTING.md](CONTRIBUTING.md)** 🤝
   - Como contribuir
   - Padrões de código
   - Process de Pull Request
   - Diretrizes de commit

6. **[CHANGELOG.md](CHANGELOG.md)** 📝
   - Histórico de versões
   - Mudanças por release
   - Roadmap futuro

---

## 📋 Políticas e Governança

### Documentos Oficiais:

7. **[LICENSE](LICENSE)** ⚖️
   - Licença MIT
   - Termos de uso
   - Direitos e permissões

8. **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** 🤲
   - Código de conduta
   - Comportamento esperado
   - Como reportar problemas

9. **[SECURITY.md](SECURITY.md)** 🔒
   - Política de segurança
   - Reportar vulnerabilidades
   - Melhores práticas de segurança

---

## 🤖 Automação

### GitHub Features:

10. **[.github/workflows/ci.yml](.github/workflows/ci.yml)** ⚙️
    - Pipeline de CI/CD
    - Lint e build automático
    - Security audit
    - Lighthouse CI

11. **[.github/workflows/deploy-preview.yml](.github/workflows/deploy-preview.yml)** 🚢
    - Deploy de preview em PRs
    - Comentários automáticos
    - Integração com Vercel

---

## 📋 Templates

### GitHub Issue & PR Templates:

12. **[.github/ISSUE_TEMPLATE/bug_report.md](.github/ISSUE_TEMPLATE/bug_report.md)** 🐛
    - Template para reportar bugs
    - Informações necessárias
    - Formato padronizado

13. **[.github/ISSUE_TEMPLATE/feature_request.md](.github/ISSUE_TEMPLATE/feature_request.md)** ✨
    - Template para solicitar features
    - Estrutura de proposta
    - Priorização

14. **[.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md)** 🔀
    - Template de Pull Request
    - Checklist de revisão
    - Formato padronizado

---

## 🛠️ Scripts e Utilitários

### Ferramentas de Automação:

15. **[setup-repo.sh](setup-repo.sh)** 🚀
    - Script de setup automático
    - Cria repositório GitHub
    - Faz commit e push inicial
    - Uso: `./setup-repo.sh`

16. **[.nvmrc](.nvmrc)** 🔧
    - Versão do Node.js
    - Compatibilidade garantida
    - Uso: `nvm use`

---

## 📊 Estrutura do Projeto

### Arquitetura:

```
Portfolio/
├── 📄 Documentação (você está aqui)
│   ├── README.md                    # Visão geral
│   ├── QUICK_START.md              # Início rápido
│   ├── SETUP_GUIDE.md              # Guia completo
│   ├── GIT_SETUP.md                # Git & GitHub
│   ├── CONTRIBUTING.md             # Contribuições
│   ├── CHANGELOG.md                # Versões
│   ├── LICENSE                     # Licença
│   ├── CODE_OF_CONDUCT.md          # Conduta
│   ├── SECURITY.md                 # Segurança
│   └── DOCUMENTATION_INDEX.md      # Este arquivo
│
├── 🤖 Automação
│   └── .github/
│       ├── workflows/              # CI/CD
│       ├── ISSUE_TEMPLATE/         # Templates de issues
│       └── PULL_REQUEST_TEMPLATE.md
│
├── 🔧 Configuração
│   ├── package.json                # Dependências
│   ├── tsconfig.json              # TypeScript
│   ├── tailwind.config.ts         # Tailwind CSS
│   ├── next.config.js             # Next.js
│   ├── postcss.config.js          # PostCSS
│   └── .nvmrc                     # Node version
│
├── 📁 Código Fonte
│   └── src/
│       ├── app/                   # Next.js App Router
│       ├── components/            # Componentes React
│       ├── data/                  # Dados do portfólio
│       ├── lib/                   # Utilitários
│       └── styles/                # Estilos globais
│
└── 🖼️ Assets
    └── public/
        ├── img/                   # Imagens dos projetos
        └── projects/              # Assets de projetos
```

---

## 🎯 Fluxos de Trabalho Comuns

### Cenários Práticos:

#### 🆕 Primeira Vez Usando o Projeto?
1. [QUICK_START.md](QUICK_START.md)
2. [SETUP_GUIDE.md](SETUP_GUIDE.md)
3. [README.md](README.md)

#### 🎨 Quer Personalizar?
1. [SETUP_GUIDE.md > Seção Personalização](SETUP_GUIDE.md#-personalização)
2. Edite `src/data/portfolio.ts`
3. [GIT_SETUP.md > Commit e Push](GIT_SETUP.md#workflow-diário)

#### 🤝 Quer Contribuir?
1. [CONTRIBUTING.md](CONTRIBUTING.md)
2. [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
3. [GIT_SETUP.md > Branches](GIT_SETUP.md#branches)

#### 🚀 Quer Fazer Deploy?
1. [SETUP_GUIDE.md > Deploy](SETUP_GUIDE.md#-deploy)
2. [QUICK_START.md > Deploy na Vercel](QUICK_START.md#-deploy-na-vercel-2-minutos)

#### 🐛 Encontrou um Bug?
1. [.github/ISSUE_TEMPLATE/bug_report.md](.github/ISSUE_TEMPLATE/bug_report.md)
2. [SECURITY.md](SECURITY.md) (se for relacionado à segurança)

#### ✨ Tem uma Ideia?
1. [.github/ISSUE_TEMPLATE/feature_request.md](.github/ISSUE_TEMPLATE/feature_request.md)

#### 🔒 Problema de Segurança?
1. [SECURITY.md](SECURITY.md)
2. **NÃO** abra issue pública
3. Email: contato@guilhermesalles.dev

---

## 📚 Recursos Externos

### Documentação Oficial das Tecnologias:

- **Next.js:** https://nextjs.org/docs
- **React:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Lucide Icons:** https://lucide.dev

### Tutoriais e Guias:

- **Next.js Learn:** https://nextjs.org/learn
- **React Tutorial:** https://react.dev/learn
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/handbook/intro.html
- **Tailwind CSS Course:** https://tailwindcss.com/docs/installation

### Comunidades:

- **Next.js Discord:** https://nextjs.org/discord
- **React Community:** https://react.dev/community
- **GitHub Discussions:** https://github.com/salles75/Portfolio/discussions

---

## 🔍 Busca Rápida

### Por Tópico:

**Instalação:**
- [README > Começando](README.md#-começando)
- [SETUP_GUIDE > Instalação](SETUP_GUIDE.md#-instalação-local)
- [QUICK_START](QUICK_START.md)

**Personalização:**
- [README > Personalização](README.md#-personalização)
- [SETUP_GUIDE > Personalização](SETUP_GUIDE.md#-personalização)

**Deploy:**
- [README > Deploy](README.md#-deploy)
- [SETUP_GUIDE > Deploy](SETUP_GUIDE.md#-deploy)
- [QUICK_START > Deploy](QUICK_START.md#-deploy-na-vercel-2-minutos)

**Git & GitHub:**
- [GIT_SETUP.md](GIT_SETUP.md)
- [setup-repo.sh](setup-repo.sh)

**Contribuição:**
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

**Segurança:**
- [SECURITY.md](SECURITY.md)

**Licença:**
- [LICENSE](LICENSE)

---

## ✅ Checklist de Documentação Lida

Para iniciantes, recomendamos ler nesta ordem:

- [ ] QUICK_START.md
- [ ] README.md
- [ ] SETUP_GUIDE.md
- [ ] GIT_SETUP.md

Para contribuidores:

- [ ] CONTRIBUTING.md
- [ ] CODE_OF_CONDUCT.md
- [ ] Templates de Issues/PRs

Para mantenedores:

- [ ] Toda a documentação acima
- [ ] SECURITY.md
- [ ] CHANGELOG.md
- [ ] Workflows do GitHub

---

## 📞 Contato e Suporte

### Precisa de Ajuda?

- 📧 **Email:** contato@guilhermesalles.dev
- 🐛 **Bugs:** [GitHub Issues](https://github.com/salles75/Portfolio/issues)
- 💬 **Discussões:** [GitHub Discussions](https://github.com/salles75/Portfolio/discussions)
- 🔒 **Segurança:** Veja [SECURITY.md](SECURITY.md)

### Redes Sociais:

- **GitHub:** [@salles75](https://github.com/salles75)
- **LinkedIn:** [guiisalles](https://www.linkedin.com/in/guiisalles)
- **Instagram:** [@salles.dev](https://www.instagram.com/salles.dev/)

---

## 🎯 Próximos Passos

1. ✅ Você leu este índice
2. 📖 Leia [QUICK_START.md](QUICK_START.md) para começar
3. 🚀 Siga o [SETUP_GUIDE.md](SETUP_GUIDE.md) para configurar
4. 🎨 Personalize editando `src/data/portfolio.ts`
5. 🌐 Faça deploy na Vercel
6. ⭐ Dê uma estrela no GitHub!

---

<div align="center">

**📚 Documentação mantida por [Guilherme Salles](https://github.com/salles75)**

Se esta documentação foi útil, considere ⭐ o projeto!

</div>
