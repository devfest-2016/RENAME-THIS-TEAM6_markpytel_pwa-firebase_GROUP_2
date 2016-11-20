import React from 'react'
import {Link} from 'react-router'
import firebase from 'firebase';

const TeacherDash = React.createClass({
  render(){
    return (
      // TODO setup logout with firebase
      <div>
      <h1 id="">Teacher Dashboard</h1>
        <div className="container">
          <div className="notification-bar"></div>
          <div className="current-lessons"></div>
          <div className="container calendar-container">
            Calendar Here
          </div>
          <div className="container student-list-container">
            <ul className="student-list">
              <li className="student">student1</li>
              <li className="student">student2</li>
              <li className="student">student3</li>
              <li className="student">student4</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

export default TeacherDash
