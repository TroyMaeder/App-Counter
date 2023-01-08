import React from 'react';

import "./index.css";

const Counter = ({ count, increment, decrement }) => (
  <div className="counter-main">
    <div className="counter">
      <div className="number">{count}</div>
      <div className="buttons">
        <button className="button green" onClick={increment}>
          +
        </button>
        <button className="button red" onClick={decrement}>
          &minus;
        </button>
      </div>
    </div>
  </div>
);

export default Counter;
