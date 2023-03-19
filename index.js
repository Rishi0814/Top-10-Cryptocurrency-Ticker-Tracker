const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use("/", routes);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
