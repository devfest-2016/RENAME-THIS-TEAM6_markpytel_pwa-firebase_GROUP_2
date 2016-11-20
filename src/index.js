import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import routes from './routes'
import store from './store'
import '../css/index.css';
import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBM7YY691iJDj1xsoLBAGlw3nxSO2wmnII",
  authDomain: "team-success-9ce1b.firebaseapp.com",
  databaseURL: "https://team-success-9ce1b.firebaseio.com",
  storageBucket: "team-success-9ce1b.appspot.com",
  messagingSenderId: "35508077639"
}
firebase.initializeApp(config)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('root')
);
