const Login = require("../model/Mlogin");

exports.index = (req, res) => {
  res.render("index");
};
exports.register = (req, res) => {
  res.render("register");
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
//회원수정
exports.post_profile = (req, res) => {
  console.log(req.body);
  User.post_profile(req.body, (result) => {
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    } else {
      res.redirect("index");
    }
  });
};
exports.edit_profile = (req, res) => {
  console.log(req.body);
  User.edit_profile(req.body, () => {
    res.send({ result: true });
  });
};
// exports.signin = (req, res) => {
//   res.render("signin");
// };
// //회원정보 조회
// exports.postUserinfo = (req, res) => {
//   Login.postUserinfo(req.body.id, req.body.pw, (loggedIn, user) => {
//     if (loggedIn) {
//       console.log("로그인 성공:", user);
//       res.render("loginSuccess", { user: user });
//     } else {
//       console.log("로그인 실패");
//       res.render("LoginFailure");
//     }
//   });
// };
