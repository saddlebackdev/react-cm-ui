import PropTypes from 'prop-types';

export const PROP_TYPES_ROW_CLASS_NAME = PropTypes.string;

export const PROP_TYPES_ROW_CLASSES = PropTypes.shape({
    root: PropTypes.string,
});

export const PROP_TYPES_ROW_COLLAPSIBLE = PropTypes.bool;
export const PROP_TYPES_ROW_HEADING = PropTypes.string;
export const PROP_TYPES_ROW_ID = PropTypes.string;
export const PROP_TYPES_ROW_OPTION = PropTypes.shape({});

export const PROP_TYPES_ROW_OPTIONS = PropTypes.arrayOf(
    PROP_TYPES_ROW_OPTION,
);

export const PROP_TYPES_ROW_TYPE = PropTypes.oneOf([
    'checkbox',
    'radio',
    'select',
]);
