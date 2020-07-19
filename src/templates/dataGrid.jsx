import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DataGridTable from './dataGridTable';

const propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fontSize: PropTypes.string,
    handle: PropTypes.bool,
    id: PropTypes.string.isRequired,
    minWidth: PropTypes.number,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
    onChange: PropTypes.func,
    resizableColumnWidthPercentage: PropTypes.number,
    rowProps: PropTypes.func,
    size: PropTypes.oneOf([
        'small',
        'medium',
    ]),
    sortable: PropTypes.bool,
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
    handle: false,
    minWidth: 800,
    onChange: undefined,
    resizableColumnWidthPercentage: undefined,
    rowProps: undefined,
    size: 'small',
    small: false,
    sortable: false,
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
            handle,
            id,
            onChange,
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
                    handle={handle}
                    id={id}
                    minWidth={minWidth}
                    moduleType={moduleType}
                    onChange={onChange}
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
