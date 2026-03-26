import React, { Component } from "react";
import { withRouter } from "../../utils/withRouter";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: "",
      empPass: "",      
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  goHome = () => {
    this.props.router.navigate("/");
  };

  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:8000/login`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        empName: this.state.empName,
        empPass: this.state.empPass,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.token) {
          alert("Login failed! Please check your credentials and try again.");
          return;
        }
        console.log("Login successful, received token:", data);
        localStorage.setItem("token", data.token);
        this.goHome();
      })
      .catch((error) => {
        console.error("Error occured:", error.message);
        alert(
          "An error occurred while logging in. Please check if service is running and try again.",
        );
      });
  }

  handleFieldChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <main>
        <h2>Login to participate</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="empName">Username:</label>
            <input
              type="text"
              id="empName"
              name="empName"
              value={this.state.empName}
              onChange={this.handleFieldChange}
              autoComplete="false"
            />
          </div>
          <div>
            <label htmlFor="empPass">Password:</label>
            <input
              type="password"
              id="empPass"
              name="empPass"
              value={this.state.empPass}
              onChange={this.handleFieldChange}
              autoComplete="false"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </main>
    );
  }
}

export default withRouter(Main);
