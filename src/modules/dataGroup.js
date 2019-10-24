import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../elements/header.js';
import List from '../elements/list.js';
import DataGroupRow from './dataGroupRow.js';
import Utils from '../utils/utils.js';

function DataGroup(props) {
    const {
        bleed,
        className,
        data,
        header,
        moduleType,
        rows,
        style,
    } = props;

    const containerClasses = ClassNames('ui', `${moduleType}_data_group`, className, {
        'page--data_group-bleed': bleed && moduleType === 'page',
        'drawer--data_group-bleed': bleed && moduleType === 'drawer',
    });

    return (
        <div
            className={containerClasses}
            style={style}
        >
            {header && (
                <Header className={`${moduleType}_data_group_header_title`} weight="bold" size="large">
                    {header}
                </Header>
            )}

            <List>
                {_.map(rows, (row, index) => (
                    <List.Item
                        key={`dataGroupRow-${index}`}
                    >
                        <DataGroupRow
                            data={data}
                            row={row}
                        />
                    </List.Item>
                ))}
            </List>
        </div>
    );
}

DataGroup.defaultProps = {
    bleed: true,
    className: undefined,
    moduleType: undefined,
    style: {},
};

DataGroup.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    data: PropTypes.shape({}).isRequired,
    header: PropTypes.string,
    moduleType: PropTypes.string,
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            accessor: PropTypes.string.isRequired,
            fieldName: PropTypes.string.isRequired,
            header: PropTypes.string,
            iconType: PropTypes.string,
            iconColor: PropTypes.string,
            iconSize: PropTypes.oneOfType([
                PropTypes.oneOf(Utils.sizeEnums()),
                PropTypes.number,
            ]),
        })).isRequired,
    style: PropTypes.shape({}),
};

export default DataGroup;
