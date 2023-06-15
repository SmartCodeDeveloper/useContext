import { UseCounterContext } from "./Context";

const Decrease = () => {
  const { counter, setCounter } = UseCounterContext();
  const decreaseHandler = () => {
    setCounter((prevValue) => prevValue - 1);
  };
  return (
    <div className="component">
      <h3>I am counter {counter} in ComponentB</h3>
      <button onClick={decreaseHandler}>Decrease</button>
    </div>
  );
};

export default Decrease;
