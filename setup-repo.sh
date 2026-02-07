#!/bin/bash

# ============================================
# Script de Setup Automático do Repositório
# ============================================
# Este script automatiza a criação do repositório GitHub
# Autor: Guilherme Salles
# ============================================

set -e  # Parar em caso de erro

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Funções auxiliares
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_header() {
    echo -e "\n${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}\n"
}

# Verificar pré-requisitos
check_prerequisites() {
    print_header "Verificando Pré-requisitos"
    
    # Git
    if command -v git &> /dev/null; then
        GIT_VERSION=$(git --version)
        print_success "Git instalado: $GIT_VERSION"
    else
        print_error "Git não está instalado"
        print_info "Instale em: https://git-scm.com/"
        exit 1
    fi
    
    # Verificar configuração do Git
    GIT_USER=$(git config --global user.name || echo "")
    GIT_EMAIL=$(git config --global user.email || echo "")
    
    if [ -z "$GIT_USER" ] || [ -z "$GIT_EMAIL" ]; then
        print_warning "Git não está configurado"
        echo ""
        read -p "Digite seu nome: " USER_NAME
        read -p "Digite seu email: " USER_EMAIL
        
        git config --global user.name "$USER_NAME"
        git config --global user.email "$USER_EMAIL"
        
        print_success "Git configurado com sucesso!"
    else
        print_success "Git configurado: $GIT_USER <$GIT_EMAIL>"
    fi
    
    # Node.js
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node --version)
        print_success "Node.js instalado: $NODE_VERSION"
    else
        print_warning "Node.js não detectado (necessário para build)"
    fi
    
    # GitHub CLI (opcional)
    if command -v gh &> /dev/null; then
        GH_VERSION=$(gh --version | head -n 1)
        print_success "GitHub CLI instalado: $GH_VERSION"
        HAS_GH_CLI=true
    else
        print_warning "GitHub CLI não instalado (opcional)"
        print_info "Para instalar: brew install gh (macOS) ou https://cli.github.com/"
        HAS_GH_CLI=false
    fi
}

# Verificar status do repositório
check_repo_status() {
    print_header "Verificando Status do Repositório"
    
    if [ -d .git ]; then
        print_success "Repositório Git já inicializado"
        
        # Verificar se tem remote
        if git remote -v | grep -q origin; then
            REMOTE_URL=$(git remote get-url origin)
            print_warning "Remote 'origin' já existe: $REMOTE_URL"
            read -p "Deseja removê-lo e configurar novamente? (s/N): " RECREATE
            if [ "$RECREATE" = "s" ] || [ "$RECREATE" = "S" ]; then
                git remote remove origin
                print_success "Remote removido"
                return 0
            else
                print_info "Mantendo configuração existente"
                return 1
            fi
        fi
    else
        print_info "Inicializando repositório Git..."
        git init
        print_success "Repositório inicializado"
    fi
    
    return 0
}

# Configurar repositório no GitHub
setup_github_repo() {
    print_header "Configuração do Repositório GitHub"
    
    echo "Como deseja criar o repositório no GitHub?"
    echo "1) Via GitHub CLI (automático - requer gh cli)"
    echo "2) Manualmente (você cria no site)"
    read -p "Escolha (1/2): " OPTION
    
    case $OPTION in
        1)
            if [ "$HAS_GH_CLI" = false ]; then
                print_error "GitHub CLI não está instalado"
                print_info "Instale com: brew install gh (macOS)"
                exit 1
            fi
            
            # Verificar autenticação
            if ! gh auth status &> /dev/null; then
                print_info "Fazendo login no GitHub..."
                gh auth login
            fi
            
            print_info "Criando repositório no GitHub..."
            read -p "Nome do repositório (Portfolio): " REPO_NAME
            REPO_NAME=${REPO_NAME:-Portfolio}
            
            read -p "Descrição: " REPO_DESC
            REPO_DESC=${REPO_DESC:-"Portfólio profissional desenvolvido com Next.js 14, TypeScript e Tailwind CSS"}
            
            read -p "Público ou privado? (public/private): " VISIBILITY
            VISIBILITY=${VISIBILITY:-public}
            
            gh repo create "$REPO_NAME" \
                --"$VISIBILITY" \
                --description "$REPO_DESC" \
                --source=. \
                --remote=origin
            
            print_success "Repositório criado no GitHub!"
            ;;
        2)
            print_info "Crie o repositório manualmente:"
            echo ""
            echo "1. Acesse: https://github.com/new"
            echo "2. Nome: Portfolio"
            echo "3. Descrição: Portfólio profissional desenvolvido com Next.js 14, TypeScript e Tailwind CSS"
            echo "4. Visibilidade: Public (recomendado para portfólio)"
            echo "5. NÃO adicione README, .gitignore ou license"
            echo "6. Clique em 'Create repository'"
            echo ""
            read -p "Pressione Enter quando o repositório estiver criado..."
            
            read -p "Digite seu usuário do GitHub (salles75): " GH_USER
            GH_USER=${GH_USER:-salles75}
            
            read -p "Digite o nome do repositório (Portfolio): " REPO_NAME
            REPO_NAME=${REPO_NAME:-Portfolio}
            
            REPO_URL="https://github.com/$GH_USER/$REPO_NAME.git"
            
            print_info "Adicionando remote: $REPO_URL"
            git remote add origin "$REPO_URL"
            print_success "Remote adicionado!"
            ;;
        *)
            print_error "Opção inválida"
            exit 1
            ;;
    esac
}

