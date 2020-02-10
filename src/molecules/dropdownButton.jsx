import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { buttonPropTypes, buttonDefaultProps } from '../atoms/buttonConstants';
import Button from '../atoms/button';
import DropdownMenu from '../atoms/dropdownMenu';
import DropdownMenuOption from '../atoms/dropdownMenuOption';
import Icon from '../atoms/icon';

const propTypes = {
    ...buttonPropTypes,
    as: PropTypes.oneOf(['button']),
    iconType: PropTypes.oneOf(['chevron-down', 'plus']),
};

const defaultProps = {
    ...buttonDefaultProps,
    as: 'button',
    iconType: 'chevron-down',
};

function DropdownButton(props) {
    const {
        as,
        children,
        className,
        color,
        compact,
        disable,
        fluid,
        id,
        iconType,
        innerStyle,
        inverse,
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
    const containerClasses = ClassNames('ui', 'button_dropdown', className);

    return (
        <Button
            as={as}
            className={containerClasses}
            color={color}
            compact={compact}
            disable={disable}
            fluid={fluid}
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
            <Icon
                inverse
                type={iconType}
            />

            <span>{title}</span>

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
