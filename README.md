# Águia Onboarding - Portal do Colaborador

Portal interno de onboarding para novos colaboradores da Águia Consultoria Imobiliária.

## Arquitetura

O projeto utiliza uma arquitetura simples baseada em arquivos:

```
aguia-onboarding/
├── content/                  # Arquivos de conteúdo editáveis
│   ├── apps/apps.yaml       # Lista de aplicativos
│   ├── contacts/contacts.yaml  # Lista de contatos
│   ├── culture/culture.yaml    # Textos sobre cultura
│   └── faq/faq.yaml         # Perguntas frequentes
├── static-admin/             # Arquivos do painel administrativo
│   ├── index.html           # Interface do CMS
│   └── config.yml           # Configuração das coleções
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   ├── data/                # Funções para carregar conteúdo
│   ├── pages/               # Páginas do site
│   ├── types/               # Tipos TypeScript
│   └── index.css            # Estilos globais
└── public/                  # Arquivos estáticos públicos
```

A paleta de cores oficial:
- **Primária**: `#f89921` (laranja Águia)
- **Secundária**: `#00354a` (azul marinho escuro)

## Como Rodar Localmente

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:5173`

## Como Publicar na Vercel

### Opção 1: Via GitHub (Recomendado)

1. Crie um repositório no GitHub
2. Faça push do projeto para o repositório
3. Acesse [vercel.com](https://vercel.com)
4. Clique em "New Project"
5. Importe o repositório GitHub
6. Configure as opciones de build:
   - Build Command: `pnpm build`
   - Output Directory: `dist`
7. Clique em "Deploy"

### Opção 2: Via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
```

## Como Acessar o Painel Administrativo

### Configuração do Admin na Vercel

O painel admin requer configuração adicional na Vercel:

1. Acesse o painel do projeto na Vercel
2. Vá em **Settings** > **Build & Development Settings**
3. Em **Build Command**, verifique que está configurado corretamente
4. Em **Redirects/Rewrites**, adicione uma regra:

   ```json
   {
     "source": "/admin",
     "destination": "/admin.html"
   }
   ```

5. Faça deploy novamente

### Acesso Local

Para desenvolvimento local com o admin funcionando:

1. Inicie o servidor em modo desenvolvimento
2. Abra `http://localhost:5173/admin/`

### Acesso em Produção

1. Acesse `https://seu-dominio.vercel.app/admin/`

## Como Editar o Conteúdo

### Via Painel Administrativo

1. Acesse `/admin`
2. Entre com sua conta Netlify (para git-gateway) ou configure autenticação
3. Navegue pelas coleções no menu lateral:
   - **Aplicativos**: Gerenciar lista de apps
   - **Contatos**: Gerenciar contatos úteis
   - **Cultura**: Gerenciar textos sobre a empresa
   - **FAQ**: Gerenciar perguntas frequentes
4. Clique em "New" para adicionar ou edite itens existentes
5. Salve as alterações

### Via Código

Edite diretamente os arquivos YAML em `content/`:

- `content/apps/apps.yaml`
- `content/contacts/contacts.yaml`
- `content/culture/culture.yaml`
- `content/faq/faq.yaml`

Após editar, commite e push para atualizar o site.

## Estrutura de Conteúdo

### Aplicativos (apps.yaml)

```yaml
items:
  - name: "Nome do App"
    description: "Descrição breve"
    website_url: "https://exemplo.com"
    ios_url: "https://apps.apple.com/..."
    android_url: "https://play.google.com/..."
    icon: "video"  # Nome do ícone Lucide
```

### Contatos (contacts.yaml)

```yaml
items:
  - name: "Nome Completo"
    role: "Cargo"
    description: "Breve descrição"
    whatsapp_url: "https://wa.me/55..."
```

### Cultura (culture.yaml)

```yaml
items:
  - title: "Título do Card"
    content: |
      Conteúdo em formato markdown.
      Suporta múltiplas linhas e **negrito**.
```

### FAQ (faq.yaml)

```yaml
items:
  - question: "Pergunta frequente?"
    answer: |
      Resposta detalhada em formato markdown.
```

## Ícones Disponíveis

Para aplicativos, os ícones disponíveis são:

- `video`
- `layout`
- `hard-drive`
- `message-circle`
- `table`
- `message-square`
- `calendar`
- `mail`
- `file-text`
- `cloud`
- `bar-chart`
- `settings`

## Tecnologias

- React 18
- TypeScript 5
- Vite 6
- Tailwind CSS
- React Router v6
- Lucide Icons
- Decap CMS (Git-based)

## Manutenção

O projeto foi projetado para máxima simplicidade:

- **Sem backend customizado**: Todo conteúdo em arquivos YAML
- **Sem banco de dados**: Arquivos versionados no Git
- **Sem autenticação complexa**: Usa git-gateway do Decap CMS
- **Fácil atualização**: Edite pelo CMS ou diretamente nos arquivos YAML

Para atualizar textos, links ou adicionar novos itens, basta editar os arquivos YAML na pasta `content/` ou usar o painel administrativo.
