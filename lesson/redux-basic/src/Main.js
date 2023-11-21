import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, DELETE_TODO } from "./store/legacy";

export default function Main() {
  const [text, setText] = useState("");
  //useSelector() : 리덕스 store의 state를 조회
  // 인자로 콜백함수, 콜백함수의 매개변수로 state를 받을 수 있음
  //자동으로 subscribe을 하고 있기 떄문에 데이터가 변형되면 컴포넌트가 재실행
  const todos = useSelector((state) => state);
  console.log(todos);
  //dispatch는 우리가 호출 할 수 있는 함수
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, text });
    setText("");
  };

  const onClick = (id) => {
    console.log(id);
  };
  return (
    <dv>
      <h1>ToDos</h1>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          <li key={todo.id} id={todo.id}>
            {todo.text}
            <button onClick={() => onClick(todo.id)}>삭제</button>
          </li>;
        })}
      </ul>
    </dv>
  );
}
