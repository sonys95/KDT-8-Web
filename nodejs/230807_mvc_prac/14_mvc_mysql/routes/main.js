const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
//회원가입
router.get("/signup", controller.signup); //회원가입 페이지 열기
router.post("/signup", controller.post_signup); //데이터베이스에 회원정보저장

//로그인
router.get("/signin", controller.signin); //로그인 페이지 열기
router.post("/signin", controller.post_signin); //로그인하기

//회원정보 조회
//조회
//수정
router.post("/edit", controller.edit);

module.exports = router;
