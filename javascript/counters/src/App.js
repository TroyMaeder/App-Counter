import React, { useState } from "react";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

const Counter = ({ count, increment, decrement }) => {
  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

const App = () => {
  const [counters, setCounters] = useState(data);

  const handleClick = (index, cb) => {
    const countersCopy = [...counters];
    countersCopy[index].value = cb(countersCopy[index].value);

    setCounters(countersCopy);
  };

  return (
    <main>
      <h1>Counters challenge</h1>
      {counters.map((counter, i) => (
        <Counter
          key={counter.id}
          count={counter.value}
          increment={() => handleClick(i, (n) => n + 1)}
          decrement={() => handleClick(i, (n) => n - 1)}
        />
      ))}
      <p>Total count: {counters.reduce((acc, num) => acc + num.value, 0)}</p>
    </main>
  );
};

export default App;
