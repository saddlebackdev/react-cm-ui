import ClassNames from 'classnames';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.null,
    className: PropTypes.string,
    inverse: PropTypes.bool,
    nest: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: null,
    className: null,
    inverse: false,
    nest: false,
    style: null,
};

const useStyles = makeStyles((theme) => ({
    inverse: {
        backgroundColor: theme.palette.background.contrastPrimary,
        border: 0,
    },
    nest: {
        backgroundColor: theme.palette.background.secondary,
        border: 0,
    },
    root: {
        backgroundColor: theme.palette.background.primary,
        border: `1px solid ${theme.palette.border.secondary}`,
        borderRadius: 3,
        padding: 11,
    },
}));

function Block(props) {
    const {
        children,
        className,
        inverse,
        nest,
        style,
    } = props;

    const classes = useStyles();

    const rootClasses = ClassNames(
        'block',
        classes.root,
        className,
        {
            'block-inverse': inverse,
            'block-nest': nest,
        },
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

Block.propTypes = propTypes;
Block.defaultProps = defaultProps;

export default Block;
