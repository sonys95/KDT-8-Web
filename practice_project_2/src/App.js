import React, { useState } from "react";
import "./index.css";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import List from "./Components/List/List";
import Modal from "./Components/Modal/Modal";

function App() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState("");

  const submitHandler = (user) => {
    try {
      if (
        user.userName.trim().length === 0 ||
        user.userAge.trim().length === 0
      ) {
        const err = new Error("이름 또는 나이를 입력해주세요.");
        throw err;
      }
      if (!Number.isNaN(Number(user.userName))) {
        const err = new Error("이름을 다시 입력해주세요.");
        throw err;
      }

      const age = Number(user.userAge);

      if (age <= 0) {
        const err = new Error("나이를 다시 입력해주세요.( age > 0)");
        throw err;
      }

      setUserList((prev) => [...prev, user]);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <RegisterForm onSubmit={submitHandler} />

      <List userList={userList} />

      {error && <Modal error={error} setError={setError} />}
    </>
  );
}

export default App;
