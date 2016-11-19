import {combineReducers} from 'redux';

import {store} from './store';

import homeReducer from './homePage/homeReducer';
import dashBoardReducer from './tutorDashboard/dashBoardReducer';

const rootReducer = combineReducers({
  homeReducer, 
  dashBoardReducer
})

export default rootReducer;