const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("visitor");
});
const router = require("./routes");
app.use("/visitor", router);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
