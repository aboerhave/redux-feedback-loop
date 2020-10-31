import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';

class Comments extends Component {
  render() {
    return (
      <div className="App">
          <h2>You may leave any comments here</h2>
          <label>Comments</label>
          <br/>
          <input type="text" />
          <button>→</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Comments);
