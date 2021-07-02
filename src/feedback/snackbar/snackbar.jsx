import {
    get,
} from 'lodash';
import ClassNames from 'classnames';
import MUISnackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_SNACKBAR,
    UI_CLASS_NAME,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](https://material-ui.com/api/snackbar/#css) for more details.
     */
    classes: PropTypes.shape({}),
    /**
     * Assign additional class names to Snackbar.
     */
    className: PropTypes.string,
    /**
     * Props applied to the [`SnackbarContent`](/api/snackbar-content/) element.
     */
    ContentProps: PropTypes.shape({
        classes: PropTypes.shape({}),
    }),
};

const defaultProps = {
    classes: undefined,
    className: undefined,
    ContentProps: undefined,
};

const useStyles = makeStyles(({
    palette,
    shape,
    spacing,
    typography,
}) => ({
    snackBarContentRoot: {
        backgroundColor: palette.hexToRGBA(palette.grey[600], 0.7),
        borderRadius: shape.borderRadius.main,
        fontSize: typography.pxToRem(16),
        minWidth: 'auto',
        padding: [[spacing(1.185), spacing(1)]],
    },
    snackBarContentMessageRoot: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: 0,
    },
}));

/**
 * Snackbars inform users of a process that an app has performed or will perform.
 * They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the
 * user experience, and they don’t require user input to disappear.
 */
function Snackbar(props) {
    const {
        className,
        classes,
        ContentProps,
        ...otherProps
    } = props;

    const contentPropsClasses = useStyles(props);

    const rootClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_SNACKBAR,
        className,
    );

    return (
        <MUISnackbar
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            classes={classes}
            className={rootClasses}
            ContentProps={{
                ...ContentProps,
                classes: {
                    root: contentPropsClasses.snackBarContentRoot,
                    message: contentPropsClasses.snackBarContentMessageRoot,
                    ...get(ContentProps, 'classes'),
                },
            }}
        />
    );
}

Snackbar.propTypes = propTypes;
Snackbar.defaultProps = defaultProps;

export default Snackbar;
