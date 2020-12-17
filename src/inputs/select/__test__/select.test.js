/**
 To run this test from the root folder, execute the following command:
 * npx jest ./src/inputs/select/__test__/select.test.js
 */
import React from 'react';
import Select from '../select';
import { options } from '../../../../docs/src/inputs/select/constants';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

const componentProps = {
    id: 'select--block_id',
    options,
    onChange: jest.fn(),
    placeholder: 'Select Option',
    value: undefined,
};

let wrapper;

describe('<Select />', () => {
    const additionalClassName = 'select-additional-classname';

    beforeEach(() => {
        wrapper = mountWithTheme(
            <Select
                {...componentProps}
            />,
        );
    });

    it('Should render without problems', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Should render with aditional className', () => {
        const props = {
            ...componentProps,
            className: additionalClassName,
        };

        wrapper = mountWithTheme(
            <Select
                {...props}
            />,
        );

        expect(wrapper.find('ForwardRef(Select)').prop('className')).toBe(additionalClassName);
    });

    it('Should have expected \'id\' prop', () => {
        expect(wrapper.prop('id')).toEqual(componentProps.id);
    });

    it('Should render with proper classNames', () => {
        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass('cmui')).toEqual(true);
        expect(rootNode.hasClass('select')).toEqual(true);
    });

    it('Should be \'disable\'', () => {
        wrapper = mountWithTheme(
            <Select
                {...componentProps}
                disable
            />,
        );

        const rootNode = wrapper.find('.Select').first();

        expect(rootNode.hasClass('is-disabled')).toEqual(true);
    });
});
