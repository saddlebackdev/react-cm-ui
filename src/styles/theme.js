import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import createSpacing from '@material-ui/core/styles/createSpacing';
import transitions from '@material-ui/core/styles/transitions';
import { createTheme } from '@material-ui/core/styles';
import {
    keys as breakpointsKeys,
    values as breakpointsValues,
} from './breakpointsConstants';
import createMixins from './createMixins';
import createPalette from './createPalette';
import createTypography from './createTypography';
import shadows from './shadows';
import shape from './shape';
// import { } from '@mui/styles';

const spacing = 11;

const breakpoints = createBreakpoints({
    keys: breakpointsKeys,
    values: breakpointsValues,
});

const palette = createPalette();
const builtTypography = createTypography();

console.log('builtTypography', builtTypography);

const theme =
    // createTheme(
        {
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
            },
            mixins: createMixins(breakpoints, spacing, {}),
            overrides: {
                MuiCard: {
                    root: {
                        borderRadius: 8,
                        overflow: 'visible',
                    },
                },
                MuiCardContent: {
                    root: {
                        padding: spacing * 2,
                    },
                },
                h1: {
                    color: 'red !important',
                },
                'MuiTypography-h1': {
                    color: 'red !important',
                },
                MuiTypography: {
                    color: 'red !important',
                },
            },
            palette,
            shadows,
            shape,
            spacing: createSpacing(spacing),
            transitions,
            // typography: {
            //     h2: {
            //         fontWeight: 700,
            //         fontFamily: '"Source Sans Pro", sans-serif !important',
            //         fontSize: '1.25rem !important',
            //         lineHeight: 1.5,
            //     },
            //     fontSize: 5,
            // },
            typography: builtTypography,
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
        }
    // )
;

export default theme;
