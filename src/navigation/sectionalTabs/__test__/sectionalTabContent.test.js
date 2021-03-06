/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/navigation/sectionalTabs/__test__/sectionalTabContent.test.js
 */
import { shallow } from 'enzyme';
import React from 'react';
import SectionalTabContent from '../sectionalTabContent';

let wrapper;
const componentProps = {
    children: 'Hello',
    classNames: '',
    getContent: () => ('tab content'),
    id: '1',
    isHidden: false,
    tabId: '1',
};

describe('<SectionalTabContent />', () => {
    it('renders withouth crashing', () => {
        wrapper = shallow(<SectionalTabContent {...componentProps} />);
        expect(wrapper.length).toBe(1);
    });

    it('renders the content when getContent is defined with a returning a string/component/element', () => {
        wrapper = shallow(<SectionalTabContent {...componentProps} />);
        expect(wrapper.prop('children')).toBe('tab content');

        let testCaseProps = {
            ...componentProps,
            getContent: () => ([<div key="1" />]),
        };
        wrapper = shallow(<SectionalTabContent {...testCaseProps} />);
        expect(wrapper.prop('children')[0].type).toBe('div');

        testCaseProps = {
            ...componentProps,
            getContent: () => (<div key="1" />),
        };
        wrapper = shallow(<SectionalTabContent {...testCaseProps} />);
        expect(wrapper.prop('children').type).toBe('div');
    });

    it('renders the children when getContent is not defined', () => {
        const testCaseProps = {
            ...componentProps,
            getContent: undefined,
        };
        wrapper = shallow(<SectionalTabContent {...testCaseProps} />);
        expect(wrapper.prop('children')).toBe('Hello');
    });
});
