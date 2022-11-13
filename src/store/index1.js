import { createStore } from 'redux';

const reducerFn = (state = { counter: 0, text: '' }, action) => {
  if (action.type === 'INC') {
    document.querySelector('h1').style.color = 'blue';
    return { counter: state.counter + 1, text: 'Increment button Click' };
  } if (action.type === 'DEC') {
    document.querySelector('h1').style.color = 'red';
    return { counter: state.counter - 1, text: 'decrement button Click' };
  } if (action.type === 'ADDBY') {
    return { counter: state.counter + action.payload, text: 'addBy button Click' };
  }
  return state;
};

const store = createStore(reducerFn);

export default store;
