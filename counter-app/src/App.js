import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increseCounterValue = () => {
    dispatch({ type: "INC" });
  };

  const decreaseCounterValue = () => {
    dispatch({ type: "DEC" });
  };

  const addTen = () => {
    dispatch({ type: "ADD_TEN", payload: 10 });
  };

  return (
    <React.Fragment>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increseCounterValue}>Increate</button>
      <button onClick={decreaseCounterValue}>Decrease</button>
      <button onClick={addTen}>Add 10</button>
    </React.Fragment>
  );
};

export default App;
