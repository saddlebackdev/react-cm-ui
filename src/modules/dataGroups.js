import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DataGroup from './dataGroup.js';
import Utils from '../utils/utils.js';

class DataGroups extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            columnCount: 1,
            columns: props.columns,
            shouldShow: false,
        };

        this.resizeWindow = this.resizeWindow.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizeWindow);
        this.resizeWindow();
    }

    componentDidUpdate(prevProps) {
        const { columns: nextColumns } = this.props;
        const { columns: prevColumns } = prevProps;

        if (!_.isEqual(prevColumns, nextColumns)) {
            this.reorderColumns();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeWindow);
    }

    resizeWindow() {
        const { columns } = this.props;
        const columnLength = columns.length;
        let columnCount = Math.floor(this.dataGroups.offsetWidth / 298);

        if (columnCount < 1) {
            columnCount = 1;
        } else if (columnCount > columnLength) {
            columnCount = columnLength;
        }

        this.reorderColumns(columnCount);
    }

    reorderColumns(columnCount) {
        const { columns } = this.props;
        const cols = columnCount;
        const newColumns = [];
        let col = 0;

        while (col < cols) {
            for (let i = 0; i < columns.length; i += cols) {
                const val = columns[i + col];

                if (val !== undefined) {
                    newColumns.push(val);
                }
            }

            col += 1;
        }

        this.setState({
            columnCount,
            columns: newColumns,
            shouldShow: true,
        });
    }

    render() {
        const {
            className,
            data,
            moduleType,
            style,
        } = this.props;
        const { columnCount, columns, shouldShow } = this.state;
        const bemClassName = `${moduleType}--data_groups`;
        const containerClasses = ClassNames('ui', bemClassName, className);

        return (
            <div
                className={containerClasses}
                ref={(ref) => { this.dataGroups = ref; }}
                style={{
                    ...style,
                    columnCount,
                }}
            >
                {shouldShow && _.map(columns, (column, index) => {
                    const id = column.id ? _.kebabCase(column.id) : index;

                    return (
                        <DataGroup
                            column={column}
                            data={data}
                            key={`${bemClassName}_group-${id}`}
                            moduleType={moduleType}
                        />
                    );
                })}
            </div>
        );
    }
}

DataGroups.propTypes = {
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
    moduleType: PropTypes.string,
    style: PropTypes.shape({}),
};

DataGroups.defaultProps = {
    className: undefined,
    moduleType: undefined,
    style: {},
};

export default DataGroups;
