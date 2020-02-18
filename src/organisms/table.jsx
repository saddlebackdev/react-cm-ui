import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { borderColor } from '../colors.js';
import TableBody from './tableBody';
import TableCell from './tableCell';
import TableHeader from './tableHeader';
import TableHeaderCell from './tableHeaderCell';
import TableRow from './tableRow';
import Utils from '../global/utils/utils';

const propTypes = {
    basic: PropTypes.bool,
    celled: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    collapsing: PropTypes.bool,
    definition: PropTypes.bool,
    fixed: PropTypes.bool,
    fontSize: PropTypes.oneOf(Utils.sizeEnums()),
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    selectable: PropTypes.bool,
    singleLine: PropTypes.bool,
    size: PropTypes.oneOf(['l', 'large', 'm', 'medium', 's', 'small']),
    stackable: PropTypes.bool,
    stickyColumnCount: PropTypes.number,
    stretch: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['very']),
    ]),
    striped: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    basic: undefined,
    celled: undefined,
    children: undefined,
    className: undefined,
    collapsing: undefined,
    definition: undefined,
    fixed: undefined,
    fontSize: undefined,
    fullWidth: undefined,
    id: undefined,
    selectable: undefined,
    singleLine: undefined,
    size: undefined,
    stackable: undefined,
    stickyColumnCount: 0,
    stretch: undefined,
    striped: undefined,
    style: undefined,
};

const Wrapper = styled('div').attrs({
    className: 'table--sticky_columns',
})`
    & .table--scroll_container {
        position: relative;
        overflow: auto;
        position: relative;
    }
    & .table--cell:nth-child(-n+${(props) => props.stickyColumnCount}) {
        position: sticky;
        left: 0;
        z-index: 2;
    }
    & .table--cell:nth-child(${(props) => props.stickyColumnCount}) {
        border-right: 1px solid ${borderColor.default};
    }
`;

Wrapper.displayName = 'Wrapper';

class Table extends React.PureComponent {
    componentDidMount() {
        this.setStickyColumnPositions();
    }

    componentDidUpdate(prevProps) {
        const {
            children: prevChildren,
            stickyColumnCount: prevStickyColumnCount,
        } = prevProps;
        const {
            children: nextChildren,
            stickyColumnCount: nextStickyColumnCount,
        } = this.props;

        if (prevChildren !== nextChildren || prevStickyColumnCount !== nextStickyColumnCount) {
            this.setStickyColumnPositions();
        }
    }

    setStickyColumnPositions() {
        const { stickyColumnCount } = this.props;

        if (stickyColumnCount > 1 && this.tableRef) {
            const stickyCells = this.tableRef.querySelectorAll(`.table--cell:nth-child(-n+${stickyColumnCount})`);
            let cellWidths = 0;
            let cellCount = 0;

            // eslint-disable-next-line no-plusplus
            for (let rootIndex = 0; rootIndex < stickyCells.length; rootIndex++) {
                cellCount += 1;

                if (cellCount <= stickyColumnCount && cellCount > 1) {
                    cellWidths += stickyCells[rootIndex].clientWidth;
                    stickyCells[rootIndex].style.left = `${cellWidths - 1}px`;
                }

                if (cellCount === stickyColumnCount) {
                    cellCount = 0;
                    cellWidths = 0;
                }
            }
        }
    }

    render() {
        const {
            basic,
            celled,
            children,
            className,
            collapsing,
            definition,
            fixed,
            fontSize,
            fullWidth,
            id,
            selectable,
            singleLine,
            size,
            stickyColumnCount,
            stretch,
            style,
            stackable,
            striped,
        } = this.props;
        const containerClasses = ClassNames(
            'ui',
            'table', {
                'table-basic': basic,
                'table-celled': celled,
                'table-collapsing': collapsing,
                'table-definition': definition,
                'table-fixed': fixed,
                'table-font-size-large': fontSize === 'large',
                'table-font-size-medium': fontSize === 'medium',
                'table-font-size-small': fontSize === 'small',
                'table-font-size-xlarge': fontSize === 'xlarge',
                'table-font-size-xsmall': fontSize === 'xsmall',
                'table-font-size-xxsmall': fontSize === 'xxsmall',
                'table-full-width': fullWidth,
                'table-selectable': selectable,
                'table-single-line': singleLine,
                'table-size-medium': size === 'm' || size === 'medium',
                'table-size-small': size === 's' || size === 'small',
                'table-stretch': stretch && stretch !== 'very',
                'table-stretch-very': stretch === 'very',
                'table-striped': striped,
                'table-stackable': stackable,
                'table-unstackable': stackable === false,
            },
            className,
        );

        const tableJsx = (
            <table
                className={containerClasses}
                id={id}
                ref={(ref) => { this.tableRef = ref; }}
                style={style}
            >
                {children}
            </table>
        );

        if (stickyColumnCount) {
            return (
                <Wrapper
                    stickyColumnCount={stickyColumnCount}
                >
                    <div className="table--scroll_container">
                        {tableJsx}
                    </div>
                </Wrapper>
            );
        }

        return tableJsx;
    }
}

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
