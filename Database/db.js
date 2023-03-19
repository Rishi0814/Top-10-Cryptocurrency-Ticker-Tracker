const Pool = require("pg").Pool;
const fs = require("fs");

const ssl = {
  rejectUnauthorized: true,
  ca: fs.readFileSync(__dirname + "/../cacert.pem").toString(),
};
const pool = new Pool({
  user: "rishi",
  password: "63rVQAIZSbxdGeG9Zk28ug1XoD3HM5qy",
  host: "dpg-cgbju082qv267u94varg-a.singapore-postgres.render.com",
  port: 5432,
  database: "crypto_acht",
  ssl: ssl,
});

pool
  .connect()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Error connecting to database", err));
module.exports = pool;
