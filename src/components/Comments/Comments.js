import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';

class Comments extends Component {

  state = {
    comments: ''
  }

  handleChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  advancePage = () => {
    console.log('click forward');
    // dispatch goes here for sending data to redux of comments
    this.props.dispatch({type: 'SET_COMMENTS', payload: this.state.comments})
    this.props.history.push('/review');
  }

  render() {
    return (
      <div >
          <h2>You may leave any comments here</h2>
          <label>Comments</label>
          <br/>
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.advancePage}>→</button>
          {JSON.stringify(this.state.comments)}
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Comments);
