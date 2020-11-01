import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

class Feeling extends Component {

  state = {
    feeling: this.props.reduxStore.feelingValue || 1
  }

  pickValue = (event) => {
    this.setState({
      feeling: event.target.value
    })
  }

  advancePage = () => {
    console.log('click forward');
    console.log(this.state.feeling);
    if ( this.state.feeling === 1) {
      let accept = window.confirm("Please confirm your choice of 1");
      if(accept) {
        // dispatch goes here for sending data to redux of feeling value
        this.props.dispatch({type: 'SET_FEELING_VALUE', payload: this.state.feeling});
        this.props.history.push('/understanding');
      }      
      else {
        return;
      }
    }
    // dispatch goes here for sending data to redux of feeling value
    this.props.dispatch({type: 'SET_FEELING_VALUE', payload: this.state.feeling});
    this.props.history.push('/understanding');
  }

  render() {
    return (
      <div >
          <h2>How are you feeling today? (1-10)</h2>
          <label>Feeling?</label>
          <br/>
          <select value={this.state.feeling} onChange={this.pickValue} name="feeling" >
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
          {/* {JSON.stringify(this.state.feeling)} */}
          {JSON.stringify(this.props.reduxStore.feelingValue)}
          <br/>
          <button onClick={this.advancePage}>Next Page</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Feeling);
