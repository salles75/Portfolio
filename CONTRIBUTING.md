# 🤝 Contribuindo para o Projeto

Obrigado por considerar contribuir com este projeto! Este documento fornece diretrizes para contribuições.

## 📋 Como Contribuir

### 1. Fork o Projeto
```bash
# Clone seu fork
git clone https://github.com/seu-usuario/Portfolio.git
cd Portfolio

# Adicione o repositório original como upstream
git remote add upstream https://github.com/salles75/Portfolio.git
```

### 2. Crie uma Branch
```bash
# Crie uma branch para sua feature/fix
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-fix
```

### 3. Faça suas Alterações

#### Padrões de Código

**TypeScript/React:**
- Use TypeScript estrito
- Componentes funcionais com hooks
- Props tipadas com interfaces
- Nomenclatura clara e descritiva

**Estilo:**
- Tailwind CSS para estilização
- Siga o design system existente
- Mantenha responsividade

**Estrutura:**
```typescript
// ✅ BOM
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  )
}

// ❌ EVITAR
export const Button = (props: any) => {
  return <button onClick={props.onClick}>{props.label}</button>
}
```

### 4. Teste suas Alterações
```bash
# Instale dependências
npm install

# Execute em desenvolvimento
npm run dev

# Verifique o build
npm run build

# Execute linter
npm run lint
```

### 5. Commit suas Alterações

Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Tipos permitidos:
# feat:     Nova feature
# fix:      Correção de bug
# docs:     Documentação
# style:    Formatação, ponto e vírgula, etc
# refactor: Refatoração de código
# perf:     Melhoria de performance
# test:     Adição/correção de testes
# chore:    Tarefas de build, configs, etc

# Exemplos:
git commit -m "feat: adiciona novo componente Modal"
git commit -m "fix: corrige responsividade do Header"
git commit -m "docs: atualiza README com instruções"
git commit -m "refactor: melhora estrutura do portfolio.ts"
```

### 6. Push e Pull Request
```bash
# Push para seu fork
git push origin feature/nome-da-feature

# Crie um Pull Request no GitHub
```

## 📝 Diretrizes de Pull Request

### Checklist PR

- [ ] Código segue os padrões do projeto
- [ ] Build executado com sucesso
- [ ] Lint sem erros
- [ ] Componentes são responsivos
- [ ] Alterações testadas em desenvolvimento
- [ ] Commits seguem Conventional Commits
- [ ] Descrição clara do que foi feito

### Template de PR

```markdown
## Descrição
Breve descrição das alterações realizadas.

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Melhoria de performance
- [ ] Refatoração
- [ ] Documentação

## Motivação e Contexto
Por que essa mudança é necessária? Qual problema resolve?

## Como Testar
1. Passo a passo para testar as alterações
2. Comandos necessários
3. Comportamento esperado

## Screenshots (se aplicável)
Adicione screenshots das alterações visuais.

## Checklist
- [ ] Build funciona
- [ ] Código lintado
- [ ] Testado em diferentes resoluções
- [ ] Documentação atualizada (se necessário)
```

## 🎯 Áreas de Contribuição

### Prioridades

**Alta Prioridade:**
- Melhorias de performance
- Acessibilidade (a11y)
- Responsividade
- SEO

**Média Prioridade:**
- Novos componentes reutilizáveis
- Animações e transições
- Melhorias de UX

**Baixa Prioridade:**
- Melhorias de documentação
- Exemplos adicionais
- Testes

### Sugestões de Contribuição

1. **Componentes UI:**
   - Toast/Notificações
   - Modal avançado
   - Tooltip
   - Skeleton loaders

2. **Funcionalidades:**
   - Tema claro/escuro
   - Multi-idiomas (i18n)
   - Blog integrado
   - Sistema de busca

3. **Melhorias:**
   - Otimização de imagens
   - Lazy loading
   - PWA support
   - Analytics

## 🐛 Reportar Bugs

Use [GitHub Issues](https://github.com/salles75/Portfolio/issues) com:

```markdown
**Descrição do Bug:**
Descrição clara do problema.

**Para Reproduzir:**
1. Vá para '...'
2. Clique em '...'
3. Veja o erro

**Comportamento Esperado:**
O que deveria acontecer.

**Screenshots:**
Se aplicável.

**Ambiente:**
- OS: [ex: macOS, Windows]
- Browser: [ex: Chrome 120, Safari 17]
- Node: [ex: 20.10.0]

**Contexto Adicional:**
Qualquer outra informação relevante.
```

## 💡 Sugerir Features

Use [GitHub Issues](https://github.com/salles75/Portfolio/issues) com a label `enhancement`:

```markdown
**Problema a Resolver:**
Qual problema essa feature resolve?

**Solução Proposta:**
Como você imagina que funcione?

**Alternativas Consideradas:**
Outras abordagens que pensou?

**Contexto Adicional:**
Mockups, exemplos, referências.
```

## 📞 Contato

Dúvidas? Entre em contato:
- GitHub: [@salles75](https://github.com/salles75)
- Email: contato@guilhermesalles.dev
- LinkedIn: [guiisalles](https://www.linkedin.com/in/guiisalles)

## 🙏 Agradecimentos

Toda contribuição é valorizada, independente do tamanho. Obrigado por ajudar a melhorar este projeto!

---

**Nota:** Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença MIT do projeto.
