const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

//세션
//옵션객체
//httpOnly: 값을 true로 하면 사용자가 자바스크립트를 통해서 세션을
//사용할 수 없도록 강제
//secure: 값을 true로 하면 https에서만 세션을 주고받음
//secret: 안전하게 쿠키를 전송하기 위해 쿠키 서명 값 (세션을 발급할때 사용되는 키)
//resave: 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할 것 인지 , 덮어쓰기 가능하게 할지
//saveUninitialized: 세션에 저장할 내역이 없더라고 처음부터 세션을 생성할지 설정
app.use(
  session({
    secret: "mySessionKey",
    resave: false, // 덮어쓰기 안한다는ㅅ뜻
    saveUninitialized: true,
  })
);
app.get("/", (req, res) => {
  req.session.name = "손";
  const name = req.session.name;
  if (name) {
    res.send(`${name} 님 환영합니다 <form action="/logout" method="post">
    <button type="submit">로그아웃하기</button>
  </form>`);
    console.log();
  } else {
    res.send(`
    <button type="submit">회원가입</button><button type="ddd">로그인</button>
  `);
  }
});
app.get("/name", (req, res) => {
  res.send(req.session.name);
});
app.get("/destroy", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(PORT);
