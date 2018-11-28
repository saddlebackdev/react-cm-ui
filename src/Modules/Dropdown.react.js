'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';
import Select from 'react-select';

import Button from '../Elements/Button.react';
import DropdownItem from './DropdownItem.react';
import Icon from '../Elements/Icon.react';
import Modal from './Modal.react';

import Utils from '../utils/Utils.js';
import DOMUtils from '../utils/DOMUtils.js';

class CustomSelect extends Select {
    renderHiddenField(valueArray) {
        const options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
        const menu = this.renderMenu(options, valueArray);
        const styles = Object.assign({}, this.props.menuContainerStyle, {visibility: 'hidden'});

        return (
            <div className="Select-menu-outer" style={styles}>
                <div
                    role="listbox"
                    tabIndex={-1}
                    className="Select-menu"
                    id={this._instancePrefix + '-list'}
                    style={this.props.menuStyle}
                >
                    {menu}
                </div>
            </div>
        );
    }
};

const customCreatableSelect = props => <CustomSelect {...props}/>;

class Dropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            menuIsOpen: false,
            menuPositionStyle: {},
            menuXPosition: 'left',
            menuYPosition: 'top',
            value: props.value || null
        };

        this._onClickOutside = this._onClickOutside.bind(this);
        this._onDropdownMenuReposition = this._onDropdownMenuReposition.bind(this);
        this._onDropdownMenuResize = this._onDropdownMenuResize.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { value: currentPropsValue } = this.props;
        const { value: previousPropsValue } = prevProps;

        if (!_.isEqual(currentPropsValue, previousPropsValue)) {
            this.setState({ menuIsOpen: false, value: currentPropsValue });
        }
    }

    render() {
        const { button, buttonColor, buttonCompact, children,
            className, clearable, disable, fluid, iconColor,
            iconInverse, iconPosition, iconSize, iconTitle, iconType,
            inverse, label, labelStyle, options, placeholder, searchable,
            selection, selectionCreatable, selectionMatchProp, selectionMenuContainerStyle,
            selectionMenuStyle, selectionMobile, selectionOptionComponent,
            selectionValueComponent, selectionMultiple, selectionRequired,
            selectionUnderline, style, tabIndex, text, theme } = this.props;
        const { menuIsOpen, menuPositionStyle } = this.state;
        const isButtonDisabled = buttonColor === 'disable';
        const containerClasses = ClassNames('ui', 'dropdown', className, {
            'dropdown-button': button,
            'dropdown-button-compact': buttonCompact,
            'dropdown-color-alert': buttonColor === 'alert',
            'dropdown-color-disable': disable || buttonColor === 'disable',
            'dropdown-color-inverse': buttonColor === 'inverse',
            'dropdown-color-light': buttonColor === 'light',
            'dropdown-color-outline': buttonColor === 'outline',
            'dropdown-color-primary': !buttonColor || buttonColor === 'primary',
            'dropdown-color-alternate': buttonColor === 'alternate',
            'dropdown-color-secondary': buttonColor === 'secondary',
            'dropdown-color-success': buttonColor === 'success',
            'dropdown-color-transparent': buttonColor === 'transparent',
            'dropdown-color-warning': buttonColor === 'warning',
            'dropdown-disable': disable,
            'dropdown-fluid': fluid,
            'dropdown-icon': iconType,
            'dropdown-inverse': inverse,
            'dropdown-is-active': this.state.menuIsOpen,
            'dropdown-menu-theme-dark': theme === 'dark',
            'dropdown-menu-theme-light': theme === 'light',
            'dropdown-selection': selection,
            'dropdown-selection-underline': selectionUnderline
        });

        let dropdownIconTitle = iconTitle || placeholder;

        if (_.isEmpty(dropdownIconTitle) && _.isString(text)) {
            dropdownIconTitle = text;
        }

        let items, labelJSX;

        if (label) {
            labelJSX = (
                <label className="label" style={labelStyle}>
                    {label}

                    {selectionRequired && !this.state.value ? (
                        <span className="input-required-indicator">*</span>
                    ) : null}
                </label>
            );
        }

        if (children && !selection) {
            items = React.Children.map(children, (child, index) => {
                if (!_.isNil(child)) {
                    const { iconColor, iconInverse, iconType, id, label } = child.props;
                    const itemClass = ClassNames('dropdown-item', child.props.className, {
                        'dropdown-item-is-selected': this.state.value ? this.state.value.label === label : false
                    });
                    const value = {
                        id: id,
                        label: label
                    }

                    return (
                        <li
                            className={itemClass}
                            key={'dropdown-menu-item-' + index}
                        >
                            <span onClick={this._onDropdownMenuItemClick.bind(this, value)}>
                                {iconType ? <Icon inverse={iconInverse} color={iconColor} title={value.label} type={iconType} /> : null}
                                {value.label}
                            </span>
                        </li>
                    );
                }
            });
        }

        if (selection) {
            const newSelectionMenuContainerStyle = Object.assign({}, selectionMenuContainerStyle, menuPositionStyle);

            if (!selectionCreatable) {
                return (
                    <MediaQuery maxWidth={767}>
                        {matches => {
                            if (selectionMobile && matches) {
                                return (
                                    <div
                                        className={containerClasses}
                                        ref={dropdownContainer => { this.dropdownContainer = dropdownContainer }}
                                        style={style}
                                    >
                                        {labelJSX}

                                        <div
                                            className="dropdown-selection-mobile-button"
                                            onClick={this._onSelectionMobileModalToggle.bind(this)}
                                        >
                                            {placeholder && !this.state.value ? (
                                                <span className="placeholder">{placeholder}</span>
                                            ) : (
                                                <span className="label">{this.state.value.label}</span>
                                            )}

                                            <Icon color={disable ? 'disable' : null} compact title={dropdownIconTitle} type="arrows-alt" />
                                        </div>

                                        <Modal
                                            isOpen={this.state.isModalOpen}
                                            onClose={this._onSelectionMobileModalToggle.bind(this)}
                                            title={placeholder}
                                        >
                                            {this._onSelectionMobileItemRenderer()}
                                        </Modal>
                                    </div>
                                );
                            } else {
                                return (
                                    <div
                                        className={containerClasses}
                                        ref={dropdownContainer => { this.dropdownContainer = dropdownContainer }}
                                        style={style}
                                    >
                                        {labelJSX}

                                        <CustomSelect
                                            arrowRenderer={() => {
                                                return (
                                                    <div>
                                                        <Icon
                                                            compact={true}
                                                            size={selectionUnderline ? 10 : 16}
                                                            title={dropdownIconTitle}
                                                            type={iconType ? iconType : selectionUnderline ? 'caret-down' : 'chevron-down'}
                                                        />
                                                    </div>
                                                );
                                            }}
                                            clearRenderer={() => {
                                                return (
                                                    <div>
                                                        <Icon
                                                            compact
                                                            size={selectionUnderline ? 10 : 16}
                                                            title={'Clear Selection'}
                                                            type="times"
                                                        />
                                                    </div>
                                                );
                                            }}
                                            clearable={!clearable ? clearable : true}
                                            disabled={disable}
                                            matchProp={selectionMatchProp || 'any'}
                                            menuContainerStyle={selectionMenuContainerStyle}
                                            menuRenderer={this._menuRenderer.bind(this)}
                                            menuStyle={selectionMenuStyle}
                                            multi={selectionMultiple}
                                            name="firstSelect"
                                            onChange={this._onChange.bind(this)}
                                            onOpen={this._onSelectionMenuOpen.bind(this)}
                                            optionComponent={selectionOptionComponent}
                                            options={options}
                                            placeholder={placeholder}
                                            searchable={!searchable ? searchable : true}
                                            tabIndex={_.isNumber(tabIndex) ? tabIndex.toString() : tabIndex}
                                            value={this.state.value}
                                            valueComponent={selectionValueComponent}
                                        />
                                    </div>
                                );
                            }
                        }}
                    </MediaQuery>
                );
            } else if (selectionCreatable) {
                return (
                    <div
                        className={containerClasses}
                        ref={dropdownContainer => { this.dropdownContainer = dropdownContainer }}
                        style={style}
                    >
                        {labelJSX}

                        <Select.Creatable
                            arrowRenderer={() => {
                                return (
                                    <div>
                                        <Icon compact size={16} title={dropdownIconTitle} type="chevron-down" />
                                    </div>
                                );
                            }}
                            clearRenderer={() => {
                                return (
                                    <div>
                                        <Icon compact size={16} title={'Clear Selection'} type="times" />
                                    </div>
                                );
                            }}
                            clearable={!clearable ? clearable : true}
                            disabled={disable}
                            menuContainerStyle={selectionMenuContainerStyle}
                            menuRenderer={this._menuRenderer.bind(this)}
                            menuStyle={selectionMenuStyle}
                            multi={selectionMultiple}
                            name="firstSelect"
                            onChange={this._onChange.bind(this)}
                            onOpen={this._onSelectionMenuOpen.bind(this)}
                            optionComponent={selectionOptionComponent}
                            options={options}
                            placeholder={placeholder}
                            searchable={!searchable ? searchable : true}
                            tabIndex={_.isNumber(tabIndex) ? tabIndex.toString() : tabIndex}
                            value={this.state.value}
                            valueComponent={selectionValueComponent}
                        >
                            {customCreatableSelect}
                        </Select.Creatable>
                    </div>
                );
            }
        }

        return (
            <div
                className={containerClasses}
                onClick={this._onDropdownClick.bind(this)}
                ref={dropdownContainer => { this.dropdownContainer = dropdownContainer }}
                style={style}
            >
                {iconPosition === 'left' ? (
                    <Icon
                        color={this.state.menuIsOpen && !button ? 'highlight' : button ? iconColor || null : null}
                        inverse={iconInverse}
                        size={iconSize || 'small'}
                        title={dropdownIconTitle}
                        type={iconType || 'chevron-down'}
                    />
                ) : null}

                {labelJSX}

                {placeholder || text || this.state.value ? (
                    <span className="dropdown-selection-value">
                        {text ? text : this.state.value ? this.state.value.label : placeholder}
                    </span>
                ) : null}

                {!iconPosition || iconPosition === 'right' ? (
                    <Icon
                        color={this.state.menuIsOpen && !button ? 'highlight' : button ? iconColor || null : null}
                        compact
                        inverse={iconInverse}
                        size={iconSize || 'small'}
                        title={dropdownIconTitle}
                        type={iconType || 'chevron-down'}
                    />
                ) : null}

                <MediaQuery maxWidth={767}>
                    {matches => {
                        return (
                            <ul
                                className="dropdown-menu"
                                onClick={this._onDropdownMenuClick.bind(this)}
                                ref={el => this.dropdownMenu = el}
                                style={Object.assign({}, menuPositionStyle, {
                                    opacity: menuIsOpen ? 1 : 0,
                                    visibility: menuIsOpen ? 'visible' : 'hidden'
                                })}
                            >
                                {items}
                            </ul>
                        );
                    }}
                </MediaQuery>
            </div>
        );
    }

    componentDidMount() {
        document.addEventListener('click', this._onClickOutside);
        document.addEventListener('scroll', this._onDropdownMenuReposition);
        window.addEventListener('resize', this._onDropdownMenuResize);
        this._onDropdownMenuReposition();
    }

    componentWillUnmount() {
        document.removeEventListener('click', this._onClickOutside);
        document.removeEventListener('scroll', this._onDropdownMenuReposition);
        window.removeEventListener('resize', this._onDropdownMenuResize);
    }

    _menuRenderer(params) {
        const items = _.map(params.options, (o, i) => {
            if (this.props.selectionOptionComponent) {
                const OptionComponent = this.props.selectionOptionComponent;

                return (
                    <OptionComponent
                        isFocused={params.isFocused}
                        key={`select-option-key-${i}`}
                        onFocus={() => params.onFocus(o)}
                        onSelect={() => params.selectValue(o)}
                        option={o}
                    />
                );
            }

            return (
                <div
                    className="Select-option"
                    key={`select-option-key-${i}`}
                    onClick={() => params.selectValue(o)}
                    onMouseOver={() => params.focusOption(o)}
                >
                    {o.label}
                </div>
            );
        });

        return (
            <ScrollBar
                autoHeight={true}
                autoHeightMax={this.props.menuMaxHeight || 180}
                autoHeightMin={this.props.menuMinHeight}
                autoHide={true}
                className="select-menu-scrollbar"
                ref={el => this.dropdownMenu = el}
            >
                {items}
            </ScrollBar>
        );
    }

    _onChange(selectedOption) {
        const { collapseMenuOnChange, onChange, onClose } = this.props;

        if (!_.isUndefined(onChange)) {
            onChange(selectedOption);

            if (collapseMenuOnChange) {
                this.setState({ menuIsOpen: false });
            }
        } else {
            const updatedState = { value: selectedOption };

            if (collapseMenuOnChange) {
                updatedState.menuIsOpen = false;
                if (_.isFunction(onClose)) {
                    onClose();
                }
            }

            this.setState(updatedState);
        }
    }

    _onClickOutside(event) {
        const { menuIsOpen } = this.state;

        if (this.dropdownContainer && ReactDOM.findDOMNode(this.dropdownContainer).contains(event.target) && menuIsOpen) {
            return;
        }

        this.setState({ menuIsOpen: false });

        const { onClose } = this.props;
        if (_.isFunction(onClose)) {
            onClose();
        }
    }

    _onDropdownClick(event) {
        event.stopPropagation();

        const { disable, onOpen, onClose } = this.props;
        const updatedMenuOpenState = !this.state.menuIsOpen;

        if (!disable) {
            this.setState({
                menuIsOpen: updatedMenuOpenState
            });

            if (updatedMenuOpenState) {
                if (_.isFunction(onOpen)) {
                    onOpen();
                }
            } else {
                if (_.isFunction(onClose)) {
                    onClose();
                }
            }
        }
    }

    _onDropdownMenuItemClick(selectedOption, event) {
        event.stopPropagation();

        this._onChange(selectedOption)
    }

    _onDropdownMenuClick(event) {
        // Prevents click event from bubbling up and closing the menu
        event.stopPropagation();
    }

    _onDropdownMenuReposition() {
        const { button } = this.props;
        const { menuIsOpen } = this.state;
        const dropdownContainerEl = ReactDOM.findDOMNode(this.dropdownContainer);
        const dropdownMenuEl = ReactDOM.findDOMNode(this.dropdownMenu);
        const dropdownMenuObj = DOMUtils.isInViewport(dropdownMenuEl, dropdownContainerEl);
        const isInTop = dropdownMenuObj.isInTop;
        const isInRight = dropdownMenuObj.isInRight;
        const isInBottom = dropdownMenuObj.isInBottom;
        const isInLeft = dropdownMenuObj.isInLeft;
        const topBias = dropdownMenuObj.topBias;
        const bottomBias = dropdownMenuObj.bottomBias;
        let menuXPosition, menuYPosition;

        if (isInRight) {
            menuXPosition = 'left';
        } else {
            menuXPosition = 'right';
        }

        if (isInBottom) {
            menuYPosition = 'top';
        } else if (isInTop) {
            menuYPosition = 'bottom';
        } else {
            if (topBias < 0) {
                menuYPosition = 'bottom';
            } else if (bottomBias < 0) {
                menuYPosition = 'top';
            } else {
                menuYPosition = topBias < bottomBias ? 'top' : 'bottom';
            }
        }

        this.setState({
            menuXPosition,
            menuYPosition,
            menuPositionStyle: {
                bottom: menuYPosition === 'bottom' ? `${dropdownContainerEl.getBoundingClientRect().height}px` : null,
                left: menuXPosition === 'left' ? 0 : null,
                right: menuXPosition === 'right' ? 0 : null,
                top: menuYPosition === 'top' ? `${dropdownContainerEl.getBoundingClientRect().height}px` : null,
            }
        });
    }

    _onDropdownMenuResize() {
        this._onDropdownMenuReposition();
    }

    _onSelectionMenuOpen() {
        // debugger;
        const { onOpen } = this.props;
        if (_.isFunction(onOpen)) {
            onOpen();
        }
    }

    _onSelectionMobileModalToggle() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    _onSelectionMobileItemClick(selectedOption) {
        this._onChange(selectedOption);
        this._onSelectionMobileModalToggle();
    }

    _onSelectionMobileItemRenderer() {
        const items = _.map(this.props.options, (o, i) => {
            return (
                <Button
                    className="Select-option"
                    color="light"
                    compact={true}
                    fluid={true}
                    inverse={true}
                    key={`select-option-key-${i}`}
                    onClick={this._onSelectionMobileItemClick.bind(this, o)}
                    style={{
                        margin: '3px 0',
                        textAlign: 'left'
                    }}
                >
                    {o.label}
                </Button>
            );
        });

        return items;
    }
}

