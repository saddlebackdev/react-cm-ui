import {
    groupBy,
    isEmpty,
    isEqual,
    map,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    groupPropTypes,
} from './dataGroupsPropTypes';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import DataGroupsColumn from './dataGroupsColumn';

const propTypes = {
    className: PropTypes.string,
    columns: PropTypes.arrayOf(groupPropTypes).isRequired,
    data: PropTypes.shape({}).isRequired,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    moduleType: PropTypes.string.isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: undefined,
    dataTestId: `${UI_CLASS_NAME}-data_groups`,
    style: {},
};

class DataGroups extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            columns: [],
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

        if (!isEqual(prevColumns, nextColumns)) {
            this.reorderColumns();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeWindow);
    }

    resizeWindow() {
        this.reorderColumns();
    }

    reorderColumns() {
        const { columns } = this.props;
        const blockSize = this.dataGroups.offsetWidth;
        const columnMinWidth = 300;
        const columnsLength = columns.length;
        let numberOfColumns = Math.floor(blockSize / columnMinWidth);
        let newColumns = [];

        if (numberOfColumns === 1 || numberOfColumns < 1) {
            numberOfColumns = 1;
        } else if (numberOfColumns > columnsLength) {
            numberOfColumns = columnsLength;
        }

        let columnNum = 0;

        while (columnNum < numberOfColumns) {
            for (let i = 0; i < columns.length; i += numberOfColumns) {
                const column = columns[i + columnNum];

                if (column !== undefined) {
                    newColumns = [
                        ...newColumns,
                        {
                            ...column,
                            columnIndex: columnNum,
                        },
                    ];
                }
            }

            columnNum += 1;
        }

        newColumns = groupBy(newColumns, 'columnIndex');

        this.setState({
            columns: newColumns,
        });
    }

    render() {
        const {
            className,
            data,
            dataTestId,
            moduleType,
            style,
        } = this.props;

        const { columns } = this.state;
        const bemClassName = `${moduleType}--data_groups`;
        const rootClasses = ClassNames('ui', bemClassName, className);

        return (
            <div
                className={rootClasses}
                dataTestId={dataTestId}
                ref={(ref) => { this.dataGroups = ref; }}
                style={style}
            >
                {!isEmpty(columns) && map(columns, (column, index) => (
                    <DataGroupsColumn
                        column={column}
                        data={data}
                        key={`${bemClassName}_group-${index}`}
                        moduleType={moduleType}
                    />
                ))}
            </div>
        );
    }
}

DataGroups.propTypes = propTypes;
DataGroups.defaultProps = defaultProps;

export default DataGroups;
