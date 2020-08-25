/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/navigation/tabs/__test__/index.test.js
 */
import { shallow } from 'enzyme';
import React from 'react';
import { Tabs as NavigationTabs } from '../index';
import {
    items,
    tabsState,
} from './navigationTabsMockups';

let wrapper;

const componentProps = {
    items,
    selectedTabKey: 'exampleTab1',
};

describe('<NavigationTabs />', () => {
    beforeEach(() => {
        wrapper = shallow(<NavigationTabs {...componentProps} />);
        wrapper.setState(tabsState);
    });

    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1);
        // console.log('\x1b[36m', wrapper.length, '\x1b[0m');
    });

    it('renders all tabs as visible when the container width is greater than the tabs total width', () => {
        const visibleTabs = wrapper.find('Tab').map((tab) => tab.prop('children'));
        // console.log('\x1b[33m', wrapper.debug(), '\x1b[0m');
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
        wrapper.setState({
            ...tabsState,
            blockWidth: 500,
        });
        const visibleTabs = wrapper.find('Tab').map((tab) => tab.prop('children'));
        // console.log('\x1b[33m', visibleTabs, '\x1b[0m');
        expect(visibleTabs).toEqual([
            'Example Tab 1',
            'Example Tab 2',
            'Example Tab 3',
            'Example Tab 4',
        ]);
        expect(wrapper.find('Dropdown').length).toBe(1);
        expect(wrapper.find('DropdownItem').length).toBe(4);
    });

    it('swaps a hidden tab from the dropdown to the visible panel on click', () => {
        wrapper.setState({
            ...tabsState,
            blockWidth: 500,
        });
        // expect(visibleTabs).toEqual([
        //     'Example Tab 1',
        //     'Example Tab 2',
        //     'Example Tab 3',
        //     'Example Tab 4',
        // ]);
        // expect(wrapper.find('Dropdown').length).toBe(1);
        // expect(wrapper.find('DropdownItem').length).toBe(4);
        const hiddenTabs = wrapper.find('Dropdown');
        hiddenTabs.at(0).prop('onChange')({ value: 'exampleTab8' });
        // console.log('\x1b[34m', wrapper.debug(), '\x1b[0m');
        const visibleTabs = wrapper.find('Tab').map((tab) => tab.prop('children'));
        expect(visibleTabs[3]).toBe('Example Tab 8');
        expect(1).toBe(1);
    });

    it('handles resize events swapping the tabs from the hidden dropdown to the visible panel', () => {
        wrapper.setState({
            ...tabsState,
            blockWidth: 500,
        });
        let visibleTabs = wrapper.find('Tab').map((tab) => tab.prop('children'));
        expect(visibleTabs).toEqual([
            'Example Tab 1',
            'Example Tab 2',
            'Example Tab 3',
            'Example Tab 4',
        ]);

        wrapper.setState({
            ...tabsState,
            blockWidth: 1000,
        });
        visibleTabs = wrapper.find('Tab').map((tab) => tab.prop('children'));
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

        wrapper.setState({
            ...tabsState,
            blockWidth: 200,
        });
        visibleTabs = wrapper.find('Tab').map((tab) => tab.prop('children'));
        expect(visibleTabs).toEqual([
            'Example Tab 1',
        ]);
        // expect(wrapper.find('Dropdown').length).toBe(1);
        // expect(wrapper.find('DropdownItem').length).toBe(4);
        // const hiddenTabs = wrapper.find('Dropdown');
        // hiddenTabs.at(0).prop('onChange')({ value: 'exampleTab8' });
        console.log('\x1b[34m', wrapper.debug(), '\x1b[0m');
        // expect(visibleTabs[3]).toBe('Example Tab 8');
        expect(1).toBe(1);
    });
});
