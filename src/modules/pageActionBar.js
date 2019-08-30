import _ from 'lodash';
import Button from '../elements/button.js';
import ClassNames from 'classnames';
import Drawer from './drawer.js';
import Grid from '../collections/grid.js';
import Header from '../elements/header.js';
import Icon from '../elements/icon.js';
import Input from '../elements/input.js';
import List from '../elements/list.js';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

const nop = () => {};

class ActionsButtonDrawerOption extends React.Component {
    constructor() {
        super();

        this.state = {
            isHover: false,
        };

        this._onOptionToggle = this._onOptionToggle.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { props: prevProps, state: prevState } = this;

        return !_.isEqual(prevProps.option, nextProps.option) || prevState.isHover !== nextState.isHover;
    }

    render() {
        const { option } = this.props;
        const { isHover } = this.state;
        const containerClasses = ClassNames('action_bar--actions_button_drawer_option', {
            'action_bar--actions_button_drawer_option-disable': option.disable,
            'action_bar--actions_button_drawer_option-hover': isHover,
        });
        const iconContainerClasses = ClassNames('actions_button_drawer_option--icon_container', {
            'actions_button_drawer_option--icon_container-disc': option.iconDisc,
            'actions_button_drawer_option--icon_container-hover': option.iconDisc && isHover,
        });

        return (
            <div
                className={containerClasses}
                onClick={option.onClick}
                onMouseOut={this._onOptionToggle}
                onMouseOver={this._onOptionToggle}
            >
                <div
                    className={iconContainerClasses}
                    style={{
                        backgroundColor: option.iconDiscColor,
                        height: !option.iconDisc && option.iconSize,
                    }}
                >
                    <Icon
                        color={option.iconColor}
                        compact
                        className="actions_button_drawer_option--icon"
                        inverse={isHover || option.iconDisc}
                        size={
                            !option.iconDisc && option.iconSize ||
                            (
                                option.iconDisc &&
                                option.iconSize &&
                                option.iconSize <= 24 &&
                                option.iconSize
                            ) ||
                            (option.iconDisc ? 16 : 24)
                        }
                        type={option.iconType}
                    />
                </div>

                <div
                    className="actions_button_drawer_option--label"
                >
                    {option.label}
                </div>
            </div>
        );
    }

    _onOptionToggle() {
        this.setState(prevState => ({
            isHover: !prevState.isHover,
        }));
    }
}

ActionsButtonDrawerOption.propsTypes = {
    option: PropTypes.object.isRequired,
};

class ActionsButton extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isDrawerOpen: false,
        };

        this._onDrawerToggle = this._onDrawerToggle.bind(this);
    }

    render() {
        const {
            header,
            options,
            style,
        } = this.props;
        const { isDrawerOpen } = this.state;
        let optionKeyNum = 1;

        return (
            <React.Fragment>
                <Button
                    className="action_bar--actions_button"
                    color={isDrawerOpen ? 'highlight' : 'alternate'}
                    icon
                    onClick={this._onDrawerToggle}
                    style={style}
                >
                    <Icon size="medium" type="ellipsis-h" />
                </Button>

                <Drawer
                    className="action_bar--actions_button_drawer"
                    dimmer={false}
                    isOpen={isDrawerOpen}
                    maxWidth={224}
                    onClose={this._onDrawerToggle}
                    positionYOffset={55 + 70}
                    shadowSize="xsmall"
                >
                    <Drawer.Content className="action_bar--actions_button_drawer_content">
                        <Header size="small" fontWeight="bold">{header}</Header>

                        <div className="action_bar--actions_button_drawer_options">
                            {_.map(options, option => {
                                return (
                                    <ActionsButtonDrawerOption
                                        key={`action_bar--actions_button_drawer_option-${optionKeyNum++}`}
                                        option={option}
                                    />
                                );
                            })}
                        </div>
                    </Drawer.Content>
                </Drawer>
            </React.Fragment>
        );
    }

    _onDrawerToggle() {
        this.setState(prevState => ({
            isDrawerOpen: !prevState.isDrawerOpen,
        }));
    }
}

ActionsButton.propTypes = {
    header: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    style: PropTypes.object,
};

class Search extends React.Component {
    constructor() {
        super();

        this._onClearClick = this._onClearClick.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
    }

    render() {
        const {
            style,
            value,
        } = this.props;

        return (
            <Input
                fluid
                icon={value ?
                    <Icon
                        compact
                        onClick={this._onClearClick}
                        title="Clear Search"
                        type="times"
                    /> :
                    <Icon
                        compact
                        title="Search"
                        type="search"
                    />
                }
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                placeholder="Search"
                value={value}
                style={style}
            />
        );
    }

