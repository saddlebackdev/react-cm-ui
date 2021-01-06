import {
    isFunction,
    noop,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { OPTION_CLASS_NAME, OPTION_INNER_CLASS_NAME } from './dropdownMenuConstants';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disable: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
};

const defaultProps = {
    children: undefined,
    className: undefined,
    disable: false,
    id: undefined,
    label: undefined,
    onChange: undefined,
    onClick: noop,
    onKeyDown: noop,
    style: undefined,
    tabIndex: -1,
};

function DropdownMenuOption(props) {
    const {
        children,
        className,
        disable,
        id,
        onChange,
        onClick,
        onKeyDown,
        label,
        style,
        tabIndex,
    } = props;

    const containerClasses = ClassNames(OPTION_CLASS_NAME, className, {
        [`${OPTION_CLASS_NAME}-disable`]: disable,
    });

    const handleOnClick = (event) => {
        event.stopPropagation();

        if (isFunction(onChange)) {
            onChange({ id, label });
        } else {
            onClick(event, id, label);
        }
    };

    const handleOnKeyDown = (event) => {
        event.stopPropagation();

        onKeyDown(event, id, label);
    };

    return (
        <div
            className={containerClasses}
            id={id}
            onClick={(event) => handleOnClick(event)}
            onKeyDown={(event) => handleOnKeyDown(event)}
            role="button"
            style={style}
            tabIndex={tabIndex}
        >
            <div
                className={OPTION_INNER_CLASS_NAME}
            >
                {children || label}
            </div>
        </div>
    );
}

DropdownMenuOption.propTypes = propTypes;
DropdownMenuOption.defaultProps = defaultProps;

export default DropdownMenuOption;
