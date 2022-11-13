import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
    text: '',
  },
  reducers: {
    increment(state) {
      let newState = state;
      document.querySelector('h1').style.color = 'red';
      newState = { counter: state.counter + 1, text: 'Increment button clicked' };
      return newState;
    },
    decrement(state) {
      let newState = state;
      document.querySelector('h1').style.color = 'blue';
      newState = { counter: state.counter - 1, text: 'decrement button clicked' };
      return newState;
    },
    addBy(state, action) {
      let newState = state;
      document.querySelector('h1').style.color = 'green';
      newState = { counter: state.counter + action.payload, text: 'addBy 10 button clicked' };
      return newState;
    },
  },
});

export const { actions } = counterSlice;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
