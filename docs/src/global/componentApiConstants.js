import PropTypes from 'prop-types';

export const DOCS_PROPS_PROP_TYPE = PropTypes.shape({
    defaultValue: PropTypes.shape({
        computed: PropTypes.bool,
        value: PropTypes.string,
    }),
    description: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.arrayOf(PropTypes.shape({
            computed: PropTypes.bool,
            value: PropTypes.string,
        })),
    }),
});
