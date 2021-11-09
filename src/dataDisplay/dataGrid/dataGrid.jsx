import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {
    BEM_DATA_GRID,
    UI_CLASS_NAME,
} from '../../global/constants';
import { SORTABLE_PROP_TYPES } from './dataGridConstants';
import DataGridTable from './dataGridTable';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * If `true`, the component will bleed to the edge of the parent component.
     */
    bleed: PropTypes.bool,
    /**
     * Override or extend the styles applied to the Data Grid.
     */
    classes: PropTypes.shape({
        bleed: PropTypes.string,
        root: PropTypes.string,
    }),
    /**
     * Add additional classes to the Table.
     */
    className: PropTypes.string,
    /**
     * Columns applied to Data grid
     */
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    /**
     * Data to render
     */
    data: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.shape({})),
            PropTypes.shape({}),
        ]),
    ).isRequired,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    fontSize: PropTypes.string,
    /**
     * Add an id to the Data Grid.
     */
    id: PropTypes.string.isRequired,
    /**
     * Used Adds a specific helper class.
     */
    moduleType: PropTypes.oneOf(['drawer', 'page']),
    /**
     * Initial resizable column width percentaje.
     * (stickyColumns must be set)
     */
    resizableColumnWidthPercentage: PropTypes.number,
    /**
     * Props applied for each row
     */
    rowProps: PropTypes.func,
    /**
     * Change the cells vertical size in the Data Grid.
     */
    size: PropTypes.oneOf([
        'small',
        'medium',
    ]),
    /**
     * Makes the Data Grid sortable
     */
    sortable: PropTypes.arrayOf(SORTABLE_PROP_TYPES),
    /**
     * Applies small styling.
     */
    small: PropTypes.bool,
    /**
     * Enables a resisable handler in the column number set in this prop.
     */
    stickyColumns: PropTypes.number,
    /**
     * If `true` or `very`, the Data Grid will bleed off the edge.
     */
    stretch: PropTypes.oneOfType([
        PropTypes.oneOf(['very']),
        PropTypes.bool,
    ]),
    /**
     * Supply any inline styles to the Data Grid container.
     */
    style: PropTypes.shape({}),
};

const defaultProps = {
    bleed: true,
    classes: null,
    className: undefined,
    dataTestId: `${UI_CLASS_NAME}-${BEM_DATA_GRID}`,
    fontSize: undefined,
    moduleType: null,
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
    stretch: false,
    style: {},
};

const useStyles = makeStyles((theme) => ({
    bleed: {
        margin: [[0, -theme.gutters.page.sm]],
        [theme.breakpoints.up(496)]: {
            margin: [[0, -theme.gutters.page[496]]],
        },
    },
    drawer: {},
    root: {
        '&$drawer': {
            marginTop: -33,
            '&$bleed': {
                margin: [[0, -22]],
                [theme.breakpoints.up(496)]: {
                    margin: [[0, -22]],
                },
            },
            '& .table-header-cell': {
                paddingTop: [[11, '!important']],
            },
        },
        '& .ui.table .table-cell:last-child': {
            paddingRight: [[11, '!important']],
        },
        '& .ui.table .table-header-cell:last-child': {
            paddingRight: [[11, '!important']],
            position: 'relative',
        },
        [`& .${BEM_DATA_GRID}--table_body-drop_shadow`]: {
            boxShadow: [[0, 4, 5, 0, 'rgba(0, 0, 0, .5)']],
        },
    },
    stickyColumns: {
        position: 'relative',
    },
}));

function DataGrid(props) {
    const {
        bleed,
        className,
        columns,
        data,
        dataTestId,
        fontSize,
        id,
        moduleType,
        rowProps,
        size: sizeProp,
        small: smallProp,
        sortable,
        stickyColumns,
        resizableColumnWidthPercentage,
        stretch,
        style,
    } = props;

    const classes = useStyles(props);

    let classNameModuleModifier;

    if (moduleType) {
        classNameModuleModifier = `${BEM_DATA_GRID}-${moduleType}`;
    }

    const size = smallProp ? 'small' : sizeProp;
    const isStickyColumns = stickyColumns > 0;

    const rootClasses = ClassNames(
        'ui',
        BEM_DATA_GRID,
        classes.root,
        classNameModuleModifier,
        className,
        {
            [classes.drawer]: moduleType === 'drawer',
            [classes.bleed]: bleed,
            [classes.stickyColumns]: isStickyColumns,
        },
    );

    return (
        <div
            className={rootClasses}
            data-testid={dataTestId}
            style={style}
        >
            <DataGridTable
                bleed={bleed}
                className={className}
                columns={columns}
                data={data}
                fontSize={fontSize}
                id={id}
                moduleType={moduleType}
                rowProps={rowProps}
                size={size}
                sortable={sortable}
                stickyColumns={stickyColumns}
                resizableColumnWidthPercentage={resizableColumnWidthPercentage}
                stretch={stretch}
            />
        </div>
    );
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;

export default DataGrid;
