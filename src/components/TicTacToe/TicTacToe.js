import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TicTacToe extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 id="tictactoe-heading">TicTacToe is coming soon!</h2>
          </div>
        </div>
        <Link to={'/'} className="btn btn-outline-success btn-lg">Return Home</Link>
      </div>
    )
  }
}

export default TicTacToe;
