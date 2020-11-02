// This is the Support.js file for the Week 11 assignment for Prime Digital Academy, created by 
// Adam Boerhave, 10/30/2020 - 11/1/2020

//imports
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Support extends Component {

    // initial state of component
    state = {
        support: this.props.reduxStore.supportValue || 0
    }

    // function to run when select input is changed
    pickValue = (event) => {
        this.setState({
          support: event.target.value
        })
    }
    
    // function to run when next page button clicked to check that the
    // dropdown input has been selected and store support value to redux,
    // and advance to next component page
    advancePage = () => {
        console.log('click forward');
        if ( this.state.support == 0) {
            alert("Please choose a value for how well you feel supported today");
            return;
        }

        // dispatch goes here for sending data to redux of support value
        this.props.dispatch({type: 'SET_SUPPORT_VALUE', payload: this.state.support});
        this.props.history.push('/comments');
    }

    // function to run when previous page button clicked to go to the 
    // previous component
    backPage = () => {
        console.log('click backward');
        console.log('support', this.state.support);
        // should I save the state it is here when they go back?
        // probably not, because maybe they
        // accidentally change it as they go back multiple pages?
        this.props.history.push('/understanding');    
    }

  render() {
    return (
      <div >
          <h2>How well do you feel supported today? (1-10)</h2>
          <h3>1: Not well supported at all today</h3>
          <h3>10: Greatly supported today</h3>
          <label>Support?</label>
          <br/>
          {/* drop down input */}
          <select value={this.state.support} onClick={this.pickValue} >
            <option value="0">Support</option>
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

export default connect(putReduxStateOnProps)(Support);
