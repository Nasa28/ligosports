const http = require('http');

require('dotenv').config();
const db = require('./models');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

db.sequelize.sync().then(() => {
  server.listen(port, () => {
    console.log(`App is listening on ${port}`);
  });
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});