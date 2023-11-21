const express = require("express");
const multer = require("multer");
const aws = require("aws-sdk");

const app = express();
const PORT = 8000;
const multerS3 = require("multer-s3");

const dotenv = require("dotenv");
dotenv.config();

const s3 = new aws.S3();

app.set("view engine", "ejs");
app.use("/uploads", express.static(__dirname + "/uploasds"));

aws.config.update({
  accessKeyId: process.env.S3_KEYID,
  secretAccessKey: process.env.S3_ACCESSKEY,
  region: process.env.S3_REGION,
});

app.get("/", (req, res) => {
  res.render("index");
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET,
    acl: "public-read", //파일 접근 권한(public-read로 해야 업로드된 파일 공개)
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString + "-" + file.originalname);
    },
  }),
});
app.post("/upload", upload.array("files"), (req, res) => {
  console.log(req.files);
  res.send(req.files);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
