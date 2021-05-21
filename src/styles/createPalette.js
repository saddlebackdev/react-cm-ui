import {
    blue,
    common,
    cyan,
    green,
    grey,
    orange,
    pink,
    purple,
    red,
    redOrange,
    sky,
    teal,
} from '../colors';

function hexToRGBA(hex, a) {
    let r = 0;
    let g = 0;
    let b = 0;

    if (hex.length === 4) { // 3 digits
        r = `0x${hex[1] + hex[1]}`;
        g = `0x${hex[2] + hex[2]}`;
        b = `0x${hex[3] + hex[3]}`;
    } else if (hex.length === 7) { // 6 digits
        r = `0x${hex[1] + hex[2]}`;
        g = `0x${hex[3] + hex[4]}`;
        b = `0x${hex[5] + hex[6]}`;
    }

    return `rgba(${+r}, ${+g}, ${+b}, ${+a})`;
}

export default function createPalette() {
    const palette = {
        action: {
            disabled: grey[300],
        },
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
        grey: {
            50: grey[100], // DO NOT USE
            ...grey,
            700: grey[500], // DO NOT USE
            800: grey[500], // DO NOT USE
            900: grey[500], // DO NOT USE
        },
        pink,
        purple,
        redOrange,
        sky,
        teal,
        hexToRGBA,
    };
}
