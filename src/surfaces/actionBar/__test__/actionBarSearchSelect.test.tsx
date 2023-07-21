/**
 * To run this test:
 * npx jest ./src/surfaces/actionBar/__test__/actionBarSearchSelect.test.tsx
 */

import React from 'react';
import {
    fireEvent,
    render,
    screen,
} from '../../../testUtils';
import {
    UI_CLASS_NAME,
} from '../../../global/constants';
import ActionBarSearchSelect from '../actionBarSearchSelect';

const OPTIONS = [
    {
        label: 'Option 1',
        value: 1,
    }, {
        label: 'Option 2',
        value: 2,
    },
];

describe('<ActionBarSearchSelect />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const onChangeMock = jest.fn();

    const props = {
        onChange: onChangeMock,
        options: OPTIONS,
        value: null,
    };

    it('Should render without problems', () => {
        render(
            <ActionBarSearchSelect
                {...props}
            />,
        );

        expect(screen.queryByTestId(`${UI_CLASS_NAME}--search_select`)).toBeInTheDocument();
        expect(screen.queryByTestId(`${UI_CLASS_NAME}--search_divider`)).toBeInTheDocument();
        expect(screen.queryByTestId(`${UI_CLASS_NAME}-icon-caret-down`)).toBeInTheDocument();

        // Should render Select placeholder
        expect(screen.getByTitle('Select')).toBeInTheDocument();
    });

    it('Should render all options', () => {
        render(
            <ActionBarSearchSelect
                {...props}
            />,
        );

        OPTIONS.forEach((option) => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    it('Should render with onChange props', () => {
        render(
            <ActionBarSearchSelect
                {...props}
            />,
        );

        const selectElement = screen.getByTestId('cmui--search_select');

        // Open the dropdown by clicking on the select
        fireEvent.mouseDown(selectElement);

        // Find and click on the desired option
        const optionElement = screen.getByText(OPTIONS[1].label);
        fireEvent.click(optionElement);
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith(OPTIONS[1]);
    });

    it('Should render with custom props', () => {
        const customIcon = 'edit';

        render(
            <ActionBarSearchSelect
                {...props}
                dropdownArrowIconType={customIcon}
                value={1}
            />,
        );

        const selectElement = screen.getByTestId('cmui--search_select');

        expect(selectElement).toBeInTheDocument();
        expect(screen.queryByTestId(`cmui-icon-${customIcon}`)).toBeInTheDocument();

        // Verify that the onChange function is called when an option is selected
        const optionElement = screen.getByText(OPTIONS[1].label);
        fireEvent.click(optionElement);
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith(OPTIONS[1]);
    });
});
