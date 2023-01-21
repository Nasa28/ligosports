const http = require('http');
const swaggerUI = require('swagger-ui-express');

require('dotenv').config();
const db = require('./models');
const app = require('./app');
const port = process.env.PORT || 3000;

// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

db.sequelize.sync().then(() => {
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`App is listening on ${port}`);
  });
});
