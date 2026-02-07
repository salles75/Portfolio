# 🚀 Guia de Setup do Repositório GitHub

Este guia contém os comandos necessários para criar e configurar seu repositório no GitHub.

## 📋 Pré-requisitos

- [ ] Conta no GitHub criada
- [ ] Git instalado localmente
- [ ] Git configurado com suas credenciais

### Verificar Configuração do Git

```bash
# Verificar se Git está instalado
git --version

# Verificar configuração atual
git config --global user.name
git config --global user.email

# Se não estiver configurado, configure:
git config --global user.name "Guilherme Salles"
git config --global user.email "seu.email@dominio.com"
```

---

## 🔧 Passo a Passo

### 1. Inicializar Repositório Local (se necessário)

```bash
# Na pasta do projeto
cd /Users/macbook/Desktop/Projects/Portfolio

# Verificar se já é um repositório Git
git status

# Se NÃO for um repositório, inicialize:
git init

# Se já for, pule para o próximo passo
```

### 2. Criar Repositório no GitHub

**Opção A: Via Interface Web (Recomendado)**

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name:** `Portfolio`
   - **Description:** `Portfólio profissional desenvolvido com Next.js 14, TypeScript e Tailwind CSS`
   - **Visibility:** Public ✅ (para portfólio) ou Private
   - **NÃO marque:** Add README, .gitignore, ou license (já temos)
3. Clique em "Create repository"

**Opção B: Via GitHub CLI**

```bash
# Instale GitHub CLI se não tiver: brew install gh (macOS)
gh auth login
gh repo create Portfolio --public --source=. --description "Portfólio profissional desenvolvido com Next.js 14, TypeScript e Tailwind CSS"
```

### 3. Adicionar Arquivos ao Stage

```bash
# Verificar status atual
git status

# Adicionar todos os arquivos
git add .

# Verificar o que será commitado
git status
```

### 4. Fazer o Primeiro Commit

```bash
# Commit inicial com todos os arquivos
git commit -m "feat: setup inicial do portfólio profissional

- Estrutura base com Next.js 14 + TypeScript
- Design system completo com Tailwind CSS
- Componentes reutilizáveis (UI, Layout, Sections)
- Sistema de dados centralizados
- Animações com Framer Motion
- CI/CD com GitHub Actions
- Documentação completa (README, CONTRIBUTING, etc)
- Configurações de segurança
- Templates de issues e PRs"
```

### 5. Conectar ao Repositório Remoto

```bash
# Substitua 'salles75' pelo seu usuário do GitHub
git remote add origin https://github.com/salles75/Portfolio.git

# Verificar se foi adicionado corretamente
git remote -v

# Deve mostrar:
# origin  https://github.com/salles75/Portfolio.git (fetch)
# origin  https://github.com/salles75/Portfolio.git (push)
```

### 6. Renomear Branch para 'main' (se necessário)

```bash
# Verificar nome da branch atual
git branch

# Se for 'master', renomeie para 'main':
git branch -M main
```

### 7. Push para o GitHub

```bash
# Fazer push da branch main
git push -u origin main

# O -u define origin/main como upstream da branch local
```

---

## ✅ Verificação

Após o push, acesse:

```
https://github.com/salles75/Portfolio
```

Você deve ver:
- ✅ Todos os arquivos do projeto
- ✅ README.md renderizado
- ✅ Badges de tecnologias
- ✅ Estrutura de pastas completa

---

## 🔐 Configurar SSH (Opcional mas Recomendado)

Para não precisar digitar senha a cada push:

### 1. Gerar Chave SSH

```bash
# Gerar nova chave SSH
ssh-keygen -t ed25519 -C "seu.email@dominio.com"

# Quando perguntar onde salvar, pressione Enter (usa local padrão)
# Defina uma senha (ou deixe em branco)
```

### 2. Adicionar ao SSH Agent

```bash
# Iniciar ssh-agent
eval "$(ssh-agent -s)"

# Adicionar chave
ssh-add ~/.ssh/id_ed25519
```

### 3. Copiar Chave Pública

```bash
# macOS
pbcopy < ~/.ssh/id_ed25519.pub

# Linux
cat ~/.ssh/id_ed25519.pub
# Copie manualmente o output
```

### 4. Adicionar ao GitHub

1. Acesse: https://github.com/settings/keys
2. Clique em "New SSH key"
3. Cole a chave pública
4. Clique em "Add SSH key"

