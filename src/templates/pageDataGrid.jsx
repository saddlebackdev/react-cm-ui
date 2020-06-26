import PropTypes from 'prop-types';
import React from 'react';
import DataGrid from './dataGrid';

const propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fontSize: PropTypes.string,
    handle: PropTypes.bool,
    id: PropTypes.string,
    minWidth: PropTypes.number,
    resizableColumnWidthPercentage: PropTypes.number,
    rowProps: PropTypes.func,
    size: PropTypes.oneOf([
        'small',
        'medium',
    ]),
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
    handle: true,
    id: 'page',
    minWidth: 800,
    resizableColumnWidthPercentage: undefined,
    rowProps: undefined,
    size: 'small',
    small: undefined,
    stickyColumns: 0,
    stickyColumnWidth: 30,
    stretch: false,
    style: {},
};

function PageDataGrid(props) {
    const {
        bleed,
        className,
        columns,
        data,
        fontSize,
        handle,
        id,
        minWidth,
        rowProps,
        size,
        small,
        stickyColumnWidth,
        stickyColumns,
        resizableColumnWidthPercentage,
        stretch,
        style,
    } = props;

    return (
        <DataGrid
            bleed={bleed}
            className={className}
            columns={columns}
            data={data}
            fontSize={fontSize}
            handle={handle}
            id={id}
            minWidth={minWidth}
            moduleType="page"
            rowProps={rowProps}
            size={size}
            small={small}
            stickyColumnWidth={stickyColumnWidth}
            stickyColumns={stickyColumns}
            resizableColumnWidthPercentage={resizableColumnWidthPercentage}
            stretch={stretch}
            style={style}
        />
    );
}

PageDataGrid.propTypes = propTypes;
PageDataGrid.defaultProps = defaultProps;

export default PageDataGrid;
