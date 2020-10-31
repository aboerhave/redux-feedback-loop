import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

class Review extends Component {

  advancePage = () => {
    console.log('click forward');
    // dispatch goes here for sending data to redux of feeling value
    this.props.history.push('/thankYou');
  }

  render() {
    return (
      <div className="App">
          <h2>Review Your Feedback</h2>
          <ul>
              <li>Feelings</li>
              <li>Understanding</li>
              <li>Support</li>
              <li>Comments</li>
          </ul>
          <button onClick={this.advancePage}>Submit</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Review);
