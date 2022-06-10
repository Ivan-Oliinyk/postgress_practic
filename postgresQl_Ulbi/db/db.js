const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "97865900",
  host: "localhost",
  port: 5432,
  database: "practic_db",
});

module.exports = pool;
