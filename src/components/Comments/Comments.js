import React, { Component } from 'react';
import {connect} from 'react-redux';

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
