import React from 'react'

const NavBar = React.createClass({
  render(){
    return (
      <header className="navbar">
        <img className="logo" src={require("../logo.png")} />
        <ul>
          <li><a href="#">ITEM 1</a></li>
          <li className="hide"><a className="hide" href="#">Logout</a></li>
        </ul>
      </header>
    )
  }
})

export default NavBar
