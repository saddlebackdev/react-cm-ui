import _ from 'lodash';
import ClassNames from 'classnames';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../elements/button';
import Drawer from './drawer'; // eslint-disable-line import/no-cycle
import Dropdown from '../modules/dropdown';
import FiltersDrawerNestedTogglesLabel from './filtersDrawerNestedTogglesLabel';
import FiltersDrawerMultiSelectLabel from './filtersDrawerMultiSelectLabel';
import FiltersDrawerNestedTogglesValueLabel from './filtersDrawerNestedTogglesValueLabel';
import FiltersDrawerNestedTogglesWingOptionLabel from './filtersDrawerNestedTogglesWingOptionLabel';
import Header from '../elements/header';
import Icon from '../elements/icon';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isDirty: PropTypes.bool.isRequired,
    isFiltering: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onApply: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    rows: PropTypes.arrayOf(PropTypes.shape({})),
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    id: undefined,
    rows: undefined,
    style: {},
};

class FiltersDrawer extends React.Component {
    static onMultiSelectChange(onItemChange, value, selectedOption) {
        const filteredOptions = _.union(value, [selectedOption]);

        onItemChange(filteredOptions);
    }

    static onNestedTogglesValueLabelClick(nestedTogglesData, selectedOption) {
        const selectedOptions = _.filter(nestedTogglesData.value, (d) => (
            d.value !== selectedOption.value
        ));

        nestedTogglesData.onChange(selectedOptions);
    }

    constructor() {
        super();

        /**
         * The nestedTogglesData object is only to be populated when props.rows.items.nestedToggles
         * is true and a label onClick event handler is triggered.
         */
        this.state = {
            nestedTogglesData: {},
        };

        this.onApplyClick = this.onApplyClick.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
        this.onNestedTogglesCloseWingClick = this.onNestedTogglesCloseWingClick.bind(this);
        this.onNestedTogglesLabelClick = this.onNestedTogglesLabelClick.bind(this);
        this.onNestedTogglesWingOptionLabelClick =
            this.onNestedTogglesWingOptionLabelClick.bind(this);
    }

    onApplyClick() {
        const { onApply } = this.props;

        onApply();
    }

