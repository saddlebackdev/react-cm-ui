import _ from 'lodash';
import ClassNames from 'classnames';
import Drawer from '../modules/drawer.js';
import Dropdown from './dropdown.js';
import Header from '../elements/header.js';
import Icon from '../elements/icon.js';
import Label from '../elements/label.js';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

class MultiSelectLabel extends React.PureComponent {
    constructor() {
        super();

        this._onClearClick = this._onClearClick.bind(this);
    }

    render() {
        const { label } = this.props;

        return (
            <Label
                color="success"
                onClearClick={this._onClearClick}
            >
                {label}
            </Label>
        );
    }

    _onClearClick() {
        const { itemOnChange, selectedOption, value } = this.props;
        const filteredOptions = _.differenceBy(value, [ selectedOption ], 'value');

        itemOnChange(filteredOptions);
    }
}

MultiSelectLabel.propTypes = {
    itemOnChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    selectedOption: PropTypes.object.isRequired,
    value: PropTypes.array.isRequired,
};

class PageFiltersDrawer extends React.Component {
    constructor() {
        super();

        this._onMultiSelectLabelClearClick = this._onMultiSelectLabelClearClick.bind(this);
        this._onMultiSelectChange = this._onMultiSelectChange.bind(this);
    }

    render() {
        const {
            children,
            className,
            isDirty,
            isFiltering,
            isOpen,
            onApply,
            onClear,
            onClose,
            rows,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', 'page--filters_drawer', className);
        const isClearFiltersDisabled = isFiltering || isDirty;
        const clearFiltersClasses = ClassNames('clear-filters', 'font-size-xsmall', 'font-weight-semibold');

        let rowKeyNum = 1;
        let itemKeyNum = 1;

        return (
            <MediaQuery
                maxWidth={767}
            >
                <Drawer
                    className={containerClasses}
                    isOpen={isOpen}
                    onClose={onClose}
                    style={style}
                >
                    <Drawer.TitleBar
                        closeButton={
                            <Icon
                                compact
                                onClick={onClose}
                                type="times"
                            />
                        }
                        title={
                            <div className="ui header title" title="Filters">
                                {isClearFiltersDisabled ? (
                                    <a
                                        className={clearFiltersClasses}
                                        onClick={onClear}
                                    >
                                        Clear Filters
                                    </a>
                                ) : (
                                    <Icon
                                        color="static"
                                        onClick={onApply}
                                        size="medium"
                                        type="filter"
                                    />
                                )}
                            </div>
                        }
                    />

                    <Drawer.Content>
                        {_.map(rows, row => {
                            return (
                                <div
                                    className="page--filters_drawer-row"
                                    key={`page--filters-drawer-row-${rowKeyNum++}`}
                                >
                                    {row.header && <Header weight="bold">{row.header}</Header>}

                                    {_.isArray(row.items) && _.map(row.items, item => {
                                        const className = 'page--filters_drawer-item';
                                        const itemKey = `page--filters-drawer-row-item-${itemKeyNum++}`;

                                        if (!item.jsx && !item.dropdown && !item.label && !item.multiSelect) {
                                            console.warn(
                                                '<Page.FiltersDrawer>\'s rows.items must have one of the ' +
                                                'following properties: dropdown, labels, multiSelect or jsx.'
                                            );

                                            // Dropdown
                                        } else if (!item.jsx && item.dropdown && !item.label && !item.multiSelect) {
                                            const { dropdown } = item;

                                            return (
                                                <div
                                                    className={className}
                                                    key={itemKey}
                                                >
                                                    <Dropdown
                                                        clearable={false}
                                                        className={dropdown.className}
                                                        fluid
                                                        id={dropdown.id}
                                                        onChange={(selectedOption) => dropdown.onChange(selectedOption)}
                                                        options={dropdown.options}
                                                        searchable={false}
                                                        selection
                                                        selectionOptionComponent={dropdown.selectionCustomComponent}
                                                        style={dropdown.style}
                                                        value={dropdown.value}
                                                    />
                                                </div>
                                            );
                                        } else if (!item.jsx && !item.dropdown && item.labels && !item.multiSelect) { // Label
                                            return (
                                                <div
                                                    className={className}
                                                    key={itemKey}
                                                >
                                                    Labels
                                                </div>
                                            );

                                            // Multi Select
                                        } else if (!item.jsx && !item.dropdown && !item.label && item.multiSelect) {
                                            const { multiSelect } = item;
                                            const modifiedOptions = _.differenceBy(
                                                multiSelect.options,
                                                multiSelect.value,
                                                'value'
                                            );

                                            return (
                                                <div
                                                    className={className}
                                                    key={itemKey}
                                                >
                                                    <Dropdown
                                                        clearable={false}
                                                        className={multiSelect.className}
                                                        fluid
                                                        iconType="plus"
                                                        id={multiSelect.id}
                                                        onChange={
                                                            (selectedOption) =>
                                                                this._onMultiSelectChange(
                                                                    multiSelect.onChange,
                                                                    multiSelect.value,
                                                                    selectedOption
                                                                )
                                                        }
                                                        options={modifiedOptions}
                                                        placeholder={multiSelect.placeholder}
                                                        searchable={false}
                                                        selection
                                                        selectionOptionComponent={multiSelect.selectionCustomComponent}
                                                        style={multiSelect.style}
                                                        value={''}
                                                    />

                                                    {!_.isEmpty(multiSelect.value) &&
                                                        _.map(multiSelect.value, v => {
                                                            const selectedOption = v;

                                                            return (
                                                                <MultiSelectLabel
                                                                    key={`multi-select-label-${itemKey}`}
                                                                    itemOnChange={multiSelect.onChange}
                                                                    label={v.label}
                                                                    selectedOption={selectedOption}
                                                                    value={multiSelect.value}
                                                                />
                                                            );
                                                        })
                                                    }
                                                </div>
                                            );

                                            // JSX
                                        } else if (item.jsx && !item.dropdown && !item.label && !item.multiSelect) {
                                            return (
                                                <div
                                                    className={className}
                                                    key={itemKey}
                                                >
                                                    {item.jsx}
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            );
                        })}

                        {children}
                    </Drawer.Content>
                </Drawer>
            </MediaQuery>
        );
    }

    _onMultiSelectLabelClearClick(itemOnChange, value, selectedOption) {
        const filteredOptions = _.differenceBy(value, [ selectedOption ], 'value');

        itemOnChange(filteredOptions);
    }

    _onMultiSelectChange(itemOnChange, value, selectedOption) {
        const filteredOptions = _.union(value, [ selectedOption ]);

        itemOnChange(filteredOptions);
    }
}

PageFiltersDrawer.propTypes = {
    className: PropTypes.string,
    isDirty: PropTypes.bool.isRequired,
    isFiltering: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onApply: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    rows: PropTypes.array,
    style: PropTypes.object,
};

export default PageFiltersDrawer;
