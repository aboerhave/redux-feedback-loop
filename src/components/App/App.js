import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
      return (
        <Router>
        <div className="App">
          <Header />

          <Route exact path='/' component={Feeling} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments} />
          <Route path='/review' component={Review} />
          <Route path='/thankYou' component={ThankYou} />
          <Route path='/admin' component={Admin} />

        </div>
      </Router>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})

export default connect(putReduxStateOnProps)(App);
