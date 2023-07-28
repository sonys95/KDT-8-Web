// const { age } = require("./module.js");
// console.log(age);

const http = require("http");
const fs = require("fs");
const server = http.createServer((request, Response) => {
  //   Response.writeHead(200);
  //   Response.write("<h1>hello</h1>");
  //   Response.end("<p>End</p>");

  //파일전송
  try {
    const data = fs.readFileSync("./index.html");
    Response.writeHead(200);
    Response.end(data);
  } catch (error) {
    console.log(error);
    Response.writeHead(404);
    Response.end(error.message);
  }
});

server.listen(8000, function () {
  console.log("localhost: 8000포트로 실행");
});
