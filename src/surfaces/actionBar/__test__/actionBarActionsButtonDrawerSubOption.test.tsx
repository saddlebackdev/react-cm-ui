/**
 * To run this test:
 * npx jest ./src/surfaces/actionBar/__test__/actionBarActionsButtonDrawerSubOption.test.tsx
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
import ActionBarActionsButtonDrawerSubOption from '../actionBarActionsButtonDrawerSubOption';

describe('<ActionBarActionsButtonDrawerSubOption />', () => {
    const subOption = {
        label: 'Sub Option 1',
        iconType: 'chevron-down',
        disable: false,
        disabled: false,
        requiresPrompt: false,
        onClick: jest.fn(),
    };

    const onDrawerToggleMock = jest.fn();
    const onRequestPromptMock = jest.fn();

    it('Should render without problems', () => {
        render(
            <ActionBarActionsButtonDrawerSubOption
                isSelected={false}
                onDrawerToggle={onDrawerToggleMock}
                onRequestPrompt={onRequestPromptMock}
                subOption={subOption}
            />,
        );

        // Should render icon type for sub option
        expect(screen.queryByTestId(`${UI_CLASS_NAME}-icon-chevron-down`)).toBeInTheDocument();

        // Verify that the sub option is displayed
        const subOptionElement = screen.getByText(subOption.label);
        expect(subOptionElement).toBeInTheDocument();

        // Simulate a click on the sub option
        fireEvent.click(subOptionElement);

        // Verify that the sub option's onClick function is called
        expect(subOption.onClick).toHaveBeenCalledTimes(1);
    });

    it('Should render correctly with custom props', () => {
        const newSubOption = {
            ...subOption,
            disable: true,
            iconType: 'check',
            label: 'Sub Option 2',
        };

        render(
            <ActionBarActionsButtonDrawerSubOption
                isSelected={false}
                onDrawerToggle={onDrawerToggleMock}
                onRequestPrompt={onRequestPromptMock}
                subOption={newSubOption}
            />,
        );

        expect(screen.getByText(newSubOption.label)).toBeInTheDocument();

        // Should render icon type for sub option
        expect(screen.queryByTestId(`${UI_CLASS_NAME}-icon-${newSubOption.iconType}`)).toBeInTheDocument();
    });
});
