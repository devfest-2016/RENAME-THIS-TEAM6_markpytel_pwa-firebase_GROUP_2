import React from 'react'
import {Link} from 'react-router'
import firebase from 'firebase';
import { connect } from 'react-redux';

import CalendarService from '../services/CalendarService';

const StudentDash = React.createClass({
  componentDidMount() {
    CalendarService.getCalendar(({token: this.props.token}), (data) => {
      console.log(data)
    })
  },

  render(){
    return (
      // TODO setup logout with firebase
      <div>
      <h1 id="">Student Dashboard</h1>
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

function mapStateProps(state) {
  return state.studentReducer
}

export default connect(mapStateProps)(StudentDash)
