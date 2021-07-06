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
}) => ({
    backgroundColorPrimary: {},
    backgroundColorContrastPrimary: {},
    column: {},
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
            sm={12}
            md={6}
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
                    h1. Heading
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightBold} - ${fontSize(theme.typography.h1.fontSize)} - ${theme.typography.h1.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="h2"
                >
                    h2. Heading
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightBold} - ${fontSize(theme.typography.h2.fontSize)} - ${theme.typography.h2.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="h3"
                >
                    h3. Heading
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightBold} - ${fontSize(theme.typography.h3.fontSize)} - ${theme.typography.h3.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="h4"
                >
                    h4. Heading
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightMedium} - ${fontSize(theme.typography.h4.fontSize)} - ${theme.typography.h4.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="h5"
                >
                    h5. Heading
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.h5.fontSize)} - ${theme.typography.h5.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="h6"
                >
                    h6. Heading
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.h6.fontSize)} - ${theme.typography.h6.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="subtitle1"
                >
                    subtitle1.
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.subtitle1.fontSize)} - ${theme.typography.subtitle1.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="subtitle2"
                >
                    subtitle2.
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.subtitle2.fontSize)} - ${theme.typography.subtitle2.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="body1"
                >
                    body1.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.body1.fontSize)} - ${theme.typography.body1.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="body2"
                >
                    body2.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.body2.fontSize)} - ${theme.typography.body2.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="button"
                >
                    button.
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightBold} - ${fontSize(theme.typography.button.fontSize)} - ${theme.typography.button.lineHeight}`}
                </Typography>

                <Typography
                    classes={{
                        root: classes.typography,
                    }}
                    color={color}
                    variant="caption"
                >
                    caption.
                </Typography>

                <Typography
                    color="textSecondary"
                    display="block"
                    variant="caption"
                    classes={{ root: classes.info }}
                >
                    {`${fontFamily} - ${fontWeightRegular} - ${fontSize(theme.typography.caption.fontSize)} - ${theme.typography.caption.lineHeight}`}
                </Typography>
            </div>
        </Grid.Column>
    );
}

TypographyGridColumn.propTypes = propTypes;

export default TypographyGridColumn;
