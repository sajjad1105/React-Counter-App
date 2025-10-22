import './Counter.css';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const MAX = 100;
  const MIN = 0;

  const Increment = () => {
    if (count < MAX) setCount(count + 1);
  };

  const Decrement = () => {
    if (count > MIN) setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div className="Container">
      <h1>⚡ Counter App ⚡</h1>
      <h3 className="count-display">{count}</h3>

      <div className="buttons">
        <button onClick={Decrement} disabled={count <= MIN}>➖</button>
        <button onClick={Reset}>🔄</button>
        <button onClick={Increment} disabled={count >= MAX}>➕</button>
      </div>

      {count === MAX && <p className="limit-message">⚠️ Maximum limit reached!</p>}
      {count === MIN && <p className="limit-message">⚠️ Minimum limit reached!</p>}

      {/* Footer Section */}
      <footer className="footer">
        <p>
          Made with ❤️ by <span className="author">Md Sajjad Khan</span> | React Counter App
        </p>
      </footer>
    </div>
  );
}

export default Counter;
