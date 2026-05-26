# Site para Instalação do Decap CMS

Copie este diretório para a pasta `public/admin` do seu servidor web ou CDN.

O CMS precisa de dois arquivos:
- `index.html` - a interface do painel administrativo
- `config.yml` - a configuração das coleções de conteúdo

## Estrutura

```
public/admin/
├── index.html   # Interface do Decap CMS
└── config.yml   # Configuração de collections
```

## Configuração do Backend

A configuração atual usa `git-gateway` como backend, que é o método padrão para sites hospedados na Netlify.

Se você estiver usando outro provedor de hospedagem, será necessário configurar um backend diferente ou implementar autenticação customizada.

## Instalação Completa do Projeto

Siga as instruções no README.md principal do projeto para configurar todo o ambiente de desenvolvimento.
