import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { buttonPropTypes, buttonDefaultProps } from '../button/buttonConstants';
import Button from '../button';
import DropdownMenu from '../dropdownMenu/dropdownMenu';
import DropdownMenuOption from '../dropdownMenu/dropdownMenuOption';
import Icon from '../../dataDisplay/icon';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    ...buttonPropTypes,
    /**
     * Override or extend the styles applied to ButtonDropdown.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    /**
     * The size of the icon that sits to the left of the label.
     */
    iconSize: PropTypes.number,
    /**
     * The type of the icon that sits to the left of the label.
     */
    iconType: PropTypes.oneOf([
        'caret-down',
        'chevron-down',
        'ellipsis-h',
        'plus',
    ]),
    /**
     * The ButtonDropdown's label.
     */
    label: PropTypes.string,
    /**
     * Options list theme
     */
    optionsTheme: PropTypes.oneOf([
        'dark',
        'light',
    ]),
    /**
     * Indicates whether or not the Dropdown Button can be focused.
     */
    tabIndex: PropTypes.number,
};

const defaultProps = {
    ...buttonDefaultProps,
    iconSize: 16,
    iconType: 'chevron-down',
    optionsTheme: 'dark',
    tabIndex: -1,
};

const useStyles = makeStyles({
    root: {
        overflow: 'visible',
        position: 'relative',
    },
});

function DropdownButton(props) {
    const dropdownButtonRef = useRef(null);
    const [isMenuOpen, setIsOpen] = useState(false);
    const classes = useStyles();
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
        optionsTheme,
        relax,
        style,
        tabIndex,
        target,
        title,
        width,
    } = props;

    function getParentContainer() {
        return dropdownButtonRef.current;
    }

    function onMenuToggle(event) {
        event.stopPropagation();
        setIsOpen(!isMenuOpen);
    }

    const bemClassName = 'button_dropdown';
    const rootClasses = ClassNames(
        bemClassName,
        className,
        { [`${bemClassName}-open`]: isMenuOpen },
    );

    return (
        <Button
            className={rootClasses}
            classes={{
                root: classes.root,
            }}
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
            style={style}
            target={target}
            title={title}
            width={width}
            tabIndex={tabIndex}
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
                optionsTheme={optionsTheme}
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
