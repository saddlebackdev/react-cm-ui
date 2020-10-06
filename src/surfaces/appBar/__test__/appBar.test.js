/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/surfaces/appBar/__test__/appBar.test.js
 */
import React from 'react';
import AppBar from '../appBar';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

const componentProps = {
    children: 'Some Cool Title',
};

let wrapper;

describe('<AppBar />', () => {
    it('renders without crashing', () => {
        wrapper = mountWithTheme(<AppBar {...componentProps} />);
        expect(wrapper.length).toBe(1);
    });

    it('renders the content properly', () => {
        wrapper = mountWithTheme(<AppBar {...componentProps} />);
        expect(wrapper.prop('children')).toBe('Some Cool Title');
    });

    it('renders the content in top-left as default', () => {
        wrapper = mountWithTheme(<AppBar {...componentProps} />);
        expect(wrapper.prop('placement')).toBe('top-left');
    });

    it('contains default library classes', () => {
        wrapper = mountWithTheme(<AppBar {...componentProps} />);
        const classNames = wrapper.find('div').prop('className');
        expect(classNames.includes('cmui')).toBe(true);
        expect(classNames.includes('app_bar')).toBe(true);
    });

    it('passes the inline style to the container div properly', () => {
        const testCaseProps = {
            children: 'Inline styled app bar',
            style: {
                color: 'red',
                backgroundColor: 'black',
                padding: 10,
            },
        };

        wrapper = mountWithTheme(<AppBar {...testCaseProps} />);
        const inlineStyles = wrapper.prop('style');
        expect(inlineStyles).toEqual({
            color: 'red',
            backgroundColor: 'black',
            padding: 10,
        });
    });
});
