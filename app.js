const express = require('express');
const gamesRoute = require('./routes')
const cors = require('cors');
require('dotenv').config();

const ErrorMsg = require('./utils/ErrorMsg');
const globalErrorHandler = require('./controllers/errorController');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const port = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LigoSport API',
      version: '1.0.0',
      description: 'LigoSport API',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsDoc(options);


const app = express();
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors('*'));
app.use(express.json());

app.use('/api/', gamesRoute);

app.all('*', (req, res, next) => {
  next(new ErrorMsg(`Can't find this ${req.originalUrl} on this server`, 400));
});
app.use(globalErrorHandler);


module.exports = app;
