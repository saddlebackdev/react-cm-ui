import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { OPTION_CLASS_NAME, OPTION_INNER_CLASS_NAME } from './dropdownMenuConstants';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Deprecated prop. Please use `disabled` instead.
     */
    disable: PropTypes.bool,
    /**
     * A Dropdown Menu Option or Dropdown Button Option can be disabled.
     */
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
};

const defaultProps = {
    children: undefined,
    className: undefined,
    disable: false,
    disabled: false,
    id: undefined,
    label: undefined,
    onClick: () => {},
    onKeyDown: () => {},
    style: undefined,
    tabIndex: -1,
};

function DropdownMenuOption(props) {
    const {
        children,
        className,
        disable,
        disabled,
        id,
        onClick,
        onKeyDown,
        label,
        style,
        tabIndex,
    } = props;

    const isDisabled = disabled || disable;

    const rootClasses = ClassNames(OPTION_CLASS_NAME, className, {
        [`${OPTION_CLASS_NAME}-disable`]: isDisabled,
    });

    function handleOnClick(event) {
        event.stopPropagation();

        onClick(event, id, label);
    }

    function handleOnKeyDown(event) {
        event.stopPropagation();

        onKeyDown(event, id, label);
    }

    return (
        <div
            className={rootClasses}
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
