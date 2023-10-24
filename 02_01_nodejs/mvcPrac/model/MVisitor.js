const mysql = require("mysql");

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

exports.postVisitor = (data, callback) => {
  console.log("방명록 하나 추가");
  const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}', '${data.comment}')`;
  conn.query(query, (err, rows) => {
    console.log("write", rows);
    callback(rows);
  });
};
