# Política de Segurança

## 🔒 Versões Suportadas

| Versão | Suportada          |
| ------ | ------------------ |
| 1.x.x  | :white_check_mark: |

## 🐛 Reportando uma Vulnerabilidade

A segurança deste projeto é levada a sério. Se você descobrir uma vulnerabilidade de segurança, por favor, siga estas diretrizes:

### Processo de Reporte

1. **NÃO** abra uma issue pública sobre a vulnerabilidade
2. Envie um email para: **contato@guilhermesalles.dev**
3. Inclua os seguintes detalhes:
   - Descrição da vulnerabilidade
   - Passos para reproduzir o problema
   - Possível impacto
   - Sugestões de correção (se houver)

### O que esperar

- **Confirmação:** Você receberá uma resposta em até 48 horas confirmando o recebimento
- **Investigação:** A vulnerabilidade será investigada e avaliada
- **Resolução:** Uma correção será desenvolvida e testada
- **Divulgação:** A vulnerabilidade será divulgada publicamente após a correção estar disponível
- **Crédito:** Você será creditado pela descoberta (se desejar)

### Tempo de Resposta

- Confirmação de recebimento: **48 horas**
- Atualização sobre o status: **7 dias**
- Correção estimada: **30 dias** (dependendo da gravidade)

## 🛡️ Melhores Práticas de Segurança

### Para Desenvolvedores

1. **Dependências:**
   - Mantenha todas as dependências atualizadas
   - Use `npm audit` regularmente
   - Revise PRs de dependabot

2. **Código:**
   - Nunca commite credenciais ou secrets
   - Use variáveis de ambiente para dados sensíveis
   - Valide e sanitize todas as entradas do usuário

3. **Build & Deploy:**
   - Use HTTPS para todas as conexões
   - Configure CSP (Content Security Policy) adequadamente
   - Habilite CORS apenas para origens confiáveis

### Para Usuários

1. **Variáveis de Ambiente:**
   ```bash
   # Nunca commite .env com dados reais
   cp .env.example .env
   # Adicione suas próprias credenciais
   ```

2. **Atualizações:**
   ```bash
   # Mantenha o projeto atualizado
   npm update
   npm audit fix
   ```

3. **Segurança no Deploy:**
   - Use plataformas confiáveis (Vercel, Netlify)
   - Configure variáveis de ambiente corretamente
   - Habilite proteções de firewall/WAF quando disponível

## 🔐 Configurações de Segurança

### Headers de Segurança Recomendados

```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
]
```

### Content Security Policy

```javascript
// CSP recomendado
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self' https:;
  frame-ancestors 'self';
`
```

## ⚠️ Vulnerabilidades Conhecidas

Atualmente não existem vulnerabilidades conhecidas não corrigidas.

### Histórico de Vulnerabilidades

Nenhuma vulnerabilidade foi reportada até o momento.

## 📚 Recursos Adicionais

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [React Security Best Practices](https://react.dev/learn/security)

## 🙏 Agradecimentos

Agradecemos a todos que contribuem para manter este projeto seguro, especialmente àqueles que reportam vulnerabilidades de forma responsável.

---

**Última atualização:** 2024-01-01
