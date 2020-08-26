/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/navigation/navigationTabs/__test__/tab.test.js
 */
import { shallow } from 'enzyme';
import React from 'react';
import Tab from '../tab';

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

describe('<Tab />', () => {
    it('renders withouth crashing', () => {
        wrapper = shallow(<Tab {...componentProps} />);
        expect(wrapper.length).toBe(1);
    });

    it('triggers onClick and calls onChange when both defined', () => {
        wrapper = shallow(<Tab {...componentProps} />);
        wrapper.prop('onClick')();
        expect(componentProps.onClick).toHaveBeenCalledTimes(1);
        expect(componentProps.onChange).toHaveBeenCalledTimes(1);
    });

    it('has the apporpiate class when selected is true', () => {
        const testCaseProps = {
            ...componentProps,
            selected: true,
        };
        wrapper = shallow(<Tab {...testCaseProps} />);
        const tabClasses = wrapper.find('WithStyles(ForwardRef(Typography))').prop('className');
        const doesIncludeSelectedClass = tabClasses.includes('navigation-tabs--tab-label-selected');
        expect(doesIncludeSelectedClass).toBe(true);
    });
});