Dropdown.Item = DropdownItem;

Dropdown.propTypes = {
    button: PropTypes.bool,
    buttonColor: PropTypes.oneOf(Utils.colorEnums()),
    buttonCompact: PropTypes.bool,
    className: PropTypes.string,
    clearable: PropTypes.bool,
    collapseMenuOnChange: PropTypes.bool,
    disable: PropTypes.bool,
    fluid: PropTypes.bool,
    iconColor: PropTypes.oneOf(Utils.colorEnums()),
    iconInverse: PropTypes.bool,
    iconPosition: PropTypes.oneOf([ 'left', 'right' ]),
    iconSize: PropTypes.oneOfType([
        PropTypes.oneOf(Utils.sizeEnums()),
        PropTypes.number
    ]),
    iconTitle: PropTypes.string,
    iconType: PropTypes.string,
    inverse: PropTypes.bool,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    menuMaxHeight: PropTypes.number,
    menuMinHeight: PropTypes.number,
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    onOpen: PropTypes.func,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    searchable: PropTypes.bool,
    selectionCreatable: PropTypes.bool,
    selectionMatchProp: PropTypes.oneOf([ 'any', 'label', 'value' ]),
    selectionMenuContainerStyle: PropTypes.object,
    selectionMenuStyle: PropTypes.object,
    selectionMobile: PropTypes.bool,
    selectionMultiple: PropTypes.bool,
    selectionOptionComponent: PropTypes.func,
    selectionRequired: PropTypes.bool,
    selectionUnderline: PropTypes.bool,
    selectionValueComponent: PropTypes.func,
    style: PropTypes.object,
    tabIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    text: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    theme: PropTypes.oneOf(Utils.themeEnums()),
    value: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.number,
        PropTypes.object,
        PropTypes.string
    ])
};

export default Dropdown;
