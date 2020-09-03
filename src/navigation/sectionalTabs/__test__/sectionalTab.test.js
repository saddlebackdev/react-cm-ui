/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/navigation/sectionalTabs/__test__/sectionalTab.test.js
 */
import { shallow } from 'enzyme';
import React from 'react';
import SectionalTab from '../sectionalTab';

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
        wrapper = shallow(<SectionalTab {...componentProps} />);
        expect(wrapper.length).toBe(1);
    });

    it('triggers onClick and calls onChange when both defined', () => {
        wrapper = shallow(<SectionalTab {...componentProps} />);
        wrapper.prop('onClick')();
        expect(componentProps.onClick).toHaveBeenCalledTimes(1);
        expect(componentProps.onChange).toHaveBeenCalledTimes(1);
    });

    it('has the apporpiate class when selected is true', () => {
        const testCaseProps = {
            ...componentProps,
            selected: true,
        };
        wrapper = shallow(<SectionalTab {...testCaseProps} />);
        const tabClasses = wrapper.find('WithStyles(ForwardRef(Typography))').prop('className');
        const doesIncludeSelectedClass = tabClasses.includes('navigation_sectional_tabs--tab-label_selected');
        expect(doesIncludeSelectedClass).toBe(true);
    });
});
