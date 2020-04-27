/* eslint-disable */

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../inputs/button';
import Checkbox from '../inputs/checkbox';
import Drawer from './drawer';
import Dropdown from '../inputs/dropdown';
import Header from '../atoms/header';
import Icon from '../dataDisplay/icon';

class DrawerFiltersDrawer extends React.PureComponent {
    render() {
        const {
            className,
            isDirty,
            isFiltering,
            isOpen,
            onApply,
            onClear,
            onClose,
            position,
            rows,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', 'drawer--filters_drawer', className);
        const isClearFiltersDisabled = isFiltering || isDirty;
        const clearFiltersClasses = ClassNames('clear-filters', 'font-size-xsmall', 'font-weight-semibold', {
            'color-disable': !isClearFiltersDisabled,
        });

        let rowKeyNum = 1;
        let itemKeyNum = 1;
        let itemsId = 1;

        return (
            <Drawer
                className={containerClasses}
                isOpen={isOpen}
                maxWidth={250}
                position={position}
                style={style}
            >
                <Drawer.TitleBar
                    closeButton={<Icon compact onClick={onClose} type="times" />}
                    title="Filters"
                />

                <Drawer.ActionBar
                    columns={[
                        {
                            flexGrow: 1,
                            jsx: (
                                <a
                                    className={clearFiltersClasses}
                                    onClick={!isClearFiltersDisabled ? null : onClear}
                                >
                                    Clear Filters
                                </a>
                            ),
                        }, {
                            jsx: (
                                <Button
                                    disabled={!isDirty}
                                    color="success"
                                    onClick={onApply}
                                    style={{ margin: 0 }}
                                >
                                    <span>Apply</span>
                                </Button>
                            ),
                        },
                    ]}
                />

                <Drawer.Content>
                    {_.map(rows, row => {
                        return (
                            <div
                                className="drawer--filters_drawer-row"
                                key={`drawer--filters-drawer-row-${rowKeyNum++}`}
                            >
                                {row.header && <Header weight="bold">{row.header}</Header>}

                                {_.isArray(row.items) && _.map(row.items, item => {
                                    const className = 'drawer--filters_drawer-item';
                                    const itemKey = `drawer--filters-drawer-row-item-${itemKeyNum++}`;

                                    if (!item.jsx && !item.checkbox && !item.dropdown) {
                                        console.warn(
                                            '<Drawer.FiltersDrawer>\'s rows.items must have one of the ' +
                                            'following properties: checkbox, dropdown or jsx.'
                                        );
                                    } else if (!item.jsx && item.checkbox && !item.dropdown) { // Checkbox
                                        return (
                                            <div
                                                className={className}
                                                key={itemKey}
                                            >
                                                <Checkbox
                                                    checked={item.checkbox.checked}
                                                    id={item.checkbox.id || _.toString(itemsId++)}
                                                    label={item.checkbox.label}
                                                    labelWeight="semibold"
                                                    onChange={(id, checked) => item.checkbox.onChange(id, checked)}
                                                    size="small"
                                                />
                                            </div>
                                        );
                                    } else if (!item.jsx && !item.checkbox && item.dropdown) { // Dropdown
                                        return (
                                            <div
                                                className={className}
                                                key={itemKey}
                                            >
                                                <Dropdown
                                                    clearable={false}
                                                    className={item.dropdown.className}
                                                    fluid
                                                    id={item.dropdown.id}
                                                    onChange={(selectedOption) => item.dropdown.onChange(selectedOption)}
                                                    options={item.dropdown.options}
                                                    searchable={false}
                                                    selection
                                                    selectionOptionComponent={item.dropdown.selectionCustomComponent}
                                                    selectionUnderline
                                                    style={item.dropdown.style}
                                                    value={item.dropdown.value}
                                                />
                                            </div>
                                        );
                                    } else if (item.jsx && !item.checkbox && !item.dropdown) { // JSX
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
                </Drawer.Content>
            </Drawer>
        );
    }
}

DrawerFiltersDrawer.defaultProps = {
    position: 'right',
};

DrawerFiltersDrawer.propTypes = {
    className: PropTypes.string,
    isDirty: PropTypes.bool.isRequired,
    isFiltering: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onApply: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    position: PropTypes.oneOf([ 'left', 'right' ]),
    rows: PropTypes.array.isRequired,
    style: PropTypes.shape({}),
};

export default DrawerFiltersDrawer;
