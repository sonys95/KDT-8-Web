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
//GET 조회 방식일때는 URL 을 query string 또는 파라미터 방식으로 지정
router.get("/profile/:init", controller.profile);

//수정
// router.patch("profile/edit", controller.edit_profile);

module.exports = router;
