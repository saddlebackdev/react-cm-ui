import PropTypes from 'prop-types';

export const PROP_TYPES_ROW_COMPONENT = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
    componentProps: PropTypes.shape({
        checked: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
        ]),
        className: PropTypes.string,
        classes: PropTypes.shape({}),
        count: PropTypes.number,
        id: PropTypes.string,
        label: PropTypes.string,
        name: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.shape({})),
        onChange: PropTypes.func,
        onKeyDown: PropTypes.func,
        placeholder: PropTypes.string,
        tabIndex: PropTypes.string,
    }),
    type: PropTypes.oneOf([
        'checkbox',
        'radio',
        'radioPill',
        'select',
    ]),
};

export const PROP_TYPES_ROW = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    collapse: PropTypes.bool,
    collapsible: PropTypes.bool,
    components: PropTypes.arrayOf(
        PropTypes.shape({
            ...PROP_TYPES_ROW_COMPONENT,
        }),
    ),
    heading: PropTypes.string,
    id: PropTypes.string,
};

export const PROP_TYPES_ROOT = {
    /**
     * The content of the FiltersRail
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to FiltersRail.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    /**
     * Assign additional class names to FiltersRail.
     */
    className: PropTypes.string,
    /**
     * The `id` of the FiltersRail.
     */
    id: PropTypes.string,
    /**
     * If `true`, FiltersRail's clear button becomes actionable.
     */
    isFiltering: PropTypes.bool,
    /**
     * If `true`, FiltersRail is open
     */
    isOpen: PropTypes.bool,
    /**
     * Assigns styling to the FiltersRail dependant on
     * whether it is a child of the Page or Drawer component.
     */
    moduleType: PropTypes.oneOf(['drawer', 'page']),
    /**
     * Event handler for consumer to clear filters.
     */
    onClear: PropTypes.func,
    /**
     * Array of objects that are used to setup the grid system
     * in the FiltersRail.
     */
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            classes: PROP_TYPES_ROW.classes,
            className: PROP_TYPES_ROW.className,
            collapse: PROP_TYPES_ROW.collapse,
            collapsible: PROP_TYPES_ROW.collapsible,
            components: PROP_TYPES_ROW.components,
            heading: PROP_TYPES_ROW.heading,
            id: PROP_TYPES_ROW.id,
        }),
    ),
};

export const DEFAULT_PROPS_ROOT = {
    children: undefined,
    classes: undefined,
    className: undefined,
    id: undefined,
    isFiltering: false,
    isOpen: undefined,
    moduleType: 'page',
    onClear: undefined,
    rows: [],
};
