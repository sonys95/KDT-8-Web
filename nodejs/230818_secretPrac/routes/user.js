const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.index);
router.get("/login", controller.login);
router.get("/register", controller.register);

// router.post("/login", controller.postLogin);
router.post("/register", controller.postRegister);

module.exports = router;
