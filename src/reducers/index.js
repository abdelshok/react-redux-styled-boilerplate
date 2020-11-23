/**
 * 
 * The reducers that will be processing the state of the application are all combined here
 * into one single reducer.
 * 
 * They are imported from various files in this folder and subdivided in terms of functionality
 * in order to allow for more clarity and modularit. 
 * 
 */

// External Packages
import { combineReducers } from 'redux';

// Internal Modules
import authentication from './authentication';

export default combineReducers({
  authentication,
})

