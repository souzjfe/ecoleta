## Node (global)

~~~shell
sudo apt install nodejs
~~~

### Criar a base do node

~~~shell
mkdir server
npm init -y
cd server
npm i express
npm i typescript -D
npm i @types/express -D
npc tsc --init
np i ts-node
mkdir src 

~~~



### Execucao auto do server

~~~shell
npm i ts-node-dev -D
npx ts-node-dev src/server.ts
~~~

dentro de package.json em scripts pode ser add os comando de execucao do shell

## Typescript

~~~shell
cd server
npm install typescript -D
~~~

#### config ts

~~~shell
cd server
npc tsc --init
~~~





## Express

~~~shell
cd server
npm install express
~~~

### Knex

~~~shell
npm install knex
~~~

### Migrate

~~~shell
npx knex --knexfile knexfile.ts migrate:latest
~~~

### Seeds

~~~shell
npx knex --knexfile knexfile.ts seed:latest
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



