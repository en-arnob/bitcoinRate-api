const router = require("express").Router();

const { apiGetController } = require("./controller");

router.get("/getBitcoinInfo", apiGetController);

module.exports = router;
