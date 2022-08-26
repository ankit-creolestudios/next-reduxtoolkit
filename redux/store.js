import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterReducer from "./feature/counterSlice";
import taskReducer from "./feature/taskSlice";
const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      task: taskReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
