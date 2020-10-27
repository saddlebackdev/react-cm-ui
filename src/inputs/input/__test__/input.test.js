/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/inputs/input/__test__/input.test.js
 */

/**
 * NOTE: This unit test is not done for the Input, they were only introduced to test peices touched
 * from the gap (v1 - v2).
 */

import React from 'react';
import Button from '../../button';
import Icon from '../../../dataDisplay/icon';
import Input from '../input';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

describe('<Input />', () => {
    const bemName = 'some_block--some_element_name';

    const props = {
        className: bemName,
        id: bemName,
        onBlur: jest.fn(),
        onChange: jest.fn(),
        onFocus: jest.fn(),
        onKeyDown: jest.fn(),
        value: '',
    };

    it('Can render without problems', () => {
        const wrapper = mountWithTheme(
            <Input
                {...props}
            />,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should render with the root \'classes\' override', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <Input
                {...props}
                classes={{
                    root: rootOverride,
                }}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with proper classNames', () => {
        const wrapper = mountWithTheme(
            <Input
                {...props}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass('cmui')).toEqual(true);
        expect(rootNode.hasClass('input')).toEqual(true);
        expect(rootNode.hasClass(/(Input)-(root)-(\d+)/)).toEqual(true);
        expect(rootNode.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <Input
                {...props}
            />,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it('Can render an actions container with a button', () => {
        const onButtonClickMock = jest.fn();

        const wrapper = mountWithTheme(
            <Input
                {...props}
                actions={(
                    <Button
                        icon
                        onClick={onButtonClickMock}
                    >
                        <Icon
                            compact
                            type="placeholder"
                        />
                    </Button>
                )}
            />,
        );

        expect(wrapper.find('.input--actions').exists()).toBe(true);

        wrapper.find('.input--actions').find('Button').first().prop('onClick')();

        expect(onButtonClickMock).toHaveBeenCalledTimes(1);
    });

    it('Should return the value with the \'onChange\' event', () => {
        const wrapper = mountWithTheme(
            <Input
                {...props}
            />,
        );

        expect(wrapper.find('input').prop('value')).toEqual(props.value);

        const newValue = 'foo';

        wrapper.find('input').prop('onChange')({
            target: {
                value: newValue,
            },
        });

        expect(props.onChange).toHaveBeenCalledTimes(1);

        wrapper.setProps({
            value: newValue,
        });

        expect(wrapper.find('input').prop('value')).toEqual(newValue);
    });

    it('Should fire \'onBlur\' and \'onFocus\' events', () => {
        const wrapper = mountWithTheme(
            <Input
                {...props}
            />,
        );

        expect(wrapper.find('Input').state('isFocused')).toBe(false);

        const event = {
            target: {
                value: 'foo',
            },
        };

        wrapper.find('input').prop('onFocus')(event);

        expect(props.onFocus).toHaveBeenCalledTimes(1);
        expect(wrapper.find('Input').state('isFocused')).toBe(true);

        wrapper.find('input').prop('onBlur')(event);

        expect(props.onBlur).toHaveBeenCalledTimes(1);
        expect(wrapper.find('Input').state('isFocused')).toBe(false);
    });

    it('Should fire \'onKeyDown\' event', () => {
        const wrapper = mountWithTheme(
            <Input
                {...props}
            />,
        );

        wrapper.find('input').prop('onKeyDown')({
            target: {
                value: 'foo',
            },
        });

        expect(props.onKeyDown).toHaveBeenCalledTimes(1);
    });
});
