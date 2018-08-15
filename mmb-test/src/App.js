import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dropdown from "react-dropdown";

const options = ["GET", "POST"];

class App extends Component {
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
          <form>
            <label>
              Reverse a String
              <input type="text" placeholder="enter a string..." />
            </label>
            <input type="submit" value="Submit" />
          </form>
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
