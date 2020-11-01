import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
// import AdminTable from '../AdminTable/AdminTable';

class Admin extends Component {

    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log('response in get feedback', response.data);
            this.props.dispatch({type: 'GET_FEEDBACK', payload: response.data});
        }).catch((error) => {
            console.log('error in get feedback', error);
            
        });
    }

    deleteItem = (feedbackId) => {
        console.log('clicked');
        
        // let feedbackId = this.props.item.id;
        console.log('feedbackId', feedbackId);
        
        axios({
            method: 'DELETE',
            url: `/feedback/${feedbackId}`
        }).then((response) => {
            console.log('response in delete', response);
            this.getFeedback();
        }).catch((error) => {
            console.log('error', error);            
        })
    }

  render() {
      return (
        <div >
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                        <th>Flag</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.reduxStore.feedbackList.map((item) => 
                        // return 
                        <tr>
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td>{item.comments}</td>
                            <td><button onClick={() => this.deleteItem(item.id)}>Delete</button></td>
                            <td><button>Flag</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Admin);

