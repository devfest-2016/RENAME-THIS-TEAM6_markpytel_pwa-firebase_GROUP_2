import React from 'react'
import { browserHistory, Link } from 'react-router'
import firebase from 'firebase';

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
      var userData = user.providerData;
      var userName = userData[0]["displayName"];
      database.ref('users/' + userId).set({
        userType: userType,
        userEmail: user.email,
        userPhotoUrl: user.photoURL,
        userName: userName,
        token: userId
      });
      if (userType === 'teacher') {
        browserHistory.push('teacher/dashboard');
      } else {
        browserHistory.push('student/dashboard');
      }
    });
  },

  render() {
    return (
      <div className="home">
        <h1 id="title">Schedule easier.</h1>
        <div className="loginButtons">
          <Link to="#" className="login" onClick={() => {this.signIn('teacher')}}>
            <h4>Are you a tutor?</h4>
          </Link>
          <Link to="#" className="login" onClick={() => {this.signIn('student')}}>
            <h4>Are you a student or parent?</h4>
          </Link>
        </div>
      </div>
    )
  }
})

export default HomePage
