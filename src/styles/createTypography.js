const fontFamily = '"Source Sans Pro", sans-serif';
const fontSize = 14; // px
const fontWeightBold = 700;
const fontWeightMedium = 600;
const fontWeightRegular = 400;
const htmlFontSize = 16; // px

const pxToRem = (pxNum) => `${(pxNum / htmlFontSize) * (fontSize / 14)}rem`;

export default function createTypography() {
    const buildVariant = (fontWeight, size, lineHeight) => ({
        fontFamily,
        fontWeight,
        fontSize: pxToRem(size),
        lineHeight,
    });

    const variants = {
        body1: buildVariant(fontWeightRegular, 16, 1.25),
        body2: buildVariant(fontWeightRegular, 14, 1.43),
        button: buildVariant(fontWeightBold, 14, 0.875),
        caption: buildVariant(fontWeightRegular, 14, 1.66),
        h1: buildVariant(fontWeightBold, 24, 1.5),
        h2: buildVariant(fontWeightBold, 20, 1.5),
        h3: buildVariant(fontWeightBold, 18, 1.5),
        h4: buildVariant(fontWeightMedium, 16, 1.25),
        h5: buildVariant(fontWeightRegular, 14, 1.5),
        h6: buildVariant(fontWeightRegular, 12, 1.5),
        subtitle1: buildVariant(fontWeightRegular, 14, 1.66),
        subtitle2: buildVariant(fontWeightRegular, 14, 1.66),
    };

    return {
        pxToRem,
        fontFamily,
        fontSize,
        fontWeightBold,
        fontWeightMedium,
        fontWeightRegular,
        htmlFontSize,
        ...variants,
    };
}
