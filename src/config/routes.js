import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage.js';
import Hangman from '../components/Hangman/Hangman.js';
import TicTacToe from '../components/TicTacToe/TicTacToe.js';

export default (
  <Switch>
    <Route exact path='/' component={ HomePage }/>
    <Route path='/hangman' component={ Hangman }/>
    <Route path='/tictactoe' component={ TicTacToe }/>
  </Switch>
  )