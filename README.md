# Nextjs Boilerplate

Este repositório é o meu boilerplate para construir aplicações fullstack com Nextjs. 😃
Reuni todas as tecnologias que utilizo visando trazer recursos modernos e eficientes. Dentre elas
estão ferramentas para lidar com persistência (drizzle orm), autenticação (better auth), testes e UI. Fique à vontade
para sugerir novas ferramentas abrindo uma issue, e para contribuir com o projeto.

## Dependências

Aqui está a lista de dependências e versões utilizadas no projeto:

- `@hookform/resolvers`: `^5.1.1`
- `@radix-ui/react-dialog`: `^1.1.14`
- `@radix-ui/react-label`: `^2.1.7`
- `@radix-ui/react-slot`: `^1.2.3`
- `@tanstack/react-query`: `^5.83.0`
- `better-auth`: `^1.2.12`
- `class-variance-authority`: `^0.7.1`
- `clsx`: `^2.1.1`
- `dotenv`: `^17.2.0`
- `drizzle-orm`: `^0.44.2`
- `drizzle-seed`: `^0.3.1`
- `lucide-react`: `^0.525.0`
- `next`: `15.3.5`
- `next-themes`: `^0.4.6`
- `pg`: `^8.16.3`
- `react`: `^19.1.0`
- `react-dom`: `^19.1.0`
- `react-hook-form`: `^7.60.0`
- `sonner`: `^2.0.6`
- `tailwind-merge`: `^3.3.1`
- `zod`: `^4.0.5`

## Estrutura de Pastas

A estrutura de pastas do projeto é a seguinte:

- `components`: contém os componentes React utilizados no projeto
- `lib`: contém as funções e utilitários utilizados no projeto
- `pages`: contém as páginas do projeto
- `public`: contém os arquivos estáticos do projeto
- `src`: contém o código fonte do projeto
- `styles`: contém os arquivos de estilo do projeto
- `tests`: contém os testes do projeto

## Como Rodar o Projeto

Para rodar o projeto, siga os passos abaixo:

1. Clone o repositório do projeto utilizando o comando `git clone <url-do-repositório>`
2. Instale as dependências do projeto utilizando o comando `npm install` ou `yarn install`
3. Inicie o servidor de desenvolvimento utilizando o comando `npm run dev` ou `yarn dev`
4. Acesse o projeto em `http://localhost:3000` no seu navegador

## Comandos Disponíveis

Aqui está a lista de comandos disponíveis no projeto:

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: compila o projeto para produção
- `npm run start`: inicia o servidor de produção
- `npm run test`: executa os testes do projeto
- `npm run lint`: executa o linter do projeto

## Instruções de arquitetura de projeto

- `app`: todos os módulos / rotas do projeto
  [!importante!]() prefixar subpastas com `_`
  - `_components`: componentes do módulo
  - `_actions`: funções servidor do módulo
  - `_hooks`: hooks do módulo
  -
- `actions`: funções servidor utilizadas no projeto
- `components`: componentes React utilizados no projeto
  - `ui`: componentes UI utilizados no projeto
  -
- `lib`: funções e utilitários relacionados à dependências do projeto
- `database`: recursos de banco de dados utilizados no projeto
- `providers`: providers utilizados no projeto
- `hooks`: hooks utilizados no projeto
- `utils`: utilitários utilizados no projeto
