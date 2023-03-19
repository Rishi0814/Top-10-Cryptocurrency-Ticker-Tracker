const Pool = require("pg").Pool;

const pool = new Pool({
  user: "rishi",
  password: "63rVQAIZSbxdGeG9Zk28ug1XoD3HM5qy",
  host: "postgres://rishi:63rVQAIZSbxdGeG9Zk28ug1XoD3HM5qy@dpg-cgbju082qv267u94varg-a/crypto_acht",
  port: 5432,
  database: "crypto_acht",
});

module.exports = pool;
