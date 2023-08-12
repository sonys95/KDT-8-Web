const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
//cookie-parser
//일반 쿠키
// app.use(cookieParser());
//암호화 쿠키
app.use(cookieParser("abcdef"));
//cookie 옵션객체
const cookieConfig = {
  //httpOnly: 웹 서버를 통해서만 쿠키에 접근가능
  //자바스크립트에서 doucument.cookie를 이요해서 쿠키에 접속 하는 것을 차단
  //maxAge: 쿠키의 수명 밀리초
  //expires: 만료 날짜를 GMT시간설정
  //path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고
  //웹 브라우저는 해당하는 쿠키만 웹 서버에 전송
  //쿠키가 전송될 URL 특정 가능(기본값: "/")
  //domain: 쿠키가 전송될 도메인을 특정 가능 (기본값: 현재도메인)
  //secure: 웹브라우저와 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
  //signed: 쿠키의 암호화결정 (req.signedCookies 객에에 들어있음)
  httpOnly: true,
  maxAge: 60 * 1000, //1분
  signed: true,
};

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/setCookie", (req, res) => {
  //쿠키이름, 쿠키값, 옵션객체
  res.cookie("myCookie", "myValue", cookieConfig);
  res.send("set cookie");
});
app.get("/getCookie", (req, res) => {
  res.send(req.cookies);
});
app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "myValue", cookieConfig);
  res.send("claer cookie");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
