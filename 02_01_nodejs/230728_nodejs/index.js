const express = require("express");
// import express, { response } from "express";

const app = express();
const PORT = 8080;

//뷰엔진
app.set("view engine", "ejs");
app.set("/views", "./views");

//정적인 파일 불러오기
app.use("/public", express.static(__dirname + "/public"));
app.use("/img", express.static(__dirname + "/img"));

app.get("/", (request, response) => {
  //send() 클라이언트에 응답 데이터를 보낼때
  //   response.send("hello express");
  //   response.send({
  //     result: true,
  //     code: 1000,
  //     message: "회원가입에 성공하였습니다.",
  //     data: { name: "martine" },
  //   });

  //render() 뷰 엔진 렌더링
  response.render("main");
});
app.get("/domain1", (request, response) => {
  //render() 뷰 엔진 렌더링
  response.render("domain1");
});
app.get("/domain2", (request, response) => {
  //render() 뷰 엔진 렌더링
  response.render("domain2");
});
app.get("/domain3", (request, response) => {
  //render() 뷰 엔진 렌더링
  response.render("domain3");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
