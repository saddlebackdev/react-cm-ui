/**
 * To run this test:
 * npx jest ./src/surfaces/actionBar/__test__/actionBarActionsButtonDrawerOption.test.tsx
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
import ActionBarActionsButtonDrawerOption from '../actionBarActionsButtonDrawerOption';

describe('<ActionBarActionsButtonDrawerOption />', () => {
    const onClickMock = jest.fn();
    const onDrawerToggleMock = jest.fn();

    const option = {
        label: 'Option 1',
        iconType: 'caret-down',
        disabled: false,
        requiresPrompt: false,
        onClick: jest.fn(),
        options: [
            { label: 'Sub Option 1', onClick: jest.fn() },
            { label: 'Sub Option 2', onClick: jest.fn() },
        ],

    };

    it('Should render without problems', () => {
        render(
            <ActionBarActionsButtonDrawerOption
                option={option}
                onClick={onClickMock}
            />,
        );

        expect(screen.getByText('Option 1')).toBeInTheDocument();

        // Should render icon type for option
        expect(screen.queryByTestId(`${UI_CLASS_NAME}-icon-caret-down`)).toBeInTheDocument();
    });

    it('Should render actions button sub option', () => {
        render(
            <ActionBarActionsButtonDrawerOption
                option={option}
                onClick={onClickMock}
            />,
        );

        (option.options).forEach((subOption) => {
            expect(screen.getByText(subOption.label)).toBeInTheDocument();
        });
    });

    it('Should render option & subOption onClick function', () => {
        render(
            <ActionBarActionsButtonDrawerOption
                hide
                option={option}
                onClick={onClickMock}
                onDrawerToggle={onDrawerToggleMock}
            />,
        );

        // Verify that the parent option is displayed
        const parentOptionElement = screen.getByText(option.label);
        expect(parentOptionElement).toBeInTheDocument();

        // Simulate a click on the parent option
        fireEvent.click(parentOptionElement);

        // Verify that the parent option's onClick function is called
        expect(option.onClick).toHaveBeenCalledTimes(1);

        // Verify that the sub option is displayed
        const subOption1Element = screen.getByText('Sub Option 1');
        expect(subOption1Element).toBeInTheDocument();

        // Simulate a click on the sub option
        fireEvent.click(subOption1Element);

        // Verify that the sub option's onClick function is called
        expect(option.options[0].onClick).toHaveBeenCalledTimes(1);
    });
});
