import React from 'react';
import Select from '../../inputs/select';
import Divider from '../../dataDisplay/divider';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import {
    SelectOption,
} from '../../global/models';

type PropTypes = {
    dropdownArrowIconType?: string;
    onChange: (value: SelectOption | number | string | null) => void;
    onCloseSelectMenu: () => void;
    onOpenSelectMenu: () => void;
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
        onCloseSelectMenu,
        onOpenSelectMenu,
        options,
        placeholder,
        value,
    } = props;

    return (
        <React.Fragment>
            <Select
                // Supressing ts error: Property 'className' does not exist on type 'IntrinsicAttributes & RefAttributes<any>'
                // @ts-ignore
                className="action_bar--search_select"
                data-testid={`${UI_CLASS_NAME}--search_select`}
                dropdownArrowIconType={dropdownArrowIconType}
                options={options}
                onChange={onChange}
                onClose={onCloseSelectMenu}
                onOpen={onOpenSelectMenu}
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
