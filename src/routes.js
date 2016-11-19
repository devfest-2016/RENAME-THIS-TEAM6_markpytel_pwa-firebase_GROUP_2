import React from 'react'
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import App from './App';
import DashboardContainer from './tutorDashboard/DashboardContainer';
import HomePage from './homePage/HomePage'

//redux
import store from './store'
import {getTutorDataAsync} from './tutorDashboard/tutorThunkActions'

const getTutorData = () => {store.dispatch(getTutorDataAsync())}

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
    </Route>
    <Route path="dashboard" component={DashboardContainer} onEnter={getTutorData}/>
  </Router>
)
