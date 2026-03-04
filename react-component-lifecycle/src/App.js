import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0
    }

    this.setNumber = this.setNumber.bind(this);
  }

  setNumber(number) {
    this.setState({ data: this.state.data + 1 });
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.setNumber}>AddOneMore</button>
        <Content newNumber={this.state.data} />
      </div>
    );
  }
}

class Content extends Component {
  componentWillMount() {
    console.log('Component will mount');
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('Component will receive props', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update', prevProps, prevState);
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <h3>{this.props.newNumber}</h3>
      </div>
    )
  }
}

export default App;
