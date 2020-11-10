import ClassNames from 'classnames';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: undefined,
    style: undefined,
};

const useStyles = makeStyles(() => ({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 980,
    },
}));

function Main(props) {
    const {
        children,
        className,
        style,
    } = props;

    const classes = useStyles();

    const rootClasses = ClassNames(
        'main--content',
        classes.root,
        className,
    );

    return (
        <div
            className={rootClasses}
            style={style}
        >
            {children}
        </div>
    );
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
