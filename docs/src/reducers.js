'use strict';

import breakpoint from './shared/breakpointReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    breakpoint,
});

export default rootReducer;
