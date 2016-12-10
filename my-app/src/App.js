import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data.json";

class App extends Component {
  render() {
    let rows = [];
    for (let i = 0; i < data.length; i++) {
      rows.push(<tr><td>{data[i].Year}</td><td>${Number(data[i].Value).toFixed(2)}</td></tr>);
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="table">
          <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Value</th>
            </tr>
            </thead>
            <tbody>
              {rows}
          </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
