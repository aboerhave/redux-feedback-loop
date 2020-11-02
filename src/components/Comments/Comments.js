// This is the Comments.js file for the Week 11 assignment for Prime Digital Academy, created by 
// Adam Boerhave, 10/30/2020 - 11/1/2020

// import
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Comments extends Component {

  // initial state of component
  state = {
    comments: this.props.reduxStore.commentsValue || ''
  }

  // function to run when characters are typed in input box
  handleChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  // function to run when next page button clicked to submit comments
  // and advance to review component
  advancePage = () => {
    console.log('click forward');
    // dispatch goes here for sending data to redux of comments
    this.props.dispatch({type: 'SET_COMMENTS', payload: this.state.comments})
    this.props.history.push('/review');
  }

  // function to return to previous component 
  backPage = () => {
    console.log('click backward');
    this.props.history.push('/support');    
  }

  render() {
    return (
      <div >
          <h2>You may leave any additional comments here</h2>
          <label>Comments</label>
          <br/>
          <input className="commentBox" type="text" onChange={this.handleChange} value={this.state.comments}/>
          <br/>
          {/* previous and next page buttons */}
          <button onClick={this.backPage}>Previous Page</button>
          <button onClick={this.advancePage}>Next Page</button>
      </div>
    );
  }
}

// Redux
const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Comments);
