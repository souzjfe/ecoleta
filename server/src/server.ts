import express, { request, response } from 'express';
import cors from 'cors';
import routes from './routes';

import path from 'path';
const app = express();


app.use(cors());
app.use(express.json()); //fazendo o express entender json
app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);
// Rota: Endereco completo da requisicao
//recurso qual entidade estamos acessendo do sistema


// GET: Buscar uma ou mais info do back-end
// POST: Criar uma nova info do back-end
// PUT: Atualizar uma nova info no back-end
// DELETE: Remove info do back-end

// Request param: parametros que vem na propria rota que identificam um recurso
// Query param: params que vem na propro rota geranlmente opcionasi para filtros paginacao
// Request body : parms para criar e atualizar user















app.listen(3333);