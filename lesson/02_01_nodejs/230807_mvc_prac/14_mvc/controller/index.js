const commentsModel = require("../model/Model");

exports.main = (req, res) => {
  res.render("index");
};

exports.users = (req, res) => {
  res.render("users", { lists: commentsModel });
};

exports.user = (req, res) => {
  console.log(req.params);
  //{index: '1'} 세미콜론: 뒤에붙은 변수가 key, 그 값이 value
  res.render("user", { data: commentsModel[Number(req.params.index) - 1] });
};

exports.axios = (req, res) => {
  console.log("back", req.body);
  res.send(req.body);
};

// module.exports = exports;

// //모듈사용방법
// //방법1
// const test = () => {};
// module.exports = test;
// //방법2
// module.exports.test2 = '함수, 변수 등 모두 사용';
// exports.text2 = ''; //생략형
