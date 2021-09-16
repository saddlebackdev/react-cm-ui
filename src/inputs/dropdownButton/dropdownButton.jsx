import {
    isEmpty,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import {
    buttonDesignV2PropTypes,
} from '../button/buttonConstants';
import {
    ICON_PROP_TYPES,
} from '../../dataDisplay/icon/iconConstants';
import Button from '../button';
import DropdownMenu from '../dropdownMenu/dropdownMenu';
import DropdownMenuOption from '../dropdownMenu/dropdownMenuOption';
import Icon from '../../dataDisplay/icon';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * Override or extend the styles applied to ButtonDropdown.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    /**
     * Dependent on the designVersion number, the component can either use our old Button component
     * or the new Button component.
     */
    designVersion: PropTypes.number,
    iconProps: PropTypes.shape({
        ...ICON_PROP_TYPES,
    }),
    /**
     * Change the position of the icon.
     */
    iconPosition: PropTypes.oneOf([
        'left',
        'right',
    ]),
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
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
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
    classes: undefined,
    designVersion: 1,
    iconPosition: 'left',
    iconProps: undefined,
    iconSize: 16,
    iconType: 'chevron-down',
    label: undefined,
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
        designVersion,
        disable,
        disabled,
        fluid,
        fullWidth,
        id,
        icon,
        iconProps,
        iconPosition,
        iconSize,
        iconType,
        innerStyle,
        inverse,
        label,
        optionsTheme,
        outline,
        pill,
        relax,
        style,
        tabIndex,
        target,
        text,
        title,
        transparent,
        variant,
        width,
    } = props;

    function getParentContainer() {
        return dropdownButtonRef.current;
    }

    function onMenuToggle(event) {
        if (!isEmpty(event)) {
            event.stopPropagation();
        }
        setIsOpen(!isMenuOpen);
    }

    const bemClassName = 'button_dropdown';
    const rootClasses = ClassNames(
        bemClassName,
        className,
        { [`${bemClassName}-open`]: isMenuOpen },
    );

    const dropdownIcon = (
        <Icon
            compact={icon && !label}
            size={iconSize}
            inverse
            style={{ margin: icon && !label ? 0 : null }}
            type={iconType}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...iconProps}
        />
    );

    const iconOnLeft = (iconType && iconPosition === 'left') && dropdownIcon;
    const iconOnRight = (iconType && iconPosition === 'right') && dropdownIcon;
    const isDesignV2 = designVersion === 2;

    let buttonProps = {};

    if (isDesignV2) {
        buttonProps = {
            ...buttonProps,
            color,
            compact,
            designVersion,
            disabled,
            fullWidth,
            icon,
            id,
            innerStyle,
            inverse,
            onClick: onMenuToggle,
            outline,
            pill,
            ref: dropdownButtonRef,
            relax,
            style,
            tabIndex,
            text,
            title,
            transparent,
            variant,
            width,
        };
    } else {
        buttonProps = {
            ...buttonProps,
            color,
            compact,
            designVersion,
            disable,
            fluid,
            icon,
            id,
            innerStyle,
            inverse,
            onClick: onMenuToggle,
            ref: dropdownButtonRef,
            relax,
            style,
            tabIndex,
            target,
            title,
            width,
        };
    }

    return (
        <Button
            className={rootClasses}
            classes={{
                root: classes.root,
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...buttonProps}
        >
            {iconOnLeft}

            {label && <span>{label}</span>}

            {iconOnRight}

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
