import React, { useState, useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("/todos")
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newTodo }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodoList([...todoList, data.todo]);
        setNewTodo("");
      });
  };

  const deleteTodo = (id) => {
    fetch(`/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        const updatedList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedList);
      });
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
