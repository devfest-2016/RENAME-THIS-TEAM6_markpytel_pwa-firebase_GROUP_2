import React from 'react'
import {Link} from 'react-router'
import firebase from 'firebase';

const HomePage = React.createClass({

componentDidMount() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5LG0tGT5ViExMwYkyDiRjvFqv1dIMnWI",
    authDomain: "team-success.firebaseapp.com",
    databaseURL: "https://team-success.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "702172172434"
  };
  firebase.initializeApp(config);
},

signIn(role) {
  var provider = new firebase.auth.GoogleAuthProvider();
  var database = firebase.database();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    var userId = user.uid;
    database.ref('userRoles/' + userId).set({
      role: role
    });
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
      <h1>HomePage</h1>
      <Link to="#" onClick={() => {this.signIn('tutor')}}>Tutor Login</Link>
      <Link to="#" onClick={() => {this.signIn('student')}}>Student Login</Link>
      </div>
    )
  }
})

export default HomePage
