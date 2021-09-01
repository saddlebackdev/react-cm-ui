/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/inputs/button/__test__/button.test.js
 */

import React from 'react';
import ButtonV2 from '../buttonV2';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

describe('<ButtonV2 />', () => {
    const bemName = 'some_block--some_element_name';
    const text = 'hello world';

    const props = {
        className: bemName,
        id: bemName,
    };

    it('should render without problems', () => {
        const wrapper = mountWithTheme(
            <ButtonV2
                {...props}
            >
                {text}
            </ButtonV2>,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should have expected \'children\'', () => {
        const wrapper = mountWithTheme(
            <ButtonV2
                {...props}
            >
                {text}
            </ButtonV2>,
        );

        expect(wrapper.find('span').text()).toEqual(text);
    });

    it('Should render with the root \'classes override\'', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <ButtonV2
                {...props}
                classes={{
                    root: rootOverride,
                }}
            >
                {text}
            </ButtonV2>,
        );

        const rootNode = wrapper.find('button').first();

        expect(rootNode.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with proper classNames', () => {
        const wrapper = mountWithTheme(
            <ButtonV2
                {...props}
            >
                {text}
            </ButtonV2>,
        );

        const rootNode = wrapper.find('button').first();

        expect(rootNode.hasClass('cmui')).toEqual(true);
        expect(rootNode.hasClass('button')).toEqual(true);
        expect(rootNode.hasClass(/(ButtonV2)-(root)-(\d+)/)).toEqual(true);
        expect(rootNode.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <ButtonV2
                {...props}
            >
                {text}
            </ButtonV2>,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it('Should add expected class when \'disable\' prop is true', () => {
        const wrapper = mountWithTheme(
            <ButtonV2
                {...props}
                disable
            >
                {text}
            </ButtonV2>,
        );

        expect(wrapper.find('button').hasClass(/(ButtonV2)-(disable)-(\d+)/)).toEqual(true);
    });

    it('Should be a \'fluid\' button', () => {
        const wrapper = mountWithTheme(
            <ButtonV2
                {...props}
                fluid
            >
                {text}
            </ButtonV2>,
        );

        expect(wrapper.find('button').hasClass(/(ButtonV2)-(fluid)-(\d+)/)).toEqual(true);
    });

    it('Should be a \'pill\' button', () => {
        const wrapper = mountWithTheme(
            <ButtonV2
                {...props}
                pill
            >
                {text}
            </ButtonV2>,
        );

        expect(wrapper.find('button').hasClass(/(ButtonV2)-(pill)-(\d+)/)).toEqual(true);
    });

    it('Should be a \'outline\' button', () => {
        const wrapper = mountWithTheme(
            <ButtonV2
                {...props}
                outline
            >
                {text}
            </ButtonV2>,
        );

        expect(wrapper.find('button').hasClass(/(ButtonV2)-(outline)-(\d+)/)).toEqual(true);
    });
});
