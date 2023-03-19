const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Crypto@123",
  host: "top-10-cryptocurrency-tracker.onrender.com",
  port: 5432,
  database: "crypto",
});

module.exports = pool;
