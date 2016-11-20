import React from 'react'
// import {Link} from 'react-router'
import firebase from 'firebase';
import CurrentLessons from './CurrentLessons'

const TeacherDash = React.createClass({

  render(){
    console.log(this.props.data)
    return (
      // TODO setup logout with firebase
      <div>
      <h1 id="">Teacher Dashboard</h1>
        <div className="container">
        <h1>Hello {this.props.data.userName}</h1>
          <div className="notification-bar"></div>
          <div className="current-lessons">
            {this.props.data.userSchedule ? <CurrentLessons lessons={this.props.data.userSchedule.lessons} />: <h1>No Current Lessons</h1> }
          </div>
          <div className="container calendar-container">
          
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
