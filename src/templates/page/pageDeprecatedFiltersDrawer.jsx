/* eslint-disable */

import _ from 'lodash';
import ClassNames from 'classnames';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../inputs/button';
import Drawer from '../drawer';
import Dropdown from '../../inputs/dropdown/dropdown';
import Header from '../../dataDisplay/header';
import Icon from '../../dataDisplay/icon';
import Label from '../../dataDisplay/label';

class MultiSelectLabel extends React.PureComponent {
    constructor() {
        super();

        this.onClearClick = this.onClearClick.bind(this);
    }

    onClearClick() {
        const { onItemChange, selectedOption, value } = this.props;
        const filteredOptions = _.differenceBy(value, [ selectedOption ], 'value');

        onItemChange(filteredOptions);
    }

    render() {
        const { color, label } = this.props;

        return (
            <Label
                color={color || 'highlight'}
                onClearClick={this.onClearClick}
                style={{
                    marginRight: '5px',
                    marginTop: '11px',
                }}
            >
                {label}
            </Label>
        );
    }
}

MultiSelectLabel.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string.isRequired,
    onItemChange: PropTypes.func.isRequired,
    selectedOption: PropTypes.shape({}).isRequired,
    value: PropTypes.array.isRequired,
};

class NestedTogglesLabel extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { nestedTogglesData, onClick } = this.props;

        onClick(nestedTogglesData);
    }

    render() {
        const { nestedTogglesData: { label } } = this.props;
        const containerClasses = ClassNames('page_deprecated_filters_drawer--nested_toggles_label');

        return (
            <div
                className={containerClasses}
                onClick={this.onClick}
            >
                <span>{label}</span>

                <Icon compact type="chevron-right" />
            </div>
        );
    }
}

NestedTogglesLabel.propTypes = {
    nestedTogglesData: PropTypes.shape({}).isRequired,
    onClick: PropTypes.func.isRequired,
};

class NestedTogglesWingOptionLabel extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { onClick, option } = this.props;

        onClick(option);
    }

    render() {
        const { isSelected, option: { label } } = this.props;
        const containerClasses = ClassNames('page_deprecated__wing--option', {
            'page_deprecated_filters_drawer_wing--option-selected': isSelected,
        });

        return (
            <div
                className={containerClasses}
                onClick={this.onClick}
            >
                <span>{label}</span>

                {isSelected && <Icon compact inverse type="check" />}
            </div>
        );
    }
}

NestedTogglesWingOptionLabel.propTypes = {
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    option: PropTypes.shape({}).isRequired,
};

class NestedTogglesValueLabel extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { nestedTogglesData, onClick, option } = this.props;

        onClick(nestedTogglesData, option);
    }

    render() {
        const { option: { label } } = this.props;
        const containerClasses = ClassNames('page_deprecated_filters_drawer--nested_toggles_value_label');

        return (
            <div
                className={containerClasses}
            >
                <span>{label}</span>

                <Icon
                    onClick={this.onClick}
                    size="xsmall"
                    type="times"
                />
            </div>
        );
    }
}

NestedTogglesValueLabel.propTypes = {
    nestedTogglesData: PropTypes.shape({}).isRequired,
    onClick: PropTypes.func.isRequired,
    option: PropTypes.shape({}).isRequired,
};

class PageFiltersDrawer extends React.Component {
    constructor() {
        super();

        this.state = {
            nestedTogglesData: {}, // This object is only to be populated when props.rows.items.nestedToggles is true and a label onClick event handler is triggered.
        };

        this.onApplyClick = this.onApplyClick.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
        this.onMultiSelectLabelClearClick = this.onMultiSelectLabelClearClick.bind(this);
        this.onMultiSelectChange = this.onMultiSelectChange.bind(this);
        this.onNestedTogglesCloseWingClick = this.onNestedTogglesCloseWingClick.bind(this);
        this.onNestedTogglesLabelClick = this.onNestedTogglesLabelClick.bind(this);
        this.onNestedTogglesWingOptionLabelClick = this.onNestedTogglesWingOptionLabelClick.bind(this);
        this.onNestedTogglesValueLabelClick = this.onNestedTogglesValueLabelClick.bind(this);
    }

    onApplyClick() {
        const { onApply } = this.props;

        onApply();
    }

    onClearClick() {
        const { onClear } = this.props;

        onClear();
    }

