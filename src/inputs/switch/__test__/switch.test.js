/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/inputs/switch/__test__/switch.test.js
 */

import React from 'react';
import Switch from '../switch';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

describe('<Switch />', () => {
    const bemName = 'some_block--some_element_name';

    const props = {
        className: bemName,
        id: bemName,
    };

    it('should render without problems', () => {
        const wrapper = mountWithTheme(
            <Switch
                {...props}
            />,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should render with the root \'classes override\'', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <Switch
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
            <Switch
                {...props}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass('cmui')).toEqual(true);
        expect(rootNode.hasClass('switch')).toEqual(true);
        expect(rootNode.hasClass(/(Switch)-(root)-(\d+)/)).toEqual(true);
        expect(rootNode.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <Switch
                {...props}
            />,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it('Should be disabled', () => {
        const wrapper = mountWithTheme(
            <Switch
                {...props}
                disable
            />,
        );

        expect(wrapper.find('div').first().hasClass(/(Switch)-(isDisabled)-(\d+)/)).toEqual(true);
    });

    it('Should have a label', () => {
        const labelText = 'The Greatest Label';

        const wrapper = mountWithTheme(
            <Switch
                {...props}
                label={labelText}
            />,
        );

        const labelNode = wrapper.find('.switch--label').find('p');

        expect(labelNode.exists()).toEqual(true);
        expect(labelNode.text()).toEqual(labelText);
    });

    it('Should be checked', () => {
        const wrapper = mountWithTheme(
            <Switch
                {...props}
                checked
            />,
        );

        expect(wrapper.find('div').first().prop('aria-checked')).toEqual(true);
        expect(wrapper.find('input').first().prop('checked')).toEqual(true);
    });

    it('Should call \'onChange\' event handler', () => {
        const onChangeMock = jest.fn();

        const wrapper = mountWithTheme(
            <Switch
                {...props}
                onChange={onChangeMock}
            />,
        );

        wrapper.find('div').first().prop('onClick')();

        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    it('Should not call \'onChange\' event handler', () => {
        const onChangeMock = jest.fn();
        const stopPropagationMock = jest.fn();

        const wrapper = mountWithTheme(
            <Switch
                {...props}
                disable
                onChange={onChangeMock}
            />,
        );

        wrapper.find('div').first().prop('onClick')({
            stopPropagation: stopPropagationMock,
        });

        expect(onChangeMock).toHaveBeenCalledTimes(0);
        expect(stopPropagationMock).toHaveBeenCalledTimes(1);
    });

    it('Should prevent focusing upon \'onMouseDown\'', () => {
        const onChangeMock = jest.fn();
        const onMouseDownMock = jest.fn();
        const preventDefaultMock = jest.fn();

        const wrapper = mountWithTheme(
            <Switch
                {...props}
                onChange={onChangeMock}
                onMouseDown={onMouseDownMock}
            />,
        );

        wrapper.find('div').first().prop('onMouseDown')({
            preventDefault: preventDefaultMock,
        });

        expect(onChangeMock).toHaveBeenCalledTimes(0);
        expect(preventDefaultMock).toHaveBeenCalledTimes(1);
    });

    it('Should prevent focusing upon \'onMouseDown\'', () => {
        const onChangeMock = jest.fn();
        const onMouseDownMock = jest.fn();
        const preventDefaultMock = jest.fn();

        const wrapper = mountWithTheme(
            <Switch
                {...props}
                onChange={onChangeMock}
                onMouseDown={onMouseDownMock}
            />,
        );

        wrapper.find('div').first().prop('onMouseDown')({
            preventDefault: preventDefaultMock,
        });

        expect(onChangeMock).toHaveBeenCalledTimes(0);
        expect(preventDefaultMock).toHaveBeenCalledTimes(1);
    });
});
