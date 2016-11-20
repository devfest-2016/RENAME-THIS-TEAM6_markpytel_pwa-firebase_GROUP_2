import React from 'react'
import { browserHistory, Link } from 'react-router'
import firebase from 'firebase'

const NavBar = React.createClass({

  signOut() {
    firebase.auth().signOut().then(function() {
      browserHistory.push('/')
    });
  },

  render(){
    console.log(this.props.data)
    return (
      <header className="navbar">
        <div className="logo">
          <img src={require("../logo.png")} />
        </div>

        <div className='rightNav'>
          {this.props.data.userName ? <p>{"Hello " + this.props.data.userName}</p> : null}
          <ul>
            <li><a href="#" onClick={this.signOut}>Log Out</a></li>
          </ul>
        </div>
      </header>
    )
  }
})

export default NavBar
