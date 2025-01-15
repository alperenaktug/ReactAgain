import React, { useState } from "react";
import "./App.css";

function App() {
  // String tcjn = 232621546564
  // String firstName = "Alper"

  // useState : Verileri depolamak, tanımlamak için kullanılır . Hooks
  // usestate : Bir state in değerini set metodu kullanrak değiştirdiğinde component yeniden render edilir.
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("Alperen");
  const [lastName, setLastNames] = useState("Aktug");
  const [names, setName] = useState(["Alp", "Ali", "Umut", "Ayşe"]);
  const [userInfo, setUserInfo] = useState({
    username: "Burak",
    password: "1212",
  });

  console.log(names);

  const handleChange = () => {
    setFirstName("Gökerez");
  };

  const handleChanged = () => {
    setCount(count + 1);
  };
  const handleChanged2 = () => {
    setCount(count - 1);
  };
  const handleChanged3 = () => {
    setCount(0);
  };
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={handleChanged}>Increase</button>
      </div>
      <div>
        <button onClick={handleChanged2}>Decrease</button>
      </div>
      <div>
        <button onClick={handleChanged3}>Zero</button>
      </div>
      <p>useState Sayfasına Hoşgeldin</p>
      <div>
        {userInfo.username} {userInfo.password}
      </div>
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <div>{firstName}</div>
      <div>
        <button
          onClick={handleChange}
          // onClick={() => {
          //   setFirstName("Furkan");
          // }}
        >
          Name Changed
        </button>
      </div>
    </div>
  );
}

export default App;
