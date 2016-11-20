import React from 'react'

const CurrentLessons = React.createClass({
  unCompletedTask(){
    console.log("completedTask")
  },

  completedTask(){
    console.log("completedTask")
  },
  render(){
      let lessonsNotCompleted = Object.keys(this.props.lessons).filter(lesson =>{
          if(!this.props.lessons[lesson]["lessonComplete?"]){
            return lesson
          }
       })
      .map((lesson, idx) => {
         return (
          <div key={idx} className="currentItem">
            <li >
              <p>{'Student Name: ' + this.props.lessons[lesson].studentName}</p>
              <p>{'Date: ' + this.props.lessons[lesson].lessonDate}</p>
              <p>{'Time: ' + this.props.lessons[lesson].lessonTime}</p>
            </li>
            <button onClick={this.completedTask}>Yes</button>
            <button onClick={this.unCompletedTask}>No</button>
          </div>
        )
      })
    return (
      <div className="current-lessons">
      {lessonsNotCompleted}
      </div>
    )
  }

})
export default CurrentLessons