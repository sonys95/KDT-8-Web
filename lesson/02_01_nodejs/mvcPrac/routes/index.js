const express = require("express");
const router = express.Router();
const controller = require("../controller/CVisitor");

router.post("/write", controller.postVisitor);

module.exports = router;
