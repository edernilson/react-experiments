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
        {
        this.state.allCustomers.map((customer, index) => (
          <div key={index}>{customer.username}</div>
        ))
        }
      </main>
    );
  }

  componentDidMount() {
    fetch("http://localhost:3030/customers")
      .then((response) => {
        return(response.json());
      })
      .then((users) => {
        this.setState({ 
          allCustomers: users 
        });
      });
  }
}

export default Main;
