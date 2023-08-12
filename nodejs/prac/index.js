const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path");
const app = express();
const PORT = 8000;

// 이미지 업로드를 위한 multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // 이미지를 uploads 폴더에 저장
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", upload.single("profile"), (req, res) => {
  console.log(req.body);
  console.log("file", req.file);
  const responseData = {
    ...req.body,
    profile: req.file ? req.file.path : null, // 파일이 있으면 파일 경로를 저장, 없으면 null
  };
  res.send(responseData);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
