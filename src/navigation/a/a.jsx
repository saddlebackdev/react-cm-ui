import { isFunction } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    disable: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    tabIndex: PropTypes.number,
};

const defaultProps = {
    children: null,
    classes: null,
    className: null,
    disable: false,
    id: null,
    onClick: null,
    onKeyDown: null,
    tabIndex: -1,
};

const useStyles = makeStyles((theme) => ({
    isDisabled: {},
    root: {
        color: theme.palette.cyan[500],
        cursor: 'pointer',
        fontWeight: theme.typography.fontWeightMedium,
        textDecoration: 'none',
        '&$isDisabled': {
            color: theme.palette.text.disable,
            cursor: 'default',
        },
    },
}));

function A(props) {
    const {
        children,
        className,
        id,
        disable: isDisabled,
        onClick: onClickProp,
        onKeyDown: onKeyDownProp,
        tabIndex,
    } = props;

    const classes = useStyles(props);

    const onClick = (event) => {
        if (isFunction(onClickProp) && !isDisabled) {
            onClickProp(event);
        }
    };

    const onKeyDown = (event) => {
        if (isFunction(onKeyDownProp) && !isDisabled) {
            onKeyDownProp(event);
        }
    };

    const bemBlockName = 'a';

    const rootClasses = ClassNames(
        'ui',
        bemBlockName,
        classes.root,
        className,
        {
            [classes.isDisabled]: isDisabled,
        },
    );

    return (
        <span
            className={rootClasses}
            id={id}
            onClick={onClick}
            onKeyDown={onKeyDown}
            role="button"
            tabIndex={tabIndex}
        >
            {children}
        </span>
    );
}

A.propTypes = propTypes;
A.defaultProps = defaultProps;

export default A;
