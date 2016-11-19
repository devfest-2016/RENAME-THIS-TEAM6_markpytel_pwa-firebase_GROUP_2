import React from 'react'
import { browserHistory, Link} from 'react-router'
import firebase from 'firebase';

const HomePage = React.createClass({
  componentDidMount() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBM7YY691iJDj1xsoLBAGlw3nxSO2wmnII",
    authDomain: "team-success-9ce1b.firebaseapp.com",
    databaseURL: "https://team-success-9ce1b.firebaseio.com",
    storageBucket: "team-success-9ce1b.appspot.com",
    messagingSenderId: "35508077639"
  };
  firebase.initializeApp(config);
},

signIn(role) {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/calendar');
  var database = firebase.database();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    var userId = user.uid;

    database.ref('userRoles/' + userId).set({
      role: role
    });
    browserHistory.push('dashboard');
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
        <Link to="#" className="login" onClick={() => {this.signIn('tutor')}}>Tutor Login</Link>
        <Link to="#" className="login" onClick={() => {this.signIn('student')}}>Student Login</Link>
      </div>
    )
  }
})

export default HomePage
