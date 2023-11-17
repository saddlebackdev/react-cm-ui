import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    hasIcon: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    hasLabel: PropTypes.bool,
};

const defaultProps = {
    hasIcon: false,
    hasLabel: false,
};

const useStyles = makeStyles(({
    palette,
    spacing,
}) => ({
    root: ({
        hasIcon,
        hasLabel,
    }) => ({
        backgroundColor: palette.grey[400],
        borderRadius: 4,
        height: `calc(100% - ${spacing(hasLabel ? 4.5 : 2)}px)`,
        left: spacing(1),
        position: 'absolute',
        top: spacing(hasLabel ? 3.5 : 1),
        width: `calc(100% - ${spacing(hasIcon ? 5 : 2)}px)`,
    }),
}));

function InputScreenGuard(props) {
    const classes = useStyles(props);
    return <div className={classes.root} />;
}

InputScreenGuard.propTypes = propTypes;
InputScreenGuard.defaultProps = defaultProps;

export default InputScreenGuard;
