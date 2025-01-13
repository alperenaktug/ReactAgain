import React from "react";

const TestComponent = () => {
  let Puan1 = 44;
  let Puan2 = 36;
  let Puan3 = 25;

  let vize1 = 80;
  let vize2 = 70;

  let isimler = ["ALP", "FURKAN", "CEREN", "UMUT"];

  return (
    <>
      <div style={{ boxShadow: "initial" }}>Welcome to Test Component !!</div>
      <br />
      <div>
        <ul>
          <h1>Türkiye Süper Lig</h1>
          <br />
          <li>Galatasaray : Puan = {Puan1} </li>
          <li>Fenerbahçe : Puan = {Puan2}</li>
          <li>Beşiktaş : Puan = {Puan3}</li>
          <br />
          <button style={{ background: "yellow" }}>Galibiyet</button>
          <button style={{ background: "blue" }}>Beraberlik</button>
          <button style={{ background: "red" }}>Mağlubiyet</button>
        </ul>
        <br />

        {(vize1 + vize2) / 2 >= 50 ? (
          <p>Tebrikler dersi geçtin</p>
        ) : (
          <p>Üzgünüm derstene kaldın</p>
        )}

        <br />

        {isimler.map((isim, index) => (
          <div
            style={{
              backgroundColor: "pink",
              border: " 1px solid red ",
            }}
            key={index}
          >
            {isim}
          </div>
        ))}
      </div>
    </>
  );
};

export default TestComponent;
