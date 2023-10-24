const express = require("express");
// const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");
//정적파일설정
app.use("/uploads1", express.static(__dirname + "/uploads1"));
// //multer setting
// const upload = multer({
//   //dest: 업로드할 파일을 저장할 경로를 지정
//   dest: "uploads/",
// });
// const uploadDetail = multer({
//   //storage: 저장할 공간에 대한 정보
//   //diskStorage: 파일을 디스크에 저장하기 위한 모믄 제어 기능을 제공
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads/");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       console.log(ext);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fileSize: 1024 * 1024 * 5 },
// });

app.get("/test", (req, res) => {
  res.render("test");
});
// //실습
// app.post("/register", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });
// //싱글
// app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
//   console.log(req.file);
//   console.log(req.body);
// });
// //멀티(ver1)
// app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
//   console.log(req.files);
//   console.log(req.body);
// });
// //멀티(ver2)
// app.post(
//   "/upload/fields",
//   uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
//   (req, res) => {
//     console.log(req.files);
//     console.log(req.body);
//   }
// );
const multer = require("multer");
const upload = multer({
  // dest: "uploads1/",
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads1/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      console.log(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
});
//동적
app.post("/dynamicFile", upload.single("dynamic-userfile"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/test`);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// const multer = require("multer");
// const upload = multer({
//   // dest: "uploads1/",
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads1/");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       console.log(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
// });
app.post(
  "/upload",
  upload.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log(req.file);
    console.log(req.body);
    res.send("Upload!!");
  }
);
app.post("/upload/array", upload.array("userfiles"), function (req, res) {
  console.log(req.files);
  console.log(req.body);
  res.send("Upload Multiple Each!!");
});
// const uploadDetail = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads/");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
// });
