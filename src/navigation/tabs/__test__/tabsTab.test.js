/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/navigation/tabsTabs/__test__/tabsTab.test.js
 */
import { shallow } from 'enzyme';
import React from 'react';
import TabsTab from '../tabsTab';

let wrapper;

const componentProps = {
    children: 'Example Tab',
    classNames: '',
    id: 'tab-exampleTab',
    onChange: jest.fn(),
    onClick: jest.fn(),
    originalKey: 'exampleTab',
    selected: false,
};

describe('<TabsTab />', () => {
    it('renders without crashing', () => {
        wrapper = shallow(<TabsTab {...componentProps} />);
        expect(wrapper.length).toBe(1);
    });

    it('triggers onClick and calls onChange when both defined', () => {
        wrapper = shallow(<TabsTab {...componentProps} />);
        wrapper.prop('onClick')();
        expect(componentProps.onClick).toHaveBeenCalledTimes(1);
        expect(componentProps.onChange).toHaveBeenCalledTimes(1);
    });

    it('has the appropriate class when selected is true', () => {
        const testCaseProps = {
            ...componentProps,
            selected: true,
        };
        wrapper = shallow(<TabsTab {...testCaseProps} />);
        const tabClasses = wrapper.find('WithStyles(ForwardRef(Typography))').prop('className');
        const doesIncludeSelectedClass = tabClasses.includes('navigation_sectional_tabs--tab-label_selected');
        expect(doesIncludeSelectedClass).toBe(true);
    });
});
