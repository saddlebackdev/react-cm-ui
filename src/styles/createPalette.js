import {
    blue,
    common,
    cyan,
    green,
    grey,
    orange,
    pink,
    red,
    teal,
} from '../colors';

export default function createPalette() {
    const palette = {
        active: {
            primary: cyan[500],
        },
        background: {
            contrastPrimary: grey[600],
            light: grey[100],
            primary: common.white,
            secondary: grey[200],
        },
        border: {
            primary: grey[300],
            secondary: grey[200],
        },
        error: {
            main: red[500],
            dark: red[600],
        },
        primary: { // ......................Talk about this. Good
            main: grey[600],
        },
        secondary: { // ......................Talk about this. Good
            main: blue[500],
            dark: blue[600],
        },
        static: { // ......................Talk about this. Good
            main: grey[300],
        },
        success: {
            main: green[500],
            dark: green[600],
        },
        text: { // ......................Talk about this
            active: cyan[500],
            contrastText: common.white,
            disable: grey[300],
            inverseDisable: grey[500], // figured out what to call this
            link: cyan[500],
            primary: grey[600],
            secondary: grey[400],
        },
        warning: {
            main: orange[500],
            dark: orange[600],
        },
    };

    return {
        common,
        ...palette,
        grey,
        pink,
        teal,
    };
}
