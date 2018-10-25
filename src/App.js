import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import MainArea from './MainArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <MainArea />
      </div>
    );
  }
}

export default App;
