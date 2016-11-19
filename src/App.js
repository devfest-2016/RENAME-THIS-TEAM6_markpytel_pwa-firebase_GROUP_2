import React, { Component } from 'react';
import {Link} from 'react-router';
import NavBar from './NavBar';
import firebase from 'firebase';
import './App.css';

const App = React.createClass({

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

  render() {
    return (
      <div>
        {this.props.children}
        <a href="#" onClick={() => {this.signIn('tutor')}}>Tutor Login</a>
        <a href="#" onClick={() => {this.signIn('student')}}>Student Login</a>
      </div>
    );
  }
});

export default App;
