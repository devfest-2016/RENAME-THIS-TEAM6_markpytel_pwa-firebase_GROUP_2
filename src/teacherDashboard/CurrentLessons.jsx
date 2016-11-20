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
            <li key={idx} className="currentItem">
              <p>{this.props.lessons[lesson].studentName
                  + ' Date: ' + this.props.lessons[lesson].lessonDate
                  + 'Time: ' + this.props.lessons[lesson].lessonTime
                  }</p>
                  <button onClick={this.completedTask}>Complete</button>
                  <button onClick={this.unCompletedTask}>X</button>
            </li>
        )
      })
    return (
      <div className="">
        <ul className="current-lessons-list">
          {lessonsNotCompleted}
        </ul>

      </div>
    )
  }

})
export default CurrentLessons
