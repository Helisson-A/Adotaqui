'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const { logger, errorLog } = require('./middleware/logger');
//const cron = require('./controllers/cron/cronControllers')
const morgan = require('morgan')
const Routes = require('./routes/Routes')
const app = express();

app.use(express.json());
// app.use(logger);
// app.use(errorLog);
app.use(morgan('dev'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", ["*"]);
  res.header("Access-Control-Allow-Headers", 
            ["Origin", "X-Requested-With", "Authorization", "Content-Type"]);

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', ['PUT, POST, PATCH, DELETE, GET']);
    return res.status(200).send({});
  }
  app.use(cors());
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));  // apenas dados simples
app.use(bodyParser.json()); // json de entrada no body

app.set('view engine', 'ejs')
app.use('/api/v1', Routes.routes);

//cron.cron()

module.exports = app