import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo", //ele precisa ter um nome
  initialState: ["Fazer café", "Estudar Redux", "Estudar Zustand"],

  reducers: {},
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
