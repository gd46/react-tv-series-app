import React, { Component } from 'react';
import logo from './logo.svg';
import Intro from '../Intro';
import Series from '../../containers/Series';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  state = {
    series: []
  }

  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
      .then((response) => response.json())
      .then((json) => this.setState({ series: json}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Intro message="Here you can find all of your favorite series"/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          Our series: {this.state.series.length}
          <Series/>
        </header>
      </div>
    );
  }
}

export default App;
