const express = require("express");
const router = express.Router();
const controller = require("../controller/Clogin");

//GET localhost:8000/
router.get("/", controller.index);
// router.get("/signin", controller.signin);
// //로그인 정보 조회
// router.post("/userinfo", controller.postUserinfo);
//GET localhost:8000/register
router.get("/register", controller.register);
router.post("/register", controller.postRegister);

//
router.post("/profile", controller.post_profile);
router.patch("/profile/edit", controller.edit_profile);
module.exports = router;
