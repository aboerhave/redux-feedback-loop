// This is the index.js file for the Week 11 assignment for Prime Digital Academy, created by 
// Adam Boerhave, 10/30/2020 - 11/1/2020

// imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

// reducer for storing feeling value submitted by user
const feelingValue = (state = 0, action) => {
    switch(action.type) {        
        case 'SET_FEELING_VALUE': // if feeling value submitted
            return action.payload;
        case 'CLEAR_VALUES':    // for clearing on review page when submit clicked
            state = 0;
            return state;
        default: 
            return state;
    }
}

// reducer for storing understanding value submitted by user
const understandingValue = (state = 0, action) => {
    switch(action.type) {        
        case 'SET_UNDERSTANDING_VALUE': // if understanding value submitted
            return action.payload;
        case 'CLEAR_VALUES':    // for clearing on review page when submit clicked
            state = 0;
            return state;
        default: 
            return state;
    }
}

// reducer for storing support value submitted by user
const supportValue = (state = 0, action) => {
    switch(action.type) {        
        case 'SET_SUPPORT_VALUE':   // if support value submitted
            return action.payload;
        case 'CLEAR_VALUES':    // for clearing on review page when submit clicked
            state = 0;
            return state;
        default: 
            return state;
    }
}

// reducer for storing comments submitted by user
const commentsValue = (state = '', action) => {
    console.log(action.payload);
    console.log(action.type);
    switch(action.type) {
        case 'SET_COMMENTS':    // if comments submitted by user
            return action.payload
        case 'CLEAR_VALUES':    // for clearing on review page when submit clicked
            state = '';
            return state;
        default: 
            return state;
    }
}

// reducer for storing prior feedback entries returned from database
const feedbackList = (state = [], action) => {
    switch(action.type) {
        case 'GET_FEEDBACK':
            return action.payload;
        default: 
            return state;
    }
}

// reduxStore for all reducers from above
const reduxStore = createStore(
    combineReducers({
        feelingValue, 
        understandingValue,
        supportValue,
        commentsValue,
        feedbackList
    }),
    applyMiddleware(logger)
)
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
