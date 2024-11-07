import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter(counter + 1);
  }

  function remove() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter-display">
        <h2>Count: {counter}</h2>
      </div>
      <div className="button-group">
        <button onClick={add} className="addBtn">Add</button>
        <button onClick={remove} className="removeBtn" disabled={counter === 0}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default App;
