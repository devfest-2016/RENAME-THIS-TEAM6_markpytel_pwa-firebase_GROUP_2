import React from 'react'

const NavBar = React.createClass({
  render(){
    return (
      <header className="navbar">
        <span className="logo"><a href="#">Logo</a></span>
        <ul>
          <li><a href="#">ITEM 1</a></li>
          <li><a href="#">ITEM 2</a></li>
        </ul>
      </header>
    )
  }
})

export default NavBar
