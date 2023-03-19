const express = require("express");
const app = express();
const port = 3000;
// const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const pool = require("./Database/db");
const routes = require("./routes/routes");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/", routes);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
