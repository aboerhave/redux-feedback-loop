// This is the Feeling.js file for the Week 11 assignment for Prime Digital Academy, created by 
// Adam Boerhave, 10/30/2020 - 11/1/2020

// imports
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

  // initial state of component
  state = {
    feeling: this.props.reduxStore.feelingValue || 0
  }

  // function to run when select input is changed
  pickValue = (event) => {
    this.setState({
      feeling: event.target.value
    })
  }

  // function to run when next page button clicked to check that the
  // dropdown input has been selected and store feeling value to redux,
  // and advance to next component page
  advancePage = () => {
    console.log('click forward');
    if ( this.state.feeling == 0) {
      alert("Please choose a value for how you are feeling today");
      return
    }
            
    // dispatch goes here for sending data to redux of feeling value
    this.props.dispatch({type: 'SET_FEELING_VALUE', payload: this.state.feeling});
    this.props.history.push('/understanding');
  }

  render() {
    return (
      <div >
          <h2>How are you feeling today? (1-10)</h2>
          <h3>1: Not feeling well at all</h3>
          <h3>10: Feeling great today</h3>
          <label>Feeling?</label>
          <br/>
          {/* drop down input */}
          <select value={this.state.feeling} onChange={this.pickValue} name="feeling" >
            <option value="0">Feeling</option>
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
          {/* next page button */}
          <button onClick={this.advancePage}>Next Page</button>
      </div>
    );
  }
}

// Redux
const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Feeling);
