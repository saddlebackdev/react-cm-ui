import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disable: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
    title: PropTypes.string,
};

const defaultProps = {
    className: undefined,
    disable: false,
    id: undefined,
    onClick: () => {},
    onKeyDown: () => {},
    style: undefined,
    tabIndex: -1,
    title: undefined,
};

function DropdownMenuOption(props) {
    const {
        children,
        className,
        disable,
        id,
        onClick,
        onKeyDown,
        style,
        tabIndex,
        title,
    } = props;
    const bemClassName = 'dropdown_menu--option';
    const containerClasses = ClassNames(bemClassName, className, {
        [`${bemClassName}-disable`]: disable,
    });

    function handleOnClick(event) {
        event.stopPropagation();

        onClick(event);
    }

    function handleOnKeyDown(event) {
        event.stopPropagation();

        onKeyDown(event);
    }

    return (
        <div
            className={containerClasses}
            id={id}
            onClick={(event) => handleOnClick(event)}
            onKeyDown={(event) => handleOnKeyDown(event)}
            role="button"
            style={style}
            tabIndex={tabIndex}
            title={title}
        >
            <div
                className={`${bemClassName}_inner`}
            >
                {children}
            </div>
        </div>
    );
}

DropdownMenuOption.propTypes = propTypes;
DropdownMenuOption.defaultProps = defaultProps;

export default DropdownMenuOption;
