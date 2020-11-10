import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([
        'alternate',
        'highlight',
        'inverse',
        'inverse-alternate',
        'light',
        'primary',
    ]),
    compact: PropTypes.bool,
    hidden: PropTypes.bool,
    inverse: PropTypes.bool,
    relaxed: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['very']),
    ]),
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: null,
    color: null,
    compact: false,
    hidden: false,
    inverse: false,
    relaxed: false,
    style: null,
};

const useStyles = makeStyles((theme) => ({
    root: {
        borderBottom: `1px solid ${theme.palette.border.primary}`,
        height: 0,
        letterSpacing: '.05em',
        lineHeight: 1,
        margin: '11px 0',
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
        '&.divider-compact': {
            margin: 0,
        },
        '&.divider-hidden': {
            border: 0,
        },
        '&.divider-color-': {
            '&alternate': {
                borderColor: theme.palette.grey[400],
            },
            '&highlight': {
                borderColor: theme.palette.active.main,
            },
            '&inverse': {
                borderColor: theme.palette.grey[500],
            },
            '&inverse-alternate': {
                borderColor: theme.palette.grey[600],
            },
            '&primary': {
                borderColor: theme.palette.border.secondary,
            },
        },
        '&.divider-inverse.divider-color-': {
            '&alternate': {
                borderColor: theme.palette.grey[400],
            },
            '&highlight': {
                borderColor: theme.palette.active.main,
            },
            '&inverse': {
                borderColor: theme.palette.grey[500],
            },
            '&inverse-alternate': {
                borderColor: theme.palette.grey[600],
            },
            '&primary': {
                borderColor: theme.palette.grey[400],
            },
        },
        '&.divider-relaxed': {
            margin: '22px 0',
            '&-very': {
                margin: '33px 0',
            },
        },
    },
}));

function Divider(props) {
    const {
        className,
        color,
        compact,
        hidden,
        inverse,
        relaxed,
        style,
    } = props;

    const classes = useStyles(props);

    const containerClasses = ClassNames(
        'ui',
        'divider',
        classes.root,
        className,
        {
            'divider-color-alternate': color === 'alternate',
            'divider-color-highlight': color === 'highlight',
            'divider-color-inverse': color === 'inverse',
            'divider-color-inverse-alternate': color === 'inverse-alternate',
            'divider-color-light': color === 'light',
            'divider-color-primary': !color || color === 'primary',
            'divider-compact': compact,
            'divider-hidden': hidden,
            'divider-inverse': inverse,
            'divider-relaxed': relaxed,
            'divider-relaxed-very': relaxed === 'very',
        },
    );

    return (
        <div
            className={containerClasses}
            style={style}
        />
    );
}

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
