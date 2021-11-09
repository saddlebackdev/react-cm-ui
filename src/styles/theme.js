import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import createSpacing from '@material-ui/core/styles/createSpacing';
import shadows from '@material-ui/core/styles/shadows';
import transitions from '@material-ui/core/styles/transitions';
import {
    keys as breakpointsKeys,
    values as breakpointsValues,
} from './breakpointsConstants';
import createMixins from './createMixins';
import createPalette from './createPalette';
import createTypography from './createTypography';
import shape from './shape';

const spacing = 11;

const breakpoints = createBreakpoints({
    keys: breakpointsKeys,
    values: breakpointsValues,
});

const theme = {
    breakpoints,
    gutters: {
        drawer: {
            sm: spacing * 2,
        },
        page: {
            sm: spacing * 2,
            496: spacing * 4,
        },
    },
    height: {
        actionBar: {
            sm: 50,
            md: 70,
        },
        appHeader: {
            sm: spacing * 5,
            md: 70,
        },
        drawerTitleBar: {
            sm: 55,
            md: 70,
        },
    },
    mixins: createMixins(breakpoints, spacing, {}),
    palette: createPalette(),
    shadows,
    shape,
    spacing: createSpacing(spacing),
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
        popover: 15000,
        tooltip: 16000,
    },
};

export default theme;
