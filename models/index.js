'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);

const {
  NODE_ENV,
  DEV_DATABASE,
  DATABASE_TEST,
  PASSWORD,
  MYSQL_USER,
  HOST,
} = require('../config/index');
const env = NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
let mainDB;

if(NODE_ENV==='test'){
  mainDB = DATABASE_TEST
}else{
   mainDB = DEV_DATABASE
}
const sequelize = new Sequelize(mainDB, MYSQL_USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


