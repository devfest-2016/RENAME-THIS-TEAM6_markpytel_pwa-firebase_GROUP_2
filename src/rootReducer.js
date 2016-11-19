import {combineReducers} from 'redux';

import {store} from './store';

import homeReducer from './homePage/homeReducer';
import dashBoardReducer from './teacherDashboard/dashBoardReducer';

const rootReducer = combineReducers({
  homeReducer, 
  dashBoardReducer
})

export default rootReducer;