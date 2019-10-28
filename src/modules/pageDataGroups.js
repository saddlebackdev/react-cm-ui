import PropTypes from 'prop-types';
import React from 'react';
import DataGroups from './dataGroups.js';
import Utils from '../utils/utils.js';

function PageDataGroups(props) {
    return (
        <DataGroups
            {...props}
            moduleType="page"
        />
    );
}

PageDataGroups.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            className: PropTypes.string,
            id: PropTypes.string,
            header: PropTypes.string,
            rows: PropTypes.arrayOf(
                PropTypes.shape({
                    accessor: PropTypes.string.isRequired,
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
                }),
            ).isRequired,
            style: PropTypes.shape({}),
        }),
    ).isRequired,
    data: PropTypes.shape({}).isRequired,
    style: PropTypes.shape({}),
};

PageDataGroups.defaultProps = {
    bleed: false,
    className: '',
    style: {},
};

export default PageDataGroups;
