import { createStore } from "redux";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETO_TODO";

//reducer
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Date.now() };
      return [...state, newTodo];
    case DELETE_TODO:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};
//store
const store = createStore(reducer);

export default store;
