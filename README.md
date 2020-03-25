# pwa-seguros-carros-form
Frontend de simples implementação em Angular aplicando os conceitos de PWA (Progressive Web App) utilizando o banco de dados Client-Side IndexedDB.
Esse projeto consome a API [desse repositório](https://github.com/gwathsule/seguro-carros-api-teste) para listar e armazenar seguros de carros e uma [api externa de testes](https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes) para listar marcar de carro.

São características do projeto:
- armazenar as informações carregadas das duas APIs no browser do cliente utilizando o service worker, para que o cliente possa acessar offline;
- armazenar a aplicação (front) no browser do cliente utilizando o service worker, para que o cliente possa visualizar mesmo offline;
- identificar se o cliente está online ou offline no momento de armazenar uma informação na API local;
- caso identifique que o cliente está offline, salvar as informações inseridas numa tabela no IdenxedDB, banco de dados client-side;
- identificar quando o cliente voltar ao estado "online" e automaticamente enviar todas as informações guardadas no IndexedDB para API local, liberando, logo após, um espaço no banco de dados.

Para instalar o projeto na sua máquina local efetue o clone do repositório e utilize os seguintes comandos:

```sh
#instalar bibliotecas
$ npm install

#gerar arquivos e iniciar
$ ng build --prod
$ cd dist/pwa-seguros-carro-form/
$ npx serve
```

**Projeto criado seguindo [esse curso](https://www.youtube.com/playlist?list=PLn3kOoc0oI2cs0KHVq8FPODa8uWdkZJBo) do Andrew Rosário no Youtube. Que recomendo a todos**
