// This is the Understanding.js file for the Week 11 assignment for Prime Digital Academy, created by 
// Adam Boerhave, 10/30/2020 - 11/1/2020

import React, { Component } from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {

    // initial state of component
    state = {
        understanding: this.props.reduxStore.understandingValue || 0
    }

    // function to run when select input is changed
    pickValue = (event) => {
        this.setState({
          understanding: event.target.value
        })
    }
    
    // function to run when next page button clicked to check that the
    // dropdown input has been selected and store understanding value to redux,
    // and advance to next component page
    advancePage = () => {
        console.log('click forward');
        if ( this.state.understanding == 0) {
            alert('Please choose a value for how well you have understood material today');
            return;
        }
        
        // dispatch goes here for sending data to redux of understanding value
        this.props.dispatch({type: 'SET_UNDERSTANDING_VALUE', payload: this.state.understanding});
        this.props.history.push('/support');
    }

    // function to run when previous page button clicked to go to the 
    // previous component
    backPage = () => {
        console.log('click backward');
        console.log('understanding', this.state.understanding);
        this.props.history.push('/');
    }

  render() {
    return (
      <div >
          <h2>How well are you understanding the content? (1-10)</h2>
          <h3>1: Not understanding the material at all</h3>
          <h3>10: Understanding the material very well</h3>
          <label>Understanding?</label>
          <br/>
          {/* drop down input */}
          <select value={this.state.understanding} onChange={this.pickValue} >
            <option value="0">Understanding</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
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

export default connect(putReduxStateOnProps)(Understanding);
