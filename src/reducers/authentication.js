/**
 * 
 * Redux-based Reducer which takes care of the authentication logic. 
 * 
 */

import { 
    AUTHENTICATE_USER,
    SIGNOUT_USER,
} from '../actionCreators/constants';


// 
const initialState = {
    isAuthenticated: false,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case AUTHENTICATE_USER:
            return Object.assign({}, state, {isAuthenticated: action.isAuthenticated});
        case SIGNOUT_USER:
            return Object.assign({}, state, {isAuthenticated: action.isAuthenticated});
        default:
            return state;
    }
}