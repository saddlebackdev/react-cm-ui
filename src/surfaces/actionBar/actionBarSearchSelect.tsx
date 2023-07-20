import React from 'react';
import Select from '../../inputs/select';
import Divider from '../../dataDisplay/divider';
import {
    UI_CLASS_NAME,
} from '../../global/constants';

type SelectOption<TValue = number, TLabel = string> = {
    label: TLabel;
    value: TValue;
};

type PropTypes = {
    dropdownArrowIconType?: string;
    onChange: (value: SelectOption | number | string | null) => void;
    options: SelectOption[];
    placeholder?: string;
    value: number | string | SelectOption | null;
};

const defaultProps: Pick<PropTypes, 'dropdownArrowIconType' | 'placeholder'> = {
    dropdownArrowIconType: 'caret-down',
    placeholder: 'Select',
};

function ActionBarSearchSelect(props: PropTypes) {
    const {
        dropdownArrowIconType,
        onChange,
        options,
        placeholder,
        value,
    } = props;

    return (
        <React.Fragment>
            <Select
                // @ts-ignore
                className="action_bar--search_select"
                data-testid={`${UI_CLASS_NAME}--search_select`}
                dropdownArrowIconType={dropdownArrowIconType}
                options={options}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            />
            <div className="action_bar--search_divider_container">
                <Divider
                    className="action_bar--search_divider"
                    data-testid={`${UI_CLASS_NAME}--search_divider`}
                    designVersion={2}
                    orientation="vertical"
                    variant="middle"
                />
            </div>
        </React.Fragment>
    );
}

ActionBarSearchSelect.defaultProps = defaultProps;

export default ActionBarSearchSelect;
