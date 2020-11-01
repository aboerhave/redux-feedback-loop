import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux';
import logger from 'redux-logger';

const feelingValue = (state = 0, action) => {
    // console.log(action.payload);
    console.log(action.type);
    switch(action.type) {        
        case 'SET_FEELING_VALUE': 
            return action.payload;
        case 'CLEAR_VALUES':
            state = 0;
            return state;
        default: 
            return state;
    }
}

const understandingValue = (state = 0, action) => {
    console.log(action.payload);
    console.log(action.type);
    switch(action.type) {        
        case 'SET_UNDERSTANDING_VALUE': 
            return action.payload;
        case 'CLEAR_VALUES':
            state = 0;
            return state;
        default: 
            return state;
    }
}

const supportValue = (state = 0, action) => {
    console.log(action.payload);
    console.log(action.type);
    switch(action.type) {        
        case 'SET_SUPPORT_VALUE': 
            return action.payload;
        case 'CLEAR_VALUES':
            state = 0;
            return state;
        default: 
            return state;
    }
}

const commentsValue = (state = '', action) => {
    console.log(action.payload);
    console.log(action.type);
    switch(action.type) {
        case 'SET_COMMENTS': 
            return action.payload
        case 'CLEAR_VALUES':
            state = '';
            return state;
        default: 
            return state;
    }
}

const feedbackList = (state = [], action) => {
    console.log('action.payload', action.payload);
    
    switch(action.type) {
        case 'GET_FEEDBACK':
            return action.payload;
        default: 
            return state;
    }
}

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
