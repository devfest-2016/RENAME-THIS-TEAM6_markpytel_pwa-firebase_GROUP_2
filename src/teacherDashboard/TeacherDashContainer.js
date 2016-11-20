import React from 'react'
import {connect} from 'react-redux'
import TeacherDash from './TeacherDash'

const appToState = state => {

  return {
  data: state.dashBoardReducer
}}

export default connect(appToState)(TeacherDash)
