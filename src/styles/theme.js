import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import {
    keys as breakpointsKeys,
    values as breakpointsValues,
} from './breakpointsConstants';

const theme = {
    breakpoints: createBreakpoints({
        keys: breakpointsKeys,
        values: breakpointsValues,
    }),
};

export default theme;
