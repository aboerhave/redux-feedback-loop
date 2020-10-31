import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

class ThankYou extends Component {

  advancePage = () => {
    console.log('click forward');
    // dispatch goes here for sending data to redux of feeling value
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
          <h2>Thank You for your Feedback!!</h2>
          <button onClick={this.advancePage}>Submit</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(ThankYou);
