import PropTypes from 'prop-types';

export const SORTABLE_PROP_TYPES = PropTypes.shape({
    disabled: PropTypes.bool,
    filter: PropTypes.string,
    group: PropTypes.string,
    handle: PropTypes.bool,
    onChange: PropTypes.func,
    sort: PropTypes.bool,
});
