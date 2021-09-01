import PropTypes from 'prop-types';
import Utils from '../../utils/utils';

const titlePropType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
]);

export const ICON_PROP_TYPES = {
    /**
     * Changes the margin from left or right.
     */
    align: PropTypes.oneOf(['left', 'right']),
    /**
     * Additional classes.
     */
    className: PropTypes.string,
    /**
     * Color of the icon.
     */
    color: PropTypes.oneOf(Utils.colorEnums()),
    /**
     * If `true`, removes the margin.
     */
    compact: PropTypes.bool,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    /**
     * If `true`, an icon can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * The `id` of the icon.
     */
    id: PropTypes.string,
    /**
     * If `true`, a icon can be formatted to appear on dark backgrounds.
     */
    inverse: PropTypes.bool,
    /**
     * Event handler for onClick
     */
    onClick: PropTypes.func,
    /**
     * Event handler for onKeyDown
     */
    onKeyDown: PropTypes.func,
    /**
     * Transforms the rotation of the icon with the given number.
     */
    rotate: PropTypes.number,
    /**
     * Changes the height and width of the icon with the given number.
     */
    size: PropTypes.oneOfType([
        PropTypes.oneOf(Utils.sizeEnums()),
        PropTypes.number,
    ]),
    /**
     * If `true`, endlessly spins the icon counter-clockwise
     */
    spin: PropTypes.bool,
    /**
     * Supply any inline styles to the icon.
     */
    style: PropTypes.shape({}),
    /**
     * Indicates whether or not the Icon can be focused.
     */
    tabIndex: PropTypes.number,
    /**
     * Provides a human-readable title for the element that contains it.
     */
    title: TITLE_PROP_TYPE,
    /**
     * The string for the icon you want to display.
     */
    type: PropTypes.string.isRequired,
};
