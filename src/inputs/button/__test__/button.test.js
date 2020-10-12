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

    it('Should be \'disable\'', () => {
        const wrapper = mountWithTheme(
            <Button
                {...props}
                disable
            >
                {text}
            </Button>,
        );

        expect(wrapper.find('button').hasClass(/(Button)-(disable)-(\d+)/)).toEqual(true);
    });

    it('Should be a \'fluid\' button', () => {
        const wrapper = mountWithTheme(
            <Button
                {...props}
                fluid
            >
                {text}
            </Button>,
        );

        expect(wrapper.find('button').hasClass(/(Button)-(fluid)-(\d+)/)).toEqual(true);
    });

    it('Should be \'pill\' button', () => {
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

    it('Should be \'outline\' button', () => {
        const wrapper = mountWithTheme(
            <Button
                {...props}
                outline
            >
                {text}
            </Button>,
        );

        expect(wrapper.find('button').hasClass(/(Button)-(outline)-(\d+)/)).toEqual(true);
    });
});