    onMultiSelectLabelClearClick(onItemChange, value, selectedOption) {
        const filteredOptions = _.differenceBy(value, [ selectedOption ], 'value');

        onItemChange(filteredOptions);
    }

    onMultiSelectChange(onItemChange, value, selectedOption) {
        const filteredOptions = _.union(value, [ selectedOption ]);

        onItemChange(filteredOptions);
    }

    onNestedTogglesCloseWingClick() {
        const { nestedTogglesData } = this.state;

        this.setState({
            nestedTogglesData: {},
        }, () => {
            nestedTogglesData.onChange(nestedTogglesData.value);
        });
    }

    onNestedTogglesLabelClick(nestedTogglesData) {
        this.setState({
            nestedTogglesData: _.cloneDeep(nestedTogglesData),
        });
    }

    onNestedTogglesValueLabelClick(nestedTogglesData, selectedOption) {
        const selectedOptions = _.filter(nestedTogglesData.value, d => d.value !== selectedOption.value);

        nestedTogglesData.onChange(selectedOptions);
    }

    onNestedTogglesWingOptionLabelClick(selectedOption) {
        const { nestedTogglesData } = this.state;
        let selectedOptions;

        if (_.some(nestedTogglesData.value, selectedOption)) { // Subtract
            selectedOptions = _.filter(nestedTogglesData.value, d => d.value !== selectedOption.value);
        } else { // Add
            selectedOptions = _.sortBy([ ...nestedTogglesData.value, selectedOption ], [ 'value' ]);
        }

        const newNestedTogglesData = _.mapValues(nestedTogglesData, (d, key) => {
            if (key === 'value') {
                d = selectedOptions;
            }

            return d;
        });

        this.setState({
            nestedTogglesData: _.cloneDeep(newNestedTogglesData),
        });
    }

