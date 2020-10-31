import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';

class Comments extends Component {

  advancePage = () => {
    console.log('click forward');
    // dispatch goes here for sending data to redux of feeling value
    this.props.history.push('/review');
  }

  render() {
    return (
      <div className="App">
          <h2>You may leave any comments here</h2>
          <label>Comments</label>
          <br/>
          <input type="text" />
          <button onClick={this.advancePage}>→</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Comments);
