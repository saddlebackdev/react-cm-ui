import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import transitions from '@material-ui/core/styles/transitions';
import {
    keys as breakpointsKeys,
    values as breakpointsValues,
} from './breakpointsConstants';
import createPalette from './createPalette';
import createTypography from './createTypography';
import shape from './shape';

const theme = {
    breakpoints: createBreakpoints({
        keys: breakpointsKeys,
        values: breakpointsValues,
    }),
    gutters: {
        page: {
            sm: 22,
            496: 44,
        },
    },
    height: {
        appHeader: {
            sm: 55,
            md: 70,
        },
    },
    palette: createPalette(),
    shape,
    transitions,
    typography: createTypography(),
    width: {
        navigation: {
            sm: {},
            md: {
                collapsed: 70,
                expanded: 250,
            },
        },
    },
    zIndex: {
        drawer: 10000,
        modal: 11000,
        prompt: 12000,
        banner: 13000,
    },
};

export default theme;
