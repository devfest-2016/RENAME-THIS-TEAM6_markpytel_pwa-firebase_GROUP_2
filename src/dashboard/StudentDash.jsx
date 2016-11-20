import React from 'react'
import {Link} from 'react-router'
import firebase from 'firebase';

const StudentDash = React.createClass({
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
          <div className="container calendar-container">
            Calendar Here
          </div>
          <div className="container upcoming-lesson-list-container">
            <ul className="upcoming-lesson-list">
              <li className="lesson">Lesson1</li>
              <li className="lesson">Lesson2</li>
              <li className="lesson">Lesson3</li>
              <li className="lesson">Lesson4</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

export default StudentDash
