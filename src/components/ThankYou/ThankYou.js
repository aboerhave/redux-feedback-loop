// This is the ThankYou.js file for the Week 11 assignment for Prime Digital Academy, created by 
// Adam Boerhave, 10/30/2020 - 11/1/2020

// imports
import React, { Component } from 'react';

class ThankYou extends Component {

    // This function advances back to the exact path, which is the feeling page
    advancePage = () => {
        console.log('click forward');
        this.props.history.push('/');
    }

    render() {
        return (
            <div >
                <h2>Thank You for your Feedback!!</h2>
                {/* button to return to beginning */}
                <button onClick={this.advancePage}>Leave New Feedback</button>
            </div>
        );
    }
}

export default ThankYou;
