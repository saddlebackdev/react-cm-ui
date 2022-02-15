import {
    isEmpty,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';
import {
    ICON_PROP_TYPES,
} from '../../dataDisplay/icon/iconConstants.js';
import {
    VARIANTS,
} from '../button/buttonConstants.js';
import Button from '../button'; // eslint-disable-line import/extensions
import DropdownMenu from '../dropdownMenu/dropdownMenu.jsx';
import DropdownMenuDivider from '../dropdownMenu/dropdownMenuDivider.jsx';
import DropdownMenuHeading from '../dropdownMenu/dropdownMenuHeading.jsx';
import DropdownMenuOption from '../dropdownMenu/dropdownMenuOption.jsx';
import Icon from '../../dataDisplay/icon'; // eslint-disable-line import/extensions
import makeStyles from '../../styles/makeStyles.js';

const propTypes = {
    /**
     * Dropdown Menu options
     */
    children: PropTypes.node.isRequired,
    /**
     * Additional classes.
     */
    className: PropTypes.string,
    /**
     * Override or extend the styles applied to ButtonDropdown.
     */
    classes: PropTypes.shape({
        dropdownMenuRoot: PropTypes.string,
        root: PropTypes.string,
    }),
    /**
     * Color of the Dropdown Button.
     */
    color: PropTypes.oneOf([
        'active',
        'default',
        'error',
        'link',
        'primary',
        'secondary',
        'success',
        'warning',
    ]),
    /**
     * A Dropdown Button can reduce its padding.
     */
    compact: PropTypes.bool,
    /**
     * Dependent on the designVersion number, the component can either use our old Button component
     * or the new Button component.
     */
    designVersion: PropTypes.number,
    /**
     * Deprecated prop. Please use `disabled` instead.
     */
    disable: PropTypes.bool,
    /**
     * A Dropdown Button can be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The Dropown Button will be resized to its parent container's width. (Using v1 Button)
     */
    fluid: PropTypes.bool,
    /**
     * The Dropown Button will be resized to its parent container's width. (Using v2 Button)
     */
    fullWidth: PropTypes.bool,
    /**
     * ??? I don't know what to put here because I don't fully understand what this does =)
     */
    icon: PropTypes.bool,
    /**
     * Props to control the Icon in the Dropdown Button
     */
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
     * Assign the Dropdown Button an id attribute value.
     */
    id: PropTypes.string,
    /**
     * Allows for style overrides of the Dropdown Button's inner container.
     */
    innerStyle: PropTypes.shape({}),
    /**
     * A Dropdown Button can be formatted to appear on dark backgrounds better.
     */
    inverse: PropTypes.bool,
    /**
     * The Dropdown Button's label.
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
     * A Dropdown Button can be outlined.
     */
    outline: PropTypes.bool,
    /**
     * Set a Dropdown Button with a pill like form.
     */
    pill: PropTypes.bool,
    /**
     * A Dropdown Button can relax its padding.
     */
    relax: PropTypes.bool,
    /**
     * Apply inline styles to the Dropdown Button.
     */
    style: PropTypes.shape({}),
    /**
     * Indicates whether or not the Dropdown Button can be focused.
     */
    tabIndex: PropTypes.number,
    /**
     * Where to display the linked URL.  (Button prop; probably not relevant for a Dropdown Button)
     */
    target: PropTypes.oneOf(['_blank']),
    /**
     * If `true`, only the Dropdown Button's text is shown.
     */
    text: PropTypes.bool,
    /**
     * The title attribute.
     */
    title: PropTypes.string,
    /**
     * Set transparent styles.
     */
    transparent: PropTypes.bool,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf([VARIANTS.contained, VARIANTS.outlined, VARIANTS.text]),
    /**
     * Set a fixed width.
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    classes: undefined,
    className: undefined,
    color: undefined,
    compact: false,
    designVersion: 1,
    disable: false,
    disabled: false,
    fluid: false,
    fullWidth: false,
    icon: false,
    iconPosition: 'left',
    iconProps: undefined,
    iconSize: 16,
    iconType: 'chevron-down',
    id: undefined,
    innerStyle: {},
    inverse: false,
    label: undefined,
    optionsTheme: 'dark',
    outline: false,
    pill: false,
    relax: false,
    style: {},
    tabIndex: -1,
    target: undefined,
    text: false,
    title: undefined,
    transparent: false,
    variant: VARIANTS.contained,
    width: undefined,
};

const useStyles = makeStyles({
    dropdownMenuRoot: {},
    root: {
        overflow: 'visible',
        position: 'relative',
    },
});

function DropdownButton(props) {
    const dropdownButtonRef = useRef(null);
    const [isMenuOpen, setIsOpen] = useState(false);
    const classes = useStyles(props);

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

    const getParentContainer = useCallback(() => (dropdownButtonRef.current), [
        dropdownButtonRef,
    ]);

    const onMenuToggle = useCallback((event) => {
        if (!isEmpty(event)) {
            event.stopPropagation();
        }

        setIsOpen(!isMenuOpen);
    }, [
        isMenuOpen,
        setIsOpen,
    ]);

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
            disabled,
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
                classes={{
                    root: classes.dropdownMenuRoot,
                }}
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

DropdownButton.Divider = DropdownMenuDivider;
DropdownButton.Option = DropdownMenuOption;
DropdownButton.Heading = DropdownMenuHeading;

DropdownButton.propTypes = propTypes;
DropdownButton.defaultProps = defaultProps;

export default DropdownButton;
