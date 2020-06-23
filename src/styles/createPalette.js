import {
    blue,
    common,
    cyan,
    green,
    grey,
    orange,
    pink,
    red,
    redOrange,
    sky,
    teal,
} from '../colors/index';

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
            contrastPrimary: common.white,
            primary: grey[300],
            secondary: grey[200],
        },
        error: {
            main: red[500],
            dark: red[600],
        },
        primary: {
            main: grey[600],
        },
        secondary: {
            main: blue[500],
            dark: blue[600],
        },
        static: {
            main: grey[300],
        },
        success: {
            main: green[500],
            dark: green[600],
        },
        text: {
            active: cyan[500],
            contrastText: common.white,
            disable: grey[300],
            inverseDisable: grey[500],
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
        blue,
        cyan,
        green,
        grey,
        pink,
        redOrange,
        sky,
        teal,
    };
}
