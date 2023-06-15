import Increase from "./Increase";
import Decrease from "./Decrease";
import Reset from "./Reset";
import { UseCounterContext } from "./Context";
import "./styles.css";

export default function App() {
  const { counter } = UseCounterContext();
  return (
    <div className="App">
      <h1 className="header">useContext</h1>
      <h1 className="counter">I am global state : {counter}</h1>
      <div className="components">
        <Increase />
        <Decrease />
        <Reset />
      </div>
    </div>
  );
}
