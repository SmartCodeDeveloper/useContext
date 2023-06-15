import { UseCounterContext } from "./Context";

const Reset = () => {
  const { counter, setCounter } = UseCounterContext();
  const resetHandler = () => {
    setCounter(0);
  };
  return (
    <div className="component">
      <h3>I am counter {counter} in ComponentC</h3>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Reset;
