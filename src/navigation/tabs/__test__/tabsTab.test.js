/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/navigation/tabsTabs/__test__/tabsTab.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import TabsTab from '../tabsTab';

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
        const wrapper = mountWithTheme(
            <TabsTab
                {...componentProps}
            />,
        );

        expect(wrapper.length).toBe(1);
    });

    it('triggers onClick and calls onChange when both defined', () => {
        const wrapper = mountWithTheme(
            <TabsTab
                {...componentProps}
            />,
        );

        wrapper.find('div').first().prop('onClick')();

        expect(componentProps.onClick).toHaveBeenCalledTimes(1);
        expect(componentProps.onChange).toHaveBeenCalledTimes(1);
    });

    it('has the appropriate class when selected is true', () => {
        const testCaseProps = {
            ...componentProps,
            selected: true,
        };

        const wrapper = mountWithTheme(
            <TabsTab
                {...testCaseProps}
            />,
        );

        const tabClasses = wrapper.find('WithStyles(ForwardRef(Typography))').prop('className');
        const doesIncludeSelectedClass = tabClasses.includes('navigation_tabs--tab_label-selected');

        expect(doesIncludeSelectedClass).toBe(true);
    });

    it('should render \'inverse\' styling', () => {
        const wrapper = mountWithTheme(
            <TabsTab
                {...componentProps}
                inverse
            />,
        );

        const labelNode = wrapper.find('div').first().find('.navigation_tabs--tab_label').first();

        expect(labelNode.exists()).toEqual(true);
        expect(labelNode.hasClass(/(TabsTab)-(inverse)-(\d+)/)).toEqual(true);
    });

    it('should render \'mobile\' styling', () => {
        const wrapper = mountWithTheme(
            <TabsTab
                {...componentProps}
                mobile
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.exists()).toEqual(true);
        expect(rootNode.hasClass(/(TabsTab)-(mobile)-(\d+)/)).toEqual(true);

        const labelNode = rootNode.find('.navigation_tabs--tab_label').first();

        expect(labelNode.exists()).toEqual(true);
        expect(labelNode.hasClass(/(TabsTab)-(mobile)-(\d+)/)).toEqual(true);
    });

    it('should render \'withContent\' styling', () => {
        const wrapper = mountWithTheme(
            <TabsTab
                {...componentProps}
                withContent
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.exists()).toEqual(true);
        expect(rootNode.hasClass(/(TabsTab)-(withContent)-(\d+)/)).toEqual(true);

        const labelNode = rootNode.find('.navigation_tabs--tab_label').first();

        expect(labelNode.exists()).toEqual(true);
        expect(labelNode.hasClass(/(TabsTab)-(withContent)-(\d+)/)).toEqual(true);
    });
});
