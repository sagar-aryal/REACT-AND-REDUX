import React from "react";
import { useCounter } from "../contexts/CounterContext";

const ComponentB = () => {
  const { count, decrement } = useCounter();
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <p>Count: {count}</p>
      <button onClick={() => decrement()}>
        Decrease Count from Component B
      </button>
    </div>
  );
};

export default ComponentB;
