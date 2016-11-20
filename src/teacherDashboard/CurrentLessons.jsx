import React from 'react'
import Display from './display'

const CurrentLessons = React.createClass({
  getInitialState(){
    return {
      module: false,
      question: "",
      lessonDate: ""
    }
  },
  unCompletedTask(){
    console.log("completedTask")
    this.setState({module: true, question: "Would you like to reschedule?"})
  },

  completedTask(lessonDate){
    console.log("completedTask")
    this.setState({module: true, question: "Did you get paid?", lessonDate: lessonDate})
  },
  closeModal(){
    this.setState({module: false})
  },
  render(){
      let lessonsNotCompleted = Object.keys(this.props.lessons).filter(lesson =>{
          if(!this.props.lessons[lesson]["lessonComplete?"]){
            return lesson
          }
       })
      .map((lesson, idx) => {
        let lessonObj = this.props.lessons
         return (
          <li key={idx} className="currentItem">
            <div className="lesson-info">
              <p className="student-name">{this.props.lessons[lesson].studentName}</p>
                <div className="lesson-buttons">
                  <button onClick={()=>this.completedTask(lessonObj[lesson].startDate)}>Complete</button>
                  <button onClick={this.unCompletedTask}>X</button>
                </div>
              <p>Date: {this.props.lessons[lesson].lessonDate}</p>
              <p>Time: {this.props.lessons[lesson].lessonTime}</p>
            </div>
          </li>
        )
      })
    return (
      <div className="current-lessons">
        {lessonsNotCompleted}
        <Display if={this.state.module}>
          <div className="modal-container">
            <div className="modal">
              <p>{this.state.question}</p>
              <button onClick={this.closeModal}>Yes</button>
              <button onClick={this.closeModal}>No</button>
            </div>
          </div>
        </Display>
      </div>
    )
  }

})
export default CurrentLessons
