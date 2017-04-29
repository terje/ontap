import React, { Component } from 'react';
import fetchStream from 'fetch-readablestream';
import logo from './logo.svg';
import './App.css';
import Tap from './Tap'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { taps: [] }

    fetch('http://localhost:5000/api/taps')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        console.log("Error", response);
      })   
      .then(json => this.setState(Object.assign({}, this.state, { taps: json })))
  }

  render() {
    let taps = null;
    if (this.state.taps) {
        taps = this.state.taps.map(tap => <Tap key={tap} name={tap} />)
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {taps}
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
