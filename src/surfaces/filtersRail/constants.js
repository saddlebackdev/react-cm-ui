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
