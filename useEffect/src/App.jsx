import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    console.log("Her zaman çalışır.");
  });

  useEffect(() => {
    console.log("İlk render edildiğinde çalışır");
  }, []); // Sayfa ilk render edildiğinde çalışır.

  useEffect(() => {
    console.log(
      "İlk render edildiğinde ve firstName değeri değiştiğinde  çalışır"
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      "İlk render edildiğinde ve lastName değeri değiştiğinde  çalışır"
    );
  }, [lastName]);

  useEffect(() => {
    console.log(
      "İlk render edildiğinde ve firstname , lastName değeri değiştiğinde  çalışır"
    );
  }, [firstName, lastName]);
  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Alperen")}>İsmi değiştir</button>
      </div>
      <div>
        <button onClick={() => setLastName("Aktug")}>Soyismi değiştir</button>
      </div>
    </div>
  );
}

export default App;
