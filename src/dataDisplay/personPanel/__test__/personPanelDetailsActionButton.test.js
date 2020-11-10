/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/personPanel/__test__/personPanelDetailsActionButton.test.js
 */
import React from 'react';
import PersonPanelDetailsActionButton from '../personPanelDetailsActionButton';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import { ENTER_KEY_CODE } from '../../../global/constants';

describe('<personPanelDetailsActionButton />', () => {
    const props = {
        className: 'block_name--element_name-modifier',
        id: 'block_name--element_name-modifier',
        label: 'Select',
        onClick: jest.fn(),
        onKeyDown: jest.fn(),
        onNoClick: jest.fn(),
        onYesClick: jest.fn(),
        outline: false,
        prompt: false,
        promptId: 'block_name--element_name-modifier',
        title: 'Example Title',
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetailsActionButton
                {...props}
            />,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should render with the button classes', () => {
        let wrapper;
        let root;

        wrapper = mountWithTheme(
            <PersonPanelDetailsActionButton
                {...props}
            />,
        );

        root = wrapper.find('button');

        expect(root.hasClass('person_panel--details_action_button')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(button)-(\d+)/)).toEqual(true);
        expect(root.hasClass(props.className)).toEqual(true);

        wrapper = mountWithTheme(
            <PersonPanelDetailsActionButton
                {...props}
                outline
            />,
        );

        root = wrapper.find('button');

        expect(root.hasClass(/(Button)-(outline)-(\d+)/)).toEqual(true);
    });

    it('Should render with the prompt classes', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetailsActionButton
                {...props}
                prompt
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(prompt)-(\d+)/)).toEqual(true);
    });

    it('Should have expected `id` prop', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetailsActionButton
                {...props}
                prompt
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.prop('id')).toEqual(props.id);
        expect(root.find('button').prop('id')).toEqual(props.id);
    });

    it('Should render with label', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetailsActionButton
                {...props}
                prompt
            />,
        );

        const buttonInnerContainer = wrapper.find('.button-inner-container');

        expect(buttonInnerContainer.text()).toEqual(props.label);
    });

    it('Should render with title', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetailsActionButton
                {...props}
                prompt
            />,
        );

        const button = wrapper.find('button');

        expect(button.prop('title')).toEqual(props.title);
    });

    it('Should call onClick when clicking PersonPanelDetailsActionButton', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetailsActionButton
                {...props}
            />,
        );

        wrapper.find('PersonPanelDetailsActionButton').simulate('click');

        expect(props.onClick).toHaveBeenCalledTimes(1);
    });

    it('Should call onKeyDown when pressing enter key down on PersonPanelDetailsActionButton', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetailsActionButton
                {...props}
            />,
        );

        wrapper.find('PersonPanelDetailsActionButton').props().onKeyDown({ keyCode: ENTER_KEY_CODE });

        expect(props.onKeyDown).toHaveBeenCalledTimes(1);
    });

    it('Should call onNoClick when clicking No', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetailsActionButton
                {...props}
                prompt
            />,
        );

        wrapper.find('.prompt-no-btn').simulate('click');

        expect(props.onNoClick).toHaveBeenCalledTimes(1);
    });

    it('Should call onYesClick when clicking No', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetailsActionButton
                {...props}
                prompt
            />,
        );

        wrapper.find('.prompt-yes-btn').simulate('click');

        expect(props.onYesClick).toHaveBeenCalledTimes(1);
    });
});
