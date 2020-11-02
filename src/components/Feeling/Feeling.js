import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

  state = {
    feeling: this.props.reduxStore.feelingValue || 0
  }

  pickValue = (event) => {
    this.setState({
      feeling: event.target.value
    })
  }

  advancePage = () => {
    console.log('click forward');
    console.log(this.state.feeling);
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
          <button onClick={this.advancePage}>Next Page</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Feeling);
