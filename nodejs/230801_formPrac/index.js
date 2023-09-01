const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
//req.body 즉, POST전송일때 사용
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set("view engine", "ejs");
//views 라는 설정을 다른 폴더로 바꿀때 쓰는 옵션
//views라는 폴더를 기본으로 사용할때는 입력 안해도 됨
app.set("views", "./views");
//router
app.get("/test", (req, res) => {
  res.render("test");
});
//use 는 http전송방식을 이해하지 못함
//같은 url로 get, post를 만들수 있지만 use로는 접근이 불가
//예를들어 get방식의 '/login'과 post방식의 '/login'은 다른 페이지이지만 use는 동일한 페이지로 인식
//use는 404페이지 일때 사용!!!

//일반폼은 동기방식, 동적폼은 비동기방식 => 대부분 동적품으로 만듦
app.get("/getForm", (req, res) => {
  // get  방식은 requset(req)에 query형태로 접근
  //result 페이지에 데이터 전송
  //#1
  res.render("result", {
    title: "GET요청 결과 확인",
    userInfo: { id: req.query.id, pw: req.query.pw },
  });
  //#2 코드 구조분해하기
  // const {id, pw} = req.query
  // res.render("result", {title: "GET요청 결과 확인", userInfo: {id: id, pw: pw}})
  //#3 코드 줄이기2
  // const {id, pw} = req.query
  // res.render("result", {title: "GET요청 결과 확인", userInfo: { id, pw}})
});
app.post("/postForm", (req, res) => {
  //post방식은 requet(req) 에 body형태로 접근
  //req.body 구조분해할당 req.body.id, req.body.pw
  const { id, pw } = req.body;
  //result페이지에 데이터 전송
  res.render("result", { title: "post요청 결과 확인", userInfo: { id, pw } });
});

app.use("*", (req, res) => {
  res.render("404");
});

// app.get("/", (req, res) => {
//   res.render("index");
// });
// //get으로 정보 받기
// app.get("/getPage", (req, res) => {
//   res.render("get");
// });
// app.get("/resultGet", (req, res) => {
//   res.render("result", { title: "get방식", userInfo: req.query });
// });
// //post로 정보 받기
// app.get("/postPage", (req, res) => {
//   res.render("post");
// });

//서버오픈
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
