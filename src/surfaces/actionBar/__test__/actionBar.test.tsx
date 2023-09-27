/**
 * To run this test:
 * npx jest ./src/surfaces/actionBar/__test__/actionBar.test.tsx
 */

import React from 'react';
import {
    fireEvent,
    render,
    screen,
    waitFor,
} from '../../../testUtils';
import {
    UI_CLASS_NAME,
} from '../../../global/constants';
import ActionBar from '../actionBar';

describe('<ActionBar />', () => {
    const onBackClickMock = jest.fn();
    const onIconFilterClickMock = jest.fn();
    const onClearClickMock = jest.fn();
    const onSearchChangeMock = jest.fn();
    const onSearchKeyDownMock = jest.fn();
    const onChangeSearchWithSelectMock = jest.fn();
    const onClickNewTemplateDesktopMock = jest.fn();

    const mockSearchValue = 'Test';

    const iconBack = {
        onClick: onBackClickMock,
    };

    const actionBarIconFilter = {
        selected: false,
        isFiltering: false,
        onClick: onIconFilterClickMock,
    };

    const actionBarSearch = {
        autoFocus: false,
        onClearClick: onClearClickMock,
        onChange: onSearchChangeMock,
        onKeyDown: onSearchKeyDownMock,
        searchWithSelect: {
            onChange: onChangeSearchWithSelectMock,
            options: [
                {
                    label: 'People',
                    value: 1,
                },
                {
                    label: 'Designations',
                    value: 2,
                },
                {
                    label: 'Transaction ID',
                    value: 3,
                },
            ],
            placeholder: 'People',
            value: 1,
        },
        value: mockSearchValue,
    };

    const newTemplateButtonDesktopMock = {
        button: {
            color: 'success',
            iconType: 'plus',
            label: 'New Template',
            onClick: onClickNewTemplateDesktopMock,
        },
    };

    const props = {
        columns: [{
            list: [{
                iconFilter: actionBarIconFilter,
            }],
        }],
    };

    it('Should render without problems', () => {
        render(<ActionBar />);

        expect(screen.queryByTestId(`${UI_CLASS_NAME}-action_bar`)).toBeInTheDocument();
    });

    it('Should render filter icon', () => {
        render(
            <ActionBar
                {...props}
            />,
        );

        const iconFilter = screen.queryByTestId(`${UI_CLASS_NAME}-icon-filter`);
        expect(iconFilter).toBeInTheDocument();

        // Stimulate a fireEvent click on the icon filter
        fireEvent.click(iconFilter);

        // Verify that the icon filter onClick function is called
        expect(onIconFilterClickMock).toHaveBeenCalledTimes(1);
    });

    it('Should render "New Template" Button', () => {
        render(
            <ActionBar
                {...props}
                columns={[
                    ...props.columns,
                    newTemplateButtonDesktopMock,
                ]}
            />,
        );

        const newTemplateButtonElement = screen.getByText(
            newTemplateButtonDesktopMock.button.label,
        );

        expect(newTemplateButtonElement).toBeInTheDocument();

        const iconPlus = screen.queryByTestId(`${UI_CLASS_NAME}-icon-${newTemplateButtonDesktopMock.button.iconType}`);
        expect(iconPlus).toBeInTheDocument();

        // Stimulate a fireEvent click on the new template button
        fireEvent.click(newTemplateButtonElement);

        // Verify that the icon filter onClick function is called
        expect(onClickNewTemplateDesktopMock).toHaveBeenCalledTimes(1);
    });

    it('Should render Search Elements for larger viewport', () => {
        render(
            <ActionBar
                {...props}
                columns={[
                    ...props.columns,
                    {
                        search: actionBarSearch,
                    },
                ]}
            />,
        );

        // Verify that the search input is displayed
        const searchInputElement = screen.queryByTestId(`${UI_CLASS_NAME}--search_input`);
        expect(searchInputElement).toBeInTheDocument();
        expect(screen.getByTitle('Clear Search')).toBeInTheDocument();
        expect(screen.queryByTestId(`${UI_CLASS_NAME}-icon-times-circle`)).toBeInTheDocument();
        expect(searchInputElement).toHaveAttribute('placeholder', 'Search');
        expect(searchInputElement).toHaveAttribute('value', mockSearchValue);

        // Verify that the search with select input is displayed
        const searchSelectElement = screen.queryByTestId(`${UI_CLASS_NAME}--search_select`);
        expect(searchSelectElement).toBeInTheDocument();
    });

    it('Should render Search Elements for smaller viewport(i.e: Mobile)', async () => {
        render(
            <ActionBar
                columns={[{
                    list: [{
                        iconBack,
                        iconFilter: actionBarIconFilter,
                        iconSearch: actionBarSearch,
                    }],
                }]}
            />,
        );

        // Verify that the search input is displayed
        const searchInputIconElement = screen.queryByTestId(`${UI_CLASS_NAME}-icon-search`);
        expect(searchInputIconElement).toBeInTheDocument();

        // Stimulate a fireEvent click on the new template button
        fireEvent.click(searchInputIconElement);

        await waitFor(() => {
            const searchInputElement = screen.queryByTestId(`${UI_CLASS_NAME}--search_input`);
            expect(searchInputElement).toBeInTheDocument();
            expect(screen.queryByTestId(`${UI_CLASS_NAME}-icon-times-circle`)).toBeInTheDocument();
            expect(searchInputElement).toHaveAttribute('placeholder', 'Search');
            expect(searchInputElement).toHaveAttribute('value', mockSearchValue);
        });

        // Verify that the search with select input is displayed
        const searchSelectElement = screen.queryByTestId(`${UI_CLASS_NAME}--search_select`);
        expect(searchSelectElement).toBeInTheDocument();

        // Verify that back button render for smaller viewport (i.e: Mobile)
        expect(screen.queryByTestId(`${UI_CLASS_NAME}-icon-chevron-left`)).toBeInTheDocument();
    });

    it('Should not render search integrated with select input when `searchWithSelect` object set to null', () => {
        render(
            <ActionBar
                {...props}
                columns={[
                    ...props.columns,
                    {
                        search: {
                            ...actionBarSearch,
                            searchWithSelect: null,
                        },
                    },
                ]}
            />,
        );

        // Verify that the search input is displayed
        const searchInputElement = screen.queryByTestId(`${UI_CLASS_NAME}--search_input`);
        expect(searchInputElement).toBeInTheDocument();

        // Verify that the search with select input is displayed
        const searchSelectElement = screen.queryByTestId(`${UI_CLASS_NAME}--search_select`);
        expect(searchSelectElement).not.toBeInTheDocument();
    });

    it('Should be able to render jsx element', () => {
        const jsxDataTestId = `${UI_CLASS_NAME}--jsx_element`;

        render(
            <ActionBar
                {...props}
                columns={[
                    ...props.columns,
                    {
                        jsx: (
                            <span data-testId={jsxDataTestId} />
                        ),
                    },
                ]}
            />,
        );

        expect(screen.queryByTestId(jsxDataTestId)).toBeInTheDocument();
    });
});
