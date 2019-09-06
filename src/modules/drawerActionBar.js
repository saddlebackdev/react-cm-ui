import _ from 'lodash';
import ClassNames from 'classnames';
import Grid from '../collections/grid.js';
import List from '../elements/list.js';
import PropTypes from 'prop-types';
import React from 'react';

const hasClassName = 'has-drawer--action_bar';

class DrawerActionBar extends React.PureComponent {
    render() {
        const { children, className, columns, style } = this.props;
        const containerClasses = ClassNames('ui', 'action_bar', 'drawer--action_bar', className);

        return (
            <div
                className={containerClasses}
                ref={ref => this._drawerActionBarRef = ref}
                style={style}
            >
                {columns && (
                    <Grid
                        className="action_bar--grid"
                        verticalAlign="middle"
                    >
                        {_.map(columns, (column, index) => {
                            const gridColumnClasses = ClassNames('action_bar--grid_column', column.className);

                            return (
                                <Grid.Column
                                    className={gridColumnClasses}
                                    key={`action_bar--grid_column-${index}`}
                                    style={Object.assign({}, {
                                        flexBasis: column.flexBasis || 'auto',
                                        flexGrow: column.flexGrow || 0,
                                        flexShrink: column.flexShrink || 0,
                                        width: 'auto',
                                    }, column.style)}
                                >
                                    {!column.columns && column.jsx}

                                    {_.isArray(column.columns) && !column.jsx && (
                                        <List
                                            className="action_bar--list"
                                            divide
                                            horizontal
                                        >
                                            {_.map(column.columns, (listItem, index) => {
                                                const containerClasses = ClassNames('action_bar--list_item', className);

                                                return (
                                                    <List.Item
                                                        className={containerClasses}
                                                        key={`drawer-action-bar-grid-column-list-item-${index}`}
                                                    >
                                                        {listItem.jsx}
                                                    </List.Item>
                                                );
                                            })}
                                        </List>
                                    )}
                                </Grid.Column>
                            );
                        })}
                    </Grid>
                )}

                {children}
            </div>
        );
    }

    componentDidMount() {
        this._drawerActionBarRef.closest('.ui.drawer').classList.add(hasClassName);
    }

    componentWillUnmount() {
        this._drawerActionBarRef.closest('.ui.drawer').classList.remove(hasClassName);
    }
}

DrawerActionBar.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.array,
    style: PropTypes.object,
};

export default DrawerActionBar;
