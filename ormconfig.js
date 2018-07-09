require('dotenv').config();

const ormconfig = {
  "type": "mysql",
  "host": process.env.DB_HOST,
  "port": 3306,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": 'food',
  entities: [
    __dirname + "/dist/entity/*.js"
  ],
};

module.exports = ormconfig;