import React from 'react'

const NavBar = React.createClass({

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

          <li><a href="#">ITEM 1</a></li>
          <li className="hide"><a className="hide" href="#">Logout</a></li>
        </ul>
        </div>
      </header>
    )
  }
})

export default NavBar