    onClearClick() {
        const { onClear } = this.props;

        onClear();
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

    onNestedTogglesWingOptionLabelClick(selectedOption) {
        const { nestedTogglesData } = this.state;
        let selectedOptions;

        if (_.some(nestedTogglesData.value, selectedOption)) { // Subtract
            selectedOptions = _.filter(nestedTogglesData.value, (d) => (
                d.value !== selectedOption.value
            ));
        } else { // Add
            selectedOptions = _.sortBy([...nestedTogglesData.value, selectedOption], ['value']);
        }

        const newNestedTogglesData = _.mapValues(nestedTogglesData, (data, key) => {
            let newData = data;

            if (key === 'value') {
                newData = selectedOptions;
            }

            return newData;
        });

        this.setState({
            nestedTogglesData: _.cloneDeep(newNestedTogglesData),
        });
    }

    render() {
        const {
            children,
            className,
            id,
            isDirty,
            isFiltering,
            isOpen,
            onClose,
            rows,
            style,
        } = this.props;
        const { nestedTogglesData } = this.state;
        const containerClasses = ClassNames('ui', 'page--filters_drawer', className);
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
                    id={id}
                    isOpen={isOpen}
                    onClose={onClose}
                    style={style}
                    wing={(
                        <Drawer.Wing
                            className="page_filters_drawer--nested_toggles_wing"
                            isOpen={!isNestedTogglesOptionsEmpty}
                        >
                            <Drawer.TitleBar
                                className="nested_toggles_wing--title_bar"
                                title={(
                                    <Icon
                                        className="nested_toggles_wing--close_button"
                                        onClick={this.onNestedTogglesCloseWingClick}
                                        size="medium"
                                        type="chevron-left"
                                    />
                                )}
                            />

                            qwerty

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
                                    {
                                        !isNestedTogglesOptionsEmpty &&
                                        _.map(nestedTogglesData.options, (option) => {
                                            nestedTogglesOptionLabelKeyNum += 1;
                                            const isSelected = _.some(
                                                nestedTogglesData.value,
                                                option,
                                            );

                                            return (
                                                <FiltersDrawerNestedTogglesWingOptionLabel
                                                    key={nestedTogglesOptionLabelKeyNum}
                                                    isSelected={isSelected}
                                                    onClick={
                                                        this.onNestedTogglesWingOptionLabelClick
                                                    }
                                                    option={option}
                                                />
                                            );
                                        })
                                    }
                                </div>
                            </Drawer.Content>
                        </Drawer.Wing>
                    )}
                >
                    <Drawer.TitleBar
                        className="page_filters_drawer--title_bar"
                        closeButton={(
                            <Icon
                                className="page_filters_drawer--close_button"
                                compact
                                onClick={onClose}
                                type="times"
                            />
                    )}
                        title={(
                            <div className="page_filters_drawer--actions" title="Filters">
                                <div
                                    className="page_filters_drawer--clear_column"
                                >
                                    {/* eslint-disable max-len */}
                                    {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */}
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
                                    {/* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */}
                                    {/* eslint-enable max-len */}
                                </div>

                                <div
                                    className="page_filters_drawer--apply_column"
                                >
                                    {isDirty && (
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
                                    )}
                                </div>
                            </div>
                        )}
                    />

                    <Drawer.Content>
                        {_.map(rows, (row) => {
                            rowKeyNum += 1;

                            return (
                                <div
                                    className="page_filters_drawer--row"
                                    key={`page--filters-drawer-row-${rowKeyNum}`}
                                >
                                    {row.header && (
                                        <Header
                                            className="page_filters_drawer--header"
                                            weight="bold"
                                        >
                                            {row.header}
                                        </Header>
                                    )}

                                    <div
                                        className="page_filters_drawer--items"
                                    >
                                        {/* eslint-disable max-len */}
                                        {_.isArray(row.items) && _.map(row.items, (item) => {
                                            const {
                                                dropdown,
                                                jsx,
                                                multiSelect,
                                                nestedToggles,
                                            } = item;
                                            const itemClassName = ClassNames('page_filters_drawer--item', {
                                                'page_filters_drawer--item-dropdown': dropdown,
                                                'page_filters_drawer--item-jsx': jsx,
                                                'page_filters_drawer--item-multi_select': multiSelect,
                                                'page_filters_drawer--item-nested_toggles': nestedToggles,
                                            });

                                            itemKeyNum += 1;

                                            const itemKey = `page_filters_drawer--item-${itemKeyNum}`;

                                            if (
                                                !jsx &&
                                                dropdown &&
                                                !nestedToggles &&
                                                !multiSelect
                                            ) {
                                                // Dropdown
                                                return (
                                                    <div
                                                        className={itemClassName}
                                                        key={itemKey}
                                                    >
                                                        <Dropdown
                                                            clearable={false}
                                                            className={dropdown.className}
                                                            fluid
                                                            id={dropdown.id}
                                                            onChange={(selectedOption) => {
                                                                dropdown.onChange(selectedOption);
                                                            }}
                                                            options={dropdown.options}
                                                            searchable={false}
                                                            selection
                                                            selectionOptionComponent={
                                                                dropdown.selectionCustomComponent
                                                            }
                                                            style={dropdown.style}
                                                            value={dropdown.value}
                                                        />
                                                    </div>
                                                );
                                            }

                                            if (
                                                !jsx &&
                                                !dropdown &&
                                                nestedToggles &&
                                                !multiSelect
                                            ) {
                                                // Nested Toggles
                                                return (
                                                    <div
                                                        className={className}
                                                        key={itemKey}
                                                    >
                                                        <FiltersDrawerNestedTogglesLabel
                                                            onClick={this.onNestedTogglesLabelClick}
                                                            nestedTogglesData={nestedToggles}
                                                        />

                                                        {!_.isEmpty(nestedToggles.value) && (
                                                            <div>
                                                                {_.map(
                                                                    nestedToggles.value,
                                                                    (option) => {
                                                                        nestedTogglesValueLabelKeyNum += 1;

                                                                        return (
                                                                            <FiltersDrawerNestedTogglesValueLabel
                                                                                key={`nested-toggles-selected-filter-${nestedTogglesValueLabelKeyNum}`}
                                                                                nestedTogglesData={nestedToggles}
                                                                                onClick={FiltersDrawer.onNestedTogglesValueLabelClick}
                                                                                option={option}
                                                                            />
                                                                        );
                                                                    },
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            }

                                            if (
                                                !jsx &&
                                                !dropdown &&
                                                !nestedToggles &&
                                                multiSelect
                                            ) {
                                                // Multi Select
                                                const modifiedOptions = _.differenceBy(
                                                    multiSelect.options,
                                                    multiSelect.value,
                                                    'value',
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
                                                            onChange={(selectedOption) => {
                                                                FiltersDrawer.onMultiSelectChange(
                                                                    multiSelect.onChange,
                                                                    multiSelect.value,
                                                                    selectedOption,
                                                                );
                                                            }}
                                                            options={modifiedOptions}
                                                            placeholder={multiSelect.placeholder}
                                                            searchable={false}
                                                            selection
                                                            selectionOptionComponent={
                                                                multiSelect.selectionCustomComponent
                                                            }
                                                            style={multiSelect.style}
                                                            value=""
                                                        />

                                                        {!_.isEmpty(multiSelect.value) &&
                                                                _.map(multiSelect.value, (v) => {
                                                                    const selectedOption = v;
                                                                    multiSelectLabelKeyNum += 1;

                                                                    return (
                                                                        <FiltersDrawerMultiSelectLabel
                                                                            color={multiSelect.labelColor}
                                                                            key={`multi-select-label-${multiSelectLabelKeyNum}`}
                                                                            onItemChange={multiSelect.onChange}
                                                                            label={v.label}
                                                                            selectedOption={selectedOption}
                                                                            value={multiSelect.value}
                                                                        />
                                                                    );
                                                                })}
                                                    </div>
                                                );

                                                // JSX
                                            }

                                            if (
                                                jsx &&
                                                !dropdown &&
                                                !nestedToggles &&
                                                !multiSelect
                                            ) {
                                                return (
                                                    <div
                                                        className={className}
                                                        key={itemKey}
                                                    >
                                                        {jsx}
                                                    </div>
                                                );
                                            }

                                            console.warn( // eslint-disable-line no-console
                                                '<Page.FiltersDrawer>\'s rows.items must ' +
                                                'have one of the following properties: ' +
                                                'dropdown, labels, multiSelect or jsx.',
                                            );

                                            return null;
                                        })}
                                        {/* eslint-enable max-len */}
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

FiltersDrawer.propTypes = propTypes;
FiltersDrawer.defaultProps = defaultProps;

export default FiltersDrawer;
