const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "scretKey";

const userInfo = { id: "son", pw: "1234", name: "손영석" };

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: uId, pw: uPw } = userInfo;

    if (id === uId && pw === uPw) {
      //토큰생성
      const token = jwt.sign({ id }, SECRET);
      res.json({ result: true, token });
    } else {
      //아이디나 비밀번호가 틀렸을 경우
      res.json({ result: false, message: "로그인정보가 올바르지 않습니다" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/token", (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ");
    try {
      const result = jwt.verify(token[1], SECRET);
      if (result.id === userInfo.id) {
        res.json({ result: true, name: userInfo.name });
      }
    } catch (error) {
      console.log(error);
      res.json({ result: false, message: "인증된 회원이 아닙니다" });
    }
  } else {
    res.redirect("/login");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
