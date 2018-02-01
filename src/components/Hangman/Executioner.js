import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

class Executioner extends Component {
  constructor() {
    super();
    this.state = {
      myWord: '',
      fireRedirect: false
    }

    this.updateMyWord = this.updateMyWord.bind(this);
    this.playSelectedWord = this.playSelectedWord.bind(this);
  }

  updateMyWord(e) {
    this.setState({ myWord: e.target.value });
  }

  playSelectedWord(e) {
    e.preventDefault();
    console.log(this.state.myWord); 
    // this.props.playMyWord(this.state.myWord);
    this.setState({
      myWord: '',
      fireRedirect: true
    });
  }

  render() {
    const { from } = this.props.location.state || '/';
    const { fireRedirect } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center title">
            <h2>Executioner</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center">
            <img id="grim-reaper" src="https://d30y9cdsu7xlg0.cloudfront.net/png/62878-200.png" alt="executioner"/>
          </div>
          <div className="col-md-6 text-center">
            <form id="word-selection-form" onSubmit={ this.playSelectedWord }>
              <div className="form-group">
                <label for="typed-word">Pick a 6-letter word</label>
                <input 
                  value={ this.state.myWord } 
                  onChange={ this.updateMyWord }
                  className="form-control" 
                  type="text" 
                  placeholder="Choose your word!"
                  maxlength="6"
                  id="typed-word" />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-outline-primary" value="Commence Hanging"/>
              </div>
            </form>
            {fireRedirect && (<Redirect to={'/hangman/gallows'} />)}
          </div>
        </div>
        <Link to={'/'} className="btn btn-outline-success btn-lg">Return Home</Link>
      </div>
    )
  }
}

export default Executioner;
