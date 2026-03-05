import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // state management
  constructor(props) {
    super(props);
    this.state = {
      data: 'data description'
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ data: 'new data created...' });
  }

  // rendering
  render() {
    return (
      <div className="App">
        <button onClick={this.updateState}>Update State</button>
        <h3>{ this.state.data }</h3>
      </div>
    );
  }
}

export default App;
