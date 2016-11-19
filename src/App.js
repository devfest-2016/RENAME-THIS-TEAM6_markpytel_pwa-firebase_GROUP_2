import React, { Component } from 'react';
import {Link} from 'react-router';
import NavBar from './NavBar';
import firebase from 'firebase';
import './App.css';

const App = React.createClass({

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

export default App;
