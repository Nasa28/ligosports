require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.PASSWORD,
    database: process.env.DEV_DATABASE,
    host: process.env.HOST,
    dialect: 'mysql',
  },

  test: {
    username: process.env.MYSQL_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_TEST,
    host: process.env.HOST,
    dialect: 'mysql',
  },
};
