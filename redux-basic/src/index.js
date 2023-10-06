import { createStore } from "redux";
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const num = document.querySelector("#num");

const todoInput = document.querySelector("#todoInput");
const todoForm = document.querySelector("#todoForm");
const ul = document.querySelector("ul");

const todoList = document.querySelector("#todoList");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Date.now() };
      return [...state, newTodo];
    case DELETE_TODO:
      return state.filter((el) => el.id !== "???");
  }
};

const store = createStore(reducer);
const removeTodo = (event) => {
  event.preventDefault();
  event.preventDefault();
  store.dispatch({ type: DELETE_TODO, id: Number(event.target.parentNode.id) });
};
store.subscribe(() => console.log(store.getState()));
store.subscribe(() => {
  const todos = store.getState();
  ul.innerText = "";
  todos.map((value) => {
    console.log(value);
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "삭제";
    btn.addEventListener("click", removeTodo);
    li.innerText = value.text;
    li.id = value.id;
    li.appendChild(btn);
    ul.appendChild(li);
  });
});
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  store.dispatch({ type: ADD_TODO, text: todoInput.value });
});

const ADD = "ADD";
const MINUS = "MINUS";
//redux를 이용한 코드

//리듀서는 데이터를 수정해주는 함수
// const countReducer = (state = 0, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case ADD:
//       div.innerText = "hi";
//       add.appendChild(div);
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     default:
//       return state;
//   }
// };
//store는 데이터를 넣는곳
//createStore : store생성, 리듀서 함수 필수
// const countStore = createStore(countReducer);
// console.log("-----------------countStore-----------------");
// console.log(countStore);

//subscribe()는 함수를 반환하며 데이터와 저장소가 변경될때마다 함수 실행
// countStore.subscribe(() => {
//   num.textContent = countStore.getState();
// });

// add.addEventListener("click", () => {
//   countStore.dispatch({ type: "ADD" });
// });
// minus.addEventListener("click", () => {
//   countStore.dispatch({ type: "MINUS" });
// });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
//getState() 는 createStore로 생성된 저장소에서 최신상태의 값을 반환할때 쓰는 메소드
// console.log(countStore.getState());

//javascript를 이용한 +1, -1 코드

// let count = 0;
// num.textContent = count;

// add.addEventListener("click", () => {
//   count = count + 1;
//   console.log(count);
//   num.textContent = count;
// });
// minus.addEventListener("click", () => {
//   count = count - 1;
//   console.log(count);
//   num.textContent = count;
// });
