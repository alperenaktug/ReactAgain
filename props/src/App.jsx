import React from "react";

import "./App.css";
import Products from "./Products";
import Container from "./Container";

function App() {
  const productName = "Buzdolabı";
  return (
    <div>
      <Products productName="Ayakkabı" price={3200} />
      <br />

      <Products productName="Pantolon" price={950} />
      <br />

      <Products productName={productName} price={15000} />

      <Container>
        <Products productName="Ceket" price={3000} />
      </Container>
    </div>
  );
}

export default App;
