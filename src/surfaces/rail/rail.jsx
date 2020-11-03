import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
        positionLeft: PropTypes.string,
        positionRight: PropTypes.string,
    }),
    className: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right']),
};

const defaultProps = {
    children: null,
    classes: null,
    className: null,
    position: 'left',
};

const useStyles = makeStyles(({ palette }) => ({
    positionLeft: {},
    positionRight: {},
    root: {
        backgroundColor: palette.background.primary,
        height: '100%',
        padding: [[33, 22]],
        width: 250,
        '&$positionLeft, &$positionRight': {
            '&::after': {
                content: '""',
                height: '100%',
                position: 'absolute',
                top: 0,
                width: 15,
            },
        },
        '&$positionLeft': {
            boxShadow: `inset -1px 0 0 0 ${palette.border.primary}`,
            left: 0,
            top: 0,
            '&::after': {
                background: 'linear-gradient(to right, rgba(0, 0, 0, .1) -100%, transparent 100%)',
                right: -15,
            },
        },
        '&$positionRight': {
            boxShadow: `inset 1px 0 0 0 ${palette.border.primary}`,
            right: 0,
            top: 0,
            '&::after': {
                background: 'linear-gradient(to left, rgba(0, 0, 0, .1) -100%, transparent 100%)',
                left: -15,
            },
        },
    },
}));

// eslint-disable-next-line prefer-arrow-callback
const Rail = React.forwardRef(function Rail(props, ref) {
    const {
        children,
        className,
        position,
    } = props;

    const classes = useStyles(props);

    const rootClasses = ClassNames(
        'ui',
        'rail',
        classes.root,
        className,
        {
            [classes.positionLeft]: position === 'left',
            [classes.positionRight]: position === 'right',
        },
    );

    return (
        <div
            className={rootClasses}
            ref={ref}
        >
            {children}
        </div>
    );
});

Rail.propTypes = propTypes;
Rail.defaultProps = defaultProps;

export default Rail;
