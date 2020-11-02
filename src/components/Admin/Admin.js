// This is the Admin.js file for the Week 11 assignment for Prime Digital Academy, created by 
// Adam Boerhave, 10/30/2020 - 11/1/2020

// imports
import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './Admin.css'

class Admin extends Component {

    // function run when component is loaded to retrieve previously entered feedback
    componentDidMount = () => {
        this.getFeedback();
    }

    // get request for database entries to display
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

    // function to delete clicked on item with alert for user to confirm delete
    deleteItem = (feedbackId) => {
        console.log('clicked');
        let accept = window.confirm('Are you sure you want to delete the entry?');
        if(!accept) {
            return;
        }
        // axios request to server to delete item from db
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

    // function to flag an entry by admin person
    // it takes parameters flagId and flagStatus when it is called to 
    // send to the server
    flagItem = (flagId, flagStatus) => {
        // this should send the opposite value to the server so the 
        // database is changed to become the new value that's set here
        flagStatus = !flagStatus;
        
        axios({
            method: 'PUT',
            url: `/feedback/${flagId}`,
            data: {flagStatus, flagStatus}
        }).then((response) => {
            console.log('response', response);
            this.getFeedback();
        });
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
                    {/* map through array of items from db and attach class of flaggedRow
                    or unflaggedRow to them to make bg yellow  and check box or remain gray */}
                    {this.props.reduxStore.feedbackList.map((item) => {
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

// Redux
const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(Admin);

