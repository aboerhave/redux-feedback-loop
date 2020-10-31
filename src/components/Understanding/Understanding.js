import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';

class Understanding extends Component {

    state = {
        understanding: this.props.reduxStore.understandingValue || 0
    }

    pickValue = (event) => {
        this.setState({
          understanding: event.target.value
        })
      }
    
    advancePage = () => {
        console.log('click forward');
        // dispatch goes here for sending data to redux of understanding value
        this.props.dispatch({type: 'SET_UNDERSTANDING_VALUE', payload: this.state.understanding});
        this.props.history.push('/support');
    }

    backPage = () => {
        console.log('click backward');
        console.log('understanding', this.state.understanding);
        // should I save the state it is here when they go back?
        // probably not, because maybe they
        // accidentally change it as they go back multiple pages?
        this.props.history.push('/');
        
    }

  render() {
    return (
      <div >
          <h2>How well are you understanding the content? (1-10)</h2>
          <label>Understanding?</label>
          <br/>
          <select value={this.state.understanding} onClick={this.pickValue} >
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
          {JSON.stringify(this.state.understanding)}
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

export default connect(putReduxStateOnProps)(Understanding);
