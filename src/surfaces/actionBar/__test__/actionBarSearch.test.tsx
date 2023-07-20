/**
 * To run this test:
 * npx jest ./src/surfaces/actionBar/__test__/actionBarSearch.test.tsx
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
import ActionBarSearch from '../actionBarSearch';

describe('<ActionBarSearch />', () => {
    const onChangeMock = jest.fn();

    const searchWithSelectProps = {
        onChange: jest.fn(),
        options: [
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 },
        ],
        placeholder: 'Select an option',
        value: 1,
    };

    const props = {
        onChange: onChangeMock,
        value: null,
    };

    it('Should render without problems', () => {
        render(
            <ActionBarSearch
                {...props}
            />,
        );

        expect(screen.queryByTestId(`${UI_CLASS_NAME}--search_input`)).toBeInTheDocument();
        expect(screen.queryByTestId(`${UI_CLASS_NAME}--search_select`)).not.toBeInTheDocument();
        expect(screen.queryByTestId(`${UI_CLASS_NAME}--search_divider`)).not.toBeInTheDocument();

        // Should render search icon
        expect(screen.queryByTestId(`${UI_CLASS_NAME}-icon-search`)).toBeInTheDocument();
    });

    it('Should render with search select', () => {
        render(
            <ActionBarSearch
                {...props}
                searchWithSelect={searchWithSelectProps}
            />,
        );

        expect(screen.queryByTestId(`${UI_CLASS_NAME}--search_input`)).toBeInTheDocument();
        expect(screen.queryByTestId(`${UI_CLASS_NAME}--search_select`)).toBeInTheDocument();
        expect(screen.queryByTestId(`${UI_CLASS_NAME}--search_divider`)).toBeInTheDocument();
    });

    it('Confirm Search input work properly', () => {
        const searchText = 'test';

        render(
            <ActionBarSearch
                {...props}
                searchWithSelect={searchWithSelectProps}
            />,
        );

        const inputElement = screen.queryByTestId(`${UI_CLASS_NAME}--search_input`);
        expect(inputElement).toBeInTheDocument();

        // Simulate change in the input
        fireEvent.change(inputElement, { target: { value: searchText } });

        // Verify that the onChange function is called with the new value
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith(searchText);
    });

    it('Should render Clear Search Icon when value is not null', () => {
        const searchText = 'test';
        const onClearClickMock = jest.fn();

        render(
            <ActionBarSearch
                {...props}
                onClearClick={onClearClickMock}
                value={searchText}
            />,
        );

        const inputElement = screen.queryByTestId(`${UI_CLASS_NAME}--search_input`);
        expect(inputElement).toBeInTheDocument();

        // Should render clear search icon
        const clearIconElement = screen.queryByTestId(`${UI_CLASS_NAME}-icon-times-circle`);
        expect(clearIconElement).toBeInTheDocument();
        expect(screen.getByTitle('Clear Search')).toBeInTheDocument();

        // Should render correct value
        expect(inputElement).toHaveAttribute('value', searchText);

        // Should call the onClearClick function
        fireEvent.click(clearIconElement);
        expect(onClearClickMock).toHaveBeenCalledTimes(1);
    });
});
