import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feelingValue = (state = 0, action) => {
    // console.log(action.payload);
    switch(action.type) {        
        case 'SET_FEELING_VALUE': 
            return action.payload;
        default: 
            return state;
    }
}

const understandingValue = (state = 0, action) => {
    console.log(action.payload);
    switch(action.type) {        
        case 'SET_UNDERSTANDING_VALUE': 
            return action.payload;
        default: 
            return state;
    }
}

const supportValue = (state = 0, action) => {
    console.log(action.payload);
    switch(action.type) {        
        case 'SET_SUPPORT_VALUE': 
            return action.payload;
        default: 
            return state;
    }
}

const commentsValue = (state = '', action) => {
    console.log(action.payload);
    switch(action.type) {
        case 'SET_COMMENTS': 
            return action.payload
        default: 
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
        feelingValue, 
        understandingValue,
        supportValue,
        commentsValue
    }),
    applyMiddleware(logger)
)
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
