import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';

class Support extends Component {

    state = {
        support: 0
    }

    pickValue = (event) => {
        this.setState({
          support: event.target.value
        })
      }
    
    advancePage = () => {
        console.log('click forward');
        // dispatch goes here for sending data to redux of support value
        this.props.dispatch({type: 'SET_SUPPORT_VALUE', payload: this.state.support});
        this.props.history.push('/comments');
      }

  render() {
    return (
      <div >
          <h2>How well are you being supported? (1-10)</h2>
          <label>Support?</label>
          <br/>
          <select onClick={this.pickValue} >
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
          <button onClick={this.advancePage}>→</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Support);
