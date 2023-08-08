const mysql = require("mysql");

//mysql연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});
conn.connect((err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connect");
});

//유저정보 조회
exports.postUserinfo = (id, pw, callback) => {
  console.log("아이디 조회");
  console.log("모델확인" + id);
  console.log("모델확인" + pw);
  const query = `SELECT * FROM user WHERE id = ?`;
  conn.query(query, [id], (err, rows) => {
    if (err) {
      console.error("Error while querying user:", err);
      callback(false); // 로그인 실패
      return;
    }

    if (rows.length === 0) {
      console.log("User not found");
      callback(false); // 로그인 실패: 아이디가 존재하지 않음
      return;
    }

    const user = rows[0];
    if (user.pw !== pw) {
      console.log("Incorrect password");
      callback(false); // 로그인 실패: 비밀번호 불일치
      return;
    }

    console.log("User logged in:", user);
    callback(true, user); // 로그인 성공
  });
};
//회원가입
exports.postRegister = (data, callback) => {
  console.log("모델단 회원가입");
  const query = `insert into user (id, pw) values('${data.id}', '${data.pw}')`;
  conn.query(query, (err, ss) => {
    console.log("회원등록", ss);
    callback(ss);
  });
};
