import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Icon,
    Select,
} from 'react-cm-ui';
import { options } from '../constants';

function ExampleCreatableAdvancedSelect() {
    const [selectedValue, setOption] = useState({});

    function onSelectOption(selectedOption) {
        setOption(selectedOption);
    }

    const formatOptionLabelCustom = ({
        key,
        onFocus,
        onSelect,
        option,
    }) => (
        <div
            className="Select-option"
            key={key}
            onClick={() => onSelect(option)}
            onFocus={() => {}}
            onKeyDown={() => {}}
            onMouseOver={() => onFocus(option)}
            role="option"
            aria-selected="true"
            tabIndex={0}
            style={{
                display: 'flex',
            }}
        >
            <Icon
                color="static"
                type="user-circle"
            />
            <span>
                {option.label}
            </span>
        </div>
    );

    const formatValueComponent = ({
        children,
    }) => (
        <div className="Select-value">
            <span
                className="Select-value-label"
            >
                <Icon
                    color="success"
                    type="user-circle"
                    style={{
                        verticalAlign: 'middle',
                        marginTop: '-3px',
                    }}
                />
                <span>
                    {children}
                </span>
            </span>
        </div>
    );

    const formatCreatableLabelOption = (label) => label;

    return (
        <div>
            <Select
                clearable
                creatable
                id="block--creatable_advanced_select_id"
                options={options}
                optionComponent={formatOptionLabelCustom}
                onChange={onSelectOption}
                placeholder="Select Option"
                promptTextCreator={formatCreatableLabelOption}
                searchable
                selection
                value={!isEmpty(selectedValue) ? selectedValue : null}
                valueComponent={!isEmpty(selectedValue) ? formatValueComponent : undefined}
            />
        </div>
    );
}

export default ExampleCreatableAdvancedSelect;
