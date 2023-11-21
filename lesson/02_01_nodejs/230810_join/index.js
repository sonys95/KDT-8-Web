const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.set("view engine", "ejs");
//app.set("views", "./views"); views라는 폴더를 사용하고 있기 때문에 생략 가능
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
const router = require("./routes/student");
app.use("/", router);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
