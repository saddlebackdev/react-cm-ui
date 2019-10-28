import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DataGridTable from './dataGridTable.js';

class DataGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: null,
            minWidth: props.minWidth,
            scrolledRight: false,
            sizes: [],
            currentStickyColumnWidth: null,
        };

        this.classNamePrefix = `${props.moduleType}--data_grid`;

        this.onResizeDebounce = _.debounce(() => this.onResizeWindow(), 80);
        this.onScroll = this.onScroll.bind(this);
        this.onSplitterClick = this.onSplitterClick.bind(this);
        this.onSplitterDragEnd = this.onSplitterDragEnd.bind(this);
    }

    componentDidMount() {
        this.onResize();
        window.addEventListener('resize', this.onResizeDebounce);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResizeDebounce);
    }

    onResize() {
        const {
            data,
            handle,
            minWidth,
            stickyColumns,
            stickyColumnWidth,
        } = this.props;
        const { collapsed } = this.state;
        const sizes = [];
        const elContainer = document.querySelector(
            `.ui.${this.classNamePrefix}-sticky_columns`,
        );

        if (!elContainer) {
            return;
        }

        const totalWidth = elContainer.clientWidth;
        let { currentStickyColumnWidth } = this.state;
        let width = currentStickyColumnWidth;

        if (collapsed === true) {
            width = Math.min(stickyColumnWidth, totalWidth);
        } else if (collapsed === false) {
            width = Math.max(stickyColumnWidth, totalWidth - stickyColumnWidth);
        } else if (!_.isFinite(currentStickyColumnWidth)) {
            const theWidth = totalWidth / 2;
            width = theWidth;
            currentStickyColumnWidth = theWidth;
        }

        for (let i = 0; i < data.length; i += 1) {
            const row = [];

            for (let j = 0; j < stickyColumns; j += 1) {
                const el = document.querySelector(`#table--table_cell-body-${i}-${j}`);
                const size = {
                    h: `${el.clientHeight}px`,
                    w: `${el.clientWidth}px`,
                };

                if (handle && j === stickyColumns - 1) {
                    size.w = `${width}px`;
                }

                row.push(size);
            }

            sizes.push(row);
        }

        const newState = { currentStickyColumnWidth, sizes };

        if (collapsed === true) {
            newState.minWidth = minWidth;
        } else if (collapsed === false) {
            const diff = totalWidth - stickyColumnWidth;

            if (diff > 0) {
                newState.minWidth = minWidth + diff;
            }
        } else {
            const diff = (totalWidth - width) / 2;

            if (diff > 0) {
                newState.minWidth = minWidth + diff;
            }
        }

        this.setState(newState);
    }

    onResizeWindow() {
        this.setState({ collapsed: null, currentStickyColumnWidth: null }, () => {
            this.onResize();
        });
    }

    onScroll(e) {
        this.setState({ scrolledRight: e.nativeEvent.target.scrollLeft > 0 });
    }

    onSplitterClick() {
        this.setState((prevState) => {
            const { prevCollapsed } = prevState;
            let updatedCollapsed;

            switch (prevCollapsed) {
                case true:
                    updatedCollapsed = false;

                    break;
                case false:
                    updatedCollapsed = null;

                    break;
                default:
                    updatedCollapsed = true;
            }

            return {
                collapsed: updatedCollapsed,
            };
        }, () => {
            this.onResize();
        });
    }

    onSplitterDragEnd(dx) {
        this.setState((prevState, prevProps) => {
            const elContainer = document.querySelector(
                `.ui.${this.classNamePrefix}-sticky_columns`,
            );

            if (!elContainer) {
                return;
            }

            const totalWidth = elContainer.clientWidth;
            const { stickyColumnWidth } = prevProps;
            const { collapsed, currentStickyColumnWidth } = prevState;
            let width = currentStickyColumnWidth;

            if (collapsed === true) {
                width = Math.min(stickyColumnWidth, totalWidth);
            } else if (collapsed === false) {
                width = Math.max(stickyColumnWidth, totalWidth - stickyColumnWidth);
            } else if (!_.isFinite(currentStickyColumnWidth)) {
                width = totalWidth / 2;
            }

            return { // eslint-disable-line consistent-return
                collapsed: null,
                currentStickyColumnWidth: width + dx,
            };
        }, () => {
            this.onResize();
        });
    }

    render() {
        const {
            bleed,
            className,
            columns,
            stickyColumns,
            style,
        } = this.props;
        const {
            collapsed,
            minWidth,
            scrolledRight,
            sizes,
        } = this.state;
        const { classNamePrefix } = this;

        const isStickyColumns = stickyColumns > 0;
        const containerClasses = ClassNames('ui', classNamePrefix, className, {
            [`${classNamePrefix}-bleed`]: bleed,
            [`${classNamePrefix}-sticky_columns`]: isStickyColumns,
        });

        if (isStickyColumns) {
            return (
                <div
                    className={containerClasses}
                    style={style}
                >
                    <div
                        className={`${classNamePrefix}_fixed_body`}
                        onScroll={this.onScroll}
                    >
                        <DataGridTable
                            {...this.props}
                            classNamePrefix={classNamePrefix}
                            collapsed={collapsed}
                            idPrefix="body"
                            ref={(ref) => { this.bodyTable = ref; }}
                            sizes={sizes}
                            style={{ minWidth }}
                        />
                    </div>

                    <div className={`${classNamePrefix}_fixed_column`}>
                        <DataGridTable
                            {...this.props}
                            classNamePrefix={classNamePrefix}
                            columns={_.slice(columns, 0, stickyColumns)}
                            dropShadow={scrolledRight}
                            idPrefix="column"
                            onSplitter={this.onSplitterClick}
                            onSplitterDragEnd={this.onSplitterDragEnd}
                            sizes={sizes}
                        />
                    </div>

                    <div className={`${classNamePrefix}_fixed_bottom`} />
                </div>
            );
        }

        return (
            <div
                className={containerClasses}
                style={style}
            >
                <DataGridTable
                    {...this.props}
                    classNamePrefix={classNamePrefix}
                />
            </div>
        );
    }
}

DataGrid.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fontSize: PropTypes.string,
    handle: PropTypes.bool,
    minWidth: PropTypes.number,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
    rowProps: PropTypes.func,
    small: PropTypes.bool,
    stickyColumnWidth: PropTypes.number,
    stickyColumns: PropTypes.number,
    style: PropTypes.shape({}),
};

DataGrid.defaultProps = {
    bleed: true,
    className: undefined,
    fontSize: undefined,
    handle: true,
    minWidth: 800,
    rowProps: undefined,
    small: undefined,
    stickyColumns: 0,
    stickyColumnWidth: 30,
    style: {},
};

export default DataGrid;
