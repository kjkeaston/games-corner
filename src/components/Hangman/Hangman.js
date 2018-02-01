import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Executioner from './Executioner.js';

class Hangman extends Component {
  constructor() {
    super();
    this.state = {
      allGuesses: [],
      oneGuess: '',
      myWord: "POTATO",
      foundWord: []
    }
    this.updatePlayerGuess = this.updatePlayerGuess.bind(this);
    this.playerGuess = this.playerGuess.bind(this);
  }

  updatePlayerGuess(e) {
    this.setState({ oneGuess: e.target.value.toUpperCase() });
  }

  playerGuess(e) {
    e.preventDefault();      
    let playerGuess = this.state.oneGuess;
    this.setState({ 
      allGuesses: this.state.allGuesses.concat(playerGuess),
      oneGuess: ''
    }, () => {
      let myWordSplit = this.state.myWord.split('');
      let grabbingLetters = myWordSplit.map(letter => {
        if (this.state.allGuesses.includes(letter)) {
          return letter;
        } else {
          return "";
        }
      });
      this.setState({
        foundWord: grabbingLetters
      }); 
    });
  }

  render() {
    let winner = "";
    if (this.state.foundWord === this.state.myWord.split('')) {

    }
    
    return (
      <div className="container">

        <div>
          <form className="" onSubmit={this.playerGuess}>
            <div className="form-group">
              <input 
                value={ this.state.oneGuess } 
                onChange={ this.updatePlayerGuess }
                className="form-control" 
                type="text" 
                placeholder="Pick a letter" />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-outline-primary" />
            </div>
          </form>
        </div>

          
        
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>Hangman.js is here!</h2>
          </div>
        </div>

        <div id="gallow-and-guesses" className="row">
          <div id="gallow"className="col-md-6 text-center">
            <h3>Gallow</h3>
            <hr/>
            <img src="https://lh3.googleusercontent.com/znSmbZXCD0WaroGLY9pZ2oX7lq4nG84w4Er9otZ7Fc_Br3q3XHtPs4YhSxxaZetccBY=w300" alt="gallow"/>
          </div>
          <div id="guesses"className="col-md-6 text-center">
            <h3>Guessed Letters</h3>
            <hr/>
            <div className="row">
              {this.state.allGuesses.map(eachLetter => {
                return <div className="col-md-4">
                  <h3>{eachLetter}</h3>
                  </div>
              })
              }
            </div>
          </div>
        </div>

        <div className="row">
          <div id="guess1" className="col-md-2 text-center">
            <h4>{this.state.foundWord[0]}</h4>
          </div>
          <div id="guess2" className="col-md-2 text-center">
            <h4>{this.state.foundWord[1]}</h4>
          </div>
          <div id="guess3" className="col-md-2 text-center">
            <h4>{this.state.foundWord[2]}</h4>
          </div>
          <div id="guess4" className="col-md-2 text-center">
            <h4>{this.state.foundWord[3]}</h4>
          </div>
          <div id="guess5" className="col-md-2 text-center">
            <h4>{this.state.foundWord[4]}</h4>
          </div>
          <div id="guess6" className="col-md-2 text-center">
            <h4>{this.state.foundWord[5]}</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 text-center">
            <h4>______</h4>
          </div>
          <div className="col-md-2 text-center">
            <h4>______</h4>
          </div>
          <div className="col-md-2 text-center">
            <h4>______</h4>
          </div>
          <div className="col-md-2 text-center">
            <h4>______</h4>
          </div>
          <div className="col-md-2 text-center">
            <h4>______</h4>
          </div>
          <div className="col-md-2 text-center">
            <h4>______</h4>
          </div>
        </div>
        <hr/>
        <Link to={'/'} className="btn btn-outline-success btn-lg">Return Home</Link>
      </div>
    )
  }
}

export default Hangman;

// <input 
  // type="text" 
  // onKeyDown={this.keyPress}
  // value={ this.state.oneGuess } 
  // onChange={ this.updatePlayerGuess } />
