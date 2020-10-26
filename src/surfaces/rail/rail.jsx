import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../../styles/withStyles';

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

const styles = (theme) => ({
    positionLeft: {},
    positionRight: {},
    root: {
        backgroundColor: theme.palette.background.primary,
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
            boxShadow: `inset -1px 0 0 0 ${theme.palette.border.primary}`,
            left: 0,
            top: 0,
            '&::after': {
                background: 'linear-gradient(to right, rgba(0, 0, 0, .1) -100%, transparent 100%)',
                right: -15,
            },
        },
        '&$positionRight': {
            boxShadow: `inset 1px 0 0 0 ${theme.palette.border.primary}`,
            right: 0,
            top: 0,
            '&::after': {
                background: 'linear-gradient(to left, rgba(0, 0, 0, .1) -100%, transparent 100%)',
                left: -15,
            },
        },
    },
});

// eslint-disable-next-line react/prefer-stateless-function
class Rail extends React.Component {
    render() {
        const {
            classes,
            children,
            className,
            position,
        } = this.props;

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
            >
                {children}
            </div>
        );
    }
}

Rail.propTypes = propTypes;
Rail.defaultProps = defaultProps;

export default withStyles(styles)(Rail);
