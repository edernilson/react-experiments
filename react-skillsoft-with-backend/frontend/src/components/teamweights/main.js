import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allWeights: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found, user is not authenticated");
      return;
    }
    fetch("http://localhost:8000/getemployees", {
      method: "GET",
      headers: {
        "Authorization": "Bearer "+token,
      },
    })
      .then((response) => response.json())
      .then((allWeights) => this.setState({ allWeights }))
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.allWeights.length === 0) {
      return (
        <main>
          <h2>All Weights for our team</h2>
          <div className="indentWeights">
            Not authrized
            </div>
        </main>
      );
    }
    return (
      <main>
        <h2>All Weights for our team</h2>
        
        {this.state.allWeights.map((emp, index) => (
          <div key={index}>
            <div>
              {emp.empName}
              {emp.employeeWeights.map((weight, index) => {
                return <div key={index}>
                  Date: {new Date(weight.weightOn).toLocaleDateString()}
                  {' '}
                  Weight: {weight.empWeight}
                </div>;
              })}
            </div>
          </div>
        ))}
      </main>
    );
  }
}

export default Main;
