import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3006";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  useEffect(() => {
    getUserById(2);
  }, []);

  return <div></div>;
}

export default App;
