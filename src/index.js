const express = require('express')
const routerConfig = require('./routes/index.routes.js')
const globalConstants = require('./const/globalConstants.js')
const  cors = require('cors');
const {sequelize} = require("./infra/clientDB");

const configuracionApi = (app) => {
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  return;
};

const configuracionRouter = (app) => {
  app.use('/api/', routerConfig.rutas_init())
};

const init = () => {
  const app = express()
  configuracionApi(app)
  configuracionRouter(app)
  app.listen(globalConstants.PORT)
  console.log('La aplicacion se está ejecutando en el puerto:' + globalConstants.PORT) // mostrar en consola que se está ejecutando la aplicación en el puerto correspondiente
};

init(); // iniciar la aplicación
