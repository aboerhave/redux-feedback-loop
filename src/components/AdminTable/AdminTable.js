import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

class AdminTable extends Component {

    // componentDidMount = () => {
    //     this.getFeedback();
    // }

    // getFeedback = () => {
    //     axios({
    //         method: 'GET',
    //         url: '/feedback'
    //     }).then((response) => {
    //         console.log('response in get feedback', response.data);
    //         this.props.dispatch({type: 'GET_FEEDBACK', payload: response.data});
    //     }).catch((error) => {
    //         console.log('error in get feedback', error);
            
    //     });
    // }

 

  render() {
      return (
            <>
                {/* <td>{this.props.item.id}</td> */}
                <td>{this.props.item.feeling}</td>
                <td>{this.props.item.understanding}</td>
                <td>{this.props.item.support}</td>
                <td>{this.props.item.comments}</td>
                <td><button onClick={this.props.deleteItem(this.props.item.id)}>Delete</button></td>
                <td><button>Flag</button></td>
            </>
);
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(AdminTable);
