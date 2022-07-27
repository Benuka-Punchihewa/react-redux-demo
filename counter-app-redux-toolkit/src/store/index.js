import { createStore, createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increaseCounter(state, action) {
      state.counter++;
    },
    decreaseCounter(state, action) {
      state.counter--;
    },
    increaseCounterBy(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
