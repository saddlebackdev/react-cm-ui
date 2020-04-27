import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { buttonPropTypes, buttonDefaultProps } from './buttonConstants';
import Button from './button';
import DropdownMenu from './dropdownMenu';
import DropdownMenuOption from './dropdownMenuOption';
import Icon from '../dataDisplay/icon';

const propTypes = {
    ...buttonPropTypes,
    iconSize: PropTypes.number,
    iconType: PropTypes.oneOf([
        'caret-down',
        'chevron-down',
        'ellipsis-h',
        'plus',
    ]),
    label: PropTypes.string,
};

const defaultProps = {
    ...buttonDefaultProps,
    iconSize: 16,
    iconType: 'chevron-down',
};

function DropdownButton(props) {
    const {
        children,
        className,
        color,
        compact,
        disable,
        fluid,
        id,
        icon,
        iconSize,
        iconType,
        innerStyle,
        inverse,
        label,
        outlined,
        relax,
        style,
        target,
        title,
        width,
    } = props;
    const [
        isMenuOpen,
        setIsOpen,
    ] = useState(false);
    const dropdownButtonRef = useRef(null);

    function getParentContainer() {
        return dropdownButtonRef.current;
    }

    function onMenuToggle() {
        setIsOpen(!isMenuOpen);
    }

    const bemClassName = 'button_dropdown';
    const containerClasses = ClassNames('button_dropdown', className);

    return (
        <Button
            className={containerClasses}
            color={color}
            compact={compact}
            disable={disable}
            fluid={fluid}
            icon={icon}
            id={id}
            innerStyle={innerStyle}
            inverse={inverse}
            onClick={onMenuToggle}
            outlined={outlined}
            ref={dropdownButtonRef}
            relax={relax}
            style={{
                ...style,
                overflow: 'auto',
                position: 'relative',
            }}
            target={target}
            title={title}
            width={width}
        >
            {iconType && (
                <Icon
                    compact={icon && !label}
                    size={iconSize}
                    inverse
                    style={{ margin: icon && !label ? 0 : null }}
                    type={iconType}
                />
            )}

            {label && <span>{label}</span>}

            <DropdownMenu
                className={`${bemClassName}--menu`}
                isOpen={isMenuOpen}
                onToggleOpen={onMenuToggle}
                getParentContainer={getParentContainer}
            >
                {children}
            </DropdownMenu>
        </Button>
    );
}

DropdownButton.Option = DropdownMenuOption;

DropdownButton.propTypes = propTypes;
DropdownButton.defaultProps = defaultProps;

export default DropdownButton;