### 5. Mudar Remote para SSH

```bash
# Remover remote atual
git remote remove origin

# Adicionar com SSH
git remote add origin git@github.com:salles75/Portfolio.git

# Verificar
git remote -v
```

---

## 📝 Comandos Git Úteis

### Workflow Diário

```bash
# Ver status dos arquivos
git status

# Ver diferenças
git diff

# Adicionar arquivos modificados
git add .
# ou arquivos específicos
git add src/data/portfolio.ts

# Commit
git commit -m "feat: adiciona novo projeto"

# Push
git push

# Pull (buscar atualizações)
git pull
```

### Branches

```bash
# Criar nova branch
git checkout -b feature/nova-funcionalidade

# Listar branches
git branch

# Mudar de branch
git checkout main

# Merge de branch
git checkout main
git merge feature/nova-funcionalidade

# Deletar branch
git branch -d feature/nova-funcionalidade
```

### Histórico

```bash
# Ver histórico de commits
git log

# Ver histórico resumido
git log --oneline

# Ver histórico gráfico
git log --graph --oneline --all
```

### Desfazer Mudanças

```bash
# Descartar mudanças não commitadas
git checkout -- arquivo.txt

# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer último commit (descarta mudanças)
git reset --hard HEAD~1
```

---

## 🌟 Configurar GitHub Pages (Opcional)

Para hospedar documentação ou site estático:

```bash
# 1. Criar branch gh-pages
git checkout -b gh-pages

# 2. No GitHub, vá em Settings > Pages
# 3. Selecione source: gh-pages branch
# 4. Seu site estará em: https://salles75.github.io/Portfolio
```

---

## 🏷️ Releases e Tags

### Criar Tag de Versão

```bash
# Tag anotada (recomendado)
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push da tag
git push origin v1.0.0

# Push de todas as tags
git push --tags
```

### Criar Release no GitHub

1. Acesse: https://github.com/salles75/Portfolio/releases
2. Clique em "Create a new release"
3. Selecione a tag (ex: v1.0.0)
4. Adicione título e descrição
5. Adicione assets se necessário
6. Publique

---

## 🔄 Manter Repositório Atualizado

### Workflow Recomendado

```bash
# 1. Sempre antes de começar a trabalhar
git pull

# 2. Fazer mudanças nos arquivos
# ... edições ...

# 3. Adicionar e commitar
git add .
git commit -m "tipo: descrição clara"

# 4. Push
git push
```

### Padrão de Commits (Conventional Commits)

```bash
# Features
git commit -m "feat: adiciona sistema de blog"

# Correções
git commit -m "fix: corrige responsividade do header"

# Documentação
git commit -m "docs: atualiza README com instruções"

# Estilo
git commit -m "style: formata código com prettier"

# Refatoração
git commit -m "refactor: reorganiza estrutura de pastas"

# Performance
git commit -m "perf: otimiza carregamento de imagens"

# Testes
git commit -m "test: adiciona testes unitários"

# Chores
git commit -m "chore: atualiza dependências"
```

---

## 🚨 Troubleshooting

### Erro: "remote origin already exists"

```bash
# Remover remote existente
git remote remove origin

# Adicionar novamente
git remote add origin https://github.com/salles75/Portfolio.git
```

### Erro: "failed to push some refs"

```bash
# Fazer pull primeiro
git pull origin main --rebase

# Ou se quiser mesclar
git pull origin main

# Depois push
git push
```

### Erro: "Permission denied (publickey)"

```bash
# Verificar conexão SSH
ssh -T git@github.com

# Se falhar, configure SSH seguindo seção anterior
```

### Arquivos que não devem ser commitados

Certifique-se de que `.gitignore` contém:

```gitignore
node_modules/
.next/
.env
.env*.local
.DS_Store
```

---

## 📚 Recursos

- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

## ✅ Checklist Final

- [ ] Git configurado com nome e email
- [ ] Repositório criado no GitHub
- [ ] Primeiro commit realizado
- [ ] Push feito com sucesso
- [ ] README aparecendo no GitHub
- [ ] GitHub Actions funcionando
- [ ] Repositório público (para portfólio)
- [ ] Descrição e tópicos adicionados
- [ ] SSH configurado (opcional)

---

**Pronto! Seu repositório está no ar! 🎉**

Acesse: https://github.com/salles75/Portfolio
