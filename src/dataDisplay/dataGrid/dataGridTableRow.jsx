import {
    get,
    isEmpty,
    isFunction,
    isString,
    isUndefined,
    map,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { BEM_DATA_GRID } from '../../global/constants';
import Grid from '../../layout/grid';
import Icon from '../icon';
import Table from '../table';
import withStyles from '../../styles/withStyles';

const propTypes = {
    classes: PropTypes.shape({
        handleGrid: PropTypes.string,
    }),
    columns: PropTypes.arrayOf(PropTypes.shape({
        className: PropTypes.string,
        id: PropTypes.string,
        style: PropTypes.shape({}),
    })).isRequired,
    handle: PropTypes.bool,
    id: PropTypes.string.isRequired,
    idPrefix: PropTypes.string.isRequired,
    isClickable: PropTypes.bool,
    row: PropTypes.shape({}).isRequired,
    rowIndex: PropTypes.number.isRequired,
    rowProps: PropTypes.shape({
        className: PropTypes.string,
        id: PropTypes.string,
        onClick: PropTypes.func,
        selected: PropTypes.bool,
        style: PropTypes.shape({}),
    }),
};

const defaultProps = {
    classes: null,
    handle: false,
    isClickable: undefined,
    rowProps: undefined,
};

const styles = {
    accessorGridColumn: {
        flexBasis: '100%',
        flexGrow: 1,
        maxWidth: '100%',
    },
    handleGrid: {
        alignItems: 'center !important',
        flexWrap: 'nowrap !important',
    },
    handleGridColumn: {
        flexBasis: 16,
        flexGrow: 0,
        height: 16,
        maxWidth: 16,
        padding: '0 11px 0 8px',
    },
};

class DataGridTableRow extends React.Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const {
            isClickable,
            row,
            rowProps: { onClick },
        } = this.props;

        const isTextSelected = !isEmpty(window.getSelection().toString());

        if (isClickable && !isTextSelected && !isUndefined(onClick)) {
            onClick(row);
        }
    }

    render() {
        const {
            classes,
            columns,
            handle,
            id: tableId,
            idPrefix,
            isClickable,
            row,
            rowIndex,
            rowProps,
        } = this.props;

        const {
            className: rowClassName,
            id: rowId,
            selected: rowSelected,
            style: rowStyle,
        } = rowProps;

        const containerClasses = ClassNames(`${BEM_DATA_GRID}--row`, rowClassName, {
            [`${BEM_DATA_GRID}--row-selected`]: rowSelected,
        });

        return (
            <Table.Row
                className={containerClasses}
                id={rowId}
                onClick={isClickable ? this.onClick : null}
                style={rowStyle}
            >
                {map(columns, (cell, index) => {
                    let accessor = null;

                    if (isString(cell.accessor)) {
                        accessor = get(row, cell.accessor);
                    } else if (isFunction(cell.accessor)) {
                        accessor = cell.accessor(row);
                    }

                    const cellId = cell.id ||
                        `${BEM_DATA_GRID}--table_${tableId}_cell_${idPrefix}-${rowIndex}_${index}`;

                    return (
                        <Table.Cell
                            className={cell.className}
                            id={cellId}
                            key={cellId}
                            textAlign={cell.textAlign}
                            style={{
                                ...cell.style,
                            }}
                        >
                            {handle && index === 0 ? (
                                <Grid
                                    className={classes.handleGrid}
                                >
                                    <Grid.Column
                                        className={classes.handleGridColumn}
                                    >
                                        <Icon
                                            color="static"
                                            size={14}
                                            title="Reorder"
                                            type="splitter"
                                        />
                                    </Grid.Column>

                                    <Grid.Column
                                        className={classes.accessorGridColumn}
                                    >
                                        {accessor}
                                    </Grid.Column>
                                </Grid>
                            ) : accessor}
                        </Table.Cell>
                    );
                })}
            </Table.Row>
        );
    }
}

DataGridTableRow.propTypes = propTypes;
DataGridTableRow.defaultProps = defaultProps;

export default withStyles(styles)(DataGridTableRow);
