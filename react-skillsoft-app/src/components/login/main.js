import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `http://localhost:3030/customers?username=${encodeURIComponent(username)}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        const customer = data[0];
        if (!customer) {
          console.log("Customer not found");
          return;
        }
        if (customer.password !== password) {
          console.log("Invalid password");
          return;
        }

        console.log("Found in db:", customer);
        localStorage.setItem("validUser", customer.username);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error occured:", error.message);
        alert("An error occurred while logging in. Please check if service is running and try again.");
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
