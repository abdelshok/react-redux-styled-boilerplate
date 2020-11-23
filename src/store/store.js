/**
 * 
 * Initialization of the Redux store, which will contain most of the data of our application.
 * 
 */

// External Packages
import { createStore } from 'redux';

// Internal Modules
import reducer from '../reducers/';

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
);
  