    render() {
        const {
            children,
            className,
            isDirty,
            isFiltering,
            isOpen,
            onClose,
            rows,
            style,
        } = this.props;
        const { nestedTogglesData } = this.state;
        const containerClasses = ClassNames('ui', 'page--deprecated_filters_drawer', className);
        const canClear = isFiltering || isDirty;
        const clearFiltersClasses = ClassNames('clear-filters', 'font-size-xsmall', 'font-weight-semibold');
        const isNestedTogglesOptionsEmpty = _.isEmpty(nestedTogglesData);

        let rowKeyNum = 1;
        let itemKeyNum = 1;
        let multiSelectLabelKeyNum = 1;
        let nestedTogglesValueLabelKeyNum = 1;
        let nestedTogglesOptionLabelKeyNum = 1;

        return (
            <MediaQuery
                maxWidth={767}
            >
                <Drawer
                    className={containerClasses}
                    isOpen={isOpen}
                    onClose={onClose}
                    style={style}
                    wing={
                        <Drawer.Wing
                            className="page_deprecated_filters_drawer--nested_toggles_wing"
                            isOpen={!isNestedTogglesOptionsEmpty}
                        >
                            <Drawer.TitleBar
                                className="nested_toggles_wing--title_bar"
                                title={
                                    <Icon
                                        className="nested_toggles_wing--close_button"
                                        onClick={this.onNestedTogglesCloseWingClick}
                                        size="medium"
                                        type="chevron-left"
                                    />
                                }
                            />

                            <Drawer.Content
                                className="nested_toggles_wing--content"
                            >
                                <Header
                                    className="nested_toggles_wing--title"
                                    size="small"
                                    weight="bold"
                                >
                                    {nestedTogglesData.label}
                                </Header>

                                <div
                                    className="nested_toggles_wing--options"
                                >
                                    {!isNestedTogglesOptionsEmpty && _.map(nestedTogglesData.options, option => {
                                        const isSelected = _.some(nestedTogglesData.value, option);

                                        return (
                                            <NestedTogglesWingOptionLabel
                                                key={nestedTogglesOptionLabelKeyNum++}
                                                isSelected={isSelected}
                                                onClick={this.onNestedTogglesWingOptionLabelClick}
                                                option={option}
                                            />
                                        );
                                    })}
                                </div>
                            </Drawer.Content>
                        </Drawer.Wing>
                    }
                >
                    <Drawer.TitleBar
                        className="page_deprecated_filters_drawer--title_bar"
                        closeButton={
                            <Icon
                                className="page_deprecated_filters_drawer--close_button"
                                compact
                                onClick={onClose}
                                type="times"
                            />
                        }
                        title={
                            <div className="page_deprecated_filters_drawer--actions" title="Filters">
                                <div
                                    className="page_deprecated_filters_drawer--clear_column"
                                >
                                    {canClear ? (
                                        <a
                                            className={clearFiltersClasses}
                                            onClick={this.onClearClick}
                                        >
                                            Clear Filters
                                        </a>
                                    ) : (
                                        <Icon
                                            color="static"
                                            compact
                                            size="medium"
                                            type="filter"
                                        />
                                    )}
                                </div>

                                <div
                                    className="page_deprecated_filters_drawer--apply_column"
                                >
                                    {isDirty &&
                                        <Button
                                            color="success"
                                            icon
                                            innerStyle={{
                                                height: '32px',
                                                width: '32px',
                                            }}
                                            onClick={this.onApplyClick}
                                            style={{
                                                height: '32px',
                                                minHeight: '32px',
                                                width: '32px',
                                            }}
                                        >
                                            <Icon
                                                compact
                                                type="check"
                                            />
                                        </Button>
                                    }
                                </div>
                            </div>
                        }
                    />

                    <Drawer.Content>
                        {_.map(rows, row => {
                            return (
                                <div
                                    className="page_deprecated_filters_drawer--row"
                                    key={`page--filters-drawer-row-${rowKeyNum++}`}
                                >
                                    {row.header &&
                                        <Header
                                            className="page_deprecated_filters_drawer--header"
                                            weight="bold"
                                        >
                                            {row.header}
                                        </Header>
                                    }

                                    <div
                                        className="page_deprecated_filters_drawer--items"
                                    >
                                        {_.isArray(row.items) && _.map(row.items, item => {
                                            const {
                                                dropdown,
                                                jsx,
                                                multiSelect,
                                                nestedToggles,
                                            } = item;
                                            const className = ClassNames('page_deprecated_filters_drawer--item', {
                                                'page_deprecated_filters_drawer--item-dropdown': dropdown,
                                                'page_deprecated_filters_drawer--item-jsx': jsx,
                                                'page_deprecated_filters_drawer--item-multi_select': multiSelect,
                                                'page_deprecated_filters_drawer--item-nested_toggles': nestedToggles,
                                            });
                                            const itemKey = `page_deprecated_filters_drawer--item-${itemKeyNum++}`;

                                            if (!jsx && !dropdown && !nestedToggles && !multiSelect) {
                                                console.warn(
                                                    '<Page.FiltersDrawer>\'s rows.items must have one of the ' +
                                                    'following properties: dropdown, labels, multiSelect or jsx.'
                                                );
                                            } else if (!jsx && dropdown && !nestedToggles && !multiSelect) {
                                                // Dropdown
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
                                            } else if (!jsx && !dropdown && nestedToggles && !multiSelect) {
                                                // Nested Toggles
                                                return (
                                                    <div
                                                        className={className}
                                                        key={itemKey}
                                                    >
                                                        <NestedTogglesLabel
                                                            onClick={this.onNestedTogglesLabelClick}
                                                            nestedTogglesData={nestedToggles}
                                                        />

                                                        {!_.isEmpty(nestedToggles.value) &&
                                                            <div>
                                                                {_.map(nestedToggles.value, option => {
                                                                    return (
                                                                        <NestedTogglesValueLabel
                                                                            key={`nested-toggles-selected-filter-${nestedTogglesValueLabelKeyNum++}`}
                                                                            nestedTogglesData={nestedToggles}
                                                                            onClick={this.onNestedTogglesValueLabelClick}
                                                                            option={option}
                                                                        />
                                                                    );
                                                                })}
                                                            </div>
                                                        }
                                                    </div>
                                                );
                                            } else if (!jsx && !dropdown && !nestedToggles && multiSelect) {
                                                // Multi Select
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
                                                                    this.onMultiSelectChange(
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
                                                                        color={multiSelect.labelColor}
                                                                        key={`multi-select-label-${multiSelectLabelKeyNum++}`}
                                                                        onItemChange={multiSelect.onChange}
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
                                            } else if (jsx && !dropdown && !nestedToggles && !multiSelect) {
                                                return (
                                                    <div
                                                        className={className}
                                                        key={itemKey}
                                                    >
                                                        {jsx}
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            );
                        })}

                        {children}
                    </Drawer.Content>
                </Drawer>
            </MediaQuery>
        );
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
    style: PropTypes.shape({}),
};

export default PageFiltersDrawer;
