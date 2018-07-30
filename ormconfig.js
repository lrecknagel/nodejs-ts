require('dotenv').config();

const ormconfig = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'food',
  entities: [
    __dirname + "/dist/entity/*.js"
  ],
  schema: 'public',
  // synchronize: true,
  // dropSchema: true,
};

module.exports = ormconfig;