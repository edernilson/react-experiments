import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCustomers: [],
    };
  }

  render() {
    return (
      <main>
        <h2>Customers List</h2>
      </main>
    );
  }

  componentDidMount() {
    fetch("http://localhost:3000/customers")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ allCustomers: data.customers });
      });
  }
}

export default Main;
