<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

## Micro-Frontends: combinando frameworks com Module Federation e Single-SPA

Nesta aula, falaremos novamente sobre Micro-Frontends apresentando o framework
single-spa que é responsável por orquestrar nossos MFEs
vamos aprender como conectar diferentes frameworks dentro de single page aplications,
permitindo que você divida o código por funcionalidade
criando uma estrutura semelhante aos microsserviços, também iremos
use a federação de módulo para compartilhar nosso código entre projetos,
finalmente, usaremos redux para conectar nosso estado com todos
as outras estruturas.

No final desta lição, você será capaz de aplicar esses conceitos para criar
Micro-Frontends com diferentes frameworks se comunicando usando redux
para gerenciar nosso estado.

## Primeiros passos 🏁

Clone o repositório.

```sh
gh repo clone git@github.com:rocketseat-experts-club/Micro-Frontends-Single-SPA-2021-05-18.git
react-single-spa
```

`cd` no diretório.

```sh
cd react-single-spa
```

Instale as dependências do projeto:

```sh
yarn install
```

obs pra esse projeto nos estamos utilizando yarn workspces,
por isso o yarn se torna obrigatorio

Inicie o servidor de desenvolvimento:

```sh
yarn start
```

Finalmente, vá para [localhost: 3001](http://localhost:3001) no navegador de sua escolha e você está pronto para ir 🚀.

💡 **Dica profissional** use o branch `final` como guia de referência final, este branch contém o projeto final para que você possa acompanhar.

## Ferramentas 🧰

- [x] Svelt como framework de UI
- [x] Single-spa como orquestrador
- [x] React como uma linguagem de IU
- [x] Redux como gerenciador de state
- [x] Webpack5 como module bundler + module federation plugin
- [x] TailwindCss UI como nosso kit de ferramentas de design
## Estrutura do Projeto 🏗

Na pasta packages, temos os nossos micro front-end's:

- `home`: projeto principal onde todos os MFE's vão se conectar
- `nav` : MFE feito com react e exportado para o `home`
- `summary` : MFE utilizando svelt tambem sendo exportado para o `home`
- `product-list`: MFE utilizando vanilla JS sendo exportado para o `home`
- `store` :  MFE compartilhando a redux store sendo utilizado por todos os outros MFE's

## Expert

| [<img src="https://avatars.githubusercontent.com/u/7741167?s=460&u=41e738d1178fcf31656665fe34c1c490d9c271cb&v=4" width="75px;"/>](https://github.com/vitormalencar) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                          [Vitor Alencar](https://github.com/vitormalencar)                                                          |

## Licença

Projetado com ♥ por [vitormalencar](https://vitormalencar.com). Licenciado sob a [Licença MIT](licença).
