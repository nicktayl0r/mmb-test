import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dropdown from "react-dropdown";

const options = ["GET", "POST"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { string: "", rString: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ string: event.target.value });
  }

  handleSubmit(event) {
    let state = this.state;
    // console.log(this.state.string);
    fetch("http://localhost:5000/api/reverseString", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ string: state.string })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        state.rString = data;
        console.dir(state);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="reverseString">
          <form onSubmit={this.handleSubmit}>
            <label>
              Reverse a String
              <input
                value={this.state.string}
                onChange={this.handleChange}
                type="text"
                placeholder="enter a string..."
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div>
            {" "}
            Here is the reversed string
            {this.state.rString}
          </div>
        </div>

        <div className="apiCall">
          <form>
            <label>
              Make an API call
              <input type="text" placeholder="enter a URL" />
            </label>
            <Dropdown
              options={options}
              onChange={this._onSelect}
              placeholder="Select an option..."
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
