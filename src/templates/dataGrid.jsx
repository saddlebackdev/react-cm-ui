import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { SORTABLE_PROP_TYPES } from './dataGridConstants';
import DataGridTable from './dataGridTable';

const propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.shape({})),
            PropTypes.shape({}),
        ]),
    ).isRequired,
    fontSize: PropTypes.string,
    id: PropTypes.string.isRequired,
    minWidth: PropTypes.number,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
    resizableColumnWidthPercentage: PropTypes.number,
    rowProps: PropTypes.func,
    size: PropTypes.oneOf([
        'small',
        'medium',
    ]),
    sortable: PropTypes.arrayOf(SORTABLE_PROP_TYPES),
    small: PropTypes.bool,
    stickyColumnWidth: PropTypes.number,
    stickyColumns: PropTypes.number,
    stretch: PropTypes.oneOfType([
        PropTypes.oneOf(['very']),
        PropTypes.bool,
    ]),
    style: PropTypes.shape({}),
};

const defaultProps = {
    bleed: true,
    className: undefined,
    fontSize: undefined,
    minWidth: 800,
    resizableColumnWidthPercentage: undefined,
    rowProps: () => ({
        className: null,
        id: null,
        onClick: null,
        selected: null,
        style: null,
    }),
    size: 'small',
    small: false,
    sortable: null,
    stickyColumns: 0,
    stickyColumnWidth: 30,
    stretch: false,
    style: {},
};

class DataGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minWidth: props.minWidth,
        };

        this.classNamePrefix = `${props.moduleType}--data_grid`;
    }

    render() {
        const {
            bleed,
            className,
            columns,
            data,
            fontSize,
            id,
            moduleType,
            rowProps,
            size: sizeProp,
            small: smallProp,
            sortable,
            stickyColumns,
            stickyColumnWidth,
            resizableColumnWidthPercentage,
            stretch,
            style,
        } = this.props;

        const {
            minWidth,
        } = this.state;

        const { classNamePrefix } = this;
        const size = smallProp ? 'small' : sizeProp;
        const isStickyColumns = stickyColumns > 0;
        const rootClasses = ClassNames('ui', classNamePrefix, className, {
            [`${classNamePrefix}-bleed`]: bleed,
            [`${classNamePrefix}-sticky_columns`]: isStickyColumns,
        });

        return (
            <div
                className={rootClasses}
                style={style}
            >
                <DataGridTable
                    bleed={bleed}
                    className={className}
                    classNamePrefix={classNamePrefix}
                    columns={columns}
                    data={data}
                    fontSize={fontSize}
                    id={id}
                    minWidth={minWidth}
                    moduleType={moduleType}
                    rowProps={rowProps}
                    size={size}
                    sortable={sortable}
                    stickyColumnWidth={stickyColumnWidth}
                    stickyColumns={stickyColumns}
                    resizableColumnWidthPercentage={resizableColumnWidthPercentage}
                    stretch={stretch}
                />
            </div>
        );
    }
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;

export default DataGrid;
