import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyRoutes from './config/routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my GAMES CORNER</h1>
        </header>
        <div className="container">
          { MyRoutes }
        </div>
      </div>
    );
  }
}

export default App;
