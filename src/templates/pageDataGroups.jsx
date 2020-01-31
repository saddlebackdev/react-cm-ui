import PropTypes from 'prop-types';
import React from 'react';
import DataGroups from './dataGroups';
import { groupPropTypes } from './dataGroupsPropTypes';

const propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(groupPropTypes).isRequired,
    data: PropTypes.shape({}).isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    bleed: false,
    className: '',
    style: {},
};

function PageDataGroups(props) {
    const {
        bleed,
        className,
        columns,
        data,
        style,
    } = props;

    return (
        <DataGroups
            bleed={bleed}
            className={className}
            columns={columns}
            data={data}
            moduleType="page"
            style={style}
        />
    );
}

PageDataGroups.propTypes = propTypes;
PageDataGroups.defaultProps = defaultProps;

export default PageDataGroups;
