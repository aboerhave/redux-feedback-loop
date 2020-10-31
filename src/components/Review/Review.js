import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import './Review.css'

class Review extends Component {


advancePage = () => {
    console.log('click forward');
    // store the redux values in the db here
    axios({
        method: 'POST',
        url: '/feedback',
        data: {
            feeling: this.props.reduxStore.feelingValue,
            understanding: this.props.reduxStore.understandingValue,
            support: this.props.reduxStore.supportValue,
            comments: this.props.reduxStore.commentsValue
        }
    }).then((response) => {
        console.log('response', response);
    }).catch((error) => {
        console.log('error in POST feedback');
        alert('There was a problem.  Please try again later.');
    })
    // clear the values from redux
    this.props.dispatch({type: 'CLEAR_VALUES'});

    this.props.history.push('/thankYou');
  }

  backPage = () => {
    console.log('click backward');

    this.props.history.push('/comments');    
}

  render() {
    return (
      <div >
          <h2>Review Your Feedback</h2>
          <table>
                <thead>
                    <tr>
                        <th>Value</th>  
                        <th>Your Response</th>  
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Feeling Today</td>
                        <td>{this.props.reduxStore.feelingValue}</td>
                    </tr>
                    <tr>
                        <td>Understanding Content</td>
                        <td>{this.props.reduxStore.understandingValue}</td>
                    </tr>
                    <tr>
                        <td>Supported Today</td>
                        <td>{this.props.reduxStore.supportValue}</td>
                    </tr>
                    <tr>
                        <td>Comments</td>
                        <td>{this.props.reduxStore.commentsValue}</td>
                    </tr>
                </tbody>
          </table>
          <br/>
          <button onClick={this.backPage}>Previous Page</button>
          <button onClick={this.advancePage}>Submit</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Review);
