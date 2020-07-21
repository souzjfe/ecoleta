## Sumário de Checagem 

- [ ] [Server](#sevidor-com-nodeJs-e-typescript)
  - [ ] [Database](#banco-de-dados-com-knex)
  - [ ] [Rotas](#roteamento-com-express)
- [ ] [Web](#web-com-reactjs-e-typescript)
- [ ] [Mobile](#mobile-com-react-native-e-typescript)



## Node (global)

~~~shell
cd
sudo apt install nodejs
~~~

## Sevidor com [NodeJs](https://nodejs.org/en/docs/) e [Typescript](https://www.typescriptlang.org/)

#### Instalacão e Estruturação

~~~shell
mkdir server
cd server
npm init -y
npm i express ts-node
npm i typescript ts-node-dev @types/express -D
npx tsc --init
mkdir src uploads
cd ..
~~~

### Execução do server

~~~shell
npx ts-node-dev src/server.ts
~~~

dentro de package.json em scripts pode ser add os comando de execucao do shell

### Banco de dados com [Knex](http://knexjs.org/)

#### Instalacão e Estruturação

~~~shell
cd server
npm i knex
touch knexfile.ts
cd src
mkdir database
cd database
mkdir migrations seeds
touch connection.ts
cd ../../..
~~~

#### connection.ts

~~~typescript
import knex from 'knex';
import path from 'path';

const connection = knex ({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true
}); 

export default connection;
~~~

#### knexfile.ts

```typescript
import path from 'path';


module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
}; 
```

#### Migrate

~~~shell
npx knex --knexfile knexfile.ts migrate:latest
~~~

Dentro da pasta **migrations** crie os arquivos para criação de tabelas SQL. *Utilize 00_nomeDaPrimeiraTabela para criar na ordem correta*

#### Seed

~~~shell
npx knex --knexfile knexfile.ts seed:latest
~~~

Dentro da pasta **seeds** será incluido os arquivos para criação de dados iniciais de alguma tabela SQL já criada.



### Roteamento com [Express](https://expressjs.com/pt-br/guide/routing.html)

#### Instalacão e Estruturação

~~~shell
cd server
npm i express
touch routes.ts
cd src
mkdir controllers
cd ../..
~~~











## Executar pacote

~~~shell
npx ts-node src/server.ts
~~~

## Web com [ReactJs](https://pt-br.reactjs.org/) e [Typescript](https://www.typescriptlang.org/)

~~~shell
cd origem
npx create-react-app web --template=typescript
~~~

### Executar web

~~~ shell
npm start
~~~



# Estutura de Diretórios

## 	Server

		### 		src

### 		server.ts

- [ ] 

### routes.ts

## Mobile com [React-Native](https://reactnative.dev/) e [Typescript](https://www.typescriptlang.org/)

















