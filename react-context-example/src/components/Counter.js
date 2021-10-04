import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Counter Application</h3>
      <p>count: {count}</p>
      <button onClick={() => increment()}>Increase Count</button>
      <button onClick={() => decrement()}>Decrease Count</button>
    </div>
  );
};

export default Counter;
