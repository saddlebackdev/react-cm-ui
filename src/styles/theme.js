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
    palette: createPalette(),
    shape,
    transitions,
    typography: createTypography(),
};

export default theme;
