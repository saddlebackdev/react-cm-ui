import PropTypes from 'prop-types';
import Utils from '../utils/utils.js';

export const rowPropTypes = PropTypes.shape({
    accessor: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]).isRequired,
    className: PropTypes.string,
    fieldName: PropTypes.string.isRequired,
    id: PropTypes.string,
    header: PropTypes.string,
    iconType: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.oneOfType([
        PropTypes.oneOf(Utils.sizeEnums()),
        PropTypes.number,
    ]),
});

export const groupPropTypes = PropTypes.shape({ // eslint-disable-line import/prefer-default-export
    className: PropTypes.string,
    expandableSections: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            iconType: PropTypes.string,
            iconColor: PropTypes.string,
            rows: PropTypes.arrayOf(
                PropTypes.shape({
                    header: PropTypes.string,
                    rows: PropTypes.arrayOf(
                        PropTypes.shape({
                            accessor: PropTypes.oneOfType([
                                PropTypes.func,
                                PropTypes.string,
                            ]).isRequired,
                            fieldName: PropTypes.string.isRequired,
                            iconColor: PropTypes.string,
                            iconType: PropTypes.string,
                        }),
                    ),
                }),
            ),
        }),
    ),
    id: PropTypes.string,
    isExpandable: PropTypes.bool,
    header: PropTypes.string,
    rows: PropTypes.arrayOf(rowPropTypes).isRequired,
    style: PropTypes.shape({}),
});
