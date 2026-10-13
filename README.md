# Wiki da Esclerose Múltipla

Wiki aberta com informação clara e confiável sobre esclerose múltipla (EM), feita para pessoas com EM, familiares e cuidadores.

O conteúdo é escrito em linguagem simples, revisado por profissionais de saúde e aberto a sugestões de qualquer pessoa.

> Este projeto é informativo e não substitui a consulta com profissionais de saúde.

## Como rodar no seu computador

Você precisa do [Node.js](https://nodejs.org) versão 18 ou mais recente.

```bash
npm install
npm start
```

O site abre em `http://localhost:3000`. As mudanças nos arquivos aparecem na hora.

Para gerar a versão final do site:

```bash
npm run build
```

## Publicação

A wiki é publicada automaticamente no GitHub Pages a cada mudança na branch `main`, pelo arquivo `.github/workflows/publicar.yml`. Endereço:

https://yasminromerorodrigues.github.io/wiki-esclerose-multipla/

Para ativar, vá em **Settings → Pages** e escolha **GitHub Actions** em "Source".

## Estrutura

```
docs/                      Conteúdo da wiki (Markdown)
  intro.md                 Página inicial
  01-entendendo-a-em/      O que é, tipos, causas
  02-diagnostico/
  03-sintomas/
  04-tratamentos/
  05-direitos/             SUS, INSS, trabalho
  06-vivendo-com-em/
  07-familiares/
  08-apoio/                Glossário, apoio, relatos
src/css/custom.css         Tema (fonte, cores, acessibilidade)
docusaurus.config.js       Configuração do site
```

Cada pasta tem um `_category_.json` com o nome e a ordem da seção no menu. Para criar uma página nova, basta adicionar um arquivo `.md` na pasta certa.

## Acessibilidade

Muitas pessoas com EM têm alterações visuais, fadiga ou dificuldade de concentração. Por isso o site usa:

- a fonte **Atkinson Hyperlegible**, criada para leitores com baixa visão;
- texto maior e mais espaçado que o padrão, com linhas curtas;
- cores com bom contraste, modo escuro e links sempre sublinhados;
- foco do teclado visível e respeito à preferência por menos animação;
- um resumo no topo de cada página.

## Como contribuir

Veja o [guia de contribuição](CONTRIBUTING.md). Todo conteúdo de saúde passa por revisão antes de ser publicado.

## Licenças

- **Conteúdo** (pasta `docs/`): [Creative Commons BY-SA 4.0](LICENSE-CONTEUDO.md). Você pode copiar e adaptar, desde que dê crédito e mantenha a mesma licença.
- **Código** (todo o resto): [MIT](LICENSE).
- **Nome e logo** do projeto não estão incluídos nessas licenças.

## Próximos passos

- [ ] Revisão profissional das páginas marcadas como "Aguardando revisão"
- [ ] Adicionar busca (o [Algolia DocSearch](https://docsearch.algolia.com) é gratuito para projetos open source)
- [ ] Criar a seção de Experiências
- [ ] Adicionar logo e favicon em `static/img/`
