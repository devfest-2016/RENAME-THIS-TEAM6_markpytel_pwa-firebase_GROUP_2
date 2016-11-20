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
          <div key={idx} className="currentItem">
            <li >
              <p>{'Student Name: ' + lessonObj[lesson].studentName}</p>
              <p>{'Date: ' + lessonObj[lesson].lessonDate}</p>
              <p>{'Time: ' + lessonObj[lesson].lessonTime}</p>
            </li>
            <button onClick={()=>this.completedTask(lessonObj[lesson].startDate)}>Yes</button>
            <button onClick={this.unCompletedTask}>No</button>
          </div>
        )
      })
    return (
      <div className="current-lessons">
        {lessonsNotCompleted}
        <Display if={this.state.module}>
          <div>
            <p>{this.state.question}</p>
            <button onClick={this.closeModal}>Yes</button>
            <button onClick={this.closeModal}>No</button>
          </div>
        </Display>
      </div>
    )
  }

})
export default CurrentLessons