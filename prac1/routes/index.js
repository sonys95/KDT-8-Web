const express = require("express");
const router = express.Router();
const controller = require("../controller/Clogin");

//GET localhost:8000/user/
router.get("/", controller.index);
router.get("/signin", controller.signin);
//로그인 정보 조회
router.post("/userinfo", controller.postUserinfo);
//get회원가입
router.get("/register", controller.Register);
//post회원가입
router.post("/register", controller.postRegister);

module.exports = router;
