/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/inputs/checkbox/__test__/checkbox.test.js
 */

import React from 'react';
import Checkbox from '../checkbox';
import mountWithTheme from '../../../testUtils/enzymeHelpers';

describe('<Checkbox />', () => {
    const bemName = 'some_block--some_element_name';

    const props = {
        className: bemName,
        id: bemName,
    };

    it('should render without problems', () => {
        const wrapper = mountWithTheme(
            <Checkbox
                {...props}
            />,
        );

        expect(wrapper.exists()).toBe(true);
    });

    it('Should render with the root \'classes override\'', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <Checkbox
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
            <Checkbox
                {...props}
            />,
        );

        const rootNode = wrapper.find('div').first();

        expect(rootNode.hasClass('cmui')).toEqual(true);
        expect(rootNode.hasClass('checkbox')).toEqual(true);
        expect(rootNode.hasClass(/(Checkbox)-(root)-(\d+)/)).toEqual(true);
        expect(rootNode.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <Checkbox
                {...props}
            />,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it('Should be disabled', () => {
        const wrapper = mountWithTheme(
            <Checkbox
                {...props}
                disable
            />,
        );

        expect(wrapper.find('div').first().hasClass(/(Checkbox)-(isDisabled)-(\d+)/)).toEqual(true);
    });

    it('Should be a \'fluid\' checkbox', () => {
        const wrapper = mountWithTheme(
            <Checkbox
                {...props}
                fluid
            />,
        );

        expect(wrapper.find('div').first().hasClass(/(Checkbox)-(isFluid)-(\d+)/)).toEqual(true);
    });

    it('Should have a label', () => {
        const labelText = 'The Greatest Label';

        const wrapper = mountWithTheme(
            <Checkbox
                {...props}
                label={labelText}
            />,
        );

        expect(wrapper.find('.checkbox--label').exists()).toEqual(true);
        expect(wrapper.find('.checkbox--label').text()).toEqual(labelText);
    });

    it('Should have a label and a total', () => {
        const labelText = 'The Greatest Label';
        const totalNumber = 99999;

        const wrapper = mountWithTheme(
            <Checkbox
                {...props}
                size="small"
                label={labelText}
                total={totalNumber}
            />,
        );

        expect(wrapper.find('div').first().hasClass(/(Checkbox)-(isSmall)-(\d+)/)).toEqual(true);

        expect(wrapper.find('.checkbox--label').exists()).toEqual(true);
        expect(wrapper.find('.checkbox--label').text()).toEqual(labelText);
        expect(wrapper.find('.checkbox--total').exists()).toEqual(true);
        expect(wrapper.find('.checkbox--total').text()).toEqual(
            Number(totalNumber).toLocaleString(),
        );
    });

    it('Should be checked', () => {
        const wrapper = mountWithTheme(
            <Checkbox
                {...props}
                checked
            />,
        );

        expect(wrapper.find('div').first().prop('aria-checked')).toEqual(true);
        expect(wrapper.find('input').first().prop('checked')).toEqual(true);
    });

    it('Should call \'onChange\' event handler', () => {
        const onChangeMock = jest.fn();
        const stopPropagationMock = jest.fn();

        const wrapper = mountWithTheme(
            <Checkbox
                {...props}
                label="The Greatest Label"
                onChange={onChangeMock}
            />,
        );

        wrapper.find('div').first().prop('onClick')();

        expect(onChangeMock).toHaveBeenCalledTimes(1);

        wrapper.find('.checkbox--label_container').first().prop('onClick')({
            stopPropagation: stopPropagationMock,
        });
    });

    it('Should not call \'onChange\' event handler', () => {
        const onChangeMock = jest.fn();
        const stopPropagationMock = jest.fn();

        const wrapper = mountWithTheme(
            <Checkbox
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

    it('Should not be able to click label', () => {
        const onChangeMock = jest.fn();
        const stopPropagationMock = jest.fn();

        const wrapper = mountWithTheme(
            <Checkbox
                {...props}
                label="The Greatest Label"
                labelClick={false}
                onChange={onChangeMock}
            />,
        );

        wrapper.find('.checkbox--label_container').first().prop('onClick')({
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
            <Checkbox
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
            <Checkbox
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
