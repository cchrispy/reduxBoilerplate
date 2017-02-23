/*
** This is the entry point for the reducers that the Redux store will be created from.
** Make sure to remove the sampleReducer in production!
*/

import { combineReducer } from 'redux';
import sampleReducer from './sampleReducer';

const mainReducer = combineReducer({
  sampleReducer
})

export default mainReducer;