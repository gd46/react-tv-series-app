import React, { Component } from 'react';
import logo from './logo.svg';
import Main from '../Main';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Main />
        </header>
      </div>
    );
  }
}

export default App;