# Fazer primeiro commit
make_initial_commit() {
    print_header "Preparando Primeiro Commit"
    
    # Verificar se há arquivos para commitar
    if git diff --cached --quiet && git diff --quiet; then
        print_info "Adicionando arquivos ao staging..."
        git add .
    fi
    
    # Verificar se há algo para commitar
    if git diff --cached --quiet; then
        print_warning "Nenhuma mudança para commitar"
        return
    fi
    
    print_info "Arquivos que serão commitados:"
    git status --short
    echo ""
    
    read -p "Prosseguir com o commit? (S/n): " CONFIRM
    CONFIRM=${CONFIRM:-S}
    
    if [ "$CONFIRM" != "S" ] && [ "$CONFIRM" != "s" ]; then
        print_warning "Commit cancelado"
        return
    fi
    
    print_info "Criando commit inicial..."
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
    
    print_success "Commit criado com sucesso!"
}

# Fazer push
push_to_github() {
    print_header "Enviando para o GitHub"
    
    # Verificar/renomear branch para main
    CURRENT_BRANCH=$(git branch --show-current)
    if [ "$CURRENT_BRANCH" != "main" ]; then
        print_info "Renomeando branch para 'main'..."
        git branch -M main
    fi
    
    print_info "Fazendo push para o GitHub..."
    
    if git push -u origin main; then
        print_success "Push realizado com sucesso!"
    else
        print_error "Erro ao fazer push"
        print_info "Tente manualmente: git push -u origin main"
        return 1
    fi
}

# Configurar proteções e settings
configure_repo_settings() {
    print_header "Configurações Adicionais"
    
    if [ "$HAS_GH_CLI" = true ]; then
        read -p "Deseja configurar proteções da branch main? (s/N): " PROTECT
        if [ "$PROTECT" = "s" ] || [ "$PROTECT" = "S" ]; then
            print_info "Configurando proteções..."
            # Aqui você pode adicionar comandos gh para configurar proteções
            print_warning "Configure manualmente em: Settings > Branches"
        fi
    fi
    
    print_info "Configurações recomendadas no GitHub:"
    echo ""
    echo "1. Settings > General > Features:"
    echo "   ✓ Issues"
    echo "   ✓ Projects (se quiser usar)"
    echo ""
    echo "2. Settings > General > Social preview:"
    echo "   - Adicione uma imagem de preview (1280x640px)"
    echo ""
    echo "3. Settings > General > Topics:"
    echo "   - portfolio, nextjs, typescript, react, tailwindcss"
    echo ""
    echo "4. Settings > Pages:"
    echo "   - Configure se quiser usar GitHub Pages"
    echo ""
}

# Verificar build
test_build() {
    print_header "Testando Build (Opcional)"
    
    read -p "Deseja testar o build do projeto? (s/N): " TEST
    if [ "$TEST" = "s" ] || [ "$TEST" = "S" ]; then
        if command -v npm &> /dev/null; then
            print_info "Instalando dependências..."
            npm install
            
            print_info "Executando build..."
            if npm run build; then
                print_success "Build executado com sucesso!"
            else
                print_error "Erro no build"
                return 1
            fi
        else
            print_warning "npm não encontrado"
        fi
    fi
}

# Resumo final
show_summary() {
    print_header "Resumo"
    
    REPO_URL=$(git remote get-url origin)
    GITHUB_URL=${REPO_URL%.git}
    GITHUB_URL=${GITHUB_URL/git@github.com:/https://github.com/}
    
    print_success "Setup concluído com sucesso!"
    echo ""
    echo "📦 Repositório Local: $(pwd)"
    echo "🌐 Repositório GitHub: $GITHUB_URL"
    echo ""
    echo "Próximos passos:"
    echo ""
    echo "1. Acesse seu repositório:"
    echo "   $GITHUB_URL"
    echo ""
    echo "2. Configure tópicos e descrição"
    echo ""
    echo "3. Ative GitHub Actions (se não ativou automaticamente)"
    echo ""
    echo "4. Considere fazer deploy na Vercel:"
    echo "   https://vercel.com/new"
    echo ""
    echo "5. Personalize seu portfólio editando:"
    echo "   src/data/portfolio.ts"
    echo ""
    echo "📚 Documentação completa: README.md"
    echo "🚀 Guia de setup: SETUP_GUIDE.md"
    echo "🔧 Comandos Git: GIT_SETUP.md"
    echo ""
    print_success "Bom trabalho! 🎉"
}

# ============================================
# MAIN
# ============================================

main() {
    clear
    echo -e "${BLUE}"
    echo "╔════════════════════════════════════════╗"
    echo "║   Setup do Repositório GitHub          ║"
    echo "║   Portfolio - Guilherme Salles         ║"
    echo "╚════════════════════════════════════════╝"
    echo -e "${NC}"
    
    check_prerequisites
    
    if check_repo_status; then
        setup_github_repo
        make_initial_commit
        push_to_github
        configure_repo_settings
    fi
    
    test_build
    show_summary
}

# Executar
main
