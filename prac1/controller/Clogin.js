const Login = require("../model/Mlogin");

exports.index = (req, res) => {
  res.render("index");
};
exports.signup = (req, res) => {
  res.render("signup");
};
//회원가입
exports.postRegister = (req, res) => {
  Login.postRegister(req.body, (result) => {
    res.send({
      result: true,
      id: req.body.id,
      pw: req.body.pw,
    });
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};
//회원정보 조회
exports.postUserinfo = (req, res) => {
  Login.postUserinfo(req.body.id, req.body.pw, (loggedIn, user) => {
    if (loggedIn) {
      console.log("로그인 성공:", user);
      res.render("loginSuccess", { user: user });
    } else {
      console.log("로그인 실패");
      res.render("LoginFailure");
    }
  });
};
