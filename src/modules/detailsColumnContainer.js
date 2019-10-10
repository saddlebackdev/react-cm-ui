import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../elements/button.js';
import Header from '../elements/header.js';
import Icon from '../elements/icon.js';
import DetailsColumn from './detailsColumn.js';

const nop = () => {};

const columnPropTypesShape = PropTypes.shape({
    accessor: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]),
    divide: PropTypes.bool,
    expandedButton: PropTypes.bool,
    expandedButtonId: PropTypes.string,
    flexBasis: PropTypes.string,
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    fontSize: PropTypes.oneOf(['large', 'medium', 'small']),
    fontWeight: PropTypes.oneOf(['bold', 'normal', 'semibold']),
    header: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
});
const columnPropsPropTypesShape = PropTypes.shape({
    horizontalSpacing: PropTypes.number,
});

function DetailsColumnContainer(props) {
    const {
        column,
        column: {
            accessor,
            columns,
            divide: isDivided,
            flexBasis,
            flexGrow,
            flexShrink,
            style,
            width,
        },
        columnProps,
        data,
        isExpanded,
        moduleType,
        onExpandButtonToggle,
        setColumnContainerHeight,
    } = props;
    let horizontalSpacing;

    if (columnProps) {
        horizontalSpacing = columnProps.horizontalSpacing;
    }

    if (!accessor && columns && _.isArray(columns)) {
        const foo = `${moduleType}_details--column`;
        const bar = isDivided ? `${foo}-divide` : null;
        const containerClasses = ClassNames(foo, bar);
        let innerColumnKeyNum = 1;

        return (
            <div
                className={containerClasses}
                style={({
                    flexBasis: flexBasis || 'auto',
                    flexGrow: flexGrow || 0,
                    flexShrink: flexShrink || 0,
                    paddingLeft: horizontalSpacing ? `${horizontalSpacing}px` : null,
                    paddingRight: horizontalSpacing ? `${horizontalSpacing}px` : null,
                    width: `${width}`,
                    ...style,
                })}
            >
                {_.map(columns, (innerColumn) => {
                    innerColumnKeyNum += 1;

                    return (
                        <DetailsColumn
                            column={innerColumn}
                            columnNumber={innerColumnKeyNum}
                            columnProps={columnProps}
                            data={data}
                            isExpanded={isExpanded}
                            key={innerColumnKeyNum}
                            moduleType={moduleType}
                            onExpandButtonToggle={onExpandButtonToggle}
                            setColumnContainerHeight={setColumnContainerHeight}
                        />
                    );
                })}
            </div>
        );
    }

    return (
        <DetailsColumn
            column={column}
            data={data}
            isExpanded={isExpanded}
            onExpandButtonToggle={onExpandButtonToggle}
            moduleType={moduleType}
            setColumnContainerHeight={setColumnContainerHeight}
        />
    );
}

DetailsColumnContainer.propTypes = {
    column: PropTypes.oneOfType([
        PropTypes.arrayOf(columnPropTypesShape),
        columnPropTypesShape,
    ]).isRequired,
    columnProps: columnPropsPropTypesShape,
    data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    isExpanded: PropTypes.bool,
    onExpandButtonToggle: PropTypes.func,
    moduleType: PropTypes.string,
    setColumnContainerHeight: PropTypes.func,
};

DetailsColumnContainer.defaultProps = {
    columnProps: undefined,
    isExpanded: false,
    moduleType: undefined,
    onExpandButtonToggle: undefined,
    setColumnContainerHeight: undefined,
};

export default DetailsColumnContainer;
