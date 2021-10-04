import { useState, createContext, useContext } from "react";

const CounterContext = createContext();
export const useCounter = () => useContext(CounterContext); // Custom hook

const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const value = { count, increment, decrement };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
