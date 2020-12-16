import PropTypes from 'prop-types';

export const PROP_TYPES_ITEMS = PropTypes.arrayOf(
    PropTypes.shape({
        key: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        getContent: PropTypes.func,
        onClick: PropTypes.func,
    }),
);

export const PROP_TYPES_SELECTED_TAB_KEY = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
]);
