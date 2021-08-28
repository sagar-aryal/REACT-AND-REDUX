import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withDrawMoney } = bindActionCreators(
    actionCreaters,
    dispatch
  );

  return (
    <div className="App">
      <h1>Banking Application to Withdraw and Deposit Money</h1>
      <h2>{account}</h2>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withDrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
