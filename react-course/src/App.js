import Todo from "./components/Todo";
import RegisterForm from "./RegisterForm.module.css";
import Card from "./Card.module.css";
import Button from "./Button.module.css";
import List from "./List.module.css";

import { useRef, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const nameInput = useRef();
  const ageInput = useRef();
  // const [showModal, setShowModal] = useState(false);
  // const [modalMessage, setModalMessage] = useState("");

  function addHandler(event) {
    event.preventDefault();
    console.log(nameInput);
    console.log(ageInput);

    const name = nameInput.current.value;
    const age = ageInput.current.value;

    const newUser = {
      name: name,
      age: age,
    };

    setUsers([...users, newUser]);
    nameInput.current.value = "";
    ageInput.current.value = "";
  }

  return (
    <>
      <h1>My todos</h1>
      <Todo text="learn React" />
      <Todo text="master React" />
      <Todo text="explore the full React course" />

      {/* ---------------------------------------- */}

      <div className={Card.card}>
        <form className={RegisterForm.registerForm} onSubmit={addHandler}>
          <label className={RegisterForm.registerFormlabel}>UserName</label>

          <input
            className={RegisterForm.registerForminput}
            ref={nameInput}
          ></input>

          <label className={RegisterForm.registerFormlabel}>age(year)</label>

          <input
            className={RegisterForm.registerForminput}
            ref={ageInput}
          ></input>

          <button className={Button.button}>Add User</button>
        </form>
      </div>

      <div className={Card.card}>
        {/* Display user data */}
        <ul>
          {users.map((user, index) => (
            <div key={index} className={List.list}>
              <h3>
                {user.name} ({user.age} years old)
              </h3>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
