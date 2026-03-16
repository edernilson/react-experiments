import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    fetch("http://localhost:3030/customers", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: username,
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((feedback) => {
        console.log("Post successful:", feedback);
        // Handle successful registration (e.g., redirect to login page)
      })
      .catch((error) => {
        console.error("Error occured:", error.message);
        // Handle registration error (e.g., show error message)
      });
  }

  handleFieldChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <main>
        <h2>Register for the competition</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleFieldChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </main>
    );
  }
}

export default Main;
