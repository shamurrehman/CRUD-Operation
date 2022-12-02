import React, { Component } from "react";

class Counter extends Component {
  state = { counter: 0 };

  handeleIn = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDe = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      alert("Sorry! You have reached at limit Zero");
    }
  };

  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handeleIn}>Increment</button>
        <button onClick={this.handleDe}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
