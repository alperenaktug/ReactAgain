import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increament } from "./redux/counterSlice";

function App() {
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);
  console.log(value);
  return (
    <>
      Welcom to REDUX TOOLKIT Page
      <div>
        <div>{value} </div>
        <button onClick={() => dispatch(increament())}>Arttır</button>{" "}
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
    </>
  );
}

export default App;
