
import { combineReducers } from 'redux';
import breakpoint from './global/breakpointReducer.js';

const rootReducer = combineReducers({
    breakpoint,
});

export default rootReducer;
