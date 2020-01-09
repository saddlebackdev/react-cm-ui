import PropTypes from 'prop-types';

export const columnPropTypesShape = PropTypes.shape({
    accessor: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]),
    divide: PropTypes.bool,
    expandedButton: PropTypes.bool,
    expandedButtonId: PropTypes.string,
    flexBasis: PropTypes.string,
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    fontSize: PropTypes.oneOf(['large', 'medium', 'small']),
    fontWeight: PropTypes.oneOf(['bold', 'normal', 'semibold']),
    header: PropTypes.string,
    style: PropTypes.shape({}),
    width: PropTypes.string,
});

export const columnPropsPropTypesShape = PropTypes.shape({
    horizontalSpacing: PropTypes.number,
});
