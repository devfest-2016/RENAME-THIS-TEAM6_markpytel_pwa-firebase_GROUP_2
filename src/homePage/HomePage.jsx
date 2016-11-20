import React from 'react'
import { browserHistory, Link } from 'react-router'
import firebase from 'firebase';
import {initFirebase} from '../firebase'


import store from '../store';

const HomePage = React.createClass({
  signIn(userType) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar');
    var database = firebase.database();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      var userId = user.uid;
      database.ref('users/' + userId).set({
        userType: userType
      });
      if (userType === 'teacher') {
        browserHistory.push('teacher/dashboard');
      } else { browserHistory.push('student/dashboard') }
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  },

  render(){
    return (
      <div>
        <h1 id="title">Teacherly</h1>
        <Link to="#" className="login" onClick={() => {this.signIn('teacher')}}>Teacher Login</Link>
        <Link to="#" className="login" onClick={() => {this.signIn('student')}}>Student Login</Link>
      </div>
    )
  }
})

export default HomePage
