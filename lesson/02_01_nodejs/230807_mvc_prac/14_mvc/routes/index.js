const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

//router
router.get("/", controller.main);
//전체 목록 보기
//GET /comments
router.get("/users", controller.users);
//상세 보기
//GET /comment/:index
router.get("/user/:index", controller.user);

router.post("/axios", controller.axios);

module.exports = router;
