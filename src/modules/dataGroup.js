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
        column: {
            className,
            id,
            header,
            rows,
            style,
        },
        data,
        moduleType,
    } = props;
    const bemClassName = `${moduleType}--data_group`;
    const containerClasses = ClassNames(bemClassName, className);

    return (
        <div
            className={containerClasses}
            id={id}
            style={style}
        >
            <div
                className={`${bemClassName}_inner_container`}
            >
                {header && (
                    <Header
                        className={`${bemClassName}_header_title`}
                        weight="bold"
                        size="large"
                    >
                        {header}
                    </Header>
                )}

                <List
                    className={`${bemClassName}_list`}
                    divide
                >
                    {_.map(rows, (row, index) => (
                        <List.Item
                            key={`${bemClassName}_list_item-${index}`}
                        >
                            <DataGroupRow
                                bemClassName={bemClassName}
                                data={data}
                                row={row}
                            />
                        </List.Item>
                    ))}
                </List>
            </div>
        </div>
    );
}

DataGroup.propTypes = {
    column: PropTypes.shape({
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
                style: PropTypes.shape({}),
            }),
        ).isRequired,
        style: PropTypes.shape({}),
    }).isRequired,
    data: PropTypes.shape({}).isRequired,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
    style: PropTypes.shape({}),
};

DataGroup.defaultProps = {
    style: {},
};

export default DataGroup;
