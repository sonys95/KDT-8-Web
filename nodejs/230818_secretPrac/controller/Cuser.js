const models = require("../models");
const { Op } = require("sequelize");

exports.index = (req, res) => {
  res.render("index");
};
exports.login = (req, res) => {
  res.render("login");
};
exports.register = (req, res) => {
  res.render("register");
};

// exports.postLogin = (req, res)=>{

// }
//bcrypt(단방향)

// exports.postRegister = (req, res) => {
//   models.User.create({
//     userid: req.body.userid,
//     name: req.body.name,
//     pw: req.body.pw,
//   }).then((result) => {
//     res.send({ result: true });
//   });
// };
//@@@@@@@@@@@@@@@@@@@@@@@@@@@
const saltNumber = 10;
const bcrypt = require("bcrypt");
// 암호화 함수
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};
exports.postRegister = (req, res) => {
  const hashedPassword = bcryptPassword(req.body.pw);

  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: hashedPassword, // 암호화된 비밀번호를 저장
  })
    .then(() => {
      res.send({ result: true });
    })
    .catch((error) => {
      res.status(500).send({ result: false, error: "Error creating user" });
    });
};
