import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: "",
      rString: "",
      requestMethod: "GET",
      requestURL: "",
      requestResponse: ""
    };

    this.handleRString = this.handleRString.bind(this);
    this.handleRequestMethod = this.handleRequestMethod.bind(this);
    this.handleRequestURL = this.handleRequestURL.bind(this);

    this.formAHandleSubmit = this.formAHandleSubmit.bind(this);
    this.formBHandleSubmit = this.formBHandleSubmit.bind(this);
  }

  handleRString(event) {
    this.setState({ string: event.target.value });
  }

  handleRequestMethod(event) {
    this.setState({ requestMethod: event.target.value });
  }
  handleRequestURL(event) {
    this.setState({ requestURL: event.target.value });
  }

  formAHandleSubmit(event) {
    let that = this;
    fetch("http://localhost:5000/api/reverseString", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ string: this.state.string })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.dir(data);
        that.setState({ rString: data });
      });
    event.preventDefault();
  }

  formBHandleSubmit(event) {
    fetch("http://localhost:5000/api/backendAPI", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: this.state.requestURL,
        method: this.state.requestMethod
      })
    })
      .then(function(response) {
        console.log(response.json());
        return response.json();
      })
      .then(function(data) {
        console.log(data);
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
        <p className="App-intro" />

        <div className="Form formA">
          <form onSubmit={this.formAHandleSubmit}>
            <label>
              <h1>Reverse a String</h1>
              <input
                value={this.state.string}
                onChange={this.handleRString}
                type="text"
                placeholder="enter a string..."
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div>
            {`Here is the reversed string: `}
            {this.state.rString}
          </div>
        </div>
        <hr />
        <div className="apiCall">
          <form onSubmit={this.formBHandleSubmit}>
            <label className="Form formB">
              <h1>Make an API Call from the Server</h1>
            </label>
            <input
              value={this.state.requestURL}
              onChange={this.handleRequestURL}
              type="text"
              placeholder="enter a URL"
            />
            <select
              value={this.state.requestMethod}
              onChange={this.handleRequestMethod}
            >
              <option defaultValue value="GET">
                GET
              </option>
              <option value="POST">POST</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
