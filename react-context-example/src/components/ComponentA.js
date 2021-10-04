import React from "react";
import { useCounter } from "../contexts/CounterContext";

const ComponentA = () => {
  const { count, increment } = useCounter();
  return (
    <div style={{ backgroundColor: "pink" }}>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>
        Increase Count from Component A
      </button>
    </div>
  );
};

export default ComponentA;
