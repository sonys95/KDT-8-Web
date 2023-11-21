const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);
//socket서버
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});
app.get("/chat", (req, res) => {
  res.render("chat");
});

////////////////////// 소켓
io.on("connection", (socket) => {
  socket.on("join", (chatroom) => {
    socket.room = chatroom;
    socket.join(chatroom);
    //broadcast포함시 나를 제외한 전체 사용자에게 메세지 전달
    socket.broadcast.to(chatroom).emit("userjoin", chatroom);
  });
  socket.on("message", (message) => {
    //io.to(특정방).emit(이벤트) : 특정방에 전체 사용자에게 메세지 전달
    io.to(socket.room).emit("chat", `${message}`);
  });
  /////////////////////////////////////
  //   socket.on("new_message", (arg, cb) => {
  //     console.log(arg);
  //     cb(arg);
  //   });
  //실습1///////////////////////////////////////////////
  //   socket.on("hello", (data) => {
  //     console.log(`${data.name}: ${data.message}`);
  //     socket.emit("cbHello", { name: "server", message: "안녕하세요" });
  //   });
  //   socket.on("study", (data) => {
  //     console.log(`${data.name}: ${data.message}`);
  //     socket.emit("cbstudy", { name: "server", message: "공부하자" });
  //   });
  //   socket.on("bye", (data) => {
  //     console.log(`${data.name}: ${data.message}`);
  //     socket.emit("cbbye", { name: "server", message: "바이바이" });
  //   });
  ///////////////////////////////////////////////////////////
});

//서버오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
