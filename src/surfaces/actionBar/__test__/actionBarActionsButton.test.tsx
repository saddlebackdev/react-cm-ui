/**
 * To run this test:
 * npx jest ./src/surfaces/actionBar/__test__/actionBarActionsButton.test.tsx
 */

import React from 'react';
import {
    fireEvent,
    render,
    screen,
} from '../../../testUtils';
import ActionBarActionsButton from '../actionBarActionsButton';

describe('<ActionBarActionsButton />', () => {
    const onClickMock = jest.fn();

    const options = [
        { label: 'Option 1', value: 1, onClick: onClickMock },
        { label: 'Option 2', value: 2, onClick: onClickMock },
        { label: 'Option 3', value: 3, onClick: onClickMock },
    ];

    it('Should render without problems', () => {
        render(
            <ActionBarActionsButton
                header="Actions"
                options={options}
            />,
        );

        expect(screen.queryByTestId('cmui-icon-ellipsis-h')).toBeInTheDocument();

        // Render prompt element
        expect(screen.getByText('Are you sure?')).toBeInTheDocument();
        expect(screen.getByText('Yes')).toBeInTheDocument();
        expect(screen.getByText('No')).toBeInTheDocument();
    });

    it('Should render actionBar drawer', () => {
        render(
            <ActionBarActionsButton
                header="Actions"
                options={options}
            />,
        );

        const actionsButtonIconElement = screen.queryByTestId('cmui-icon-ellipsis-h');

        expect(actionsButtonIconElement).toBeInTheDocument();

        // Should open action button drawer
        fireEvent.click(actionsButtonIconElement);
        expect(screen.queryByTestId('cmui-drawer')).toBeInTheDocument();
        expect(screen.queryByTestId('cmui-drawer_container')).toBeInTheDocument();
        expect(screen.queryByTestId('cmui-drawer_content')).toBeInTheDocument();

        // Should render header actions text
        expect(screen.queryByText('Actions')).toBeInTheDocument();

        // Should render options
        options.forEach((option) => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });
});
