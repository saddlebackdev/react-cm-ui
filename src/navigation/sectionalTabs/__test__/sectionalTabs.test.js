/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/navigation/sectionalTabs/__test__/sectionalTabs.test.js
 */
import React from 'react';
import SectionalTabs from '../sectionalTabs';
import {
    items,
    tabsState,
} from './sectionalTabsMockups';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

let wrapper;

const componentProps = {
    items,
    selectedTabKey: 'exampleTab1',
};

describe('<SectionalTabs />', () => {
    beforeEach(() => {
        wrapper = mountWithTheme(<SectionalTabs {...componentProps} />);
        wrapper.find('SectionalTabs').instance().setState(tabsState);
    });

    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1);
    });

    it('renders all tabs as visible when the container width is greater than the tabs total width', () => {
        const visibleTabs = wrapper.find('SectionalTab').map((tab) => tab.prop('children'));
        expect(visibleTabs).toEqual([
            'Example Tab 1',
            'Example Tab 2',
            'Example Tab 3',
            'Example Tab 4',
            'Example Tab 5',
            'Example Tab 6',
            'Example Tab 7',
            'Example Tab 8',
        ]);
        expect(wrapper.find('Dropdown').length).toBe(0);
    });

    it('renders 5 tabs as hidden when the container width is lower than the tabs total width', () => {
        wrapper.find('SectionalTabs').instance().setState({
            ...tabsState,
            blockWidth: 500,
        });
        wrapper.update();
        const visibleTabs = wrapper.find('SectionalTab').find('h4').map((tab) => tab.prop('children'));
        expect(visibleTabs).toEqual([
            'Example Tab 1',
            'Example Tab 2',
            'Example Tab 3',
            'Example Tab 4',
        ]);
        expect(wrapper.find('DropdownButton').length).toBe(1);
        expect(wrapper.find('DropdownMenuOption').length).toBe(4);
    });

    it('swaps a hidden tab from the dropdown to the visible panel on click', () => {
        wrapper.find('SectionalTabs').instance().setState({
            ...tabsState,
            blockWidth: 500,
        });
        wrapper.update();
        const hiddenTabs = wrapper.find('.dropdown_menu--option');
        hiddenTabs.at(0).simulate('click');
        const visibleTabs = wrapper.find('SectionalTab').map((tab) => tab.prop('children'));
        expect(visibleTabs[3]).toBe('Example Tab 5');
    });

    it('handles resize events swapping the tabs from the hidden dropdown to the visible panel', () => {
        wrapper.find('SectionalTabs').instance().setState({
            ...tabsState,
            blockWidth: 500,
        });
        wrapper.update();
        let visibleTabs = wrapper.find('SectionalTab').map((tab) => tab.prop('children'));
        expect(visibleTabs).toEqual([
            'Example Tab 1',
            'Example Tab 2',
            'Example Tab 3',
            'Example Tab 4',
        ]);

        wrapper.find('SectionalTabs').instance().setState({
            ...tabsState,
            blockWidth: 1000,
        });
        wrapper.update();
        visibleTabs = wrapper.find('SectionalTab').map((tab) => tab.prop('children'));
        expect(visibleTabs).toEqual([
            'Example Tab 1',
            'Example Tab 2',
            'Example Tab 3',
            'Example Tab 4',
            'Example Tab 5',
            'Example Tab 6',
            'Example Tab 7',
            'Example Tab 8',
        ]);

        wrapper.find('SectionalTabs').instance().setState({
            ...tabsState,
            blockWidth: 200,
        });
        wrapper.update();
        visibleTabs = wrapper.find('SectionalTab').map((tab) => tab.prop('children'));
        expect(visibleTabs).toEqual([
            'Example Tab 1',
        ]);
    });
});
