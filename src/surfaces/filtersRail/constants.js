import PropTypes from 'prop-types';

const propTypesClassName = PropTypes.string;
const propTypesId = PropTypes.string;

export const PROP_TYPES_ROW_CLASSES = PropTypes.shape({
    root: PropTypes.string,
});
export const PROP_TYPES_ROW_HEADING = PropTypes.string;
export const PROP_TYPES_ROW_ID = propTypesId;
export const PROP_TYPES_ROW_OPTION = PropTypes.shape({});
export const PROP_TYPES_ROW_OPTIONS = PropTypes.arrayOf(
    PROP_TYPES_ROW_OPTION,
);

export const PROP_TYPES_ROW_COMPONENT_CLASS_NAME = propTypesClassName;
export const PROP_TYPES_ROW_COMPONENT_CLASSES = PROP_TYPES_ROW_CLASSES;
export const PROP_TYPES_ROW_COMPONENT_COLLAPSE = PropTypes.bool;
export const PROP_TYPES_ROW_COMPONENT_COLLAPSIBLE = PropTypes.bool;
export const PROP_TYPES_ROW_COMPONENT_ID = propTypesId;
export const PROP_TYPES_ROW_COMPONENT_ON_CHANGE = PropTypes.func;
export const PROP_TYPES_ROW_COMPONENT_PLACEHOLDER = PropTypes.string;
export const PROP_TYPES_ROW_COMPONENT_TAB_INDEX = PropTypes.string;
export const PROP_TYPES_ROW_COMPONENT_TYPE = PropTypes.oneOf([
    'checkbox',
    'jsx',
    'radio',
    'radioPill',
    'select',
]);
export const PROP_TYPES_ROW_COMPONENT_VAULE = PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
]);

export const PROP_TYPES_ROW_COMPONENTS = PropTypes.arrayOf(
    PropTypes.shape({
        className: PROP_TYPES_ROW_COMPONENT_CLASS_NAME,
        id: PROP_TYPES_ROW_COMPONENT_ID,
        onChange: PROP_TYPES_ROW_COMPONENT_ON_CHANGE,
        options: PROP_TYPES_ROW_OPTIONS,
        type: PROP_TYPES_ROW_COMPONENT_TYPE,
        value: PROP_TYPES_ROW_COMPONENT_VAULE,
    }),
);
