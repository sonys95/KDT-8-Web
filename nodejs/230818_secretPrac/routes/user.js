const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.index);
router.get("/login", controller.login);
router.get("/register", controller.register);

router.post("/register", controller.postRegister);
router.post("/login", controller.postLogin);

module.exports = router;
