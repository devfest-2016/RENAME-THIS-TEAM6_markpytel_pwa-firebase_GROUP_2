import React from 'react'
import { browserHistory, Link } from 'react-router'
import firebase from 'firebase'

const NavBar = React.createClass({
  signOut() {
    firebase.auth().signOut().then(function() {
      browserHistory.replace('/')
    });
    this.props.data.userName = ''
    this.props.data.userPhotoUrl = ''
  },

  render(){
    return (
      <header className="navbar">
        <div className="logo">
          <img src={require("../logo.png")} />
        </div>

        <div className='rightNav'>
          <ul>
            {this.props.data.userName ? <li id="dashboard">Dashboard</li>: null}
            {this.props.data.userPhotoUrl ? <li><img src={this.props.data.userPhotoUrl} className="profile-photo" alt="Your face" /></li> : null}
            {this.props.data.userName ? <li><a href="#" onClick={this.signOut} className="logout-button">Log Out</a></li> : null}
          </ul>
        </div>
      </header>
    )
  }
})

export default NavBar
