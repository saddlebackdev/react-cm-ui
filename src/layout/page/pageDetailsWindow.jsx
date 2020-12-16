import PropTypes from 'prop-types';
import React from 'react';
import { columnPropTypesShape } from '../../surfaces/detailsWindow/detailsWindowPropTypes';
import DetailsWindow from '../../surfaces/detailsWindow';

const propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    columnProps: PropTypes.shape({}),
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.shape({}).isRequired,
    expandableColumns: PropTypes.arrayOf(columnPropTypesShape),
    style: PropTypes.shape({}),
};

const defaultProps = {
    bleed: undefined,
    className: undefined,
    color: undefined,
    columnProps: undefined,
    expandableColumns: undefined,
    style: {},
};

// eslint-disable-next-line prefer-arrow-callback
const PageDetailsWindow = React.forwardRef(function PageDetailsWindow(props, ref) {
    const {
        bleed,
        className,
        color,
        columnProps,
        columns,
        data,
        expandableColumns,
        style,
    } = props;

    return (
        <DetailsWindow
            bleed={bleed}
            className={className}
            color={color}
            columnProps={columnProps}
            columns={columns}
            data={data}
            expandableColumns={expandableColumns}
            forwardedRef={ref}
            style={style}
            moduleType="page"
        />
    );
});

PageDetailsWindow.propTypes = propTypes;
PageDetailsWindow.defaultProps = defaultProps;

export default PageDetailsWindow;
