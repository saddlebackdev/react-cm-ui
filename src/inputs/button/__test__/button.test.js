/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/inputs/button/__test__/button.test.js
 */

import React from 'react';
import Button from '../button';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

describe('<Button />', () => {
    const bemName = 'some_block--some_element_name';
    const text = 'hello world';

    const props = {
        className: bemName,
        id: bemName,
    };

    it('should render without problems', () => {
        const wrapper = mountWithTheme(
            <Button
                {...props}
            >
                {text}
            </Button>,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should have expected \'children\'', () => {
        const wrapper = mountWithTheme(
            <Button
                {...props}
            >
                {text}
            </Button>,
        );

        expect(wrapper.find('span').text()).toEqual(text);
    });

    it('Should render with the root \'classes override\'', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <Button
                {...props}
                classes={{
                    root: rootOverride,
                }}
            >
                {text}
            </Button>,
        );

        const rootNode = wrapper.find('button').first();

        expect(rootNode.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with proper classNames', () => {
        const wrapper = mountWithTheme(
            <Button
                {...props}
            >
                {text}
            </Button>,
        );

        const rootNode = wrapper.find('button').first();

        expect(rootNode.hasClass('cmui')).toEqual(true);
        expect(rootNode.hasClass('button')).toEqual(true);
        expect(rootNode.hasClass(/(Button)-(root)-(\d+)/)).toEqual(true);
        expect(rootNode.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <Button
                {...props}
            >
                {text}
            </Button>,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it('Should add expected class when \'disabled\' prop is true', () => {
        const wrapper = mountWithTheme(
            <Button
                {...props}
                disabled
            >
                {text}
            </Button>,
        );

        expect(wrapper.find('button').hasClass(/(Button)-(disabled)-(\d+)/)).toEqual(true);
    });

    it('Should be a \'fullWidth\' button', () => {
        const wrapper = mountWithTheme(
            <Button
                {...props}
                fullWidth
            >
                {text}
            </Button>,
        );

        expect(wrapper.find('button').hasClass(/(Button)-(fullWidth)-(\d+)/)).toEqual(true);
    });

    it('Should be a \'pill\' button', () => {
        const wrapper = mountWithTheme(
            <Button
                {...props}
                pill
            >
                {text}
            </Button>,
        );

        expect(wrapper.find('button').hasClass(/(Button)-(pill)-(\d+)/)).toEqual(true);
    });

    it('Should be an \'outlined\' button', () => {
        const wrapper = mountWithTheme(
            <Button
                {...props}
                variant="outlined"
            >
                {text}
            </Button>,
        );

        expect(wrapper.find('button').hasClass(/(Button)-(outlined)-(\d+)/)).toEqual(true);
    });
});
