'use strict';

import 'components/UI/Modules/Dropdown.scss';

import _ from 'lodash';
import ClassNames from 'classnames';
import MediaQuery from 'react-responsive';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import Select from 'react-select';

import Button from 'components/UI/Elements/Button.react';
import DropdownItem from 'components/UI/Modules/DropdownItem.react';
import Icon from 'components/UI/Elements/Icon.react';
import Modal from 'components/UI/Modules/Modal.react';

import UIUtils from 'utils/UI/Utils.js';

export default class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            menuIsOpen: false,
            value: props.value || null
        };

        this._onClickOutsideRef = this._onClickOutside.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            this.setState({
                menuIsOpen: !_.isEqual(this.props.value, nextProps.value),
                value: nextProps.value
            });
        }
    }

    render() {
        const { button, buttonColor, buttonCompact, children,
            className, clearable, disable, fluid, iconColor,
            iconInverse, iconSize, iconType, label,
            options, placeholder, selection,
            selectionCreatable, selectionMenuContainerStyle, selectionMenuStyle,
            selectionMobile, selectionOptionComponent, selectionMultiple, selectionRequired,
            style, tabIndex, theme } = this.props;
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
            'dropdown-color-success': buttonColor === 'success',
            'dropdown-disable': disable,
            'dropdown-fluid': fluid,
            'dropdown-icon': iconType,
            'dropdown-is-active': this.state.menuIsOpen,
            'dropdown-menu-theme-dark': theme === 'dark',
            'dropdown-menu-theme-light': theme === 'light',
            'dropdown-selection': selection
        });
        let items, labelJSX;

        if (label) {
            labelJSX = (
                <label className="label">
                    {selectionRequired && !this.state.value ? (
                        <span className="input-required-indicator">*</span>
                    ) : null}

                    {label}
                </label>
            );
        }

        if (children && !selection) {
            const convertChildren = _.isArray(children) ? children : [ children ];
            items = _.map(convertChildren, (child, index) => {
                const { iconColor, iconInverse, iconType, id, label } = child.props;
                const itemClass = ClassNames('dropdown-item', {
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
                            {iconType ? <Icon inverse={iconInverse} color={iconColor} type={iconType} /> : null}
                            {value.label}
                        </span>
                    </li>
                );z
            });
        }

        if (selection && !selectionCreatable) {
            return (
                <MediaQuery maxWidth={767}>
                    {matches => {
                        if (selectionMobile && matches) {
                            return (
                                <div
                                    className={containerClasses}
                                    ref="dropdownSelectionContainer"
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

                                        <Icon color={disable ? 'disable' : null} compact={true} type="arrows-alt" />
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
                                    ref="dropdownSelectionContainer"
                                    style={style}
                                >
                                    {labelJSX}

                                    <Select
                                        arrowRenderer={() => <Icon compact={true} size="xsmall" type="chevron-wl-down" />}
                                        clearRenderer={() => <Icon compact={true} size="xsmall" type="times" />}
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
                                        tabIndex={_.isNumber(tabIndex) ? tabIndex.toString() : tabIndex}
                                        value={this.state.value}
                                    />
                                </div>
                            );
                        }
                    }}
                </MediaQuery>
            );
        } else if (selection && selectionCreatable) {
            return (
                <div
                    className={containerClasses}
                    ref="dropdownSelectionContainer"
                    style={style}
                >
                    {labelJSX}

                    <Select.Creatable
                        arrowRenderer={() => <Icon compact={true} size="xsmall" type="chevron-wl-down" />}
                        clearRenderer={() => <Icon compact={true} size="xsmall" type="times" />}
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
                        tabIndex={_.isNumber(tabIndex) ? tabIndex.toString() : tabIndex}
                        value={this.state.value}
                    />
                </div>
            );
        }

        return (
            <div
                className={containerClasses}
                onClick={this._onDropdownClick.bind(this)}
                ref="dropdownContainer"
                style={style}
            >
                {labelJSX}

                {!iconType ? [
                    <span className="dropdown-selection-value" key="dropdown-selection-value-key">
                        {this.state.value ? this.state.value.label : placeholder}
                    </span>,
                    <Icon
                        compact={true}
                        color={this.state.menuIsOpen && !button ? 'highlight' : null}
                        key="dropdown-selection-icon-indicator-key"
                        size="xxsmall"
                        type="caret-down"
                    />
                ] : (
                    <Icon
                        color={iconColor}
                        compact={true}
                        inverse={iconInverse}
                        size={iconSize}
                        type={iconType}
                    />
                )}

                <ul
                    className="dropdown-menu"
                    onClick={this._onDropdownMenuClick.bind(this)}
                    style={{ display: this.state.menuIsOpen ? 'block' : 'none' }}
                >
                    {items}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        if (!this.props.selection) {
            document.addEventListener('click', this._onClickOutsideRef);
        }
    }

    componentWillUnmount() {
        if (!this.props.selection) {
            document.removeEventListener('click', this._onClickOutsideRef);
        }
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
            >
                {items}
            </ScrollBar>
        );
    }

    _onChange(selectedOption) {
        if (!_.isUndefined(this.props.onChange)) {
            this.props.onChange(selectedOption);
        } else {
            this.setState({ value: selectedOption });
        }
    }

    _onClickOutside(event) {
        if (this.refs.dropdownContainer.contains(event.target) && this.state.menuIsOpen) {
            return;
        }

        this.setState({ menuIsOpen: false });
    }

    _onDropdownClick(event) {
        event.stopPropagation();

        if (!this.props.disable) {
            this.setState({ menuIsOpen: !this.state.menuIsOpen });
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

    _onSelectionMenuOpen() {
        // debugger;
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

    _valueRenderer() {

    }

}

Dropdown.Item = DropdownItem;

Dropdown.propTypes = {
    button: React.PropTypes.bool,
    buttonColor: React.PropTypes.oneOf(UIUtils.colorEnums()),
    buttonCompact: React.PropTypes.bool,
    className: React.PropTypes.string,
    clearable: React.PropTypes.bool,
    disable: React.PropTypes.bool,
    fluid: React.PropTypes.bool,
    iconColor: React.PropTypes.oneOf(UIUtils.colorEnums()),
    iconInverse: React.PropTypes.bool,
    iconSize: React.PropTypes.oneOf(UIUtils.sizeEnums()),
    iconType: React.PropTypes.string,
    label: React.PropTypes.string,
    menuMaxHeight: React.PropTypes.number,
    menuMinHeight: React.PropTypes.number,
    onChange: React.PropTypes.func,
    options: React.PropTypes.array,
    placeholder: React.PropTypes.string,
    selectionCreatable: React.PropTypes.bool,
    selectionMenuContainerStyle: React.PropTypes.object,
    selectionMenuStyle: React.PropTypes.object,
    selectionMobile: React.PropTypes.bool,
    selectionMultiple: React.PropTypes.bool,
    selectionOptionComponent: React.PropTypes.func,
    selectionRequired: React.PropTypes.bool,
    style: React.PropTypes.object,
    tabIndex: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    theme: React.PropTypes.oneOf(UIUtils.themeEnums()),
    value: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object
    ])
};
