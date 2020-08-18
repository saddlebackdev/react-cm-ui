import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { BEM_DATA_GRID } from '../../global/constants';
import { SORTABLE_PROP_TYPES } from './dataGridConstants';
import DataGridTable from './dataGridTable';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    bleed: PropTypes.bool,
    classes: PropTypes.shape({
        bleed: PropTypes.string,
        root: PropTypes.string,
    }),
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
    moduleType: PropTypes.oneOf(['drawer', 'page']),
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
    classes: null,
    className: undefined,
    fontSize: undefined,
    minWidth: 800,
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
    stickyColumnWidth: 30,
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
        fontSize,
        id,
        minWidth: minWidthProp,
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
    } = props;

    let minWidth;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        minWidth = minWidthProp;
    }, []);

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

    console.log('sortable', sortable);

    return (
        <div
            className={rootClasses}
            style={style}
        >
            <DataGridTable
                bleed={bleed}
                className={className}
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

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;

export default DataGrid;
