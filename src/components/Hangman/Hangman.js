import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Executioner from './Executioner.js';

class Hangman extends Component {
  constructor() {
    super();
    this.state = {
      allGuesses: [],
      oneGuess: '',
      myWord: "POTATO",
      // myWord: ["P", "O", "T", "A", "T", "O"],
      foundWord: []
    }
    this.updatePlayerGuess = this.updatePlayerGuess.bind(this);
    this.playerGuess = this.playerGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.wordPickedByExecutioner = this.wordPickedByExecutioner.bind(this);
    // this.didPlayerWin = this.didPlayerWin.bind(this);
  }

  wordPickedByExecutioner() {
    console.log(this.props.myWord);
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

  resetGame() {
    this.setState({
      allGuesses: [],
      oneGuess: '',
      myWord: "POTATO",
      foundWord: []
    })
  }

  // userWon() {
  //   return <h1>You won!</h1>;
  // }

  // didPlayerWin() {
  //   if(this.state.foundWord === this.state.myWord.split('')) {
  //     return <userWon />;
  //   }
  //   return "";
  // } 

  render() {
    <Executioner playMyWord={ this.wordPickedByExecutioner } />
    // let winner
    // if (this.state.foundWord === this.state.myWord.split('')) {
    //   winner = (<div><h1>You win!</h1></div>);
    // } else {
    //   winner = "";
    // }
    // console.log(this.state.foundWord);
    // console.log(this.state.myWord.split(''));

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center title">
            <h2>Hangman Victim</h2>
            <div>
              {this.didPlayerWin}
            </div>
          </div>
        </div>

        <div id="gallow-and-guesses" className="row">
          <div id="gallow"className="col-md-4 text-center">
            <h3>Gallow</h3>
            <hr/>
            <img src="https://lh3.googleusercontent.com/znSmbZXCD0WaroGLY9pZ2oX7lq4nG84w4Er9otZ7Fc_Br3q3XHtPs4YhSxxaZetccBY=w300" alt="gallow"/>
          </div>

          <div className="col-md-4 text-center">
            <form className="pick-a-letter" onSubmit={this.playerGuess}>
              <div className="form-group">
                <label for="guessed-letter-field">Choose letter and press 'Enter' or Guess</label>
                <input 
                  value={ this.state.oneGuess } 
                  onChange={ this.updatePlayerGuess }
                  className="form-control" 
                  type="text" 
                  placeholder="Pick a letter"
                  maxlength="1"
                  id="guessed-letter-field" />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-outline-primary" value="Guess" />
              </div>
            </form>
          </div>

          <div id="guesses"className="col-md-4 text-center">
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

        <div id="hidden-word-letters" className="row">
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
        <div className="buttons">
          <Link to={'./executioner'} className="btn btn-outline-info btn-lg"> Reset Game</Link>
          <Link to={'/'} className="btn btn-outline-success btn-lg">Return Home</Link>
        </div>
        <br/>
      </div>
    )
  }
}
// <button onClick={ this.resetGame } className="btn btn-outline-info btn-lg"> Reset Game</button>
export default Hangman;
