# 🚀 Guia de Deploy - Café Fazenda São Tomé

## Opção 1: Netlify (Recomendado - Mais Fácil)

### Deploy Rápido (Drag & Drop)

1. **Acesse**: [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. **Arraste** a pasta `cafefazendasaotome` para o navegador
3. **Pronto!** Seu site estará online em segundos

### Deploy via GitHub (Mais Profissional)

1. **Crie uma conta gratuita** no [GitHub](https://github.com)

2. **Crie um novo repositório**:
   - Clique em "New repository"
   - Nome: `cafefazendasaotome`
   - Deixe como público
   - Clique em "Create repository"

3. **Faça upload dos arquivos**:
   ```bash
   # No terminal, dentro da pasta cafefazendasaotome:
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/cafefazendasaotome.git
   git push -u origin main
   ```

4. **Deploy no Netlify**:
   - Acesse [https://app.netlify.com](https://app.netlify.com)
   - Clique em "Add new site" > "Import an existing project"
   - Conecte com GitHub
   - Selecione o repositório `cafefazendasaotome`
   - Clique em "Deploy site"

5. **Personalize o domínio** (opcional):
   - Em "Site settings" > "Domain management"
   - Clique em "Options" > "Edit site name"
   - Escolha um nome como `cafesaotome.netlify.app`

---

## Opção 2: Vercel

1. **Acesse**: [https://vercel.com](https://vercel.com)
2. **Faça login** com GitHub
3. **Clique** em "Add New" > "Project"
4. **Importe** o repositório do GitHub
5. **Deploy!**

---

## Opção 3: GitHub Pages (100% Gratuito)

1. **Suba os arquivos** para um repositório GitHub (passos acima)

2. **Ative o GitHub Pages**:
   - Vá em "Settings" do repositório
   - Clique em "Pages" no menu lateral
   - Em "Source", selecione "main" branch
   - Clique em "Save"

3. **Acesse**: `https://SEU-USUARIO.github.io/cafefazendasaotome`

---

## 📝 Notas Importantes

- **Domínio personalizado**: Você pode conectar um domínio próprio (ex: `cafesaotome.com.br`) em qualquer uma dessas plataformas
- **HTTPS**: Todas as opções incluem certificado SSL gratuito
- **Atualizações**: Basta fazer push no GitHub que o site atualiza automaticamente

---

## 🎯 Recomendação

Para começar rápido: **Netlify Drag & Drop**
Para longo prazo: **Netlify + GitHub**

Ambos são 100% gratuitos e muito confiáveis! ✨
