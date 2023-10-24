const model = require("../model/Model");

// module.exports = {
//   main,
//   signup,
//   signin,
//   post_signup,
//   post_signin,
// };

//GET
exports.main = (req, res) => {
  res.render("index");
};
//회원가입 페이지
exports.signup = (req, res) => {
  res.render("signup");
};
//로그인 페이지
exports.signin = (req, res) => {
  res.render("signin");
};

//###############################
//POST
exports.post_signup = (req, res) => {
  model.db_signup(req.body, () => {
    res.json({ result: ture });
  });
};
exports.post_signin = (req, res) => {
  model.db_signin(req.body, (result) => {
    res.json({ result: true, data: result[0] });
  });
};
