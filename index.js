const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('openapi.json');
const middlewares = jsonServer.defaults();
require('dotenv').config();
const cors = require(cors);

const PORT = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);
server.listen(PORT);
