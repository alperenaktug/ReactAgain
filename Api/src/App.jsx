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

  const createUser = async (newUser) => {
    const respoonse = axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", respoonse.data);
  };

  const updateUser = async (userId, updatedId) => {
    const response = axios.put(`${BASE_URL}/users/${userId} `, updatedId);
  };

  useEffect(() => {
    // getAllUsers();
    //getUserById(2);
    // const newUser = {
    //   username: "Nalan",
    //   password: "999",
    // };
    // createUser(newUser);

    updateUser("1", {
      username: "icardi",
      password: "1579",
    });
  }, []);

  return <div></div>;
}

export default App;
