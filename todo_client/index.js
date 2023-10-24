const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(bodyParser.json());

// ToDo  저장할 배열
let todoList = [];

// ToDo  조회
app.get("/todos", (req, res) => {
  res.json(todoList);
});
// ToDo  추가
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todoList.push(newTodo);
  res.json({ message: "추가", todo: newTodo });
});
// ToDo  삭제
app.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  if (isNaN(todoId) || todoId < 0 || todoId >= todoList.length) {
    res.status(400).json({ message: "다시 삭제" });
  } else {
    const deletedTodo = todoList.splice(todoId, 1);
    res.json({ message: "ToDo 삭제", deletedTodo });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
