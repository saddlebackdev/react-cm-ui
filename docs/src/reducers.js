
import { combineReducers } from 'redux';
import breakpoint from './global/breakpointReducer';

const rootReducer = combineReducers({
    breakpoint,
});

export default rootReducer;
