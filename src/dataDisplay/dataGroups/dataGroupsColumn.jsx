import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DataGroup from './dataGroup';
import { groupPropTypes } from './dataGroupsPropTypes';

const propTypes = {
    column: PropTypes.arrayOf(groupPropTypes).isRequired,
    data: PropTypes.shape({}).isRequired,
    moduleType: PropTypes.string.isRequired,
};

function DataGroupsColumn(props) {
    const {
        column,
        data,
        moduleType,
    } = props;

    const bemClassName = `${moduleType}--data_groups_column`;
    const rootClasses = ClassNames(bemClassName);

    return (
        <div className={rootClasses}>
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

export default DataGroupsColumn;
