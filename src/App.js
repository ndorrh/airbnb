import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';
import TodoContainer from './components/TodoContainer';
import './App.css';

function App() {
  const ctr = useSelector((state) => state.counter);
  const btnClick = useSelector((state) => state.text);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  return (
    <div>
      <h1> Counter App</h1>
      <h1>
        {' '}
        {ctr}
        {' '}
      </h1>
      <h3>
        {' '}
        {btnClick}
        {' '}
      </h3>
      <button type="button" onClick={increment}>Increment</button>
      {' '}
      <button type="button" onClick={decrement}>Decrement</button>
      {' '}
      <button type="button" onClick={addBy}>Addby</button>
      <TodoContainer />
    </div>
  );
}

export default App;
