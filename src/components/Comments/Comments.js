import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';

class Comments extends Component {

  state = {
    comments: this.props.reduxStore.commentsValue || ''
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

  backPage = () => {
    console.log('click backward');
    console.log('comments', this.state.comments);
    // should I save the state it is here when they go back?
    // probably not, because maybe they
    // accidentally change it as they go back multiple pages?
    this.props.history.push('/support');    
}

  render() {
    return (
      <div >
          <h2>You may leave any comments here</h2>
          <label>Comments</label>
          <br/>
          <input type="text" onChange={this.handleChange} value={this.state.comments}/>
          {JSON.stringify(this.state.comments)}
          <br/>
          <button onClick={this.backPage}>Previous Page</button>
          <button onClick={this.advancePage}>Next Page</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Comments);
