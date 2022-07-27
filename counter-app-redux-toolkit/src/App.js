import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increseCounterValue = () => {
    dispatch(actions.increaseCounter());
  };

  const decreaseCounterValue = () => {
    dispatch(actions.decreaseCounter());
  };

  const addTen = () => {
    dispatch(actions.increaseCounterBy(10));
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
