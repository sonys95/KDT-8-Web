const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리
app.get("/", (req, res) => {
  res.render("index");
});
const router = require("./routes");
app.use("/visitor", router);

//오류처리
app.use("*", (req, res) => {
  res.render("404");
});

// force: false = db가 있으면 생성 x
db.sequelize.sync({ force: force }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
