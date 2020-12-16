import {
    Grid,
    Typography,
} from 'react-cm-ui';
import ClassNames from 'classnames';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';
import useTheme from 'react-cm-ui/styles/useTheme';

const propTypes = {
    color: PropTypes.oneOf(['textContrastText', 'textPrimary', 'textSecondary']).isRequired,
    backgroundColor: PropTypes.oneOf(['contrastPrimary', 'primary']).isRequired,
};

const useStyles = makeStyles(({
    palette,
    spacing,
    typography,
}) => ({
    backgroundColorPrimary: {},
    backgroundColorContrastPrimary: {},
    column: {

    },
    innerContainer: {
        padding: spacing(1),
        '&$backgroundColorPrimary': {
            backgroundColor: palette.background.primary,
        },
        '&$backgroundColorContrastPrimary': {
            backgroundColor: palette.background.contrastPrimary,
        },
    },
    info: {
        color: palette.text.secondary,
        fontSize: typography.pxToRem(12),
        marginBottom: spacing(2),
        '&:last-child': {
            marginBottom: 0,
        },
    },
    typography: {
        color: ({ color }) => (
            color === 'textContrastText' ? palette.text.contrastText : null
        ),
    },
}));

function TypographyGridColumn(props) {
    const {
        color,
        backgroundColor,
    } = props;

    const classes = useStyles(props);
    const theme = useTheme();

    const fontFamily = theme.typography.fontFamily.split(',')[0].replace(/['"]+/g, '');
    const fontWeightBold = `${theme.typography.fontWeightBold} (Bold)`;
    const fontWeightMedium = `${theme.typography.fontWeightMedium} (Medium)`;
    const fontWeightRegular = `${theme.typography.fontWeightRegular} (Regular)`;
    const fontSize = (size) => `${size} (${theme.typography.htmlFontSize * (size.split('rem')[0] * 1)}px)`;

    return (
        <Grid.Column
            className={classes.column}
        >
            <div
                className={ClassNames(
                    classes.innerContainer,
                    {
                        [classes.backgroundColorPrimary]: backgroundColor === 'primary',
                        [classes.backgroundColorContrastPrimary]: backgroundColor === 'contrastPrimary',
                    },
                )}
            >
                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="h1"
                >
                    Heading 1
                </Typography>

                <Typography classes={{ root: classes.info }}>
                    {`${fontFamily} - ${fontWeightBold} - ${fontSize(theme.typography.h1.fontSize)} - ${theme.typography.h1.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="h2"
                >
                    Heading 2
                </Typography>

                <Typography classes={{ root: classes.info }}>
                    {`${fontFamily} - ${fontWeightBold} - ${fontSize(theme.typography.h2.fontSize)} - ${theme.typography.h2.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="h3"
                >
                    Heading 3
                </Typography>

                <Typography classes={{ root: classes.info }}>
                    {`${fontFamily} - ${fontWeightBold} - ${fontSize(theme.typography.h3.fontSize)} - ${theme.typography.h3.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="h4"
                >
                    Heading 4
                </Typography>

                <Typography classes={{ root: classes.info }}>
                    {`${fontFamily} - ${fontWeightMedium} - ${fontSize(theme.typography.h4.fontSize)} - ${theme.typography.h4.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="h5"
                >
                    Heading 5
                </Typography>

                <Typography classes={{ root: classes.info }}>
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.h5.fontSize)} - ${theme.typography.h5.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="h6"
                >
                    Heading 6
                </Typography>

                <Typography classes={{ root: classes.info }}>
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.h6.fontSize)} - ${theme.typography.h6.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="body1"
                >
                    Body 1
                </Typography>

                <Typography classes={{ root: classes.info }}>
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.body1.fontSize)} - ${theme.typography.body1.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="body2"
                >
                    Body 2
                </Typography>

                <Typography classes={{ root: classes.info }}>
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.body2.fontSize)} - ${theme.typography.body2.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="caption"
                >
                    Caption
                </Typography>

                <Typography classes={{ root: classes.info }}>
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.caption.fontSize)} - ${theme.typography.caption.lineHeight}`}
                </Typography>
            </div>
        </Grid.Column>
    );
}

TypographyGridColumn.propTypes = propTypes;

export default TypographyGridColumn;
