const router = require("express").Router();
const controller = require("../controller/controller");
router.post("/saveData", controller.savedata);
router.get("/getData", controller.getdata);
router.get("/", (req, res) => {
  res.send("Working");
});
module.exports = router;
