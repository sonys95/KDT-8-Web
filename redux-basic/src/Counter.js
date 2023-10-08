import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store";

export default function Counter() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const add = () => {
    dispatch(counterAction.increment());
  };
  const minus = () => {
    dispatch(counterAction.decrement());
  };
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
    </div>
  );
}
