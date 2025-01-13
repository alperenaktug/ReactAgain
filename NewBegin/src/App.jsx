import "./App.css";
import Hello from "./Hello";
import Login from "./Login";
import TestComponent from "./TestComponent";

function App() {
  // Javascript kodları yazarız .

  return (
    // Html kodları return un içinde yazılır .
    <>
      <div>Welcome to My Page</div>
      <Hello />

      <Login />
      <Login />
      <Login />
      <TestComponent />
    </>
  );
}

export default App;
