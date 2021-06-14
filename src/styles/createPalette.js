import {
    getContrastRatio,
} from '@material-ui/core/styles/colorManipulator';
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

export const light = {
    background: {
        default: common.white,
        contrastPrimary: grey[600],
        light: grey[100],
        paper: common.white,
        primary: common.white,
        secondary: grey[200],
    },
    divider: grey[300],
    text: {
        active: cyan[500],
        contrastText: common.white,
        disable: grey[300],
        inverseDisable: grey[500],
        link: cyan[500],
        primary: grey[600],
        secondary: grey[400],
    },
    action: {
        disabled: grey[300],
    },
};

/**
 * TODO: One day being able to switch to a dark theme for user's eyes and batteries would be
 * an amazing nice to have. For now `dark` is the exact same palette as light.
 */
export const dark = {
    text: {
        disable: light.text.disable,
        primary: common.white,
        secondary: light.text.secondary,
    },
};

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
        active: {
            primary: cyan[500],
        },
        border: {
            contrastPrimary: common.white,
            primary: grey[300],
            secondary: grey[200],
        },
        contrastThreshold: 3,
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
        warning: {
            main: orange[500],
            dark: orange[600],
        },
    };

    /**
     * Uses the same logic as
     * Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
     * and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
     */
    const getContrastText = (background) => {
        const contrastText =
            getContrastRatio(background, dark.text.primary) >= palette.contrastThreshold ?
                dark.text.primary :
                light.text.primary;

        if (process.env.NODE_ENV !== 'production') {
            const contrast = getContrastRatio(background, contrastText);

            if (contrast < 3) {
                // eslint-disable-next-line no-console
                console.error([
                    `Material-UI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
                    'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
                    'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
                ].join('\n'));
            }
        }

        return contrastText;
    };

    const mode = 'light';
    const modes = { dark, light };

    return {
        common,
        ...palette,
        ...modes[mode],
        blue,
        cyan,
        getContrastText,
        green,
        grey: {
            50: grey[100], // DO NOT USE
            ...grey,
            700: grey[500], // DO NOT USE
            800: grey[500], // DO NOT USE
            900: grey[500], // DO NOT USE
        },
        hexToRGBA,
        mode: 'light',
        pink,
        purple,
        redOrange,
        sky,
        teal,
    };
}
