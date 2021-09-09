import PropTypes from 'prop-types';

export const LIST_DEPRECATED_PROP_TYPES = {
    as: PropTypes.oneOf(['div', 'ol', 'ul']),
    children: PropTypes.node,
    className: PropTypes.string,
    divide: PropTypes.bool,
    fluid: PropTypes.bool,
    horizontal: PropTypes.bool,
    inverse: PropTypes.bool,
    style: PropTypes.shape({}),
};

export const LIST_DEPRECATED_DEFAULT_PROPS = {
    as: undefined,
    children: undefined,
    className: undefined,
    divide: undefined,
    onClick: undefined,
    style: undefined,
};
