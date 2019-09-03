import _ from 'lodash';
import Button from '../elements/button.js';
import ClassNames from 'classnames';
import Drawer from './drawer.js';
import Grid from '../collections/grid.js';
import Header from '../elements/header.js';
import Icon from '../elements/icon.js';
import Input from '../elements/input.js';
import List from '../elements/list.js';
import PropTypes from 'prop-types';
import React from 'react';

class ActionsButtonDrawerOption extends React.Component {
    constructor() {
        super();

        this._onParentClick = this._onParentClick.bind(this);
        this._onSubOptionClick = this._onSubOptionClick.bind(this);
    }

    render() {
        const {
            hide,
            isSelected,
            option,
        } = this.props;
        const containerClasses = ClassNames('action_bar--actions_button_drawer_option', {
            'action_bar--actions_button_drawer_option-hide': hide,
            'action_bar--actions_button_drawer_option-selected': isSelected,
        });
        const parentOptionClasses = ClassNames('actions_button_drawer_option--parent', {
            'actions_button_drawer_option--parent-selected': isSelected,
            'actions_button_drawer_option--parent-disable': option.disable,
        });
        const subOptionsClasses = ClassNames('actions_button_drawer_option--sub_options', {
            'actions_button_drawer_option--sub_options-hide': !isSelected,
        });
        let subOptionClassNameNum = 1;
        let subOptionKeyNum = 1;

        return (
            <div
                className={containerClasses}
            >
                <div
                    className={parentOptionClasses}
                    onClick={this._onParentClick}
                >
                    <div
                        className="actions_button_drawer_option_parent--icon_container"
                        id={option.id}
                        style={{
                            backgroundColor: option.iconBackgroundColor,
                        }}
                    >
                        <Icon
                            color={option.iconColor}
                            compact
                            className="actions_button_drawer_option_parent--icon"
                            inverse
                            size={option.iconSize || 16}
                            type={option.iconType}
                        />
                    </div>

                    <div
                        className="actions_button_drawer_option_parent--label"
                    >
                        {option.label}
                    </div>
                </div>

                {option.options &&
                    <div className={subOptionsClasses}>
                        {_.map(option.options, subOption => {
                            const subOptionClasses = ClassNames(
                                'actions_button_drawer_sub_option',
                                `actions_button_drawer_sub_option-${subOptionClassNameNum++}`,
                                {
                                    'actions_button_drawer_sub_option-show': isSelected,
                                }
                            );

                            return (
                                <div
                                    className={subOptionClasses}
                                    key={`actions_button_drawer_sub_option-${subOptionKeyNum++}`}
                                    onClick={this._onSubOptionClick}
                                >
                                    <div
                                        className="actions_button_drawer_sub_option--icon_container"
                                        id={subOption.id}
                                    >
                                        <Icon
                                            color={subOption.iconColor}
                                            compact
                                            className="actions_button_drawer_sub_option--icon"
                                            size={subOption.iconSize || 16}
                                            type={subOption.iconType}
                                        />
                                    </div>

                                    <div
                                        className="actions_button_drawer_option--label"
                                    >
                                        {subOption.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        );
    }

    _onSubOptionClick(onClick) {

    }

    _onParentClick() {
        const { isSelected, onClick, option } = this.props;

        if (_.isFunction(option.onClick)) {
            option.onClick();

            return false;
        }

        onClick(isSelected ? {} : option);
    }
}

ActionsButtonDrawerOption.propsTypes = {
    hide: PropTypes.bool,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    option: PropTypes.object.isRequired,
};

class ActionsButton extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isDrawerOpen: false,
            selectedOption: {},
        };

        this._onDrawerCloseComplete = this._onDrawerCloseComplete.bind(this);
        this._onDrawerToggle = this._onDrawerToggle.bind(this);
        this._onOptionClick = this._onOptionClick.bind(this);
    }

    render() {
        const {
            header,
            id,
            isMobileSearchVisible,
            options,
            style,
        } = this.props;
        const { isDrawerOpen, selectedOption } = this.state;
        const isSelectedOption = !_.isEmpty(selectedOption);
        const titleClasses = ClassNames('action_bar--actions_button_drawer_title', {
            'action_bar--actions_button_drawer_title-hide': isSelectedOption,
        });
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
                    onCloseComplete={this._onDrawerCloseComplete}
                    positionYOffset={headerHeight + actionBarHeight}
                    shadowSize="xsmall"
                >
                    <Drawer.Content className="action_bar--actions_button_drawer_content">
                        <Header
                            className={titleClasses}
                            size="small"
                            fontWeight="bold"
                        >
                            {header}
                        </Header>

                        <div className="action_bar--actions_button_drawer_options">
                            {_.map(options, option => {
                                const isSelected = isSelectedOption && selectedOption.label === option.label;
                                const hide = isSelectedOption && selectedOption.label !== option.label || false;

                                return (
                                    <ActionsButtonDrawerOption
                                        hide={hide}
                                        isSelected={isSelected}
                                        key={`action_bar--actions_button_drawer_option-${optionKeyNum++}`}
                                        onClick={this._onOptionClick}
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

    _onDrawerCloseComplete() {
        this.setState({
            selectedOption: {},
        });
    }

    _onDrawerToggle(option) {
        this.setState(prevState => ({
            isDrawerOpen: !prevState.isDrawerOpen,
        }));
    }

    _onOptionClick(option) {
        this.setState({
            selectedOption: option || {},
        });
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
