import ClassNames from 'classnames';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    border: PropTypes.bool,
    color: PropTypes.string.isRequired,
    name: PropTypes.string,
    textInverse: PropTypes.bool,
};

const defaultProps = {
    border: false,
    name: null,
    textInverse: false,
};

const useStyles = makeStyles((theme) => ({
    border: {
        border: `1px solid ${theme.palette.border.main}`,
    },
    root: {
        alignItems: 'center',
        color: theme.palette.text.primary,
        display: 'inline-flex',
        flexDirection: 'column',
        fontWeight: theme.typography.fontWeightMedium,
        height: 100,
        justifyContent: 'center',
        padding: 11,
        textAlign: 'center',
        textTransform: 'uppercase',
        width: '100%',
    },
    textInverse: {
        color: theme.palette.text.contrastText,
    },
}));

function Swatch(props) {
    const {
        border,
        color,
        name,
        textInverse,
    } = props;

    const classes = useStyles();

    const rootClasses = ClassNames(
        'swatch',
        classes.root,
        {
            [classes.border]: border,
            [classes.textInverse]: textInverse,
        },
    );

    return (
        <div
            className={rootClasses}
            style={{ backgroundColor: color }}
        >
            {name && (
                <div>
                    {name}
                </div>
            )}

            {color && (
                <div>
                    {color}
                </div>
            )}
        </div>
    );
}

Swatch.propTypes = propTypes;
Swatch.defaultProps = defaultProps;

export default Swatch;
