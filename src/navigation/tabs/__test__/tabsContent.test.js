/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/navigation/tabs/__test__/tabsContent.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import TabsContent from '../tabsContent';

const getContentText = 'tab content';

const componentProps = {
    children: 'Hello',
    classNames: '',
    getContent: () => getContentText,
    id: '1',
    isHidden: false,
    tabId: '1',
};

describe('<TabsContent />', () => {
    it('renders withouth crashing', () => {
        const wrapper = mountWithTheme(
            <TabsContent
                {...componentProps}
            />,
        );

        expect(wrapper.length).toBe(1);
    });

    it('renders the content when getContent is defined with a returning a string/component/element', () => {
        let wrapper = mountWithTheme(
            <TabsContent
                {...componentProps}
            />,
        );

        expect(wrapper.find('div').text()).toBe(getContentText);

        const divClassName = 'foo';

        let testCaseProps = {
            ...componentProps,
            getContent: () => [<div className={divClassName} key="1" />],
        };

        wrapper = mountWithTheme(
            <TabsContent
                {...testCaseProps}
            />,
        );

        expect(wrapper.find('.foo').exists()).toEqual(true);

        testCaseProps = {
            ...componentProps,
            getContent: () => <div className={divClassName} key="1" />,
        };

        wrapper = mountWithTheme(
            <TabsContent
                {...testCaseProps}
            />,
        );

        expect(wrapper.find('.foo').exists()).toEqual(true);
    });

    it('renders the children when getContent is not defined', () => {
        const testCaseProps = {
            ...componentProps,
            getContent: undefined,
        };

        const wrapper = mountWithTheme(
            <TabsContent
                {...testCaseProps}
            />,
        );

        expect(wrapper.prop('children')).toBe('Hello');
    });
});
