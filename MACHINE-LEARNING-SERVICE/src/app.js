
require('dotenv').config();
const Server = require('./controllers/server.controller');

const server = new Server(process.env.PORT || 8080, '/api/v1/');
server.listen();
