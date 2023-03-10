import React, { useState } from "react";

import Counter from "./components/Counter/Counter";
import "./index.css";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

const App = () => {
  const [counters, setCounters] = useState(data);

  const handleClick = (index, cb) => {
    const countersCopy = [...counters];
    countersCopy[index].value = cb(countersCopy[index].value);

    setCounters(countersCopy);
  };

  return (
    <main className="main">
      <h1 className="title">Counters challenge</h1>
      <div className="counters">
        {counters.map((counter, i) => (
          <Counter
            key={counter.id}
            count={counter.value}
            increment={() => handleClick(i, (n) => n + 1)}
            decrement={() => handleClick(i, (n) => n - 1)}
          />
        ))}
      </div>
      <p className="total">
        Total count: {counters.reduce((acc, num) => acc + num.value, 0)}
      </p>
    </main>
  );
};

export default App;
