import _ from 'lodash';
import ClassNames from 'classnames';
import Grid from '../collections/grid.js';
import List from '../elements/list.js';
import PropTypes from 'prop-types';
import React from 'react';

const PageActionBar = (props) => {
    const { children, className, columns, style } = props;
    const containerClasses = ClassNames('ui', 'page--action_bar', className);

    return (
        <header className={containerClasses} style={style}>
            <div style={{ width: '100%' }}>
                {columns && (
                    <Grid verticalAlign="middle">
                        {_.map(columns, (column, index) => {
                            return (
                                <Grid.Column
                                    className={column.className}
                                    key={`drawer-action-bar-grid-column-${index}`}
                                    style={Object.assign({}, {
                                        flexBasis: column.flexBasis || 'auto',
                                        flexGrow: column.flexGrow || 0,
                                        flexShrink: column.flexShrink || 0,
                                        width: 'auto',
                                    }, column.style)}
                                >
                                    {!column.columns && column.jsx}

                                    {_.isArray(column.columns) && !column.jsx && (
                                        <List divide horizontal>
                                            {_.map(column.columns, (listItem, index) => {
                                                return (
                                                    <List.Item
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
        </header>
    );
};

PageActionBar.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.array,
    style: PropTypes.object,
};

export default PageActionBar;
