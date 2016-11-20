import React from 'react'
// import {Link} from 'react-router'
import firebase from 'firebase';
import CurrentLessons from './CurrentLessons'

import Calendar from '../calendar/Calendar';

const TeacherDash = React.createClass({

  render(){
    return (
      <div className="dashboard">
        <div className="container">
          <div className="notification-bar"></div>
          <div>
            <h2>Lessons needing attention</h2>
            {this.props.data.userSchedule ? <CurrentLessons lessons={this.props.data.userSchedule.lessons} />: <h1>No Current Lessons</h1> }
            
            <div className="container students">
              <h2>Your current students</h2>
              <ul className="student-list">
                {this.props.data.userSchedule ?
                  Object.keys(this.props.data.userSchedule.lessons).map((lesson, idx)=>
                    <li className="student" key={idx}>{this.props.data.userSchedule.lessons[lesson].studentName}</li>
                  )
                : null
                }
              </ul>
            </div>
          </div>
          <div className="container calendar-container">
            <div>
              <h2>Calendar</h2>
            </div>
            <div>
              <Calendar data={this.props.data}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default TeacherDash
