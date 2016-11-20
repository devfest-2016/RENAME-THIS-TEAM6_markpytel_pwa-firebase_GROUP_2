import React from 'react'
// import {Link} from 'react-router'
import firebase from 'firebase';
import CurrentLessons from './CurrentLessons'

const TeacherDash = React.createClass({

  render(){
    return (
      // TODO setup logout with firebase
      <div>
      <h1 id="">Teacher Dashboard</h1>
        <div className="container">
          <div className="notification-bar"></div>
          <div className="current-lessons">
            <h2 id="current-lessons">Lessons needing attention</h2>
            {this.props.data.userSchedule ? <CurrentLessons lessons={this.props.data.userSchedule.lessons} />: <h1>No Current Lessons</h1> }
          </div>
          <div className="container calendar-container">

          </div>
          <div className="container student-list-container">
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
      </div>
    )
  }
})

export default TeacherDash
