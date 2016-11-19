import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => (
  <div className="App">
    Header
    {props.children}
  </div>
)

export default App; 
