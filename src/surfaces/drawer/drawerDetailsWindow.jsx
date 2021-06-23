import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import { columnPropTypesShape } from '../detailsWindow/detailsWindowPropTypes';
import DetailsWindow from '../detailsWindow';

const propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    columnProps: PropTypes.shape({}),
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.shape({}).isRequired,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    expandableColumns: PropTypes.arrayOf(columnPropTypesShape),
    style: PropTypes.shape({}),
};

const defaultProps = {
    bleed: undefined,
    className: undefined,
    color: undefined,
    columnProps: undefined,
    dataTestId: `${UI_CLASS_NAME}-drawer_details_window`,
    expandableColumns: undefined,
    style: {},
};

// eslint-disable-next-line prefer-arrow-callback
const DrawerDetailsWindow = React.forwardRef(function DrawerDetailsWindow(props, ref) {
    const {
        bleed,
        className,
        color,
        columnProps,
        columns,
        data,
        dataTestId,
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
            data-testid={dataTestId}
            expandableColumns={expandableColumns}
            forwardedRef={ref}
            style={style}
            moduleType="drawer"
        />
    );
});

DrawerDetailsWindow.propTypes = propTypes;
DrawerDetailsWindow.defaultProps = defaultProps;

export default DrawerDetailsWindow;
