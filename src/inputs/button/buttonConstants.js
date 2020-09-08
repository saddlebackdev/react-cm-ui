import PropTypes from 'prop-types';
import Utils from '../../utils/utils';

export const buttonPropTypes = {
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
    outline: PropTypes.bool,
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

export const buttonDefaultProps = {
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
    outline: false,
    relax: false,
    style: {},
    target: undefined,
    title: undefined,
    width: undefined,
};
