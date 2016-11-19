import React from 'react';
import NavBar from './NavBar';
import firebase from 'firebase';
import './App.css';

const App = (props) => (
  <div>
    <NavBar />
    {props.children}
  </div>
);

export default App;
