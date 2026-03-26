import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ empName: username, empPass: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.token) {
          alert("Login failed! Please check your credentials and try again.");
          return;
        }
        console.log("Login successful, received token:", data);
        localStorage.setItem("token", data.token);
        navigate("/teamweights");
      })
      .catch((error) => {
        console.error("Error occured:", error.message);
        alert(
          "An error occurred while logging in. Please check if service is running and try again.",
        );
      });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <main>
      <h2>Login to participate</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleFieldChange}
            autoComplete="false"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleFieldChange}
            autoComplete="false"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Main;
