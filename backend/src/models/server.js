const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const notasRouter = require('../routes/notas.routes');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    this.middlewares();
    this.routes();
  }

  // Prepara el servidor para recibir datos JSON y conexiones de Angular
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  // Conecta las rutas de notas con la dirección /api/notas
  routes() {
    this.app.use('/api/notas', notasRouter);
  }

  // Conecta MongoDB y luego inicia el servidor
  async listen() {
    await dbConnection();

    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;