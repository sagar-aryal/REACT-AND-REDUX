import "./App.css";
import Counter from "./components/Counter";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import CounterContextProvider from "./contexts/CounterContext";

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <h1>Context Example</h1>
        <Counter />
        <ComponentA />
        <ComponentB />
      </div>
    </CounterContextProvider>
  );
}

export default App;
