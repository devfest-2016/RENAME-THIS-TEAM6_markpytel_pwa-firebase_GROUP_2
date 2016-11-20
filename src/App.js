import React from 'react';
import NavBar from './parts/NavBar';

const App = (props) => (
  <div>
    <NavBar data={props.data}/>
    {props.children}
  </div>
);


export default App;
