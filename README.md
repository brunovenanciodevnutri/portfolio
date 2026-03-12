# 🚀 Portfólio Profissional - Bruno Venâncio

Portfólio moderno e responsivo desenvolvido com Vue.js 3, TypeScript, Tailwind CSS e Vuetify. Otimizado para SEO e com design em tema escuro.

## ✨ Características

- 🎨 **Design Moderno**: Interface elegante com tema escuro e gradientes vibrantes
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance Otimizada**: Carregamento rápido e animações suaves
- 🔍 **SEO Friendly**: Meta tags otimizadas e HTML semântico
- ♿ **Acessível**: Estrutura semântica e navegação por teclado
- 🎯 **Navegação Suave**: Scroll suave entre seções
- 💫 **Animações**: Transições e efeitos visuais modernos

## 🛠️ Tecnologias

- **Vue.js 3** - Framework JavaScript progressivo
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vuetify** - Biblioteca de componentes Vue
- **Vite** - Build tool e dev server rápido
- **Lucide Icons** - Ícones modernos e personalizáveis

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Type check
npm run type-check
```

## 📝 Estrutura do Projeto

```
src/
├── assets/           # Estilos e imagens
│   ├── main.css     # Estilos globais e temas
│   └── images/      # Imagens do portfólio
├── components/      # Componentes reutilizáveis
│   └── layout/      # Layout components
│       ├── Header.vue     # Cabeçalho com navegação
│       ├── Footer.vue     # Rodapé
│       └── Layout.vue     # Layout principal
├── views/           # Páginas/Views
│   └── HomeView.vue # Página principal do portfólio
├── router/          # Configuração de rotas
└── plugins/         # Plugins (Vuetify)
```

## 🎨 Personalização

### 1. Informações Pessoais

Edite o arquivo `src/views/HomeView.vue` para atualizar:

- Nome e título na seção Hero
- Informações da seção "Sobre Mim"
- Habilidades técnicas
- Experiências profissionais
- Projetos em destaque
- Links de contato e redes sociais

### 2. Cores e Tema

Personalize as cores em `src/assets/main.css`:

```css
:root {
  --color-primary: #3b82f6;    /* Azul primário */
  --color-secondary: #8b5cf6;  /* Roxo secundário */
  --color-accent: #06b6d4;     /* Cyan de destaque */
  --color-dark-bg: #0f172a;    /* Fundo escuro */
  --color-dark-card: #1e293b;  /* Cards escuros */
}
```

### 3. SEO

Atualize as meta tags em `index.html`:

- Title e description
- Open Graph tags
- Twitter cards
- Keywords

### 4. Adicionar Projetos

No arquivo `src/views/HomeView.vue`, adicione novos projetos ao array `projects`:

```javascript
const projects = ref([
  {
    title: 'Nome do Projeto',
    description: 'Descrição detalhada do projeto...',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    link: 'https://github.com/seu-usuario/projeto',
    image: '/caminho/para/imagem.jpg'
  },
  // Adicione mais projetos...
]);
```

### 5. Links de Redes Sociais

Atualize os links no `HomeView.vue` e `Footer.vue`:

- LinkedIn
- GitHub
- Email
- Outros links relevantes

## 🔧 Configuração de Deploy

### Vercel / Netlify

1. Conecte seu repositório
2. Configure o comando de build: `npm run build`
3. Diretório de saída: `dist`
4. Publique!

### GitHub Pages

```bash
# Build
npm run build

# Deploy para GitHub Pages
# (configure o gh-pages ou use Actions)
```

## 📱 Seções do Portfólio

1. **Hero**: Apresentação inicial com nome, título e call-to-actions
2. **Sobre Mim**: Informações pessoais e profissionais
3. **Habilidades**: Stack técnico organizado por categorias
4. **Experiência**: Histórico profissional detalhado
5. **Projetos**: Portfólio de trabalhos realizados
6. **Contato**: Formulário e informações de contato

## 🎯 Boas Práticas Implementadas

- ✅ HTML Semântico (article, section, nav, etc.)
- ✅ Acessibilidade (ARIA labels, navegação por teclado)
- ✅ Meta tags otimizadas para SEO
- ✅ Open Graph e Twitter Cards
- ✅ Sitemap.xml e robots.txt
- ✅ Scroll suave entre seções
- ✅ Lazy loading de componentes
- ✅ TypeScript para type safety
- ✅ Design responsivo mobile-first

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como base para seu próprio portfólio!

## 💬 Contato

- **Email**: contato@brunovenancio.dev
- **LinkedIn**: [linkedin.com/in/bruno-venancio](https://linkedin.com)
- **GitHub**: [github.com/bruno-venancio](https://github.com)

---

Desenvolvido com 💙 por Bruno Venâncio
