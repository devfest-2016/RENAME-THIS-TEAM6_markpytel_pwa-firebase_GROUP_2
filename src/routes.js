import React from 'react'
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import App from './App';
import TeacherDash from './dashboard/TeacherDash';
import StudentDash from './dashboard/StudentDash';
import HomePage from './homePage/HomePage'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="teacher/dashboard" component={TeacherDash} />
      <Route path="student/dashboard" component={StudentDash} />
    </Route>
  </Router>
)
