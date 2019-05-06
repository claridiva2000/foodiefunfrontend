import { combineReducers } from 'redux';

import fetchReducer from './fetchRed';
import addReducer from './addRed';
import errorReducer from './errorRed';
import authReducer from './authReducer';
import searchReducer from './searchRed';

const rootReducer = combineReducers({
addReducer, errorReducer, fetchReducer, authReducer, searchReducer
})

export default rootReducer;




