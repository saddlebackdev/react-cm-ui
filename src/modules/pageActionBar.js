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
                    id={option.id}
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
            id,
            isMobileSearchVisible,
            options,
            style,
        } = this.props;
        const { isDrawerOpen } = this.state;
        const headerHeight = 55;
        const actionBarHeight = isMobileSearchVisible ? 105 : 50;
        let optionKeyNum = 1;

        return (
            <React.Fragment>
                <Button
                    className="action_bar--actions_button"
                    color={isDrawerOpen ? 'highlight' : 'alternate'}
                    icon
                    id={id}
                    onClick={this._onDrawerToggle}
                    style={style}
                >
                    <Icon size="small" type="ellipsis-h" />
                </Button>

                <Drawer
                    className="action_bar--actions_button_drawer"
                    dimmer={false}
                    isOpen={isDrawerOpen}
                    maxWidth={224}
                    onClose={this._onDrawerToggle}
                    positionYOffset={headerHeight + actionBarHeight}
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
    id: PropTypes.string,
    isMobileSearchVisible: PropTypes.bool,
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
            id,
            isMobileSearch,
            isMobileSearchVisible,
            style,
            value,
        } = this.props;
        const inputContainerClasses = ClassNames('action_bar--search', {
            'action_bar--search-mobile': isMobileSearch,
            'action_bar--search-mobile-show': isMobileSearch && isMobileSearchVisible,
        });

        return (
            <div
                className={inputContainerClasses}
            >
                <Input
                    className="action_bar--search_input"
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
                    id={id}
                    onChange={this._onChange}
                    onKeyDown={this._onKeyDown}
                    placeholder="Search"
                    value={value}
                    style={style}
                />
            </div>
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
    id: PropTypes.string,
    isMobileSearch: PropTypes.bool,
    isMobileSearchVisible: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func,
    style: PropTypes.object,
};

class PageActionBar extends React.Component {
    constructor() {
        super();

        this.state = {
            isMobileSearchVisible: false,
        };

        this._onMobileSearchIconToggle = this._onMobileSearchIconToggle.bind(this);
    }

