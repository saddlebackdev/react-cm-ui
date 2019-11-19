import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DataGroup from './dataGroup.js';
import Utils from '../utils/utils.js';

const propTypes = {
    column: PropTypes.arrayOf(
        PropTypes.shape({
            className: PropTypes.string,
            id: PropTypes.string,
            header: PropTypes.string,
            rows: PropTypes.arrayOf(
                PropTypes.shape({
                    accessor: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.func,
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
                }),
            ).isRequired,
            style: PropTypes.shape({}),
        }),
    ).isRequired,
    data: PropTypes.shape({}).isRequired,
    moduleType: PropTypes.string,
};

const defaultProps = {
    moduleType: undefined,
};

function DataGroupsColumn(props) {
    const {
        column,
        data,
        moduleType,
    } = props;
    const bemClassName = `${moduleType}--data_groups_column`;
    const containerClasses = ClassNames(bemClassName);

    return (
        <div className={containerClasses}>
            {_.map(column, (group, index) => {
                const id = group.id ? _.kebabCase(group.id) : index;

                return (
                    <DataGroup
                        group={group}
                        data={data}
                        key={`${bemClassName}_group-${id}`}
                        moduleType={moduleType}
                    />
                );
            })}
        </div>
    );
}

DataGroupsColumn.propTypes = propTypes;
DataGroupsColumn.defaultProps = defaultProps;

export default DataGroupsColumn;
