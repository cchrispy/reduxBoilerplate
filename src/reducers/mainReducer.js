/*
** This is the entry point for the reducers that the Redux store will be created from.
** Make sure to remove the sampleReducer in production!
*/

import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';

const mainReducer = combineReducers({
  sampleReducer
})

export default mainReducer;