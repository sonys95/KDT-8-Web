const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  res.render("index");
});
//get실습
app.get("/axiosGet", (req, res) => {
  res.render("get");
});
app.get("/resultGet", (req, res) => {
  console.log(req.query);
  res.send({ result: true, data: req.query });
});
//post실습
app.get("/axiosPost", (req, res) => {
  res.render("post");
});
app.post("/resultPost", (req, res) => {
  console.log(req.body);
  const id = "kdt8";
  const pw = "1234";
  if (id === req.body.username && pw === req.body.password) {
    res.send({ result: true, userInfo: req.body });
  } else {
    res.send({ result: false });
  }
});

//server start
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
