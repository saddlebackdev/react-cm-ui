import {
    map,
    isEmpty,
    kebabCase,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    PROP_TYPES_ROW_COMPONENT_CLASS_NAME,
    PROP_TYPES_ROW_COMPONENT_ID,
    PROP_TYPES_ROW_COMPONENT_ON_CHANGE,
    PROP_TYPES_ROW_COMPONENT_PLACEHOLDER,
    PROP_TYPES_ROW_COMPONENT_TAB_INDEX,
    PROP_TYPES_ROW_COMPONENT_TYPE,
    PROP_TYPES_ROW_COMPONENT_VAULE,
    PROP_TYPES_ROW_OPTIONS,
} from './constants';
import {
    BEM_FILTERS_RAIL_ROW,
} from '../../global/constants';
import FiltersRailCheckbox from './filtersRailCheckbox';
import FiltersRailRadio from './filtersRailRadio';
import Radio from '../../inputs/radio';
import Select from '../../inputs/select';

const propTypes = {
    classes: PROP_TYPES_ROW_COMPONENT_CLASS_NAME,
    className: PROP_TYPES_ROW_COMPONENT_CLASS_NAME,
    id: PROP_TYPES_ROW_COMPONENT_ID,
    onChange: PROP_TYPES_ROW_COMPONENT_ON_CHANGE,
    options: PROP_TYPES_ROW_OPTIONS.isRequired,
    placeholder: PROP_TYPES_ROW_COMPONENT_PLACEHOLDER,
    tabIndex: PROP_TYPES_ROW_COMPONENT_TAB_INDEX,
    type: PROP_TYPES_ROW_COMPONENT_TYPE.isRequired,
    value: PROP_TYPES_ROW_COMPONENT_VAULE,
};

const defaultProps = {
    classes: null,
    className: null,
    id: null,
    onChange: null,
    placeholder: null,
    tabIndex: -1,
    value: null,
};

function FiltersRailRowComponent(props) {
    const {
        classes,
        className,
        id,
        onChange,
        options,
        placeholder,
        tabIndex,
        type,
        value,
    } = props;

    const rootContainer = ClassNames(
        BEM_FILTERS_RAIL_ROW,
    );

    return (
        <div
            className={rootContainer}
        >
            {type === 'checkbox' && (
                <FiltersRailCheckbox />
            )}

            {type === 'jsx'}

            {type === 'radio' && (
                <FiltersRailRadio />
            )}

            {type === 'radioPill' && (
                <Radio
                    fluid
                    pill
                >
                    {!isEmpty(options) && map(options, (option, index) => (
                        <Radio.Item
                            checked={option.checked}
                            className={option.className}
                            classes={option.classes}
                            id={option.id}
                            key={`${kebabCase(option.label)}-${index}`}
                            label={option.label}
                            tabIndex={option.tabIndex}
                        />
                    ))}
                </Radio>
            )}

            {type === 'select' && (
                <Select
                    classes={classes}
                    className={className}
                    id={id}
                    onChange={onChange}
                    options={options}
                    placeholder={placeholder}
                    value={value}
                    tabIndex={tabIndex}
                    underline
                />
            )}
        </div>
    );
}

FiltersRailRowComponent.propTypes = propTypes;
FiltersRailRowComponent.defaultProps = defaultProps;

export default FiltersRailRowComponent;
