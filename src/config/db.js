const { Pool } = require('pg');
const {
  PG_HOST,
  PG_USER,
  PG_PASSWORD,
  PG_DATABASE,
  PG_PORT,
  NODE_ENV
} = require('../helpers/env');

const config = {
  host: PG_HOST,
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DATABASE,
  port: PG_PORT,
};

if (NODE_ENV === 'production') {
  config.ssl = {
    rejectUnauthorized: false,
  };
}

const db = new Pool(config);

// check connection
db.connect((err) => {
  if (err) {
    console.log('db error');
    console.log(err.message);
  }
});

module.exports = db;