import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

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

  render() {
      return (
        <div className="App">
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
                    {/* {JSON.stringify(this.props.reduxStore.feedbackList)} */}
                    {this.props.reduxStore.feedbackList.map((item) => 
                        // return 
                        <tr key={item.id}>
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td>{item.comments}</td>
                            <td><button>Delete</button></td>
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
