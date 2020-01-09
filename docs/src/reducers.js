'use strict';

import breakpoint from './global/breakpointReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    breakpoint,
});

export default rootReducer;
