import _ from 'lodash';
import ClassNames from 'classnames';
import Icon from '../elements/icon';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../elements/header.js';
import List from '../elements/list.js';
import DataGroupRow from './dataGroupRow.js';

class DataGroup extends React.PureComponent {
    constructor() {
        super();
    }

    render() {
        const {
            bleed,
            className,
            data,
            header,
            moduleType,
            rows,
            style,
        } = this.props;
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
    data: PropTypes.object.isRequired,
    header: PropTypes.string,
    moduleType: PropTypes.string,
    rows: PropTypes.array.isRequired,
    style: PropTypes.object,
};

export default DataGroup;
