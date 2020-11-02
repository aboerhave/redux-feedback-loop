import React, { Component, useLayoutEffect } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
// import AdminTable from '../AdminTable/AdminTable';
import './Admin.css'

class Admin extends Component {

    state = {
        flagActive: false
    }

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
        let accept = window.confirm('Are you sure you want to delete the entry?');
        if(!accept) {
            return;
        }
        console.log('feedbackId', feedbackId);
        
        axios({
            method: 'DELETE',
            url: `/feedback/${feedbackId}`
        }).then((response) => {
            console.log('response in delete', response);
            this.getFeedback();
        }).catch((error) => {
            console.log('error', error);            
        });
    }


    flagItem = (flagId, flagStatus) => {
        console.log('flagId', flagId);
        // this should send the opposite value to the server so the 
        // database is changed to become the new value that's set here
        flagStatus = !flagStatus;
        
        console.log('flagStatus', flagStatus);
            axios({
                method: 'PUT',
                url: `/feedback/${flagId}`,
                data: {flagStatus, flagStatus}
            }).then((response) => {
                console.log('response', response);
                this.getFeedback();
            })
    }

  render() {
      return (
        <div >
            <h2>Feedback Results</h2>
            <table className="adminTable">
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
                    {this.props.reduxStore.feedbackList.map((item) => {
                        // return
                    if(item.flagged) {        
                        return  <tr key={item.id} className="flaggedRow">
                                <td>{item.feeling}</td>
                                <td>{item.understanding}</td>
                                <td>{item.support}</td>
                                <td>{item.comments}</td>
                                <td><button onClick={() => this.deleteItem(item.id)} >Delete</button></td>
                                <td><button onClick={() => this.flagItem(item.id, item.flagged)} className="checkedButton">X</button></td>
                            </tr>
                        }
                    else if (!item.flagged) {
                        return  <tr key={item.id} className="unflaggedRow">
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td>{item.comments}</td>
                            <td><button onClick={() => this.deleteItem(item.id)}>Delete</button></td>
                            <td><button onClick={() => this.flagItem(item.id, item.flagged)} className="uncheckedButton"></button></td>
                        </tr>
                    }    
                    })}
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

