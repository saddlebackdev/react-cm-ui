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
    zIndex: {
        drawer: 10000,
        modal: 11000,
        prompt: 12000,
        banner: 13000,
    },
};

export default theme;
