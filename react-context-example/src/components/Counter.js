import React from "react";
import { useCounter } from "../contexts/CounterContext";

const Counter = () => {
  const { count, increment, decrement } = useCounter();
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
