import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
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
  }

  signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;

    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  render() {
    return (
      <div>
        <a href="#" onClick={() => {this.signIn()}}>Sign in here!</a>
        {this.props.children}
      </div>
    );
  }
});

export default App;
