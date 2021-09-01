import PropTypes from 'prop-types';
import Utils from '../../utils/utils';

export const VARIANTS = {
    contained: 'contained',
    outlined: 'outlined',
    text: 'text',
};

export const buttonV2PropTypes = {
    as: PropTypes.oneOf(['a', 'button']),
    /**
     * Primary content.
     */
    children: PropTypes.node.isRequired,
    /**
     * Additional classes.
     */
    className: PropTypes.string,
    /**
     * Color of the button.
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
     * A button can reduce its padding.
     */
    compact: PropTypes.bool,
    /**
     * A button can be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The Button will be resized to its parent container's width.
     */
    fullWidth: PropTypes.bool,
    /**
     * The URL that the hyperlink points to.
     */
    href: PropTypes.string,
    /**
     * If `true`, the button will be a square, housing the icon child.
     */
    icon: PropTypes.bool,
    /**
     * Assign the button an id attribute value.
     */
    id: PropTypes.string,
    /**
     * Allows for style overrides of the Button's inner container.
     */
    innerStyle: PropTypes.shape({}),
    /**
     * A button can be formatted to appear on dark backgrounds better.
     */
    inverse: PropTypes.bool,
    /**
     * The onClick event handler.
     */
    onClick: PropTypes.func,
    /**
     * A button can be outlined.
     */
    outline: PropTypes.bool,
    /**
     * Set a button with a pill like form.
     */
    pill: PropTypes.bool,
    /**
     * A button can relax its padding.
     */
    relax: PropTypes.bool,
    /**
     * A button can relax its padding.
     */
    style: PropTypes.shape({}),
    /**
     * Where to display the linked URL.
     */
    target: PropTypes.oneOf(['_blank']),
    /**
     * If `true`, only the button's text is shown.
     */
    text: PropTypes.bool,
    /**
     * The title attribute.
     */
    title: PropTypes.string,
    /**
     * Set a fixed width.
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    /**
     * Set transparent styles.
     */
    transparent: PropTypes.bool,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf([VARIANTS.contained, VARIANTS.outlined, VARIANTS.text]),
};

export const buttonV2DefaultProps = {
    as: 'button',
    className: undefined,
    color: 'default',
    compact: false,
    disable: false,
    fullWidth: false,
    href: undefined,
    icon: false,
    id: undefined,
    innerStyle: {},
    inverse: false,
    onClick: undefined,
    outline: false,
    relax: false,
    style: {},
    target: undefined,
    text: false,
    title: undefined,
    variant: VARIANTS.contained,
    width: undefined,
};

export const buttonDeprecatedPropTypes = {
    as: PropTypes.oneOf(['a', 'button']),
    /**
     * Primary content.
     */
    children: PropTypes.node.isRequired,
    /**
     * Additional classes.
     */
    className: PropTypes.string,
    /**
     * Color of the button.
     */
    color: PropTypes.oneOf(Utils.colorEnums()),
    /**
     * A button can reduce its padding.
     */
    compact: PropTypes.bool,
    /**
     * A button can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disabled: PropTypes.bool,
    /**
     * The Button will be resized to its parent container's width.
     */
    fluid: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.bool,
    /**
     * Assign the button an id attribute value.
     */
    id: PropTypes.string,
    innerStyle: PropTypes.shape({}),
    /**
     * A button can be formatted to appear on dark backgrounds better.
     */
    inverse: PropTypes.bool,
    onClick: PropTypes.func,
    /**
     * A button can be outlined.
     */
    outlined: PropTypes.bool,
    /**
     * A button can relax its padding.
     */
    relax: PropTypes.bool,
    /**
     * A button can relax its padding.
     */
    style: PropTypes.shape({}),
    target: PropTypes.oneOf(['_blank']),
    title: PropTypes.string,
    /**
     * Set a fixed width.
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

export const buttonDeprecatedDefaultProps = {
    as: 'button',
    className: undefined,
    color: 'primary',
    compact: false,
    disable: false,
    disabled: false,
    fluid: false,
    href: undefined,
    icon: false,
    id: undefined,
    innerStyle: {},
    inverse: false,
    onClick: undefined,
    outlined: false,
    relax: false,
    style: {},
    target: undefined,
    title: undefined,
    width: undefined,
};
