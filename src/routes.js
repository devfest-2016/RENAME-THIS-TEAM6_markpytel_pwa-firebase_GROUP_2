import React from 'react'
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import App from './App';
import StudentDash from './studentDashboard/StudentDash';
import HomePage from './homePage/HomePage'

//redux
import store from './store'
import {getTutorDataAsync} from './teacherDashboard/teacherThunkActions'

const getTutorData = () => {store.dispatch(getTutorDataAsync())}

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="teacher/dashboard" component={getTutorData} />
      <Route path="student/dashboard" component={StudentDash} />
    </Route>
  </Router>
)
