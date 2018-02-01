import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div clasName="container">
        <h1>Some Games</h1>
        
        <div className="row">
          <div className="col-md-6">
            <Link to={'/hangman'}>
              <h2>Hangman</h2>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to={'/tictactoe'}>
              <h2>TicTacToe</h2>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}

export default HomePage;