import {combineReducers} from 'redux';

import {store} from './store';

import homeReducer from './homePage/homeReducer';
import studentReducer from './studentDashboard/studentReducer';
import dashBoardReducer from './teacherDashboard/dashBoardReducer';

const rootReducer = combineReducers({
  homeReducer, 
  dashBoardReducer,
  studentReducer
})

export default rootReducer;