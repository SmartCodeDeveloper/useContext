import { UseCounterContext } from "./Context";

const Increase = () => {
  const { counter, setCounter } = UseCounterContext();
  const increaseHandler = () => {
    setCounter((prevValue) => prevValue + 1);
  };
  return (
    <div className="component">
      <h3>I am counter {counter} in ComponentA</h3>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
};

export default Increase;