    render() {
        const { children, className, columns, id, style } = this.props;
        const { isMobileSearchVisible } = this.state;
        const containerClasses = ClassNames('ui', 'action_bar', 'action_bar-page', className);
        let searchDataForMobile = null;
        let gridColumnKeyNum = 1;
        let gridColumnListItemKeyNum = 1;

        return (
            <header
                className={containerClasses}
                id={id}
                style={style}
            >
                <div style={{ width: '100%' }}>
                    {columns && (
                        <React.Fragment>
                            <Grid
                                className="action_bar--grid"
                                verticalAlign="middle"
                            >
                                {_.map(columns, column => {
                                    const {
                                        button,
                                        jsx,
                                        list,
                                        search,
                                    } = column;
                                    const gridColumnClasses = ClassNames('action_bar--grid_column', column.className);
                                    const gridColumnKey = `action_bar--grid_column-${gridColumnKeyNum++}`;

                                    if (!button && !jsx && !list && !search) {
                                        console.warn(
                                            '<Page.ActionsBar>\'s column object must have one of the ' +
                                            'following properties: button, jsx, or list.' +
                                            'Please check this column object ' + JSON.stringify(column)
                                        );

                                        return false;
                                    }

                                    return (
                                        <Grid.Column
                                            className={gridColumnClasses}
                                            key={gridColumnKey}
                                            style={Object.assign({}, {
                                                flexBasis: column.flexBasis || 'auto',
                                                flexGrow: column.flexGrow || 0,
                                                flexShrink: column.flexShrink || 0,
                                                width: 'auto',
                                            }, column.style)}
                                        >
                                            {button &&
                                                <Button
                                                    color={button.color}
                                                    id={button.id}
                                                    onClick={button.onClick}
                                                    style={button.style}
                                                >
                                                    {button.iconType && <Icon type={button.iconType} />}
                                                    {button.label && <span>{button.label}</span>}
                                                </Button>
                                            }

                                            {list && _.isArray(list) &&
                                                <List
                                                    className="action_bar--list"
                                                    horizontal
                                                >
                                                    {_.map(column.list, item => {
                                                        const {
                                                            actionsButton,
                                                            jsx,
                                                            iconBack,
                                                            iconFilter,
                                                            iconGrid,
                                                            iconSearch,
                                                            iconTable,
                                                        } = item;
                                                        const divide = _.isUndefined(item.divide) || item.divide;
                                                        const className = ClassNames('action_bar--list_item', {
                                                            'action_bar--list_item-jsx': jsx,
                                                            'action_bar--list_item-icon_filter': iconFilter,
                                                            'action_bar--list_item-icon_grid': iconGrid,
                                                            'action_bar--list_item-icon_table': iconTable,
                                                        });
                                                        const itemKey = `action_bar--list_item-${gridColumnListItemKeyNum++}`;

                                                        if (!actionsButton &&
                                                            !jsx &&
                                                            !iconBack &&
                                                            !iconFilter &&
                                                            !iconGrid &&
                                                            !iconSearch &&
                                                            !iconTable
                                                        ) {
                                                            console.warn(
                                                                '<Page.ActionsBar>\'s column.list object must have one of the ' +
                                                                'following properties: actionsButton, iconBack, iconFilter, iconGrid, or iconTable.' +
                                                                'Please check this column.list object ' + JSON.stringify(item)
                                                            );

                                                            return false;
                                                        }

                                                        if (iconSearch) {
                                                            searchDataForMobile = (
                                                                <Search
                                                                    {...iconSearch}
                                                                    isMobileSearch
                                                                    isMobileSearchVisible={isMobileSearchVisible}
                                                                    type="mobileSearch"
                                                                />
                                                            );
                                                        }

                                                        return (
                                                            <List.Item
                                                                className={className}
                                                                divide={divide}
                                                                key={itemKey}
                                                                style={Object.assign({}, {
                                                                    alignItems: item.alignItems || 'flex-start',
                                                                    flexBasis: item.flexBasis || 'auto',
                                                                    flexGrow: item.flexGrow || 0,
                                                                    flexShrink: item.flexShrink || 0,
                                                                    width: 'auto',
                                                                }, list.style)}
                                                            >
                                                                {actionsButton &&
                                                                    <ActionsButton
                                                                        id={actionsButton.id}
                                                                        isMobileSearchVisible={isMobileSearchVisible}
                                                                        header={actionsButton.header}
                                                                        options={actionsButton.options}
                                                                        style={actionsButton.style}
                                                                    />
                                                                }

                                                                {iconBack &&
                                                                    <Icon
                                                                        color={iconBack.selected ?
                                                                            'highlight' :
                                                                            null
                                                                        }
                                                                        id={iconBack.id}
                                                                        onClick={iconBack.onClick}
                                                                        title={iconBack.title || 'Back'}
                                                                        type="chevron-left"
                                                                    />
                                                                }

                                                                {iconFilter &&
                                                                    <Icon
                                                                        color={iconFilter.selected || iconFilter.isFiltering ?
                                                                            'highlight' :
                                                                            null
                                                                        }
                                                                        id={iconFilter.id}
                                                                        onClick={iconFilter.onClick}
                                                                        title={iconFilter.title || 'Filter'}
                                                                        type="filter"
                                                                    />
                                                                }

                                                                {iconGrid &&
                                                                    <Icon
                                                                        color={iconGrid.selected ?
                                                                            'highlight' :
                                                                            null
                                                                        }
                                                                        id={iconGrid.id}
                                                                        onClick={iconGrid.onClick}
                                                                        title={iconGrid.title || 'Grid View'}
                                                                        type="grid"
                                                                    />
                                                                }

                                                                {iconSearch &&
                                                                    <Icon
                                                                        className="action_bar--search_icon"
                                                                        color={isMobileSearchVisible ?
                                                                            'highlight' :
                                                                            null
                                                                        }
                                                                        id={iconSearch.id}
                                                                        onClick={this._onMobileSearchIconToggle}
                                                                        title={iconSearch.title || 'Search'}
                                                                        type="search"
                                                                    />
                                                                }

                                                                {iconTable &&
                                                                    <Icon
                                                                        color={iconTable.selected ?
                                                                            'highlight' :
                                                                            null
                                                                        }
                                                                        id={iconTable.id}
                                                                        onClick={iconTable.onClick}
                                                                        title={iconTable.title || 'Table View'}
                                                                        type="list"
                                                                    />
                                                                }

                                                                {jsx}
                                                            </List.Item>
                                                        );
                                                    })}
                                                </List>
                                            }

                                            {search &&
                                                <Search
                                                    id={search.id}
                                                    onChange={search.onChange}
                                                    onKeyDown={search.onKeyDown}
                                                    value={search.value}
                                                />
                                            }

                                            {jsx}
                                        </Grid.Column>
                                    );
                                })}
                            </Grid>

                            {searchDataForMobile}
                        </React.Fragment>
                    )}

                    {children}
                </div>
            </header>
        );
    }

    _onMobileSearchIconToggle() {
        this.setState(prevState => ({
            isMobileSearchVisible: !prevState.isMobileSearchVisible,
        }));
    }
}

PageActionBar.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.array,
    id: PropTypes.string,
    style: PropTypes.object,
};

export default PageActionBar;
