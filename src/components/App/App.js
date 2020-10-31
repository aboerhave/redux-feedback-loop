import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';

class App extends Component {
  render() {
      return (
        <Router>
        <div className="App">
          <Header />

          <Route exact path='/' component={Feeling} />
        </div>
      </Router>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(App);
