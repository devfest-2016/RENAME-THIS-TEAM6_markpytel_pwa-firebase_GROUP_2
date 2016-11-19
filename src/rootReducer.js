import {combineReducers} from 'redux';

import {store} from './store';

import homeReducer from './homePage/homeReducer';

const rootReducer = combineReducers({
  homeReducer
})

export default rootReducer;