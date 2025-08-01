# 🚀 INSTRUÇÕES DE DEPLOY - PROJETO ESTRADA REAL

## 📋 PASSO A PASSO COMPLETO

### ✅ **ETAPA 1: CRIAR REPOSITÓRIO NO GITHUB**

1. **Acesse**: [github.com](https://github.com)
2. **Clique em**: "New repository" (botão verde)
3. **Nome sugerido**: `projeto-estrada-real` ou `estrada-real-website`
4. **Configurações**:
   - ✅ Public (ou Private se preferir)
   - ❌ NÃO marque "Add a README file" (já temos)
   - ❌ NÃO adicione .gitignore (já temos)
   - ❌ NÃO escolha license por enquanto
5. **Clique**: "Create repository"

### ✅ **ETAPA 2: CONECTAR PROJETO LOCAL AO GITHUB**

Copie a URL do seu repositório (será algo como: `https://github.com/SEU_USUARIO/projeto-estrada-real.git`)

No terminal do projeto, execute:

```bash
# Conectar ao repositório GitHub (SUBSTITUA pela sua URL)
git remote add origin https://github.com/SEU_USUARIO/projeto-estrada-real.git

# Fazer push dos commits
git branch -M main
git push -u origin main
```

### ✅ **ETAPA 3: DEPLOY VIA VERCEL CLI**

```bash
# 1. Login no Vercel
vercel login

# 2. Deploy do projeto
vercel --prod

# 3. Quando perguntado, responda:
# ? Set up and deploy "~/project"? [Y/n] y
# ? Which scope do you want to deploy to? [SEU_USUARIO]
# ? Link to existing project? [y/N] y (se quiser usar o projeto existente)
# ? What's the name of your existing project? project-opal-three-43
```

### ✅ **ETAPA 4: CONFIGURAÇÕES AUTOMÁTICAS**

O Vercel CLI irá detectar automaticamente:
- ✅ **Framework**: Vite
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `dist`
- ✅ **Install Command**: `npm install`

## 📊 **O QUE VAI ACONTECER:**

### 🎨 **Mudanças Visuais Aplicadas:**
- ✅ **Nova cor verde**: RGB(42, 93, 59) em todo o site
- ✅ **Fonte Poppins**: Aplicada como padrão
- ✅ **Design responsivo**: Otimizado para mobile

### 🔗 **Correções Funcionais:**
- ✅ **Link quebrado corrigido**: `/caminhos/velho/ouro-preto` agora funciona
- ✅ **Página Ouro Preto**: Criada com conteúdo completo (8 atividades)

### ⚡ **Otimizações Técnicas:**
- ✅ **Build otimizado**: 17s, sem warnings
- ✅ **Performance**: Lazy loading + code splitting
- ✅ **SEO**: Headers e cache configurados

## 🌐 **RESULTADO FINAL:**

Após o deploy, o site estará disponível em:
- **URL atual**: `project-opal-three-43.vercel.app`
- **Com todas as melhorias**: ✅ Implementadas

## 🚨 **IMPORTANTE:**

- ✅ **Backup**: Projeto salvo no GitHub
- ✅ **Versionamento**: Commits organizados
- ✅ **Deploy automatizado**: Via Vercel CLI
- ✅ **Especificações da diretoria**: 100% implementadas

---

**Status**: 🎉 **PRONTO PARA DEPLOY!**