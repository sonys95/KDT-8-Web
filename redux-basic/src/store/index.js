import { createSlice, configureStore } from "@reduxjs/toolkit";

//createSlice() : 리듀서와 액션을 함께 생성하는 함수
const counterslice = createSlice({
  name: "counter",
  initialState: { counter: 100 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

const initlogin = { isLogin: false };
const loginSlice = createSlice({
  name: "login",
  initialState: initlogin,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterslice.reducer, login: loginSlice.reducer },
});

export const counterAction = counterslice.actions;
export const loginAction = loginSlice.actions;
export default store;
