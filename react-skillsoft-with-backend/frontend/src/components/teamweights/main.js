import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allWeights: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/getemployees")
      .then((response) => response.json())
      .then((allWeights) => this.setState({ allWeights }))
      .catch((err) => console.log(err));
  }

  render() {
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
