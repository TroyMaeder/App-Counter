import React, { useState } from "react";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

const Counter = ({ count, handleClick }) => {
  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>+</button>
      <button>-</button>
    </>
  );
};

const App = () => {
  const [counters, setCounters] = useState(data);

  const handleClick = (index) => {
    const countersCopy = [...counters];
    countersCopy[index].value += 1;

    setCounters(countersCopy);
  };

  return (
    <>
      {counters.map((counter, i) => (
        <Counter
          key={counter.id}
          count={counter.value}
          handleClick={() => handleClick(i)}
        />
      ))}
    </>
  );
};

export default App;
