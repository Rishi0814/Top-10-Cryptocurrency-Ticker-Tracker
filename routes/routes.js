const router = require("express").Router();
const controller = require("../controller/controller");
router.post("/saveData", controller.savedata);
router.get("/getData", controller.getdata);
module.exports = router;
