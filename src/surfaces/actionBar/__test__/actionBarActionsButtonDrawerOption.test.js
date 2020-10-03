/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/surfaces/actionBar/__test__/actionBarActionsButtonDrawerOption.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import ActionBarActionsButtonDrawerOption from '../actionBarActionsButtonDrawerOption';
import { grey } from '../../../colors';

describe('<ActionBarActionsButtonDrawerOption >', () => {
    const props = {
        idNumber: 1,
        onClick: jest.fn(),
        option: {
            iconType: 'envelope',
            label: 'Email',
        },
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerOption
                {...props}
            />,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should call parent onClick event handler', () => {
        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerOption
                {...props}
                isSelected
            />,
        );

        wrapper.find('.actions_button_drawer--option').first().prop('onClick')();

        expect(props.onClick).toHaveBeenCalledTimes(1);

        wrapper.setProps({
            isSelected: false,
        });

        wrapper.update();

        wrapper.find('.actions_button_drawer--option').first().prop('onClick')();

        expect(props.onClick).toHaveBeenCalledTimes(2);
    });

    it('Should call option\'s onClick event handler', () => {
        const optionOnClickMock = jest.fn();

        const option = {
            iconType: 'chevron-down',
            label: 'Actions',
            onClick: optionOnClickMock,
        };

        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerOption
                {...props}
                option={{
                    ...option,
                    disable: true,
                }}
            />,
        );

        wrapper.find('.actions_button_drawer--option').first().prop('onClick')();

        expect(optionOnClickMock).not.toHaveBeenCalled();

        const onRequestPromptMock = jest.fn();

        wrapper.setProps({
            onRequestPrompt: onRequestPromptMock,
            option: {
                ...option,
                disable: false,
                requiresPrompt: true,
            },
        });

        wrapper.update();

        wrapper.find('.actions_button_drawer--option').first().prop('onClick')();

        expect(onRequestPromptMock).toHaveBeenCalledTimes(1);

        wrapper.setProps({
            option: {
                ...option,
            },
        });

        wrapper.update();

        wrapper.find('.actions_button_drawer--option').first().prop('onClick')();

        expect(optionOnClickMock).toHaveBeenCalledTimes(1);
    });

    it('Should hide option', () => {
        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerOption
                {...props}
                hide
            />,
        );

        expect(
            wrapper
                .find('div')
                .first()
                .hasClass(/(actions_button_drawer--option_container)-(\d+)-(hide)/),
        ).toEqual(true);
    });

    it('Should disable option', () => {
        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerOption
                {...props}
                option={{
                    ...props.option,
                    disable: true,
                }}
            />,
        );

        expect(
            wrapper.find('.actions_button_drawer_option--icon_container').prop('style'),
        ).toEqual({ backgroundColor: grey[400] });
    });

    it('Should render sub options', () => {
        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerOption
                {...props}
                option={{
                    iconType: 'chevron-down',
                    label: 'Actions',
                    options: [
                        {
                            label: 'Option 01',
                        },
                    ],
                }}
            />,
        );

        expect(wrapper.find('.actions_button_drawer--sub_options')).toBeDefined();
    });
});
