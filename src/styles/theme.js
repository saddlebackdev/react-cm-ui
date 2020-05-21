import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import transitions from '@material-ui/core/styles/transitions';
import {
    keys as breakpointsKeys,
    values as breakpointsValues,
} from './breakpointsConstants';

const theme = {
    breakpoints: createBreakpoints({
        keys: breakpointsKeys,
        values: breakpointsValues,
    }),
    transitions,
};

export default theme;