    _onChange(value) {
        const { onChange } = this.props;

        onChange(value);
    }

    _onClearClick() {
        const { onChange } = this.props;

        onChange('');
    }

    _onKeyDown(event) {
        const { onKeyDown } = this.props;

        if (_.isFunction(onKeyDown)) {
            onKeyDown(event);
        }
    }
}

Search.propTypes = {
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func,
    style: PropTypes.object,
};

class PageActionBar extends React.Component {
    constructor() {
        super();

        this._onClearSearchClick = this._onClearSearchClick.bind(this);
        this._onSearchChange = this._onSearchChange.bind(this);
        this._onSearchKeyDown = this._onSearchKeyDown.bind(this);
    }

    render() {
        const { children, className, columns, style } = this.props;
        const containerClasses = ClassNames('ui', 'action_bar', 'action_bar-page', className);
        let columnKeyNum = 1;
        let listItemKeyNum = 1;

        return (
            <header className={containerClasses} style={style}>
                <div style={{ width: '100%' }}>
                    {columns && (
                        <Grid
                            className="action_bar--grid"
                            verticalAlign="middle"
                        >
                            {_.map(columns, (column, index) => {
                                const {
                                    actionsButton,
                                    button,
                                    jsx,
                                    list,
                                    search,
                                } = column;
                                const gridColumnClasses = ClassNames('action_bar--grid_column', column.className);

                                if (!jsx && !actionsButton && !button && !list && !search) {
                                    console.warn(
                                        '<Page.ActionsBar>\'s column object must have one of the ' +
                                        'following properties: button, jsx, list, or search.'
                                    );
                                } else if (!jsx && actionsButton && !button && !list && !search) {
                                    // Button
                                    return (
                                        <Grid.Column
                                            className={gridColumnClasses}
                                            key={`drawer--action_bar--grid_column-${columnKeyNum++}`}
                                            style={Object.assign({}, {
                                                flexBasis: column.flexBasis || 'auto',
                                                flexGrow: column.flexGrow || 0,
                                                flexShrink: column.flexShrink || 0,
                                                width: 'auto',
                                            }, column.style)}
                                        >
                                            <ActionsButton
                                                header={actionsButton.header}
                                                options={actionsButton.options}
                                                style={actionsButton.style}
                                            />
                                        </Grid.Column>
                                    );
                                } else if (!jsx && !actionsButton && button && !list && !search) {
                                    // Button
                                    return (
                                        <Grid.Column
                                            className={gridColumnClasses}
                                            key={`drawer--action_bar--grid_column-${columnKeyNum++}`}
                                            style={Object.assign({}, {
                                                flexBasis: column.flexBasis || 'auto',
                                                flexGrow: column.flexGrow || 0,
                                                flexShrink: column.flexShrink || 0,
                                                width: 'auto',
                                            }, column.style)}
                                        >
                                            <Button
                                                color={button.color}
                                                onClick={button.onClick}
                                                style={button.style}
                                            >
                                                {button.iconType && <Icon type={button.iconType} />}
                                                {button.label && <span>{button.label}</span>}
                                            </Button>
                                        </Grid.Column>
                                    );
                                } else if (!jsx && !actionsButton && !button && list && !search) {
                                    // List
                                    return (
                                        <Grid.Column
                                            className={gridColumnClasses}
                                            key={`drawer--action_bar--grid_column-${columnKeyNum++}`}
                                            style={Object.assign({}, {
                                                flexBasis: column.flexBasis || 'auto',
                                                flexGrow: column.flexGrow || 0,
                                                flexShrink: column.flexShrink || 0,
                                                width: 'auto',
                                            }, column.style)}
                                        >
                                            {_.isArray(column.list) && (
                                                <List
                                                    className="action_bar--list"
                                                    divide
                                                    horizontal
                                                >
                                                    {_.map(column.list, item => {
                                                        const {
                                                            jsx,
                                                            iconBack,
                                                            iconFilter,
                                                            iconGrid,
                                                            iconTable,
                                                        } = item;
                                                        const className = ClassNames('action_bar--list_item', {
                                                            'action_bar--list_item-jsx': jsx,
                                                            'action_bar--list_item-icon_filter': iconFilter,
                                                            'action_bar--list_item-icon_grid': iconGrid,
                                                            'action_bar--list_item-icon_table': iconTable,
                                                        });
                                                        const itemKey = `action_bar--list_item-${listItemKeyNum++}`;

                                                        if (iconBack) {
                                                            const {
                                                                onClick,
                                                                selected,
                                                                title,
                                                            } = iconBack;

                                                            return (
                                                                <List.Item
                                                                    className={className}
                                                                    key={itemKey}
                                                                >
                                                                    <Icon
                                                                        color={selected ?
                                                                            'highlight' :
                                                                            null
                                                                        }
                                                                        onClick={onClick}
                                                                        title={title || 'Back'}
                                                                        type="chevron-left"
                                                                    />
                                                                </List.Item>
                                                            );
                                                        } else if (iconFilter) {
                                                            const {
                                                                isFiltering,
                                                                onClick,
                                                                selected,
                                                                title,
                                                            } = iconFilter;

                                                            return (
                                                                <List.Item
                                                                    className={className}
                                                                    key={itemKey}
                                                                >
                                                                    <Icon
                                                                        color={selected || isFiltering ?
                                                                            'highlight' :
                                                                            null
                                                                        }
                                                                        onClick={onClick}
                                                                        title={title || 'Filter'}
                                                                        type="filter"
                                                                    />
                                                                </List.Item>
                                                            );
                                                        } else if (iconGrid) {
                                                            const {
                                                                onClick,
                                                                selected,
                                                                title,
                                                            } = iconGrid;

                                                            return (
                                                                <List.Item
                                                                    className={className}
                                                                    key={itemKey}
                                                                >
                                                                    <Icon
                                                                        color={selected ?
                                                                            'highlight' :
                                                                            null
                                                                        }
                                                                        onClick={onClick}
                                                                        title={title || 'Grid View'}
                                                                        type="grid"
                                                                    />
                                                                </List.Item>
                                                            );
                                                        } else if (iconTable) {
                                                            const {
                                                                onClick,
                                                                selected,
                                                                title,
                                                            } = iconTable;

                                                            return (
                                                                <List.Item
                                                                    className={className}
                                                                    key={itemKey}
                                                                >
                                                                    <Icon
                                                                        color={selected ?
                                                                            'highlight' :
                                                                            null
                                                                        }
                                                                        onClick={onClick}
                                                                        title={title || 'Table View'}
                                                                        type="list"
                                                                    />
                                                                </List.Item>
                                                            );
                                                        } else if (jsx) {
                                                            return (
                                                                <List.Item
                                                                    className={className}
                                                                    key={itemKey}
                                                                >
                                                                    {jsx}
                                                                </List.Item>
                                                            );
                                                        } else {
                                                            console.warn(
                                                                '<Page.ActionsBar>\'s column.list object must have one of the ' +
                                                                'following properties: iconFilter, iconGrid, or iconTable.'
                                                            );

                                                            return false;
                                                        }
                                                    })}
                                                </List>
                                            )}
                                        </Grid.Column>
                                    );
                                } else if (!jsx && !actionsButton && !button && !list && search) {
                                    // Search
                                    return (
                                        <Grid.Column
                                            className={gridColumnClasses}
                                            key={`drawer--action_bar--grid_column-${columnKeyNum++}`}
                                            style={Object.assign({}, {
                                                flexBasis: column.flexBasis || 'auto',
                                                flexGrow: column.flexGrow || 1,
                                                flexShrink: column.flexShrink || 0,
                                                width: 'auto',
                                            }, column.style)}
                                        >
                                            <Search
                                                onChange={search.onChange}
                                                onKeyDown={search.onKeyDown}
                                                value={search.value}
                                            />
                                        </Grid.Column>
                                    );
                                } else if (jsx && !actionsButton && !button && !list && !search) {
                                    // JSX
                                    return (
                                        <Grid.Column
                                            className={gridColumnClasses}
                                            key={`drawer--action_bar--grid_column-${columnKeyNum++}`}
                                            style={Object.assign({}, {
                                                flexBasis: column.flexBasis || 'auto',
                                                flexGrow: column.flexGrow || 0,
                                                flexShrink: column.flexShrink || 0,
                                                width: 'auto',
                                            }, column.style)}
                                        >
                                            {jsx}
                                        </Grid.Column>
                                    );
                                }
                            })}
                        </Grid>
                    )}

                    {children}
                </div>
            </header>
        );
    }

    _onClearSearchClick() {

    }

    _onSearchChange() {

    }

    _onSearchKeyDown() {

    }
}

PageActionBar.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.array,
    style: PropTypes.object,
};

export default PageActionBar;
