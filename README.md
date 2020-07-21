## Sumário de Checagem 

- [ ] [Server](#Sevidor com NodeJs e Typescript)
  - [ ] [Database](#Banco de dados com [Knex](http://knexjs.org/))
  - [ ] [Rotas](#Roteamento com [Express](https://expressjs.com/pt-br/guide/routing.html))
- [ ] [Web](#web)
- [ ] Mobile
  - [ ] 



## Node (global)

~~~shell
cd
sudo apt install nodejs
~~~

## Sevidor com [NodeJs](https://nodejs.org/en/docs/) e [Typescript](https://www.typescriptlang.org/)

~~~shell
mkdir server
cd server
npm init -y
npm i express
npm i typescript -D
npm i @types/express -D
npx tsc --init
npm i ts-node
mkdir src 
cd ..
~~~

### Execução auto do server

~~~shell
npm i ts-node-dev -D
npx ts-node-dev src/server.ts
~~~

dentro de package.json em scripts pode ser add os comando de execucao do shell

### Banco de dados com [Knex](http://knexjs.org/)

#### Instalacão e Estruturação

~~~shell
cd server
npm i knex
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
mkdir controllers
cd ..
~~~









## ts-Node	

~~~shell
npm install ts-node -D
~~~



## Executar pacote

~~~shell
npx ts-node src/server.ts
~~~

## Web

~~~shell
cd origem
npx create-react-app name --template=typescript
~~~

executar

~~~ shell
npm start
~~~



# Estutura de Diretórios

## 	Server

		### 		src

### 		server.ts

- [ ] 

### routes.ts







## Web

## Mobile

















