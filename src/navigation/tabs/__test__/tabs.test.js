/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/navigation/tabs/__test__/tabs.test.js
 */
import React from 'react';
import Tabs from '../tabs';
import {
    items,
    tabsState,
} from './tabsMockups';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

let wrapper;

const componentProps = {
    items,
    mobile: true,
    selectedTabKey: 'exampleTab1',
};

describe('<Tabs />', () => {
    beforeEach(() => {
        wrapper = mountWithTheme(<Tabs {...componentProps} />);
        wrapper.find('Tabs').instance().setState(tabsState);
    });

    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1);
    });

    it('renders all tabs as visible when the container width is greater than the tabs total width', () => {
        const visibleTabs = wrapper.find('TabsTab').map((tab) => tab.prop('children'));

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
        wrapper.find('Tabs').instance().setState({
            ...tabsState,
            blockWidth: 500,
        });

        wrapper.update();

        const visibleTabs = wrapper
            .find('TabsTab')
            .find('div.navigation_tabs--tab_label')
            .map((tab) => tab.prop('children'));

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
        wrapper.find('Tabs').instance().setState({
            ...tabsState,
            blockWidth: 500,
        });

        wrapper.update();

        const hiddenTabs = wrapper.find('.dropdown_menu--option');

        hiddenTabs.at(0).simulate('click');

        const visibleTabs = wrapper.find('TabsTab').map((tab) => tab.prop('children'));

        expect(visibleTabs[3]).toBe('Example Tab 5');
    });

    it('handles resize events swapping the tabs from the hidden dropdown to the visible panel', () => {
        wrapper.find('Tabs').instance().setState({
            ...tabsState,
            blockWidth: 500,
        });

        wrapper.update();

        let visibleTabs = wrapper.find('TabsTab').map((tab) => tab.prop('children'));

        expect(visibleTabs).toEqual([
            'Example Tab 1',
            'Example Tab 2',
            'Example Tab 3',
            'Example Tab 4',
        ]);

        wrapper.find('Tabs').instance().setState({
            ...tabsState,
            blockWidth: 1000,
        });

        wrapper.update();

        visibleTabs = wrapper.find('TabsTab').map((tab) => tab.prop('children'));

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

        wrapper.find('Tabs').instance().setState({
            ...tabsState,
            blockWidth: 200,
        });

        wrapper.update();

        visibleTabs = wrapper.find('TabsTab').map((tab) => tab.prop('children'));

        expect(visibleTabs).toEqual([
            'Example Tab 1',
        ]);
    });

    it('should render \'mobile\' styling', () => {
        const rootNode = wrapper.find('.navigation_tabs--container');

        expect(rootNode.exists()).toEqual(true);
        expect(rootNode.hasClass(/(Tabs)-(mobile)-(\d+)/)).toEqual(true);
    });

    it('should render \'withContent\' styling', () => {
        wrapper.setProps({
            withContent: true,
        });

        const panelNode = wrapper.find('.navigation_tabs--panel');

        expect(panelNode.exists()).toEqual(true);
        expect(panelNode.hasClass(/(Tabs)-(withContent)-(\d+)/)).toEqual(true);
    });
});
