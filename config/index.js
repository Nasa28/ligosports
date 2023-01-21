require('dotenv').config();

const { NODE_ENV,DATABASE_TEST, PORT, DEV_DATABASE, PASSWORD, MYSQL_USER, HOST, WAIT_HOSTS } =
  process.env;

['DEV_DATABASE', 'PORT', 'MYSQL_USER', 'PASSWORD', 'NODE_ENV'].forEach((key) => {
  if (process.env[key] === undefined) throw new Error(`${key} is required`);
});

module.exports = {
  NODE_ENV,
  PORT,
  DEV_DATABASE,
  PASSWORD,
  MYSQL_USER,
  HOST,
  DATABASE_TEST,
  WAIT_HOSTS,
};
