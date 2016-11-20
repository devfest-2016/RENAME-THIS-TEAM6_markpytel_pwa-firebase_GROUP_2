import React from 'react'
import {connect} from 'react-redux'
import App from '../App'

const appToState = state => {
  console.log(state)
  return{
  data: state.dashBoardReducer
}}

export default connect(appToState)(App)