# ⚡ Quick Start - 5 Minutos para o GitHub

Este guia te leva do zero ao repositório no ar em **5 minutos**.

---

## 🚀 Opção 1: Script Automático (Mais Rápido)

### Um único comando:

```bash
./setup-repo.sh
```

O script irá:
- ✅ Verificar pré-requisitos
- ✅ Configurar Git (se necessário)
- ✅ Criar repositório no GitHub
- ✅ Fazer commit inicial
- ✅ Push automático

---

## 📝 Opção 2: Manual (5 minutos)

### Passo 1: Criar Repositório no GitHub (1min)

1. Acesse: https://github.com/new
2. Nome: **Portfolio**
3. Descrição: **Portfólio profissional - Next.js 14 + TypeScript**
4. Visibilidade: **Public** ✅
5. **NÃO** adicione README/gitignore/license
6. Click "Create repository"

### Passo 2: Comandos no Terminal (2min)

```bash
# 1. Entre na pasta do projeto
cd /Users/macbook/Desktop/Projects/Portfolio

# 2. Adicione todos os arquivos
git add .

# 3. Faça o commit inicial
git commit -m "feat: setup inicial do portfólio"

# 4. Conecte ao repositório remoto (SUBSTITUA salles75 pelo SEU usuário)
git remote add origin https://github.com/salles75/Portfolio.git

# 5. Renomeie branch para main (se necessário)
git branch -M main

# 6. Envie para o GitHub
git push -u origin main
```

### Passo 3: Verificar (30seg)

Acesse: https://github.com/salles75/Portfolio

Deve aparecer:
- ✅ README com badges
- ✅ Estrutura de pastas
- ✅ GitHub Actions
- ✅ Documentação completa

---

## 🎨 Personalização Rápida (2 minutos)

### Edite apenas 1 arquivo: `src/data/portfolio.ts`

```typescript
// Suas informações
export const personalInfo = {
  name: 'Seu Nome',
  role: 'Seu Cargo',
  email: 'seu@email.com',
  // ...
}

// Seus projetos
export const projects = [
  {
    title: 'Meu Projeto',
    description: 'Descrição',
    technologies: ['React', 'Node.js'],
    // ...
  }
]
```

### Commit e Push

```bash
git add .
git commit -m "feat: personaliza informações do portfólio"
git push
```

---

## 🌐 Deploy na Vercel (2 minutos)

### Método Mais Rápido:

1. Acesse: https://vercel.com/new
2. Importe repositório do GitHub
3. Click em "Deploy"
4. Pronto! ✨

Seu portfólio estará no ar em: `https://seu-portfolio.vercel.app`

---

## ✅ Checklist de 5 Minutos

- [ ] Repositório criado no GitHub
- [ ] Código enviado (git push)
- [ ] README aparecendo
- [ ] GitHub Actions rodando
- [ ] Informações personalizadas
- [ ] Deploy na Vercel (opcional)

---

## 📚 Precisa de Mais Detalhes?

- 📖 **Setup completo:** [SETUP_GUIDE.md](SETUP_GUIDE.md)
- 🔧 **Comandos Git:** [GIT_SETUP.md](GIT_SETUP.md)
- 🤝 **Contribuir:** [CONTRIBUTING.md](CONTRIBUTING.md)
- 📘 **Documentação:** [README.md](README.md)

---

## 🆘 Problemas Comuns

### "Permission denied"
```bash
# Use HTTPS em vez de SSH
git remote set-url origin https://github.com/salles75/Portfolio.git
```

### "Remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/salles75/Portfolio.git
```

### "Port 3000 already in use"
```bash
npx kill-port 3000
npm run dev
```

---

## 💬 Ajuda

Problemas? Abra uma [issue](https://github.com/salles75/Portfolio/issues) ou:
- 📧 contato@guilhermesalles.dev
- 💬 [Discussões](https://github.com/salles75/Portfolio/discussions)

---

**Pronto! Seu portfólio está no ar! 🎉**
