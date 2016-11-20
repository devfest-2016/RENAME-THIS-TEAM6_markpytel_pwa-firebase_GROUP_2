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
              <p>{this.props.lessons[lesson].studentName
                  + ' Date: ' + this.props.lessons[lesson].lessonDate
                  + 'Time: ' + this.props.lessons[lesson].lessonTime
                  }</p>
            <button onClick={()=>this.completedTask(lessonObj[lesson].startDate)}>Complete</button>
            <button onClick={this.unCompletedTask}>X</button>
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
