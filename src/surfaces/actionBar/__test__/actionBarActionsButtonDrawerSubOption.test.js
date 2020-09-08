/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/surfaces/actionBar/__test__/actionBarActionsButtonDrawerOption.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import ActionBarActionsButtonDrawerSubOption from '../actionBarActionsButtonDrawerSubOption';

describe('<ActionBarActionsButtonDrawerSubOption >', () => {
    const props = {
        isSelected: true,
        subOption: {
            label: 'Option 01',
        },
        subOptionClassNameNum: 1,
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerSubOption
                {...props}
            />,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should show sub option', () => {
        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerSubOption
                {...props}
                isSelected={false}
                subOption={{
                    ...props.subOption,
                }}
            />,
        );

        expect(
            wrapper
                .find('div')
                .first()
                .hasClass(`actions_button_drawer--sub_option-${props.subOptionClassNameNum}-show`),
        ).toEqual(false);
    });

    it('Should render sub option as disabled', () => {
        const subOption = {
            ...props.subOption,
            disable: true,
        };

        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerSubOption
                {...props}
                subOption={subOption}
            />,
        );

        expect(
            wrapper
                .find('div')
                .first()
                .hasClass(`actions_button_drawer--sub_option-${props.subOptionClassNameNum}-disabled`),
        ).toEqual(true);

        wrapper.setProps({
            subOption: {
                ...subOption,
                iconType: 'plus',
            },
        });

        wrapper.update();

        expect(wrapper.find('Icon').prop('color')).toEqual('static');
    });

    it('Should render proper icon', () => {
        const iconType = 'plus';

        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerSubOption
                {...props}
                subOption={{
                    ...props.subOption,
                    iconType,
                }}
            />,
        );

        expect(wrapper.find('Icon').prop('type')).toEqual(iconType);
    });

    it('Should call onKeyDown event', () => {
        const onKeyDownMock = jest.fn();

        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerSubOption
                {...props}
                subOption={{
                    ...props.subOption,
                    onKeyDown: onKeyDownMock,
                }}
            />,
        );

        wrapper.find('div').first().prop('onKeyDown')();

        expect(onKeyDownMock).toHaveBeenCalledTimes(1);
    });

    it('Should call onClick event', () => {
        const onClickMock = jest.fn();

        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerSubOption
                {...props}
                subOption={{
                    ...props.subOption,
                    onClick: onClickMock,
                }}
            />,
        );

        wrapper.find('div').first().prop('onClick')();

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('Should not allow onClick event', () => {
        const onClickMock = jest.fn();

        const wrapper = mountWithTheme(
            <ActionBarActionsButtonDrawerSubOption
                {...props}
            />,
        );

        wrapper.find('div').first().prop('onClick')();

        expect(onClickMock).toHaveBeenCalledTimes(0);

        wrapper.setProps({
            subOption: {
                ...props.subOption,
                disable: true,
                onClick: onClickMock,
            },
        });

        wrapper.find('div').first().prop('onClick')();

        expect(onClickMock).toHaveBeenCalledTimes(0);

        const requiresPromptMock = jest.fn();

        wrapper.setProps({
            onRequestPrompt: requiresPromptMock,
            subOption: {
                ...props.subOption,
                disable: false,
                onClick: onClickMock,
                requiresPrompt: true,
            },
        });

        wrapper.find('div').first().prop('onClick')();

        expect(requiresPromptMock).toHaveBeenCalledTimes(1);
        expect(onClickMock).toHaveBeenCalledTimes(0);
    });
});
