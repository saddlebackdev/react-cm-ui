import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import transitions from '@material-ui/core/styles/transitions';
import createSpacing from '@material-ui/core/styles/createSpacing';
import shadows from "@material-ui/core/styles/shadows";
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
        drawer: {
            sm: 22,
        },
        page: {
            sm: 22,
            496: 44,
        },
    },
    height: {
        actionBar: {
            sm: 50,
            md: 70,
        },
        appHeader: {
            sm: 55,
            md: 70,
        },
    },
    palette: createPalette(),
    shadows,
    shape,
    spacing: createSpacing(11),
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
        datePickerInputCalendar: 12000,
        prompt: 13000,
        banner: 14000,
        tooltip: 15000,
    },
};

export default theme;
