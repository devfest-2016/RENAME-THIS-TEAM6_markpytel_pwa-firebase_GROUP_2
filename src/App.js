import React, { Component } from 'react';
import {Link} from 'react-router';
import NavBar from './NavBar';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

const App = React.createClass({

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

export default App;
