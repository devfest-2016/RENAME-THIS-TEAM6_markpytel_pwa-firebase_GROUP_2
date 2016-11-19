import React from 'react';
import NavBar from './NavBar';
import TeacherDash from './dashboard/TeacherDash'
import './App.css';

const App = (props) => (
  <div>
    <NavBar />
    {props.children}
  </div>
);


export default App;
