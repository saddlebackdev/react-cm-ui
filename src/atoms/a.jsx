import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
};
const defaultProps = {
    children: undefined,
    className: undefined,
    onClick: () => {},
    onKeyDown: () => {},
    tabIndex: -1,
    style: {},
};

function A(props) {
    const {
        children,
        className,
        onClick,
        onKeyDown,
        style,
        tabIndex,
    } = props;
    const bemBlockName = 'a';
    const containerClassName = ClassNames('ui', bemBlockName, className);

    return (
        <span
            className={containerClassName}
            onClick={onClick}
            onKeyDown={onKeyDown}
            role="button"
            tabIndex={tabIndex}
            style={style}
        >
            {children}
        </span>
    );
}

A.propTypes = propTypes;
A.defaultProps = defaultProps;

export default A;
